import React, { useState } from 'react' ;
import {motion} from 'framer-motion'
// import { useInView } from 'react-intersection-observer';

let Slider=()=>{
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

        <div className=' h-[750px]  m-0  w-full  overflow-hidden '> 
            <div className=' h-full w-full   '> 
            <div className='flex h-full   m-0  w-full'>

            <motion.img 
              animate={{

                opacity:  Animate? 1: 0 ,
            }}
            initial={{
                opacity: 0,
            }}
            transition ={{
                type:'spring',
                stiffness: 100, 
                damping: 60 ,
            }}
            src='https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg.webp'
            className='h-full w-full object-cover object-center-left '
             
             width={'100%'}/>

        < motion.img 
                      animate={{
                        x:'-100%',
                        opacity:  Animate? 0: 1 ,
                    }}
                    initial={{
                        opacity: 0,
                    }}
                    transition ={{
                        type:'spring',
                        stiffness: 100, 
                        damping: 60 ,
                    }}
            src='https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg.webp'
            className='h-full w-full object-cover object-center  '
            />
            

            </div>

            <motion.div
             animate={{
                y: Animate?"250px":'0',
                // y:'200px' ,
                opacity:  Animate? 1: 1 ,
            }}
            initial={{
                opacity: 0,
                top:'-300px',
            }}
            transition ={{
                type:'spring',
                stiffness: 100, 
                damping: 60 ,
            }}
            className=' relative hidden  left-[60px] md:text-3xl text-2xl md:font-bold font-semibold'
            >    
                New Collection 2023
            </motion.div>


            <motion.div
            
            animate={{
                x: Animate?"300px":'0',
                // y:'200px' ,
                opacity:  Animate? 1: 1 ,
            }}
            initial={{
                opacity: 0,
                // top:'-300px',
            }}
            transition ={{
                type:'spring',
                stiffness: 100, 
                damping: 60 ,
            }}
             className=' relative top-[-300px] left-[70px] md:text-6xl text-4xl md:font-semibold font-semibold my-6'
        
            >
                New Season
            </motion.div>


            <motion.button
              animate={{
                y: Animate?"-260px":'0',
                opacity:  Animate? 1: 1 ,
            }}
            initial={{
                opacity: 0,
                top:'-300px',
            }}
            transition ={{
                type:'spring',
                stiffness: 100, 
                damping: 60 ,
            }}
             className=' relative   left-[70px] md:text-3xl text-2xl md:font-semibold font-semibold text-white bg-indigo-600 px-6  py-4 rounded-3xl '
            >
                 Shop
            </motion.button>
            </div>

            
        
        </div>
        </>
    )


}
export default Slider ;