import React, { useState } from 'react'

let Cards =({img , title , model }) =>{
    const [Hover, setHover] = useState(false)

    const handleHoverIn= () =>{
        setHover(true);
    }

    const handleHoverOut= () =>{
        setHover(false);
    }

    
    return (
        <>
        <div 
        onMouseEnter={handleHoverIn} 
        onMouseLeave={ handleHoverOut}
        className='w-full cursor-pointer aspect-video bg-red-300 md:w-[50%] border-2 xl:w-[34%] m-[10px] flex-col justify-between items-start overflow-hidden' >
             
             <img src= {img}  className={'w-full  h-full object-cover bg-indigo-300   '}  />
            <div className='m-5  absolute  z-10'>
                 <div className='text-xl  font-semibold'> {title} </div>
                 <div className='text-2xl  font-bold'> {model} </div>
                 
                 {/* <div className={' text-lg font-semibold text-white border-b-2 pb-1 ml-5 w-[100px]  '+ (Hover ? 'flex' : 'hidden')} > SHOP NOW  </div>  */}

            </div>
        </div>
        </>
    )
}

export default Cards ;