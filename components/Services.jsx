import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image' // Keep Image import if it's used elsewhere, otherwise it can be removed
import React from 'react'
import { motion } from "motion/react"

const Services = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id="services" className='w-full px-[12%] py-10 scroll-mt-20'>

       <motion.h4
       initial={{ y: -20, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{ delay: 0.3, duration: 0.5 }}
       className='text-center mb-2 text-lg font-Ovo'>
       What I use</motion.h4>

      <motion.h2
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className='text-center text-5xl font-Ovo'>
      Tech Stack</motion.h2>

      <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I work across the full stack, using technologies like Python, JavaScript, and AI APIs to build scalable web applications and automation tools.
        Below are some of the core tools I use in my projects.
        </motion.p>

        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        // Keep 'grid grid-cols-auto' if it works for your desired column behavior,
        // otherwise consider using responsive grid classes like 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        className='grid grid-cols-auto gap-6 my-10 justify-center'> {/* Added justify-center for centering cards */}
            {serviceData.map(({icon, title, description, link}, index)=>(
                <motion.div
                whileHover={{scale: 1.05}}
                key={index}
                className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white
                           max-w-sm'> {/* Added max-w-sm to control card width */}
                    {/* Removed the Image component for the icon */}
                    <div className="flex items-center mb-4"> {/* Container for dot and title */}
                        {/* Orange dot, same style as About page timeline */}
                        <div className="w-3 h-3 rounded-full bg-[#C77B5C] mr-3"></div>
                        <h3 className='text-lg my-0 text-gray-700 dark:text-white'>{title}</h3> {/* Removed my-4, adjusted for alignment */}
                    </div>
                    <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
                        {description}
                    </p>

                </motion.div>
            ))}
        </motion.div>

    </motion.div>
  )
}

export default Services