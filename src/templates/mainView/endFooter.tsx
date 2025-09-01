"use client";

import { Instagram, MessageCircle } from "lucide-react";

export default function EndFooter() {
  const creatorName = "Amelia Kasrin";
  const creatorInstagramLink = "https://www.instagram.com/amelia.kasrin";
  const creatorWhatsAppLink = "https://wa.me/6282217712834";

  return (
    <footer className="text-center py-8 px-4 pb-20 relative z-20">
      <p className="text-yellow-500 mb-3">Dibuat Dengan Sepenuh Hati ❤️</p>

      {/* Nama Creator */}
      <div className="mb-2">
        <p className="text-yellow-400 font-medium">by {creatorName}</p>
      </div>

      {/* Open Order Text */}
      <div className="mb-4">
        <p className="text-yellow-500 text-sm">Open Order</p>
      </div>

      {/* Social Media Buttons */}
      <div className="flex items-center justify-center gap-2">
        {/* Instagram Button */}
        <a
          href={creatorInstagramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-yellow-600 bg-white border border-yellow-500 hover:bg-yellow-50 hover:border-yellow-600 transition-all duration-300 px-2 py-1 rounded-full shadow-sm hover:shadow-md"
        >
          <Instagram className="w-3 h-3" />
          <span className="text-xs font-medium">IG</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={creatorWhatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-yellow-600 bg-white border border-yellow-500 hover:bg-yellow-50 hover:border-yellow-600 transition-all duration-300 px-2 py-1 rounded-full shadow-sm hover:shadow-md"
        >
          <MessageCircle className="w-3 h-3" />
          <span className="text-xs font-medium">WA</span>
        </a>
      </div>
    </footer>
  );
}
