import React from 'react'




const Input  = ( {
    type  , 
    autoComplete ,      
    name ,
    id ,
    placeholder ,
    className  ,
    ...rest
}) => {



    return (
    <div >
        <input className= { 'h-[40px] w-full pl-5 bg-gray-100  border-[1px] boreder-slate-100 text-gray-500 text-md outline-2 outline-gray-800 shadow-md  ' + className }
        type  = {type} 
        autoComplete = {autoComplete} 
        name  = {name }
        id ={id}
        placeholder= {placeholder}
        { ...rest }
        />
    </div>
    )
}

export default Input
