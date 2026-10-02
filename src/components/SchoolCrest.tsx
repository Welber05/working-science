import React from 'react';

interface SchoolCrestProps {
  className?: string;
  size?: number;
}

export const SchoolCrest: React.FC<SchoolCrestProps> = ({ className = "w-10 h-12", size }) => {
  return (
    <svg
      viewBox="0 0 500 600"
      className={className}
      style={size ? { width: size, height: size * 1.2 } : undefined}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Brasão Oficial EEEFM Antônio dos Santos Neves"
    >
      {/* Outer Yellow Shield Contour */}
      <path
        d="M 250 12 C 370 2 445 55 465 88 C 475 200 465 385 250 515 C 35 385 25 200 35 88 C 55 55 130 2 250 12 Z"
        fill="#FFCA00"
        stroke="#FFCA00"
        strokeWidth="12"
        strokeLinejoin="round"
      />

      {/* White Gap Frame */}
      <path
        d="M 250 22 C 360 14 430 62 450 92 C 460 195 450 370 250 498 C 50 370 40 195 50 92 C 70 62 140 14 250 22 Z"
        fill="#FFFFFF"
      />

      {/* Inner Blue Shield Frame */}
      <path
        d="M 250 30 C 352 22 418 68 438 96 C 448 190 438 360 250 488 C 62 360 52 190 62 96 C 82 68 148 22 250 30 Z"
        fill="#0052D4"
        stroke="#0052D4"
        strokeWidth="6"
        strokeLinejoin="round"
      />

      {/* Main Shield Quarters Clip */}
      <g clipPath="url(#shield-clip-exact)">
        <clipPath id="shield-clip-exact">
          <path d="M 250 44 C 342 38 402 80 422 105 C 432 180 422 340 250 468 C 78 340 68 180 78 105 C 98 80 158 38 250 44 Z" />
        </clipPath>

        {/* Top-Left Quarter: Royal Blue */}
        <rect x="0" y="0" width="250" height="260" fill="#0052D4" />

        {/* Top-Right Quarter: Gold Yellow */}
        <rect x="250" y="0" width="250" height="260" fill="#FFCA00" />

        {/* Bottom-Left Quarter: Gold Yellow */}
        <rect x="0" y="260" width="250" height="260" fill="#FFCA00" />

        {/* Bottom-Right Quarter: Royal Blue */}
        <rect x="250" y="260" width="250" height="260" fill="#0052D4" />

        {/* Vertical and Horizontal White Dividers */}
        <line x1="250" y1="35" x2="250" y2="475" stroke="#FFFFFF" strokeWidth="6" />
        <line x1="50" y1="260" x2="450" y2="260" stroke="#FFFFFF" strokeWidth="6" />

        {/* Top Text: EEEFM */}
        <text
          x="250"
          y="95"
          fill="#FFFFFF"
          fontSize="22"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          textAnchor="middle"
          letterSpacing="1"
        >
          EEEFM
        </text>

        {/* Top Text: ANTONIO DOS SANTOS NEVES */}
        <text
          x="250"
          y="125"
          fill="#FFFFFF"
          fontSize="18"
          fontWeight="800"
          fontFamily="system-ui, -apple-system, sans-serif"
          textAnchor="middle"
          letterSpacing="0.8"
        >
          ANTONIO DOS SANTOS NEVES
        </text>

        {/* Central ASN Letters */}
        <g textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="138">
          {/* White Thick Outline */}
          <text x="250" y="242" fill="none" stroke="#FFFFFF" strokeWidth="16" strokeLinejoin="round">
            ASN
          </text>
          {/* Blue Main Text */}
          <text x="250" y="242" fill="#0052D4">
            ASN
          </text>
        </g>

        {/* Bottom Left Icon: Terrestrial Globe */}
        <g transform="translate(145, 340)">
          {/* Outer Globe Circle */}
          <circle cx="0" cy="0" r="42" fill="#FFCA00" stroke="#0052D4" strokeWidth="6" />
          <circle cx="0" cy="0" r="42" fill="none" stroke="#FFFFFF" strokeWidth="3" />
          {/* Latitude and Longitude Lines */}
          <ellipse cx="0" cy="0" rx="42" ry="18" fill="none" stroke="#0052D4" strokeWidth="5" />
          <ellipse cx="0" cy="0" rx="42" ry="18" fill="none" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="-42" y1="0" x2="42" y2="0" stroke="#0052D4" strokeWidth="5" />
          <line x1="-42" y1="0" x2="42" y2="0" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="0" y1="-42" x2="0" y2="42" stroke="#0052D4" strokeWidth="5" />
          <line x1="0" y1="-42" x2="0" y2="42" stroke="#FFFFFF" strokeWidth="2" />
          {/* Globe Stand */}
          <path d="M -12 40 L 12 40 M 0 40 L 0 52 M -22 52 L 22 52" stroke="#0052D4" strokeWidth="7" strokeLinecap="round" />
          <path d="M -12 40 L 12 40 M 0 40 L 0 52 M -22 52 L 22 52" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Bottom Right Icon: Graduation Mortarboard Cap */}
        <g transform="translate(345, 335)">
          {/* Cap Diamond Outer & Inner */}
          <polygon points="0,-26 52,0 0,26 -52,0" fill="#0052D4" stroke="#FFFFFF" strokeWidth="6" strokeLinejoin="round" />
          {/* Skull Base */}
          <path d="M -32,8 C -32,30 32,30 32,8" fill="none" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
          {/* Tassel */}
          <path d="M -26,0 L -38,20 L -38,32" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
          <circle cx="-38" cy="35" r="4" fill="#FFFFFF" />
        </g>
      </g>

      {/* Bottom Ribbon Banner: MINHA CONQUISTA ESTÁ AQUI! */}
      <g>
        {/* Ribbon Yellow Outer Frame */}
        <path
          d="M 30 480 Q 250 550 470 480 L 490 535 Q 250 605 10 535 Z"
          fill="#FFCA00"
        />
        {/* Ribbon Blue Body */}
        <path
          d="M 38 488 Q 250 555 462 488 L 480 528 Q 250 595 20 528 Z"
          fill="#0052D4"
          stroke="#FFFFFF"
          strokeWidth="4"
        />
        {/* Ribbon Ends */}
        <path d="M 10 535 L 45 500 L 35 550 Z" fill="#FFCA00" />
        <path d="M 490 535 L 455 500 L 465 550 Z" fill="#FFCA00" />
        <path d="M 15 530 L 42 502 L 32 542 Z" fill="#003AA8" />
        <path d="M 485 530 L 458 502 L 468 542 Z" fill="#003AA8" />

        {/* Ribbon Arched Text */}
        <path id="crest-ribbon-path" d="M 35 535 Q 250 600 465 535" fill="none" />
        <text
          fill="#FFFFFF"
          stroke="#002C80"
          strokeWidth="3"
          fontSize="26"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.5"
        >
          <textPath href="#crest-ribbon-path" startOffset="50%" textAnchor="middle">
            MINHA CONQUISTA ESTÁ AQUI!
          </textPath>
        </text>
      </g>
    </svg>
  );
};
