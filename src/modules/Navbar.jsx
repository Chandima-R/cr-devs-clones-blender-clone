import React from 'react'
import { AiOutlineMenu, AiOutlineHeart  } from 'react-icons/ai';
import { useLocation } from 'react-router-dom/dist';


function Navbar() {
  return (
    <div className='navbar w-full md:w-8/12 mx-auto flex items-center justify-between bg-white py-2 px-2 md:px-8 text-slate-800 font-normal h-[50px] text-[13px]'>
      <div>
        <img
          className='w-auto h-10'
          src="https://download.blender.org/branding/blender_logo_socket.png" 
          alt="logo" 
        />
      </div>
      <div className='hidden md:flex items-center justify-center'>
        <AiOutlineMenu className='block md:hidden'/>
        <ul className='h-full items-center justify-center hidden md:flex'>
          <li className='px-2 mr-5 cursor-pointer duration-300 h-full flex items-center justify-center hover:drop-shadow-lg hover:text-[#0099ff]'>Features</li>
          <li className='px-2 mr-5 cursor-pointer duration-300 h-full flex items-center justify-center hover:drop-shadow-lg hover:text-[#0099ff]'>Download</li>
          <li className='px-2 mr-5 cursor-pointer duration-300 h-full flex items-center justify-center hover:drop-shadow-lg hover:text-[#0099ff]'>Support</li>
          <li className='px-2 mr-5 cursor-pointer duration-300 h-full flex items-center justify-center hover:drop-shadow-lg hover:text-[#0099ff]'>Get Involed</li>
          <li className='px-2 mr-5 cursor-pointer duration-300 h-full flex items-center justify-center hover:drop-shadow-lg hover:text-[#0099ff]'>About</li>
          <li className='px-2 mr-5 cursor-pointer duration-300 h-full flex items-center justify-center hover:drop-shadow-lg hover:text-[#0099ff]'>Jobs</li>
          <li className='px-2 mr-5 cursor-pointer duration-300 h-full flex items-center justify-center hover:drop-shadow-lg hover:text-[#0099ff]'>Store</li>
        </ul>
        <button className='flex items-center justify-between bg-[#0099ff] rounded-md shadow-sm shadow-[#0099ff] text-white font-normal px-4 py-2'>
          <AiOutlineHeart className='mr-2'/>
          <span>Donate</span>
        </button>
      </div>
    </div>
  )
}

export default Navbar