"use client";
import { Instagram } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ProfileCard({ name, desc, instagramLink }: { name: string; desc: string; instagramLink?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isFemale = name.includes("Rudi");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      {
        threshold: 0.2, // Trigger when 20% visible
        rootMargin: "50px", // Start animation 50px before element enters viewport
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className={`profile-card mt-12 mb-8 flex flex-col gap-4 items-center px-2 w-full max-w-[380px] mx-auto ${isVisible ? "animate-in" : "animate-out"}`}>
      {/* Profile Image - Updated with maroon gradient */}
      <div className="profile-image relative p-2 w-40 h-40 bg-gradient-to-br from-maroon-600 via-red-800 to-maroon-700 shadow-2xl rounded-full">
        <div
          className="w-full h-full rounded-full bg-gray-500 overflow-hidden border-4 border-cream shadow-inner"
          style={{
            backgroundImage: isFemale ? "url('/images/female.webp')" : "url('/images/male.webp')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: isFemale ? "center 15%" : "center 12%",
            backgroundSize: "cover",
          }}
        />
        <div className="absolute inset-0 rounded-full border-2 border-cream/30" />
      </div>

      {/* Name Section */}
      <div className="profile-name text-center space-y-2 w-full max-w-[360px] mx-auto px-2">
        <h1
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-maroon-600 tracking-wide leading-tight"
          style={{
            fontSize: "clamp(1.25rem, 5vw, 2rem)",
            lineHeight: "1.1",
            wordSpacing: "0.1em",
          }}
        >
          <span
            className="drop-shadow-lg block whitespace-nowrap"
            style={{
              textShadow: "1px 1px 3px rgba(254,247,231,0.8), 2px 2px 4px rgba(127,29,29,0.3)",
              minWidth: "max-content",
            }}
          >
            {name}
          </span>
        </h1>

        {/* Instagram Link - Updated with maroon theme */}
        {instagramLink && (
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-instagram flex items-center justify-center gap-2 text-gray-600 hover:text-maroon-600 transition-colors duration-300 mt-3 cursor-pointer relative z-10"
            style={{
              pointerEvents: "auto",
              touchAction: "manipulation",
            }}
            onClick={(e) => {
              console.log("[v0] Instagram link clicked:", instagramLink);
              // Ensure the link works by preventing any interference
              e.stopPropagation();
            }}
          >
            <Instagram className="w-5 h-5" />
            <span className="text-sm">@{name.split(" ")[0].toLowerCase()}</span>
          </a>
        )}

        {/* Decorative Element */}
        <div className="profile-decoration relative w-[150px] h-8 mx-auto flex justify-center items-center mt-4">
          <img
            src="/images/undername.png"
            alt="decorative element"
            className="w-[150px] h-auto object-contain filter drop-shadow-sm"
            style={{
              maxWidth: "150px",
              width: "150px",
              height: "auto",
            }}
          />
        </div>
      </div>

      {/* Description */}
      <div className="profile-description max-w-[300px] text-center mt-2">
        <p className="font-light text-gray-600 leading-relaxed text-sm px-2">{desc}</p>
      </div>
    </div>
  );
}