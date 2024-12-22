import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import {
  addQuestion,
  removeQuestion,
  duplicateQuestion,
  updateQuestion,
} from '@/store/question';
import { INITIAL_QUESTION } from '@/utils/question';
import { useNavigate } from 'react-router-dom';

export const useQuestions = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state: RootState) => state.question.questions);
  const navigate = useNavigate();

  const handleAddQuestion = () => {
    dispatch(addQuestion(INITIAL_QUESTION));
  };

  const handleRemoveQuestion = (index: number) => {
    dispatch(removeQuestion(index));
  };

  const handleDuplicateQuestion = (index: number) => {
    dispatch(duplicateQuestion(index));
  };

  const handleReorderQuestions = (startIndex: number, endIndex: number) => {
    const reorderedQuestions = Array.from(questions);
    const [movedQuestion] = reorderedQuestions.splice(startIndex, 1);
    reorderedQuestions.splice(endIndex, 0, movedQuestion);
    reorderedQuestions.forEach((question, idx) => {
      dispatch(updateQuestion({ index: idx, updatedQuestion: question }));
    });
  };

  const onDragEnd = (result: any) => {
    const { destination, source } = result;

    if (!destination) return;

    if (destination.index === source.index) return;

    handleReorderQuestions(source.index, destination.index);
  };

  const goToPreview = () => {
    navigate('/preview');
    window.scrollTo(0, 0);
  };

  const goToMain = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return {
    questions,
    handleAddQuestion,
    handleRemoveQuestion,
    handleDuplicateQuestion,
    onDragEnd,
    goToPreview,
    goToMain,
  };
};
