<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\student_controller;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/student',[student_controller::class,'allshow']); // datafetch 
Route::get('/student/{id}',[student_controller::class,'single_show']); // edit
Route::delete('/student/{id}',[student_controller::class,'destroy']); // delete
Route::post('/insertstudent',[student_controller::class,'store']); // insert
Route::put('/updatestudent/{id}',[student_controller::class,'update']); // update
Route::get('/search/{key}',[student_controller::class,'search']); // search
Route::put('/updatestatus/{id}',[student_controller::class,'updatestatus']); // block unblock
Route::post('/login',[student_controller::class,'studentlogin']); // login

/*





*/
