import { useDispatch, useSelector } from 'react-redux';
import { updateAnswer } from '@/store/answer';
import { RootState } from '@/store/store';

export const useAnswer = (index: number, idx: number, type: string) => {
  const dispatch = useDispatch();
  const answer = useSelector((state: RootState) => state.answer.answers[index]);

  const isSelected = Array.isArray(answer?.answer)
    ? answer?.answer.includes(idx)
    : answer?.answer === idx;

  const handleClick = () => {
    if (type === 'multiple') {
      const currentAnswers = (answer?.answer || []) as number[];
      const newAnswer = currentAnswers.includes(idx)
        ? currentAnswers.filter((i) => i !== idx)
        : [...currentAnswers, idx];

      dispatch(
        updateAnswer({
          index,
          answer: {
            type,
            answer: newAnswer,
          },
        })
      );
    } else {
      dispatch(
        updateAnswer({
          index,
          answer: {
            type,
            answer: idx,
          },
        })
      );
    }
  };

  return { isSelected, handleClick };
};
