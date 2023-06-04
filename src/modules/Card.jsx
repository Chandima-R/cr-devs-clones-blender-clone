import React from 'react'
import { GrFormNext } from 'react-icons/gr';
function Card({title, src, alt, description, link}) {
  return (
    <div className='shadow-md drop-shadow-xl w-full md:w-[350px] h-auto md:h-11/12 m-4 md:m-2 rounded-xl cursor-pointer'>
        <div>
            <img
            className='rounded-t-xl'
                src={`${src}`} 
                alt={`${alt}`}
            />
        </div>
        <div className='p-5 rounded-b-xl border'>
            <div className='flex flex-col items-start h-auto md:h-40 mb-5 md:mb-0'>
                <h1 className='text-md md:text-2xl text-slate-600 font-medium mb-5 '>{title}</h1>
                <p className='text-sm text-slate-500'>{description}</p>
            </div>
            <a href={`${link}`} className='flex uppercase font-bold text-xs md:text-sm text-[#0099ff]'>
                Read More
                <GrFormNext className='text-[#0099ff] duration-300 ml-1 hover:ml-3'/>
            </a>
        </div>
    </div>
  )
}

export default Card