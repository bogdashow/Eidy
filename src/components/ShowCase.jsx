import React from 'react'
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion"

function ShowCase() {
    return (
        <div id='Showcase' className='w-full bg-slate-950 px-4'>
            <div className='max-w-[1240px] justify-center items-center flex flex-col mx-auto'>
                <motion.div className='my-20'
                    initial={{ y: 75, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <ReactTyped className='font-title text-7xl text-green-500 max-md:text-5xl'
                        strings={[
                            "Showcase",

                        ]}
                        typeSpeed={100}
                        backSpeed={50}
                        loop
                    />
                </motion.div>

                <motion.p className='font-title text-slate-500 text-lg text-center mb-20 max-md:text-base'
                    initial={{ y: 35, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Eidy could integrate with a variety of healthcare services, including telemedicine, EMR, and more
                </motion.p>

                <motion.div className='mb-32 grid grid-cols-2 gap-6 max-md:grid-cols-1'
                    initial={{ y: 35, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <a href='https://chat.float16.cloud' target='_blank'>
                    <div className='text-white bg-slate-900 border border-slate-500 rounded-md px-8 py-8 duration-500 hover:border-slate-400'>
                        <h3 className='font-title text-2xl pb-3'>Eidy Chatbot 📄</h3>
                        <p className='text-slate-500 text-lg'>
                            Eidy provides a 24/7 medical chatbot. Disclaimer: Eidy does not guarantee the treatment or any information about healthcare.</p>
                    </div>
                    </a>
                    <a href='https://liff.line.me/1645278921-kWRPP32q/?accountId=780zbcmk' target='_blank'>
                    <div className='bg-slate-900 border border-slate-500 rounded-md px-8 py-8 duration-500 hover:border-slate-400'>
                        <h3 className='text-white font-title text-2xl pb-3'>nAItingale (OPD Notetaker) 📄</h3>
                        <p className='text-slate-500 text-lg'>
                        nAItinalge can stream voice into OPD notes. Limited support for voice in the Thai language.</p>
                    </div>
                    </a>
                </motion.div>

            </div>
        </div>
    )
}

export default ShowCase