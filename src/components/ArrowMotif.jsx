import React from "react";

export function UpwardArrows({ className = "w-24 h-24 text-rdcc-cyan/40", count = 3 }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="arrowGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="arrowGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1657D9" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0EA5E9" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="arrowGoldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
        {/* Triple diagonal upward arrows inspired by the brochure cover */}
        <path
          d="M20 70 L50 40 M50 40 H32 M50 40 V58"
          stroke="url(#arrowGrad2)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M38 52 L68 22 M68 22 H50 M68 22 V40"
          stroke="url(#arrowGrad1)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M56 34 L86 4 M86 4 H68 M86 4 V22"
          stroke="url(#arrowGoldGrad)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />
      </svg>
    </div>
  );
}

export function DirectionBadge({ text = "We Guide You For A Better Future" }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rdcc-cyan-ice/80 border border-rdcc-cyan-light text-rdcc-navy text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
      <span className="w-2 h-2 rounded-full bg-rdcc-blue animate-pulse"></span>
      <span>{text}</span>
      <span className="text-rdcc-blue">↗</span>
    </div>
  );
}
