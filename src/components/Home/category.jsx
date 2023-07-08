import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './cards';
import Product from '../Product';

let Category =() =>{
    const [data, setdata] = useState([]) ;
    
    useEffect(() => {

        axios.get('https://fakestoreapi.com/products/')
        .then((resp)=>{
           setdata(resp.data) ;
        })
        .catch ((e)=>{
           console.log('error = ', e)
        })
       }, [])

if(data){
    return (
        <>
       <div className='h-fit w-full flex justify-center items-center  mb-[50px] '>
            <div className=' h-hit max-w-[1220px]  flex sm:flex-row   flex-col flex-wrap  justify-center items-center  '> 

            <div className=' flex flex-col  justify-center items-center'>
            <div className='  text-2xl font-semibold  text-gray-700 my-2  mb-3   '> Our Featured Products  </div>
            <div className='h-1 w-28 mb-[60px] bg-indigo-500'></div>
            </div>


            <div  className=' flex sm:flex-row   flex-col flex-wrap  justify-center items-center ' >
            {  data &&
                                data.map((val , index)=>{
                                    if(val.id > 8 && val.id< 15){
                            return (    <Product 
                                key={val.id}  
                                image ={val.image}   
                                title ={val.title}  
                                id ={val.id} 
                                price={val.price} 
                                rating ={val.rating.rate} />
                                )
                                }}) }
                                </div>
                            </div>
                        </div>
        </>
    )
}
else {
    return (<div className='h-screen w-full  text-4xl  text-slate-50  font-semibold'> Loading.......</div>)
}
}

export default Category ;