import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { AnswerProps, OptionsQuestionProps } from '@/types/answer';

export const useOptionsQuestion = (
  index: number,
  question: OptionsQuestionProps
) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const answer: AnswerProps = useSelector(
    (state: RootState) => state.answer.answers[index]
  );

  const selectedItem =
    question.type === 'dropdown' && typeof answer?.answer === 'number'
      ? question.content[answer.answer]
      : '옵션을 선택하세요';

  useEffect(() => {
    if (isOpen && question.type === 'dropdown') {
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
  }, [isOpen, question.type]);

  const handleCloseDropdown = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    setIsOpen,
    containerRef,
    selectedItem,
    handleCloseDropdown,
  };
};
