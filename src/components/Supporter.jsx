import React from 'react'
import { motion } from "framer-motion"
import LogoNvidia from '../img/supporter/logoNvidia.svg'
import LogoCCC from '../img/supporter/logoCCC.svg'
import LogoOmPlatform from '../img/supporter/logoOmPlatform.svg'

function Supporter() {
  return (
    <div className='w-full bg-slate-950 px-4'>
      <div className='max-w-[1240px] mx-auto text-center mb-16'>
        <motion.div className='mb-16'
          initial={{ y: 45, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className='text-slate-500 font-title text-4xl max-md:text-3xl'>Our Supporters</h3>
        </motion.div>
        <motion.div className='grid grid-cols-3 gap-6 justify-items-center items-center pb-20 max-md:grid-cols-1 max-md:gap-10'
          initial={{ y: 45, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={LogoNvidia} width={300} className='max-md:w-[12rem]' alt='Logo Nvidia' />
          <img src={LogoCCC} width={300} className='max-md:w-[13rem]' alt='Logo CCC' />
          <img src={LogoOmPlatform} width={300} className='max-md:w-[12rem]' alt='Logo Om Platform' />
        </motion.div>

      </div>
    </div>
  )
}

export default Supporter