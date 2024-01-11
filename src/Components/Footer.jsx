import React from 'react'

import { Row , Col, Container, Navbar } from 'react-bootstrap'

function Footer() {
  return (
    <div className='bg-info ' >
     <hr />
     <Container className='p-3 text-white'>
       <Row className='w-100 container'>
        <Col lg={3} md={3} >
        <Navbar className="bg-body-black ">
        <Container>
          <Navbar.Brand href="#home">
         
           <i className="fa-solid fa-truck text-white fs-3 mt-1 " > </i>&nbsp;<b className='fs-3 text-white'>Daily Cart</b>

          </Navbar.Brand>
        </Container>
        {/* <p className='text-white text-left'>Designed and built with all the love in the world by the bootstrap team possimus recuusandae consequator ipsa verotatis </p> */}

      </Navbar>
        </Col>

        <Col lg={3} md={3} style={{fontFamily:'Playfair Display'}}>
        <h4 className='text-white' ><b>Link</b></h4>
        <a href="./home" className='text-white' style={{textDecoration:'none'}} >Home</a><br />
        <a href="./wishlist" className='text-white' style={{textDecoration:'none'}}>Wishlist</a><br />
        <a href="./cart" className='text-white' style={{textDecoration:'none'}}>Cart</a><br />
        </Col>


        <Col lg={3} md={3}>
        <h4><b>Guides</b></h4>
        <h6>react</h6>
        <h6>react bootstrap</h6>
        <h6>routing</h6>
        </Col>


        <Col lg={3} md={3}>
        <h4 className='text-white'><b>Contact Us</b></h4>
        <input className='w-100 p-1' type="text" name="" id="" placeholder='enter email' /><br /><br />
        <button className='bg-danger  text-white w-100'>Send</button>
        <div >
          <i style={{ marginLeft: '3rem' }} class="fa-brands fa-instagram"></i>
          <i  style={{ marginLeft: '3rem' }} class="fa-brands fa-facebook"></i>
          <i style={{ marginLeft: '3rem' }}class="fa-brands fa-twitter"></i>
  
        </div>

        
        </Col>


       </Row>
     </Container>


    </div>
    
  )
}

export default Footer