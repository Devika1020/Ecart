import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { decQuantity, emptyCart, incQuantity, removeCartItem } from '../Redux/Slices/cartSlice'
import Header from '../Components/Header'
import { Table } from 'react-bootstrap'

function Ecart() {
  const cart=useSelector(state=>state.cartReducer)
  const [totalCartAmount,setTotalCartAmount]= useState(0)
  const dispatch=useDispatch()
  useEffect(()=>{
    if(cart?.length>0){
      setTotalCartAmount (cart?.map(item=>item.totalPrice)?.reduce((p1,p2)=>p1+p2))
  }else{
    
      setTotalCartAmount(0)}
},[cart])

const handleCheckout=()=>{
  alert("Order placed successfully.. . Thankyou for shopping with us!!!")
  dispatch(emptyCart())
  Navigate('/')
}
const handlDecrement=(product)=>{
  if(product.quantity==1){
    dispatch(removeCartItem(product?.id))
  }else{
    dispatch(decQuantity(product))
  }
}

  
  return (

   <>
   <Header></Header>
      <div style={{paddingTop:"100px"}}>
        {
          cart?.length>0?<div className='container'>
            <h3>Cart Summary</h3>
            <div className='row'> 
  <div className='col-lg-8'>
     <Table className='table' responsive='sm'> 
     <thead>
  <tr>
    <th>#</th>
    <th>Product </th>
    <th>Image</th>
    <th>Quantity</th>
    <th>Price</th>
    <th>...</th>
   
  </tr>
     </thead>
     <tbody>{
      cart?.map((product,index)=>(
        <tr key={index}>
          <td>{index+1}</td>
          <td>{product?.title}</td>
          <td><img width={'60px'} height={'60px'} src={product?.thumbnail} alt="No image" /></td>
          <div className='d-flex align-items-center'>
          <span onClick={()=>handlDecrement(product)} style={{cursor:'pointer'}} className='fw-bolder' >-</span>
          <td><input width={'50px'} style={{width:'50px'}} type="text" className='form-control' value={product?.quantity} readOnly /></td>
          <span onClick={()=>dispatch(incQuantity(product))} style={{cursor:'pointer'}} className='fw-bolder' >+</span>
          </div>
          <td>{product?.price}</td>
          <td><button onClick={()=>dispatch( removeCartItem(product?.id))} className='btn btn-link'><i className='fa-solid fa-trash'></i></button></td>
        </tr>
      ))
        }
     </tbody>
  </Table>
  <div className='float-end mt-3'> 
    <button onClick={()=>dispatch(emptyCart())} className='btn btn-danger me-2'>Empty Cart</button>
    <Link to={'/home'} className='btn btn-success' >Shop More</Link>
  </div>
  </div>
  <div className='col-lg-4'> 
  <div className='shadow border  rounded p-4'>
    <h5>Total Product: <span className='text-danger'>{cart?.length}</span></h5>
    <h5>Total Price: <span className='text-danger'>{totalCartAmount}</span></h5><hr />
    <div className='d-grid '> 
    <button onClick={()=>handleCheckout()} className='btn btn-primary  '>Checkout</button>
  </div>
  </div>
  
  </div>
            </div>
            </div>:
            <div className='d-flex flex-column justify-content-center align-items-center w-100 mb-5' > 
            <img height={'100px'} className='img-fluid' src="https://i.postimg.cc/4ynyj6pR/preview-removebg-preview.png" alt="" />
           <h1> Your Cart Is Empty !!!</h1></div>
        }
      </div>
   </>
  )
}

export default Ecart