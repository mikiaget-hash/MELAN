/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface MelanLogoProps {
  className?: string;
  size?: number | string;
  color?: string;
  variant?: 'full' | 'mark' | 'badge';
}

export default function MelanLogo({
  className = '',
  size,
  color = 'currentColor',
  variant
}: MelanLogoProps) {
  // Inline styling for sizing
  const style = size ? { width: size, height: size } : undefined;

  return (
    <svg
      viewBox="0 0 500 500"
      className={className}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={color}>
        {/* Left slanted leg - solid polygon */}
        <path d="M 125 315 L 146 195 L 206 186 L 185 306 Z" />
        
        {/* Middle U-shaped cup - solid curved path */}
        <path d="M 220 193 L 275 185 L 275 250 C 275 275 315 275 315 250 L 315 179 L 370 171 L 370 250 C 370 325 220 325 220 250 Z" />
        
        {/* Right slanted leg - solid polygon (asymmetrically higher, matches original) */}
        <path d="M 385 295 L 406 175 L 466 166 L 445 286 Z" />
      </g>
    </svg>
  );
}


