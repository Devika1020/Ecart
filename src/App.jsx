import './App.css'
import { Navigate, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Ecart from './pages/Ecart'
import View from './pages/View'
import Ewishlist from './pages/Ewishlist'

import Footer from './Components/Footer'
function App() {


  return (
    <>
    
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Ecart/>}/>
        <Route path='/view/:id' element={<View/>}/>
        <Route path='/wishlist' element={<Ewishlist/>}/>
        <Route path='/*' element={<Navigate to={'/'}/>}/>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
