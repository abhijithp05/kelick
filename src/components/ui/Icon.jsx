import React from 'react';
import Image from 'next/image';

const Icon = ({
  icon: IconComponent,
  src, // Path to image (WebP, PNG, etc.)
  className,
  loading = 'lazy',
  width = 24,
  height = 24,
  color,
  disabled,
  alt = 'Icon', // Alt text for image
  ...rest
}) => {
  if (!IconComponent && !src) return null; // If no icon or src provided, return null

  // Check if the passed `icon` is a React component (SVG)
  const isSvg = typeof IconComponent === 'function';

  return (
    <div
      className={`inline-flex justify-center items-center w-[${
        width || '24px'
      }] h-[${height || '24px'}] ${color ? `text-${color}` : ''} ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      }`}
      color={color}
      disabled={disabled}
      width={width}
      height={height}
      {...rest}
    >
      {isSvg ? (
        <Image
          as={IconComponent}
          width={width}
          height={height}
          alt={alt}
          layout="fill" // Ensures Image covers its parent container
          objectFit="contain"
          className={`transition-all duration-200 ${
            color ? `fill-[${color}]` : ''
          }`}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          style={{ objectFit: 'contain', width: '100%', height: '100%' }}
        />
      )}
    </div>
  );
};

export default Icon;
