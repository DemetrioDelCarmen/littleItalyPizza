"use client";

import { motion } from "framer-motion";
import Link from 'next/link';

// Variants para las animaciones
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
};

const buttonVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

export default function HomePage() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background and overlay */}
      <div className="absolute inset-0 bg-center bg-cover bg-[url(https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/chad-montano-MqT0asuoIcU-unsplash.jpg)]"></div>
      <div className="absolute inset-0 bg-stone-900 opacity-70"></div> {/* Oscurece la imagen para que el texto resalte */}

      {/* Main content, now animated */}
      <motion.div
        className="border  p-6 relative z-10 text-white text-center flex flex-col items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="my-12">
          <img className='object-contain w-[180px] h-[180px] shadow-2xl' src="https://rayrtuqztdc8phcw.public.blob.vercel-storage.com/littleItaly/logo-italy-pizza.jpg" alt="Pizzeria Logo" />
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2">
            Taste the Tradition
          </h2>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto mb-8">
            Freshly made, every single time.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4"
          variants={containerVariants}
        >
          {/* Botón Order Here */}
          <motion.a
            href="https://slicelife.com/restaurants/pa/new-oxford/17350/little-italy-iv/menu?utm_campaign=order_now_button&utm_medium=referral&utm_source=littleitalyivpizza.com"
            target="_blank"
            className="bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-md hover:bg-green-700 transition-colors focus:outline-none"
            variants={buttonVariants}
          >
            Order Here
          </motion.a>

          {/* Botón View Menu */}
          <motion.a

            href="/menu"
            className="bg-white text-stone-900 font-bold py-3 px-8 rounded-full text-lg shadow-md hover:bg-stone-200 transition-colors focus:outline-none focus:ring-2 focus:ring-stone-300 focus:ring-opacity-75"
            variants={buttonVariants}
          >
            View Menu
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}