import { useEffect, useRef, useState } from 'react';

export const useSelect = (
  setType: React.Dispatch<React.SetStateAction<string>>
) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = (e: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(e.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      window.addEventListener('mousedown', handleClickOutside);
      return () => window.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleOptionClick = (value: string) => {
    setType(value);
    setIsOpen(false);
  };

  return {
    isOpen,
    setIsOpen,
    containerRef,
    handleOptionClick,
  };
};
