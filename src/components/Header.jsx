import React ,{useState} from 'react'
import {FaBars ,FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom';


const Header=()=>{

    const [menu , setMenu ] = useState(true) ;

    let handleMenu =()=>{
         const currentMenu = !menu;
         setMenu(currentMenu) ;
        } 

    return(
        <>
        <div className='h-[60px] w-full shadow-sm flex justify-between md:justify-start items-center '>
           <Link to='/' className='  ml-[10px] md:ml-[20px] lg:ml-[30px] xl:ml-[40px] mr-[30px]  '> 
                <img
                src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png.webp"
                alt="logo"
                className=''
                />
            </Link>


            <ul className=' hidden  h-fit w-[360px]  md:flex justify-between text-xs  font-semibold text-slate-500 font-sans mr-[60px] '>
                <Link to='/' className='cursor-pointer hover:text-indigo-600' > Home </Link>
                <Link to='/shop' className='cursor-pointer hover:text-indigo-600' > Shop </Link>
                <Link to='/about' className='cursor-pointer hover:text-indigo-600' > About</Link>
                <Link to='/contact' className='cursor-pointer hover:text-indigo-600' > Contact </Link>
                <Link to='log'  className='cursor-pointer hover:text-indigo-600' > Login </Link>
            </ul>
            <ul className=' flex text-2xl mr-7 '>
                <li className=' hover:text-indigo-600 pr-6' > <FaShoppingCart/> </li>
                <li onClick={handleMenu} className=' hover:text-indigo-600 md:hidden ' > <FaBars/> </li>
            </ul>

            
             
             
        </div>

        <ul className={' md:hidden  h-[170px]  w-full     flex flex-col justify-start items start bg-white text-xs  font-semibold text-slate-500 font-sans mb-3' 
                        + (menu? ' flex':' hidden')}>
                <Link to='/' className=' pt-3 border-b-[1px] pl-7 pb-2 cursor-pointer hover:bg-indigo-400 hover:text-white' > Home </Link>
                <Link to='/shop' className=' pt-3 border-b-[1px] pl-7 pb-2 cursor-pointer hover:bg-indigo-400 hover:text-white' > Shop </Link>
                <Link to='/about' className=' pt-3 border-b-[1px] pl-7 pb-2 cursor-pointer hover:bg-indigo-400 hover:text-white' > About</Link>
                <Link to='/contact' className=' pt-3 border-b-[1px] pl-7 pb-2 cursor-pointer hover:bg-indigo-400 hover:text-white' > Contact </Link>
                <Link to='log' className=' pt-3 border-b-[1px] pl-7 pb-2 cursor-pointer hover:bg-indigo-400 hover:text-white' > Login </Link>
            </ul>

        </>
    )
}

export default Header ;