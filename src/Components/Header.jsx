import React, { useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchByproduct } from '../Redux/Slices/productSlice';

function Header({insideHome}) {
    const wishlist=useSelector(state=>state.wishlistReducer)
    const Cart=useSelector(state=>state.cartReducer)
    const dispatch=useDispatch()
    // const [wislistCount,setWishlistcount]=useState(0)
    // useEffect(()=>{
    //     setWishlistcount(wishlist?.length),[wishlist]
    // })
    return (
        <div>

            <Navbar style={{zIndex:2}} expand="lg" className="bg-info w-100 position-fixed">
                <Container>
                <Nav.Link><Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }} ><i className="fa-solid fa-truck text-white fs-5 " > </i>&nbsp;<b className='fs-5'>Daily Cart</b></Link></Nav.Link>
             
                   
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="ms-auto">

                                {insideHome&&<Nav.Link><input onChange={e=>dispatch(searchByproduct(e.target.value.toLowerCase()))} placeholder='Serach Product' type="text" className='rounded'></input></Nav.Link>}

                            <Nav.Link><Link to={'/wishlist'} style={{ textDecoration: 'none', color: 'white' }} ><i className="fa-solid fa-heart text-white" > &nbsp;</i>Wishlist&nbsp;<Badge className='bg-dark'>{wishlist?.length}</Badge></Link></Nav.Link>
                            <Nav.Link><Link to={'/cart'} style={{ textDecoration: 'none', color: 'white' }} ><i className="fa-solid fa-cart-plus text-white" > &nbsp;</i>Cart&nbsp;<Badge className='bg-dark'>{Cart?.length}</Badge></Link></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>

    )
}

export default Header