import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function Footer() {
  return (
    <div id='Contact' className='w-full px-4 bg-slate-950'>
      <div className='max-w-[1240px] h-[8rem] mx-auto'>
        <div className='flex justify-between max-sm:flex max-sm:flex-col max-sm:text-center'>
          <h4 className='text-slate-500'>© Eidy 2024</h4>
          <div className='flex justify-center max-sm:pt-3'>
            <a href="https://www.facebook.com/profile.php?id=61559192100937" target='_blank' rel="noreferrer" className='cursor-pointer pr-5'><FaFacebook size={30} color='#334155'
            onMouseOver={({ target }) => target.style.color = "#64748b"}
            onMouseOut={({ target }) => target.style.color = "#334155"}/>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61559192100937" target='_blank' rel="noreferrer" className='cursor-pointer'><FaXTwitter size={30} color='#334155'
            onMouseOver={({ target }) => target.style.color = "#64748b"}
            onMouseOut={({ target }) => target.style.color = "#334155"}/>
            </a>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer