
import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Modal = ({ isOpen, onClose, title, children, className }: ModalProps) => {
  // Handle ESC key press to close the modal
  React.useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
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
          "relative max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-[#0D0F1A] border border-cre8-purple/30 rounded-xl p-6 shadow-xl shadow-purple-900/20",
          className
        )}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button 
          onClick={onClose} 
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>
        
        <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-4">{title}</h2>
        
        <div className="text-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
