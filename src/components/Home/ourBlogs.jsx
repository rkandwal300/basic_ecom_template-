import React from 'react'

const Blogs = () =>{

    return (
        <>
             <div className=' h-fit w-full  flex justify-center items-center  px-2 '> 


<div className=' h-fit max-w-[1200px]   flex flex-col sm:flex-row   justify-center  items-center mb-10 mt-5 '>


    {/* item 1 */}
<div className = ' h-fit max-w-[550px]   flex flex-col justify-center items-center my-3 mx-2 '>

<div   className='max-h-[604px] w-full  '>
<img src = 'https://trycasuals.com/wp-content/uploads/2020/01/image-01-1.jpg ' 
alt='Most Loved Designs'
width='100%'
/> </div>
<div className='my-3 flex justify-center items-center flex-col '>
    <div className='text-xs text-gray-500 m   '> Most Loved Designs  </div>

    <div className=' text-xl font-semibold text-gray-700  '> Customize Your T-Shirts </div>
</div>

</div>

{/* item2 */}

<div className = ' h-fit max-w-[550px]   flex flex-col justify-center items-center my-3mx-2 '>

<div   className='max-h-[604px] w-full  '>

<div className='my-3 flex justify-center items-center flex-col '>
<div className='text-xs text-gray-500 m   '> Design of the Week</div>

<div className=' text-xl font-semibold text-gray-700  '> Rubber Print Your T-Shirt </div>
    </div>


<img src = 'https://trycasuals.com/wp-content/uploads/2020/01/image-03-1.jpg ' 
alt='Most Loved Designs'
width='100%' /> </div>


</div>


{/* item 3 */}

<div className = ' h-fit max-w-[550px]   flex flex-col justify-center items-center my-3 mx-2 '>

<div   className='max-h-[604px] w-full  '>
<img src = ' https://trycasuals.com/wp-content/uploads/2020/01/image-02-1.jpg ' 
alt='Most Loved Designs'
width='100%' /> </div>
<div className='my-3 flex justify-center items-center flex-col '>
<div className='text-xs text-gray-500 m   '> New T-shirt Edition  </div>

<div className=' text-xl font-semibold text-gray-700  '> Customize Plain Colors </div>
    </div>

</div>


</div>


 
{/* our products  */}

{/*
<div  className=' h-fit max-w-[1200px]   flex flex-col sm:flex-row   justify-center  items-center mb-10 mt-5 '>


</div>






<div className='h-fit w-full flex justify-center items-center  mb-[50px] '>
<div className=' h-hit max-w-[1220px]  flex sm:flex-row   flex-col flex-wrap  justify-center items-center  '> 

<div className=' flex flex-col  justify-center items-center'>
<div className='  text-2xl font-semibold  text-gray-700 my-2  mb-3   '> Our Featured Products  </div>
<div className='h-1 w-28 mb-[60px] bg-red-500'></div>
</div>


<div  className=' flex sm:flex-row   flex-col flex-wrap  justify-center items-center ' >
{  RelatedData &&
                    RelatedData.map((val :valtype)=>{
                return (    <Product 
                    key={val.id}  
                    photo ={val.thumbnail}   
                    title ={val.title}  
                    id ={val.id} 
                    price={val.price} 
                    rating ={val.rating} />
                    )
                    }) }
                    </div>
                </div>
            </div>

*/}


</div> 
        </>
    )
}

export default Blogs