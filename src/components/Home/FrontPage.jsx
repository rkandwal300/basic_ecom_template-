import React from 'react'
import Blogs from './ourBlogs';
import Slider from './Slider';
import Category from './category';
import ProductListPage from '../ProductListPage';

const FrontPage =()=>{

    return(
        <>
        
      <Slider  /> 
      {/* <Category /> */}
      <Blogs />
      <Category />
    
    </>
    )
}

export default FrontPage ;