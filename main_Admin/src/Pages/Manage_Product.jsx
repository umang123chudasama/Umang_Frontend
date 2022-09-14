import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate,NavLink } from 'react-router-dom'
import { deleteProduct, loadProducts } from '../Redux/actions';

function Manage_Product() {

  const navigate= useNavigate();
  let dispatch = useDispatch();
  const {products}= useSelector(state=> state.data);

  useEffect(() => {
    dispatch(loadProducts())
  }, [])

  const handledelete= (id)=>{
    if(window.confirm("Are You Sure Wanted to Delete the product?")){
      dispatch(deleteProduct(id));
    }
  }
  return (
    <div>
    <div className="content-wrapper">
      <div className="container">
        <div className="row pad-botm">
          <div className="col-md-12">
            <h4 className="header-line">View Product</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {/* Advanced Tables */}
            <div className="panel panel-default">
              <div className="panel-heading">
                Product Data
              </div>
              <div className="panel-body">
                <div className="table-responsive">
                  <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                    <thead>
                      <tr>
                      <th>Product Key</th>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Main Price</th>
                      <th>Dis Price</th>
                      <th>Size</th>
                      <th>Category</th>
                      <th>Stock</th>
                      <th>Delete</th>
                      <th>Edit</th>
                      </tr>
                    </thead>
                    <tbody>
                   
                    {
                   products && products.map((item,index)=>(
                    <tr key={item.id}>
                      <td>{index+1}</td>
                      <td><img src={item.img} width="30px"/></td>
                      <td>{item.name}</td>
                      <td>{item.desc}</td>
                      <td>{item.main_price}</td>
                      <td>{item.dis_price}</td>
                      <td>{item.size}</td>
                      <td>{item.category}</td>
                      <td>{item.stock}</td>
                      <td>
                        <button className='btn btn-danger m-1' onClick={()=> handledelete(item.id)} >Delete</button></td>
                       <td> <button className='btn btn-primary m-1' onClick={()=>navigate(`/edit_product/${item.id}`)}>Edit</button>
                      </td>
                  </tr>
                    ))
                }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/*End Advanced Tables */}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Manage_Product