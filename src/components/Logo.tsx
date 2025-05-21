import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <a href="/" className={`flex items-center cursor-pointer ${className}`}>
      <img 
        src="/Logo_C8.png" 
        alt="CRE8TAR logo" 
        className="h-9 w-auto"
      />
      <h3 className="ml-2 text-white font-bold text-xl">C8</h3>
    </a>
  );
};

export default Logo;
