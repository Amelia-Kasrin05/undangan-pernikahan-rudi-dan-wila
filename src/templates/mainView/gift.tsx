"use client";

import useVisibility from "../../services/hooks/useVisibility";
import Bank from "../components/bank";
import MainLayout from "../components/mainLayout";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Gift() {
  const text1 = useVisibility();
  const text2 = useVisibility();
  const [addressCopied, setAddressCopied] = useState(false);

  const handleCopyAddress = () => {
    const address = "Rudi, Jalan Ali Haji sebelum musholla Ad-Dahrun simpang sebelah kiri ( jalan kulim) RT 005 RW 003, kelurahan Pematang Reba, Kecamatan Rengat Barat";
    navigator.clipboard.writeText(address);
    setAddressCopied(true);
    setTimeout(() => setAddressCopied(false), 2000);
  };

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

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.3 }} 
        className="overflow-visible"
      >
        <div className="flex flex-col gap-8 pt-4">
          {/* Bank Options */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-start w-full px-4">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
             className="flex flex-col items-center w-full md:w-1/2 max-w-[280px] mx-auto bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border-2 border-maroon-400 hover:border-gold-400 transition-all duration-300 hover:shadow-xl"
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

          {/* Enhanced Wedding Gift Envelope - Lebih Elegan */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.6 }} 
            className="flex flex-col items-center gap-3"
          >
            <div className="relative">
              {/* Multi-layer Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400/20 via-maroon-400/10 to-gold-400/20 rounded-full blur-3xl scale-150 opacity-80"></div>
              <div className="absolute inset-0 bg-gold-400/30 rounded-full blur-2xl scale-125 opacity-60 animate-pulse"></div>
              
              {/* Premium Wedding Envelope SVG */}
              <motion.svg
                width="140"
                height="140"
                viewBox="0 0 140 140"
                className="relative z-10 drop-shadow-2xl filter"
                whileHover={{ 
                  scale: 1.15, 
                  rotate: 3,
                  transition: { duration: 0.4, type: "spring", stiffness: 300 }
                }}
                style={{ filter: 'drop-shadow(0 10px 30px rgba(127, 29, 29, 0.3))' }}
              >
                {/* Outer Decorative Circle */}
                <circle
                  cx="70"
                  cy="70"
                  r="65"
                  fill="none"
                  stroke="url(#goldRing)"
                  strokeWidth="1"
                  strokeDasharray="4,4"
                  opacity="0.6"
                >
                  <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    from="0 70 70"
                    to="360 70 70"
                    dur="20s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Main Background Circle */}
                <circle
                  cx="70"
                  cy="70"
                  r="55"
                  fill="url(#premiumGold)"
                  stroke="#7F1D1D"
                  strokeWidth="3"
                />
                
                {/* Inner Cream Circle */}
                <circle
                  cx="70"
                  cy="70"
                  r="45"
                  fill="#FEF7E7"
                  opacity="0.9"
                />
                
                {/* Main Envelope Body */}
                <rect
                  x="35"
                  y="45"
                  width="70"
                  height="50"
                  rx="6"
                  fill="#FEF7E7"
                  stroke="#7F1D1D"
                  strokeWidth="2"
                />
                
                {/* Envelope Decorative Border */}
                <rect
                  x="37"
                  y="47"
                  width="66"
                  height="46"
                  rx="4"
                  fill="none"
                  stroke="url(#goldBorder)"
                  strokeWidth="1"
                  strokeDasharray="2,1"
                  opacity="0.7"
                />
                
                {/* Main Flap */}
                <polygon
                  points="35,45 70,70 105,45"
                  fill="url(#maroonPremium)"
                  stroke="#7F1D1D"
                  strokeWidth="2"
                />
                
                {/* Flap Decorative Pattern */}
                <polygon
                  points="40,48 70,65 100,48"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="1"
                  opacity="0.8"
                />
                
                {/* Wax Seal with Wedding Rings */}
                <circle
                  cx="70"
                  cy="62"
                  r="12"
                  fill="url(#waxSeal)"
                  stroke="#7F1D1D"
                  strokeWidth="1.5"
                />
                
                {/* Wedding Rings in Seal */}
                <g transform="translate(70,62)">
                  {/* Ring 1 */}
                  <circle cx="-4" cy="-2" r="4" fill="none" stroke="#FEF7E7" strokeWidth="1.5" opacity="0.9" />
                  <circle cx="-4" cy="-2" r="2" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
                  
                  {/* Ring 2 - Interlocked */}
                  <circle cx="4" cy="2" r="4" fill="none" stroke="#FEF7E7" strokeWidth="1.5" opacity="0.9" />
                  <circle cx="4" cy="2" r="2" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
                  
                  {/* Small Diamond */}
                  <polygon points="0,-4 2,-2 0,0 -2,-2" fill="#D4AF37" opacity="0.8" />
                </g>
                
                {/* Corner Decorative Elements */}
                <g fill="#D4AF37" opacity="0.7">
                  {/* Top Left */}
                  <path d="M25,30 Q30,25 35,30 Q30,35 25,30" />
                  {/* Top Right */}
                  <path d="M115,30 Q110,25 105,30 Q110,35 115,30" />
                  {/* Bottom Left */}
                  <path d="M25,110 Q30,105 35,110 Q30,115 25,110" />
                  {/* Bottom Right */}
                  <path d="M115,110 Q110,105 105,110 Q110,115 115,110" />
                </g>
                
                {/* Floating Hearts */}
                <g fill="#D4AF37" opacity="0.6">
                  <motion.path
                    d="M20,50 C18,47 14,47 14,50 C14,47 10,47 12,50 C14,53 20,59 20,59 C20,59 26,53 28,50 C30,47 26,47 26,50 C26,47 22,47 20,50 Z"
                    animate={{ y: [-2, 2, -2], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M120,90 C118,87 114,87 114,90 C114,87 110,87 112,90 C114,93 120,99 120,99 C120,99 126,93 128,90 C130,87 126,87 126,90 C126,87 122,87 120,90 Z"
                    animate={{ y: [2, -2, 2], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                </g>
                
                {/* Sparkle Effects */}
                <g fill="#D4AF37">
                  <motion.circle
                    cx="25"
                    cy="70"
                    r="1.5"
                    animate={{ 
                      scale: [1, 1.5, 1], 
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.circle
                    cx="115"
                    cy="70"
                    r="1.5"
                    animate={{ 
                      scale: [1, 1.5, 1], 
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                  />
                  <motion.polygon
                    points="70,25 72,30 77,28 72,33 70,38 68,33 63,28 68,30"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </g>
                
                {/* Premium Gradients */}
                <defs>
                  <linearGradient id="premiumGold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFD700" />
                    <stop offset="30%" stopColor="#F7DC6F" />
                    <stop offset="70%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#B8941F" />
                  </linearGradient>
                  
                  <linearGradient id="maroonPremium" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#B91C1C" />
                    <stop offset="30%" stopColor="#991B1B" />
                    <stop offset="70%" stopColor="#7F1D1D" />
                    <stop offset="100%" stopColor="#6B1D1D" />
                  </linearGradient>
                  
                  <radialGradient id="waxSeal" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#D4AF37" />
                    <stop offset="70%" stopColor="#B8941F" />
                    <stop offset="100%" stopColor="#7F1D1D" />
                  </radialGradient>
                  
                  <linearGradient id="goldBorder" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                  
                  <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4AF37" />
                    <stop offset="50%" stopColor="#FFD700" />
                    <stop offset="100%" stopColor="#D4AF37" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </div>
            
            {/* Enhanced Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="text-center"
            >
              <p className="text-maroon-700 font-bold text-lg tracking-wide">Wedding Gift</p>
              <div className="w-20 h-0.5 bg-gold-gradient mx-auto mt-1 rounded-full"></div>
            </motion.div>
          </motion.div>

          {/* Super Enhanced Address Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="font-medium z-10 relative mx-4"
          >
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-cream via-white to-cream rounded-xl opacity-90"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/5 to-transparent rounded-xl"></div>
            
            <div className="relative bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border-2 border-maroon-400 hover:border-gold-400 transition-all duration-300 hover:shadow-2xl overflow-hidden">
              {/* Premium Corner Decorations */}
              <div className="absolute top-0 left-0 w-12 h-12 border-l-3 border-t-3 border-gold-400 rounded-tl-xl opacity-40"></div>
              <div className="absolute top-0 right-0 w-12 h-12 border-r-3 border-t-3 border-gold-400 rounded-tr-xl opacity-40"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-l-3 border-b-3 border-gold-400 rounded-bl-xl opacity-40"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-r-3 border-b-3 border-gold-400 rounded-br-xl opacity-40"></div>
              
              {/* Subtle Pattern Overlay */}
              <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <pattern id="subtlePattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="1" fill="#7F1D1D" opacity="0.1" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#subtlePattern)" />
                </svg>
              </div>
              
              {/* Header */}
              <div className="flex items-center justify-center gap-3 mb-5 relative z-10">
                <motion.div 
                  className="w-12 h-12 rounded-full bg-maroon-gradient flex items-center justify-center shadow-lg border-2 border-gold-400/30"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-7 h-7 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </motion.div>
                <div className="text-center">
                  <h3 className="text-maroon-700 font-bold text-xl tracking-wide">Alamat Pengiriman Kado</h3>
                  <div className="w-24 h-1 bg-gold-gradient mx-auto mt-2 rounded-full"></div>
                </div>
              </div>
              
              {/* Address Content */}
              <div className="relative z-10">
                <div className="bg-gradient-to-r from-cream/50 to-white/50 rounded-lg p-4 border border-gold-400/20 mb-4">
                  <p className="text-gray-700 leading-relaxed text-center font-medium">
                    Rudi, Jalan Ali Haji sebelum musholla Ad-Dahrun simpang sebelah kiri ( jalan kulim) RT 005 RW 003, kelurahan Pematang Reba, Kecamatan Rengat Barat
                  </p>
                </div>
                
                {/* Enhanced Copy Button */}
                <motion.button
                  onClick={handleCopyAddress}
                  className={`mx-auto flex items-center gap-3 px-6 py-3 rounded-xl font-bold text-sm shadow-lg transition-all duration-300 border-2 ${
                    addressCopied 
                      ? 'bg-green-500 text-white border-green-400 scale-105' 
                      : 'bg-maroon-gradient text-cream border-gold-400 hover:scale-105 hover:shadow-xl'
                  }`}
                  whileHover={{ scale: addressCopied ? 1.05 : 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={addressCopied}
                >
                  <motion.div
                    animate={addressCopied ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {addressCopied ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </motion.div>
                  <span>
                    {addressCopied ? 'Alamat Tersalin!' : 'Salin Alamat'}
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </MainLayout>
  );
}