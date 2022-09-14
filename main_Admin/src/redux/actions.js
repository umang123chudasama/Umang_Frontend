import * as types from './actionType';
import axios from 'axios'

const getProducts = (products)=>({
  type: types.GET_PRODUCT,
  payload: products,
});

const ProductDeleted = ()=>({
  type: types.DELETE_PRODUCT,
})

const productAdded = ()=>({
  type: types.ADD_PRODUCT,
})

const productUpdated = ()=>({
  type: types.UPDATE_PRODUCT,
})

const getproduct = (product)=>({
  type: types.GET_SINGLE_PRODUCT,
  payload:product,
})



export const  loadProducts = ()=>{
  return function(dispatch){
    axios.get(`${process.env.REACT_APP_API}`)
    .then((resp)=>{
      console.log(resp.data);
      dispatch(getProducts(resp.data));
        
    })
    .catch((error)=> console.log(error));
  }
}
  
  export const deleteProduct = (id)=>{
    return function(dispatch){
      axios.delete(`${process.env.REACT_APP_API}/${id}`)
      .then((resp)=>{
          console.log("resp", resp)
          dispatch(ProductDeleted(id));
          dispatch(loadProducts());
      })
      .catch((error)=> console.log(error));
    }
  }

export const addProduct = (product)=>{
    return function(dispatch){
      axios.post(`${process.env.REACT_APP_API}`,product)
      .then((resp)=>{
          console.log("resp", resp)
          dispatch(productAdded());
          dispatch(loadProducts());
      })
      .catch((error)=> console.log(error));
    }
  }

  export const getSingleProduct = (id)=>{
    return function(dispatch){
      axios.get(`${process.env.REACT_APP_API}/${id}`)
      .then((resp)=>{
          console.log("resp", resp)
          dispatch(getproduct(resp.data));
      })
      .catch((error)=> console.log(error));
    }
  }
  
  export const updateProduct = (product,id)=>{
    return function(dispatch){
      axios.put(`${process.env.REACT_APP_API}/${id}`,product)
      .then((resp)=>{
          console.log("resp", resp)
          dispatch(productUpdated());
          dispatch(loadProducts());
      })
      .catch((error)=> console.log(error));
    }
  }