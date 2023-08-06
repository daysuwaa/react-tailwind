import React, { useState} from 'react'
import{ AiOutlineClose, AiOutlineMenu} from 'react-icons/ai' // importing the icons


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () =>{
        setNav (!nav)
    }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white'>
       <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
       {/* hidden on small screens but flex on larger screens */}
       <ul className='hidden md:flex'>  
        <li className='p-4' >Home</li> 
        <li className='p-4' >Comapany</li>
        <li className='p-4' >Resources</li>
        <li className='p-4' >About</li>
        <li className='p-4' >Contact</li>
       </ul>
       {/* visible on small screen but not large */}
       <div onClick={handleNav} className='block md:hidden'> 
        {/* if else statement */}
        {!nav ? <AiOutlineClose size={30}/>
        :<AiOutlineMenu size={30}
        />}
       </div>

        {/* mobile menu */}
       <div className={!nav ? 'fixed left-0 top-0  w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
       <h1 className='w-full text-3xl font-bold text-green-400 m-4'>REACT.</h1>
        <ul className='uppercase p-4'>
        <li className='p-4 border-b border-gray-600' >Home</li>
        <li className='p-4 border-b border-gray-600' >Comapany</li>
        <li className='p-4 border-b border-gray-600' >Resources</li>
        <li className='p-4 border-b border-gray-600' >About</li>
        <li className='p-4 border-b border-gray-600' >Contact</li>
        </ul>
       </div>
    </div>
  )
}

export default Navbar