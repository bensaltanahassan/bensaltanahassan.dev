"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div
          className="h-1/2 lg:h-full lg:w-1/2 relative mb-8 
        "
        >
          <Image src="/hassan.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
            Crafting Digital Experiences, One Line of Code at a Time
          </h1>
          {/* DESC */}
          <p className="md:text-xl text-sm text-center lg:text-start">
            Hi! I`m <span className="font-semibold">Bensaltana Hassan</span> , a
            Full Stack Developer with expertise in both mobile and web
            technologies. I`m all about turning ideas into reality through
            creative front-end design and robust back-end functionality. Let`s
            build the future of digital experiences together!
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4 items-center justify-center  lg:items-start lg:justify-start">
            <Link
              className="p-4 rounded-lg ring-1 ring-black bg-black text-white"
              href="/portfolio"
            >
              View My Work
            </Link>
            <Link className="p-4 rounded-lg ring-1 ring-black" href="/contact">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
