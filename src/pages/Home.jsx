import React, { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { fetchProducts, navigateToNextPage, navigateToPrevPage, } from '../Redux/Slices/productSlice'
import { Row , Col} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import { all } from 'axios';



function Home() {
  const dispatch=useDispatch()
    const {allProducts,loading,error,productsPerPage, currentpage}= useSelector(state=>state.productReducer)
    const totalPages=Math.ceil(allProducts?.length/productsPerPage)
const lastproductIndex=currentpage* productsPerPage
const firstProductIndex=lastproductIndex-productsPerPage
const visiblsPoroductcard=allProducts?.slice(firstProductIndex,lastproductIndex)
    useEffect(()=>{
      dispatch(fetchProducts())
    },[])
    const handlePrePage=()=>{
      if(currentpage!=1){
        dispatch(navigateToPrevPage())
      }
    }
    const handlenexPage=()=>{
      if(currentpage!=totalPages){
        dispatch( navigateToNextPage())
      }
    }

  return (
   <>
   <Header insideHome></Header>
      <div  style={{paddingTop:'100px'}}>{ 
         loading?<div className='mt-5 text-center'><Spinner className='me-2' animation="border" variant="info" /> Loading....</div>:
         <Row className='m-5'>
          {allProducts?.length>0?visiblsPoroductcard?.map((product,index)=>(
  <Col key={index} className='mb-3' sm={12} md={6} lg={4} xl={3} >
          <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" height={'200px'}src={product?.thumbnail}/>
        <Card.Body>
          <Card.Title>{product?.title.slice(0,20)}...</Card.Title>
          <div>     <Link to={`/view/${product?.id}`} className="btn btn-link">View More</Link></div>
      
        </Card.Body>
      </Card>
          </Col>
          )):<div className='text-center my-5'>Product Not Found !!!</div>}  
         </Row>
        }
        <div className='d-flex justify-content-center mt-5'>
          <button onClick={handlePrePage}  style={{cursor:'pointer'}}><i className='fa-solid fa-caret-left'></i></button>
          <span>{currentpage} of {totalPages}</span>
          <button onClick={handlenexPage} style={{cursor:'pointer'}}><i className='fa-solid fa-caret-right'></i></button>

        </div>
          </div>
   </>
     
  )
}

export default Home