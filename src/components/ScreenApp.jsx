import React from 'react'
import { motion } from "framer-motion"
import screenApp from '../img/graphic/screenApp.png'

function ScreenApp() {
    return (
        <div className='w-full bg-slate-950 px-4'>
            <div className='max-w-[1240px] mx-auto flex justify-center mb-24'>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img src={screenApp} alt='screen app' className='max-sm:w-full' />
                </motion.div>

            </div>
        </div>
    )
}

export default ScreenApp