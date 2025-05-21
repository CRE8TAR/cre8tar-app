
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/238074ca-61eb-42a7-9654-d67f5c296483.png" 
        alt="CRE8TAR Logo" 
        className="h-9 w-auto"
      />
    </div>
  );
};

export default Logo;
