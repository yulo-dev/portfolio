import React from "react";
import { motion } from "motion/react";

const Publications = () => {
  return (
    <motion.div
      id="publications"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Research writing
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Publications
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        A peer-reviewed publication from my earlier research experience.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="flex justify-center my-10"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="border border-gray-400 rounded-lg
                     max-w-3xl w-full mx-auto // <-- Add max-w-3xl and mx-auto, keep w-full for responsiveness
                     px-8 py-6 // <-- Change py-10 to py-6 (or py-5/py-4 if still too much space)
                     hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500
                     dark:hover:bg-darkHover dark:hover:shadow-white"
        >
          <h3 className="text-lg mb-2 font-semibold text-gray-700 dark:text-white">
            Family and School Social Capital in Childhood Predict Youthful Drinking
          </h3>
          <p className="text-sm text-gray-600 leading-6 dark:text-white/80">
            Lo, Y., Chen, W. T., Wang, I. A., Liu, C. Y., Chen, W. J., & Chen, C. Y. (2019).<br />
            <i>
              Family and school social capital in late childhood predict youthful drinking behaviors and problems.
            </i><br />
            <span className="underline">Drug and Alcohol Dependence</span>, 204:107482.
          </p>
          <a
            href="https://www.sciencedirect.com/science/article/abs/pii/S0376871619302418?via%3Dihub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-sm text-blue-600 hover:underline"
          >
            View article ↗
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Publications;