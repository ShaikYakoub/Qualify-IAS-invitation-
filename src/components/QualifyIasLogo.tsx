'use client';

import React from 'react';
import Image from 'next/image';

export default function QualifyIasLogo({
  className = '',
  width = 220,
  height = 108,
  priority = true,
}: {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  return (
    <div className={`qualify-logo-container ${className}`}>
      <Image
        src="/qualify_ias_logo.png"
        alt="QUALIFY IAS - An Institute for Civil Services Preparation"
        width={width}
        height={height}
        className="qualify-official-logo-img"
        priority={priority}
      />
    </div>
  );
}
