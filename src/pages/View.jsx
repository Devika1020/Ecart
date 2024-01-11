import React, { useEffect, useState } from 'react'
import { Col,Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addtowishlist } from '../Redux/Slices/wishlistSlice';
import { addToCart } from '../Redux/Slices/cartSlice';
import Header from '../Components/Header';

function View() {
  const {id} =useParams()
  console.log(id);  
  const [product,setProduct] = useState({})
  const wishlist= useSelector(state=>state.wishlistReducer)
  
  const dispatch=useDispatch()
  useEffect(()=>{
    const allProducts=JSON.parse(sessionStorage.getItem("allProducts"))
    setProduct(allProducts?.find(item=>item.id==id))
  },[])
  console.log(wishlist);
  const handleWishlist= (product)=>{
    const existingProduct=wishlist?.find(item=>item.id==product.id)
    if(existingProduct){
      alert("Product already in ur wishlist")
    }
    else{
dispatch(addtowishlist(product))
    }
  }
  return (
    <>
    <Header></Header>
      <div> 
          <Row container className='w-100 p-5 '>
          <Col lg={6} md={6} className="p-5 my-5">
          <img height="250px" width="100%" src={product?.thumbnail} alt=""/>
          </Col>
          <Col  lg={6} md={6} className="p-5 my-5 ">
            {/* <h5> PID: {product?.id}</h5> */}
            <h3> {product?.title}</h3>
            <h5>Price : {product?.price} $</h5>
            <h6>Description : {product?.description}</h6>
            <h5>Rating :  {product?.rating} <i class="fa-solid fa-star " style={{color:" #922020;"}}></i></h5><br />
          <Button         onClick={()=>handleWishlist(product)}
   className='me-5' variant="outline-danger">Add to Wishlist  <i class="fa-solid fa-heart " ></i></Button>
          <Button onClick={()=>dispatch((addToCart(product)))} variant="outline-danger">Add to Cart  <i class="fa-solid fa-cart-plus "></i></Button>
  
          </Col>
         
         
  
          </Row>
           </div>
    </>
         
    
  )
}

export default View