import React from 'react'
import { FaRegFileAlt } from 'react-icons/fa'
import { LuDownload } from 'react-icons/lu'
import { PiCodeFill } from 'react-icons/pi'

function Card({Data}) {

  return (
      <div className='relative w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
          <h3 className='text-xl font-bold'>{ Data.name }</h3>
          <p className='text-sm leading-tight mt-5 font-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cumque?</p>
          <div className='footer absolute bottom-0 left-0  w-full '>
              <div className='flex items-center justify-between mb-3 py-3 px-8'>
                  <a className='cursor-pointer'>See live</a>
                  <a  className='w-7 h-7 bg-zinz-600 rounded-full flex items-center justify-center cursor-pointer'>
                      <PiCodeFill size="2rem" color='rgba'/>
                  </a>
              </div>
              <div className='tag w-full py-4 bg-green-600 flex items-center justify-center'>
                  <a className='text-md font-semibold cursor-pointer'>Contact Now</a>
              </div>
          </div> 
      </div>
  )
}

export default Card