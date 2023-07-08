import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import { BiArrowBack , BiRightArrowAlt } from "react-icons/bi";
import {  AiFillStar} from "react-icons/ai"

const ProductDetail = () => {

    
    const [data, setdata] = useState({}) ;
    const [ countInput , setCountInput ] = useState(1);
  const [ count ,setCount ] = useState(countInput);
  let  id = +(useParams().id);
  console.log('id = ',id );
  
    useEffect(() => {

     axios.get('https://fakestoreapi.com/products/'+id)
     .then((resp)=>{
        console.log('resp = ', resp.data);
        setdata(resp.data) ;
     })
     .catch ((e)=>{
        console.log('error = ', e)
     })
    }, [id])


    let countCart=(event)=>{

        setCount(+event.target.value);
      
      }
      const Next =()=>{  setCountInput(1) }
      
      
      const addCart=()=>{
        console.log('product added to cart') ;
      }


if(data){
  return (
    <>
   
<div className='h-[50px] w-[94%] ml-[4%] mt-[50px] mb-0  flex justify-start items-end     '>
  <div className='flex justify-start items-center '>
  <Link to={'/'}>
  <div className='text-xl font-medium font-serif ml-[10px] text-gray-800 hover:text-indigo-500 '> Home </div> 
  </Link>
  
  <span className='text-xl'> /</span>


  <Link to={'/'}>
  <span className=' text-xl font-medium font-serif ml-[10px] text-gray-800 hover:text-indigo-500 ' >{data.category}</span>  </Link>
    
  {/* <span className='text-xl'> /</span>

  <Link to={'/'}> 
    <span   className=' text-xl font-medium font-serif ml-[10px] text-gray-800 hover:text-indigo-500 ' >{data.title}</span> </Link> */}
  </div>

  </div>




    <div className=" ml-[3%] mr-[3%] mt-0  rounded-xl flex  flex-col 2xl:flex-nowrap shadow-lg shadow-black flex-wrap  h-fit mb-[100px] justify-center ">

      

      <div className='w-full h-fit'>

      </div>
      <div className='flex  flex-wrap  justify-center 2xl:flex-nowrap   '>

<div  className="  w-[90%] min-w-[45%]  h-fit p-[20px] mt-[30px] ml-[5%] "  > 


<div className=' md:h-[300px]  mt-[30px]  md:w-[600px] flex justify-center items-center    '>

<img className='ml-[40px]  h-full ' src={data.image} alt='product' height='100%' />
</div>


</div>

 {/* add to cart and buy  */}


                <div className="   w-[80%] min-w-[45%] h-fit ml-[0%]  py-[3%]flex flex-col justify-center items-center  xl-mt-[1100px] pr-[20px] ">  

                    <div> 

                        <h1  className="font-medium  font-serif mb-[20px] mt-[30px] text-3xl  tracking-wider  "> {data.title} </h1>

                        <p  className="mt-[10px] text-lg font-normal font-serif">  {data.description}</p>

                        {/*  ratings */}
                        <div className=' h-fit w-fit flex justify-center items-center bg-green-500 text-xl  font-bold text-white px-[10px] py-[5px] rounded-xl my-[20px] border-1  '> 
                        <span >3.5 </span> 
                        <span  className='ml-[10px]  ' > <AiFillStar /> </span>
                         </div>  


                <div className=' mb-[20px]'>
                
                <span className="font-medium text-green-700  mb-[50px] text-xl">  Extra
                <span> ₹ 300 off </span>    </span>
                </div>


                    <span className="  mb-[50px] text-2xl font-semibold ">  ₹  {data.price} </span>



                    </div>
                
                <div className="flex mt-[50px] flex-wrap ">
                <div className=' flex justify-center items-center mr-[20px] text-xl font-medium '> Quantity :</div>

                <input id='cartItems' type='number' className=" w-[50px] h-[50px]  text-xl text-center mr-[50px] mt-1 border-[3px] border-slate-500 rounded-lg  " placeholder='1' value={count}  onChange={countCart}  />


                <button  onClick={addCart} className="py-[10px] w-[250px]  h-[60px] mr-[30px] px-[40px] text-slate-50 rounded-xl bg-indigo-500 text-xl mt-8 lg-mt-0 "> ADD TO THE CART</button>


                </div>


                

                <div className='h-[300px]  w-full  lg-mb-0 mb-36   lg-mr-10 mt-[50px] '  > 
                


    <div className='flex items-center  flex-nowrap  justify-between   '>

<div className=''>
{/*   
    { index >1  &&   (
    
      <Link to={'/products/' + (id-1)} className='flex justify-start items-center text-xl cursor-pointer  hover:text-indigo-500-300'  onClick={Next}    > 

    <span className='text-3xl' >   <BiArrowBack /> </span>
    <span> Previous Product </span> 

          </Link>)} */}
        
          </div>




              <Link to={'/products/' + (id+1)} className='flex justify-start items-center text-xl cursor-pointer  hover:text-indigo-500-300'  onClick={Next}    > 
              <span> Next Product </span>
              
              <span className='text-3xl' >  <BiRightArrowAlt /> </span> 

              </Link>


            </div>
                
                </div>
        </div>
        </div>

  </div>

{/* // </div> */}


</>
  )
}
else{
    return (<div className='h-screen w-full  text-4xl  text-slate-50  font-semibold'> Loading.......</div>)
}
}

export default ProductDetail