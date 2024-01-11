import React from 'react'
import { Row,Col,Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import { removeFromwishlist } from '../Redux/Slices/wishlistSlice';
import { addToCart } from '../Redux/Slices/cartSlice';
import Header from '../Components/Header';


function Ewishlist() {
  // get wishlist from the store
 const wishlist = useSelector(state=>state.wishlistReducer)
 console.log(wishlist);
 const dispatch=useDispatch()
 const handleRemoveWishlist=(product)=>{
  dispatch(removeFromwishlist(product.id))
  dispatch(addToCart(product))
 }
  return (
      <>
      <Header></Header>
        <div style={{paddingTop:'100px'}}> 
          <div className='container'>
          <Row>{ wishlist?.length>0?wishlist?.map((product,index)=>(
          <Col key={index} className='mb-3 me-5' style={{marginBottom:'10px'}} sm={12} md={6} lg={4} xl={3} >
          <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" height={'200px'}src={product?.thumbnail}/>
        <Card.Body>
          <Card.Title>{product?.title.slice(0,20)}...</Card.Title>
          <div className='d-flex justify-content-between'>             
          <Button onClick={()=>handleRemoveWishlist(product)} className='me-5'  >  <i class="fa-solid fa-cart-plus " style={{color:" #922020;"}}></i></Button>
          <Button onClick={()=>dispatch(removeFromwishlist(product?.id))} >  <i class="fa-solid fa-trash " style={{color:" #922020;"}}></i></Button>
  
     </div>
      
        </Card.Body>
      </Card>
          </Col>
          )):
          <div className='d-flex flex-column justify-content-center align-items-center w-100 mb-5' > 
            <img height={'100px'} className='img-fluid' src="https://i.postimg.cc/4ynyj6pR/preview-removebg-preview.png" alt="" />
           <h1> Your Wishlist Is Empty !!!</h1></div>
          }
          </Row>
          </div>
        </div>
      </>
     
  )
}

export default Ewishlist