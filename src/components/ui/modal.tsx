import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Modal = ({ isOpen, onClose, title, children, className }: ModalProps) => {
  const { readingMode } = useTheme();

  // Handle ESC key press to close the modal
  React.useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className={cn(
          "relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-xl p-6 transition-all",
          readingMode
            ? "bg-white text-black border border-gray-400 shadow-xl shadow-gray-600/20"
            : "bg-[#0D0F1A] text-gray-300 border border-cre8-purple/30 shadow-xl shadow-purple-900/20",
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className={cn(
            "absolute right-4 top-4 transition-colors",
            readingMode ? "text-gray-500 hover:text-black" : "text-gray-400 hover:text-white"
          )}
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>
        
        <h2 className={cn(
          "text-2xl md:text-3xl font-bold mb-4",
          readingMode ? "text-black" : "gradient-text"
        )}>
          {title}
        </h2>

        <div className={cn(readingMode ? "text-black" : "text-gray-300")}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
