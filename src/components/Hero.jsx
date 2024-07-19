import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import Button from "./Button/Button";
import { IoRocketSharp } from "react-icons/io5";

function Hero() {
  return (
    <div
      id="About"
      className="w-full px-4 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <div className="max-w-[1040px] w-full h-screen justify-center items-center mx-auto flex flex-col text-center">
        <motion.div
          className="flex flex-row justify-center items-center"
          initial={{ y: 75, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}>
          <p className="text-9xl pb-8 text-pink-500 max-sm:hidden">&#123;</p>

          <h1 className="text-green-500 font-title text-6xl px-4 max-lg:text-5xl max-md:text-4xl">
            Global Medical Specialist AI Foundation Model
          </h1>
          <p className="text-9xl pb-8 text-pink-500 max-sm:hidden">&#125;</p>
        </motion.div>

        <motion.div
          className="pt-20 flex flex-col max-md:pt-10"
          initial={{ y: 75, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}>
          <p className="font-title uppercase text-pink-500 text-3xl max-md:text-xl">
            request:
          </p>
          <ReactTyped
            className="font-title text-pink-500 text-5xl max-md:text-3xl"
            strings={[
              "Symptoms",
              "Treatments",
              "Medical Conditions",
              "Medical Conditions",
              "Concerns",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop></ReactTyped>
        </motion.div>

        <motion.div
          className="py-20"
          initial={{ y: 75, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}>
          <p className="font-title text-slate-300 text-2xl max-md:text-base">
            Eidy is an innovative Medical LLM designed to deliver
            specialist-level care, readily accessible through API and you smartphone
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 75, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}>
          <a href="https://docs.eidy.cloud">
            <Button>
              <IoRocketSharp size={20} />
              <p className="pl-3 ">Get Started</p>
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
