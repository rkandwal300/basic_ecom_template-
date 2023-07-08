import React from 'react'
import Header from './components/Header'
import Error from './components/Error'
import FrontPage from './components/Home/FrontPage.jsx'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import ProductListPage from './components/ProductListPage'
import ProductDetail from './components/ProductDetail'
import About from './components/About'
import Contact from './components/Contact'
import Auth from './components/Auth'

function App() {

  return (
  <>    
    <Header />
    <Routes>
      <Route path='/' element={ <FrontPage />} />
      <Route path='/shop' element={ <ProductListPage />} />
      <Route path='/products/:id' element={ <ProductDetail />} />

      <Route path="/log" element={<Auth />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>

    <Footer/>

   
    
    



  </>
  )
}

export default App
