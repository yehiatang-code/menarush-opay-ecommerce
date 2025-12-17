'use client'

import Link from 'next/link'

interface LogoProps {
  locale: string
  className?: string
}

export default function Logo({ locale, className = '' }: LogoProps) {
  return (
    <Link 
      href={`/${locale}`} 
      className={`flex items-center space-x-3 rtl:space-x-reverse group ${className}`}
      aria-label="MENARUSH Commerce Home"
    >
      {/* Owl Icon - Optimized SVG */}
      <div className="flex-shrink-0 relative">
        <svg
          width="44"
          height="44"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-2"
        >
          {/* Owl Body - Rounded shape */}
          <ellipse
            cx="50"
            cy="58"
            rx="22"
            ry="20"
            stroke="#f97316"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Left Eye - Large and round */}
          <circle
            cx="38"
            cy="48"
            r="9"
            stroke="#f97316"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Right Eye - Large and round */}
          <circle
            cx="62"
            cy="48"
            r="9"
            stroke="#f97316"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Eye Pupils */}
          <circle cx="38" cy="48" r="4" fill="#f97316" />
          <circle cx="62" cy="48" r="4" fill="#f97316" />
          {/* Left Eyebrow - Distinct arch */}
          <path
            d="M 28 40 Q 38 36 48 40"
            stroke="#f97316"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Right Eyebrow - Distinct arch */}
          <path
            d="M 52 40 Q 62 36 72 40"
            stroke="#f97316"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Beak - Small triangular */}
          <path
            d="M 47 55 L 50 62 L 53 55 Z"
            fill="#f97316"
            stroke="#f97316"
            strokeWidth="1"
          />
          {/* Left Foot - Small triangular */}
          <path
            d="M 38 82 L 33 88 L 38 88 Z"
            fill="#f97316"
          />
          {/* Right Foot - Small triangular */}
          <path
            d="M 62 82 L 57 88 L 62 88 Z"
            fill="#f97316"
          />
        </svg>
        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      </div>
      
      {/* Text - Thin, modern, monolinear style */}
      <div className="flex flex-col leading-[1.1]">
        <span className="text-orange-500 font-extralight text-[22px] tracking-[0.2em] group-hover:text-orange-400 transition-colors duration-300">
          MENA
        </span>
        <span className="text-orange-500 font-extralight text-[22px] tracking-[0.2em] group-hover:text-orange-400 transition-colors duration-300">
          RUSH
        </span>
      </div>
    </Link>
  )
}

