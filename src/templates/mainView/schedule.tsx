"use client";

import useVisibility from "../../services/hooks/useVisibility";
import MainLayout from "../components/mainLayout";
import { motion } from "framer-motion";

export default function Schedule({ refSchedule }: { refSchedule: any }) {
  const text1 = useVisibility(); // Untuk "Susunan Acara"
  const text3 = useVisibility(); // Untuk "25 September 2025" dan isinya

  return (
    <MainLayout className="gap-5" height="h-full">
      <section ref={refSchedule} className="w-full max-w-sm mx-auto px-4">
        <motion.h1 
          ref={text1.ref} 
          animate={text1.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }} 
          transition={{ duration: 0.7 }} 
          className="latin-20 z-10 text-center mb-6"
        >
          Susunan Acara
        </motion.h1>

        <div className="w-full flex flex-col items-center z-10 relative">
          {/* Timeline Container - Modern Timeline Design */}
          <div ref={text3.ref} className="w-full max-w-xs mx-auto relative">
            {/* Vertical Line - Updated with maroon gradient */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={text3.isVisible ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-maroon-400 via-gold-400 to-maroon-400 origin-top z-0"
            />

            {/* Akad Nikah */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={text3.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }} 
              transition={{ duration: 0.7, delay: 0.8 }} 
              className="relative mb-8 flex items-center z-10"
            >
              {/* Icon Circle - Updated with maroon gradient */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={text3.isVisible ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ duration: 0.6, delay: 1, type: "spring", damping: 15, stiffness: 300 }}
                className="w-12 h-12 bg-maroon-gradient rounded-full flex items-center justify-center z-10 shadow-lg flex-shrink-0"
              >
                <img src="/images/ring.png" alt="ring" className="w-6 h-6 object-contain filter brightness-0 invert" />
              </motion.div>

              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={text3.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.5, delay: 1.2 }}
               className="ml-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 border-maroon-400 hover:border-gold-400 flex-1 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="font-bold text-maroon-700 mb-1 text-lg">Akad Nikah</h3>
                <p className="font-bold text-gray-600 text-sm">21 September 2025</p>
                <p className="text-gray-500 text-sm">08.00 WIB - Selesai</p>
              </motion.div>
            </motion.div>

            {/* Resepsi */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={text3.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }} 
              transition={{ duration: 0.7, delay: 1.4 }} 
              className="relative flex items-center z-10"
            >
              {/* Icon Circle - Updated with gold gradient */}
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={text3.isVisible ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 180 }}
                transition={{ duration: 0.6, delay: 1.6, type: "spring", damping: 15, stiffness: 300 }}
                className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center z-10 shadow-lg flex-shrink-0"
              >
                <img src="/images/reception.png" alt="reception" className="w-6 h-6 object-contain filter brightness-0 contrast-200" />
              </motion.div>

              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={text3.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.5, delay: 1.8 }}
               className="ml-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 border-maroon-400 hover:border-gold-400 flex-1 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="font-bold text-maroon-700 mb-1 text-lg">Resepsi</h3>
                <p className="font-bold text-gray-600 text-sm">25 September 2025</p>
                <p className="text-gray-500 text-sm">11.00 WIB - Selesai</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}