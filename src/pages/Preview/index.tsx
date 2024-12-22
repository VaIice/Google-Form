import { useQuestions } from '@/hooks/useQuestions';
import { useDispatch } from 'react-redux';
import { resetAnswer } from '@/store/answer';
import { QuestionRenderer } from '@/pages/Preview/components/Questions/QuestionRenderer';
import { Container } from '@/pages/Preview/style';
import { Header } from '@/pages/Preview/components/Header';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Modal from '@/pages/Preview/components/Modal';
import { FileQuestion } from 'lucide-react';

export default function Preview() {
  const { questions, goToMain } = useQuestions();
  const dispatch = useDispatch();
  const answers = useSelector((state: RootState) => state.answer.answers);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = () => {
    const missingAnswers = questions.filter((question, index) => {
      return question.required && !answers[index];
    });

    if (missingAnswers.length > 0) {
      alert('모든 필수 설문에 답변을 해주세요.');
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <Container>
      <button className='eye' onClick={goToMain}>
        <FileQuestion />
      </button>
      <Header />
      {questions.map((question, index) => (
        <QuestionRenderer key={index} index={index} question={question} />
      ))}
      <div className='lowerWrapper'>
        <button onClick={handleSubmit}>제출</button>
        <button onClick={() => dispatch(resetAnswer())}>양식 지우기</button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        answers={answers}
        questions={questions}
      />
    </Container>
  );
}
