import { assets, infoList } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  // The state for managing which card is expanded remains the same.
  const [expandedCard, setExpandedCard] = React.useState(null);

  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    >
      <motion.h4
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.3}}
      className='text-center mb-2 text-lg font-Ovo'>
        Introduction</motion.h4>

      <motion.h2
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.5}}
      className='text-center text-5xl font-Ovo'>
        About me</motion.h2>

        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <motion.div
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.6}}
            className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
            </motion.div>
            <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.8}}
            className='flex-1'>
                <p className='mb-10 max-w-[750px] mx-auto font-Ovo'
                >Hi, Hi, I’m Yulo — a full-stack software engineer with over 5 years of backend experience in the pharmaceutical industry. I have built data platforms and automated clinical research pipelines, focusing on scalable, production-grade systems that integrate backend strength with thoughtful full-stack design.
                Currently, I'm pursuing an M.S. in Electrical and Computer Engineering at the University of Washington. My passion lies in applying software and AI technologies to solve real-world challenges in productivity, health, and research.
                I am actively seeking software engineering internships for 2026, where I can contribute to impactful and technically challenging projects.
                </p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto"
                >
                  {infoList.map((category, index) => (
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-lg hover:shadow-black/20 dark:border-white dark:hover:shadow-white/20 dark:hover:bg-darkHover/50"
                      key={index}
                    >
                      <div className="flex items-center mb-4">
                        <Image
                          src={isDarkMode ? category.iconDark : category.icon}
                          alt={category.title}
                          className="w-7 h-7 mr-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
                          {category.title}
                        </h3>
                      </div>

                      <ul className="space-y-6">
                        {category.details.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: itemIndex * 0.1 + 0.3 }}
                            className="relative pl-8 pb-6 last:pb-0"
                          >
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700"></div>
                            <div className="absolute left-[-5px] top-[5px] w-3 h-3 rounded-full bg-[#C77B5C] border border-white dark:border-gray-800"></div>

                            {item.logo && (
                                <Image src={item.logo} alt="logo" className="w-6 h-6 mb-2" />
                            )}
                            <h4 className="font-semibold text-gray-800 dark:text-white text-base">{item.position || item.degree}</h4>
                            <p className="text-sm text-gray-600 dark:text-white/80">{item.company || item.institution}</p>
                            <p className="text-sm font-semibold text-gray-500 dark:text-white/70 mt-1">
                                {item.time}
                            </p>

                            {/* --- MODIFICATION 1 START --- */}
                            {/* Show description if card is expanded OR if the category type is 'experience' */}
                            {(expandedCard === `${index}-${itemIndex}` || category.type === 'experience') && item.description && (
                                <p className="mt-2 text-sm text-gray-700 dark:text-white/90 whitespace-pre-line">
                                    {item.description}
                                </p>
                            )}
                            {/* --- MODIFICATION 1 END --- */}

                            {/* --- MODIFICATION 2 START --- */}
                            {/* Only show the button if there is a description AND the category type is NOT 'experience' */}
                            {item.description && category.type !== 'experience' && (
                                <button
                                    onClick={() => setExpandedCard(expandedCard === `${index}-${itemIndex}` ? null : `${index}-${itemIndex}`)}
                                    className="mt-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm focus:outline-none flex items-center"
                                >
                                    {expandedCard === `${index}-${itemIndex}` ? '▲ Collapse' : '▼ Expand'}
                                </button>
                            )}
                            {/* --- MODIFICATION 2 END --- */}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </motion.div>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About