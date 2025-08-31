"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Bank({ rek, name }: { rek: string; name: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success("Nomor rekening berhasil disalin!");
      
      // Reset icon after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      toast.error("Gagal menyalin nomor rekening");
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-4 p-4">
      {/* Account Details */}
      <div className="text-center space-y-2">
        <div className="bg-cream-warm p-3 rounded-lg border border-maroon-400/30">
          <p className="font-bold text-maroon-700 text-lg tracking-wider">{rek}</p>
          <p className="text-gray-600 text-sm font-medium">{name}</p>
        </div>
      </div>

      {/* Elegant Copy Button */}
      <button
        onClick={() => handleCopy(rek)}
        className="btn-maroon group relative overflow-hidden"
        disabled={copied}
      >
        <div className="flex items-center justify-center gap-2 relative z-10">
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-400" />
              <span>Tersalin!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span>Salin No Rekening</span>
            </>
          )}
        </div>
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </button>
    </div>
  );
}