<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\student;
use App\Models\admin;

use Illuminate\Support\Facades\Validator;  // for validation add this 
use Illuminate\Support\Facades\Hash;

class student_controller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function allshow()
    {
       $data=student::all();
	   return response()->json([
	   'status'=>200,
	   'students'=>$data
	   ]);
    }
	
    public function single_show($id)
    {
         $data=student::find($id);
		 return response()->json([
		 'status'=>200,
		 'students'=>$data
		 ]);
    }
	
	function search($key) 	
    {
         $data=student::where('name','LIKE',"%$key%")->orWhere('email','LIKE','%'.$key.'%')->get();
		 return response()->json([
		 'status'=>200,
		 'students'=>$data
		 ]);
    }

/*
    function search(Request $request) 	
    {
		 $search_value=$request->name;	
         $data=student::where('name','LIKE',"%$search_value%")->orWhere('email','LIKE','%'.$search_value.'%')->get();
		 return response()->json([
		 'status'=>200,
		 'students'=>$data
		 ]);
    }
*/

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

		$validate=Validator::make($request->all(),[
            'name'=>'Required',
            'email'=>'Required|email',
            'password'=>'Required'
        ]);
		
		if($validate->fails())
		{
			return [
				'success' => 0, 
				'message' => $validate->messages(),
			];
		}
		else
		{
			$data=new student;
			$data->name=$request->name;
			$data->email=$request->email;
			$data->password=Hash::make($request->password);	
			
			//create tocken 
			//$token=$data->createToken($data->email.'_Token')->plainTextToken;
			$token=$data->token=Hash::make($request->email);
			$data->save();
			return response()->json([
			'status'=>200,
			
			'message'=>"Regioster Success"
			]);
			//return 	student::create($request->all());
		}
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validate=Validator::make($request->all(),[
            'name'=>'Required',
            'email'=>'Required|email',
            'password'=>'Required'
        ]);
		
		if($validate->fails())
		{
			return [
				'success' => 0, 
				'message' => $validate->messages(),
			];
		}
		else
		{
			$data=student::find($id);
			$data->name=$request->name;
			$data->email=$request->email;
			$data->password=Hash::make($request->password);
			$data->update();
			return response()->json([
			'status'=>200,
			'message'=>"Update Success"
			]);
		}
    }
	
	public function updatestatus(Request $request,$id)
    {
        $data=student::find($id);
		$status=$data->status;
		if($status === "Block")
		{	
			$data->status="Unblock";
			$data->save();
			return response()->json([
			'status'=>200,
			'msg'=>"Unblock Success"
			]);
		}
		else
		{
			$data->status="Block";
			$data->save();
			return response()->json([
			'status'=>200,
			'msg'=>"Block Success"
			]);
		}
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        student::find($id)->delete();
		return response()->json([
		'status'=>200,
		'msg'=>"Delete Success"
		]);
    }
	
	
	public function studentlogin(Request $request)
	{
		$validate=Validator::make($request->all(),[
            'email'=>'Required|email',
            'password'=>'Required'
        ]);
		
		if($validate->fails())
		{
			return [
				'success' => 0, 
				'message' => $validate->messages(),
			];
		}
		else
		{
			//$student=student::where('email',$request->email)->first();
			$student=student::where('email' , '=' , $request->email)->first();	
			if(! $student || ! Hash::check($request->password,$student->password))
			{
				return response()->json([
					'status'=>201,
					'msg'=>"student Login Failed due to Wrong Creadantial"
					]);
			}
			else
			{
				
				if($student->status=="Unblock")
				{
					return response()->json([
					'status'=>200,
					'msg'=>"student Login Success",
					'name'=>$student->name,
					'token'=>$student->token
					]);
				}
				else
				{
					return response()->json([
					'status'=>201,
					'msg'=>"student Blocked so Login Failed"
					]);
				}	
			}
		}
	
	}
	
	
}
