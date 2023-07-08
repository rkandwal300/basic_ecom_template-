import React, { useState } from 'react';
import {m, motion } from 'framer-motion'

let Box1 =()=>{
    const [Animate, setAnimate] = useState(false) ;

    // let handlestart = () =>{

        setTimeout(()=>{

                setAnimate(!Animate);
        },3000)
    // }

    


    let handleAnimate = ()=>{
        setAnimate(!Animate);
    }
    return(
        <>
            <motion.div 
            
            animate={{
                y: Animate?"400px":'0',
                // y:'200px' ,
                opacity:1 ,
                backgroundColor : 'blue' ,
                rotate : 360 ,
            }}
            initial={{
                opacity: 0.1 ,
                // x:'0px',
            }}
            transition ={{
                type:'spring',
                stiffness: 60, 
                damping: 100 ,
                // type:'tween',
                // duration : 2 ,
                // delay : 3, delay the animation ,
            }}
            onClick={handleAnimate}
            className='m-2 h-[200px] aspect-square bg-green-500'>  
            </motion.div>
           
           
           
            <div className='m-2 h-[200px] aspect-square bg-green-500'>  </div>
        
        <motion.div  
         animate={{
            x: Animate?"400px" :0,
           // y:'200px' ,
           opacity:1 ,
           backgroundColor :Animate? 'blue':'green' ,
        //    rotate : 360 ,
       }}
       initial={{
           opacity: 0.1 ,
           x:'0px',
       }}
       transition ={{
           type:'spring',
           stiffness: 60, 
           damping: 100 ,
           // type:'tween',
           // duration : 2 ,
           // delay : 3, delay the animation ,
       }} 
        className=' h-[100px] w-[300px'
        > hello</motion.div>
        <motion.div> there</motion.div>
        <motion.div> Obiwan Kenobi </motion.div>
        </>
    )
}

export default Box1 ;