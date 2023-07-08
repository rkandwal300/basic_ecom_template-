import React, { useEffect, useState } from 'react'
import Product from './Product'
import axios from 'axios';
import ProductList from './ProductList';

const ProductListPage = () => {

    const [data, setdata] = useState([])
    useEffect(() => {

     axios.get('https://fakestoreapi.com/products')
     .then((resp)=>{
        // console.log('resp = ', resp.data);
        setdata(resp.data) ;
     })
     .catch ((e)=>{
        console.log('error = ', e)
     })
    }, [])
    

if(data){
  return (
    <>
    <div className="h-fit w-full bg-slate-100  ">
      <div className="  w-[94%] ml-[3%] rounded-xl shadow-xs shadow-black mt-[50px] bg-white  flex justify-center flex-wrap  ">
        <div className="  w-full   flex  justify-end ">
          <div className="h-[100px] mt-[20px]  w-[300px]  flex  flex-col justify-center items-start mr-[30px] sm:mr-[120px] md:mr-[30px]  ">
            <input
              className="h-[30px] w-[240px] rounded-lg text-center tracking-wide text-md shadow-lg shadow-slate-300   active:bg-slate-300    border-2 border-slate-500 focus:border-indigo-500    "
              type="text"
              placeholder="Search Here....."
              autoComplete="off" />

            <select
              className="h-[30px] w-[240px]  rounded-lg border-2 border-slate-500  px-[10px] text-md  mt-4 ">
              <option defaultValue="default"> Default Sorting </option>
              <option value="high"> High To Low </option>
              <option value="low"> Low To High </option>
              <option value="name"> Sort By Name </option>
            </select>
          </div>
        </div>
        {data.length > 0 && <ProductList props={data} />}
        <div className="w-full px-10 mb-10 flex justify-start items-center">
          <div className="  h-8 w-9  flex  justify-center items-center  text-lg  font-semibold hover:text-white text-red-400 hover:bg-red-400  shadow-md shadow-slate-300  border-2 border-red-400  m-2 ">
            {" "}
            {"1"}
          </div>
         

          <div className="  h-8 w-9  flex  justify-center items-center  text-lg  font-semibold hover:text-white text-red-400 hover:bg-red-400  shadow-md shadow-slate-300  border-2 border-red-400  m-2  ">
            {" "}
            {"->"}{" "}
          </div>
        </div>
      </div>

    
    </div>
  </>
  )
}
else{
    return (<div className='h-screen w-full  text-4xl  text-slate-50  font-semibold'> Loading.......</div>)
}
}

export default ProductListPage