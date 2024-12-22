import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAnswer } from '@/store/answer';
import { RootState } from '@/store/store';
import { TextQuestionProps } from '@/types/question';

export const useTextQuestion = (index: number, question: TextQuestionProps) => {
  const { type, title, required } = question;
  const dispatch = useDispatch();
  const answer = useSelector((state: RootState) => state.answer.answers[index]);
  const answerRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = (element: HTMLTextAreaElement) => {
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateAnswer({
        index,
        answer: {
          type,
          answer: e.target.value,
        },
      })
    );
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(
      updateAnswer({
        index,
        answer: {
          type,
          answer: e.target.value,
        },
      })
    );
    if (answerRef.current) {
      adjustHeight(answerRef.current);
    }
  };

  useEffect(() => {
    if (answerRef.current) {
      adjustHeight(answerRef.current);
    }
  }, [answer?.answer]);

  return {
    type,
    title,
    required,
    answer,
    answerRef,
    handleInputChange,
    handleTextAreaChange,
  };
};
