import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Card({Data , reference}) {

  return (
      <motion.div  whileDrag={{scale:1.2}} whileHover={{scale:1.1}} className='relative w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
          <h3 className='text-xl font-bold'>{ Data.name }</h3>
          <p className='text-sm leading-tight mt-5 font-md'>{Data.desc}</p>
          <div className='footer absolute bottom-0 left-0  w-full '>
              <div className='flex items-center justify-between mb-3 py-3 px-8'>
                  <a href={Data.live} className='cursor-pointer'>See Demo</a>
                  <a href={Data.code} className='w-7 h-7 bg-zinz-600 rounded-full flex items-center justify-center cursor-pointer'>
                      <FaGithub size="2rem" color='rgba'/>
                  </a>
              </div>
              <div className='tag w-full py-4 bg-green-600 flex items-center justify-center'>
                  <a href="https://wa.me/+923070471863" className='text-md font-semibold cursor-pointer'>Contact Now</a>
              </div>
          </div> 
      </motion.div>
  )
}

export default Card