"use client";

import useVisibility from "../../services/hooks/useVisibility";
import Bank from "../components/bank";
import MainLayout from "../components/mainLayout";
import { motion } from "framer-motion";

export default function Gift() {
  const text1 = useVisibility();
  const text2 = useVisibility();

  return (
    <MainLayout className="text-center gap-5" height="h-full">
      <motion.h1 
        ref={text1.ref} 
        animate={text1.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }} 
        transition={{ duration: 0.7 }} 
        className="latin-25"
      >
        Wedding Gift
      </motion.h1>

      <motion.p 
        ref={text2.ref} 
        animate={text2.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }} 
        transition={{ duration: 0.7 }} 
        className="px-4 text-gray-700"
      >
        Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
      </motion.p>

      {/* Content - Always Visible */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.3 }} 
        className="overflow-visible"
      >
        <div className="flex flex-col gap-8 pt-4">
          {/* Bank Options */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-start w-full px-4">
            {/* BCA - Rudi mardiansah */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center w-full md:w-1/2 max-w-[280px] mx-auto card-cream-maroon hover:shadow-xl"
            >
              <motion.img 
                src="/images/bca-logo.jpeg" 
                alt="Logo BCA" 
                className="max-w-[120px] w-full mb-4 rounded-lg shadow-md" 
                whileHover={{ scale: 1.05 }} 
                transition={{ duration: 0.2 }} 
              />
              <Bank
                rek="2200711770"
                name="A.n Rudi mardiansah"
              />
            </motion.div>
          </div>

          {/* Amplop Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: 0.6 }} 
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-maroon-gradient rounded-full blur-2xl opacity-20"></div>
              <img 
                src="https://app.sangmempelai.id/webview/template/front/amplop/187ece4abf101efceac87481ccf9dd5d.png" 
                alt="Amplop" 
                className="w-full max-w-[120px] drop-shadow-2xl relative z-10" 
              />
            </div>
          </motion.div>

          {/* Alamat Pengiriman */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="font-medium z-10 card-cream-maroon mx-4"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-maroon-gradient flex items-center justify-center">
                <svg className="w-5 h-5 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-maroon-700 font-semibold text-lg">Alamat Pengiriman Kado</p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Rudi, Jalan Ali Haji sebelum musholla Ad-Dahrun simpang sebelah kiri ( jalan kulim) RT 005 RW 003, kelurahan Pematang Reba, Kecamatan Rengat Barat
            </p>
          </motion.div>
        </div>
      </motion.div>
    </MainLayout>
  );
}