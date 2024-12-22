import {
  ModalWrapper,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@/pages/Preview/components/Modal/style';
import { ModalProps } from '@/types/answer';

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  answers,
  questions,
}) => {
  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <ModalContent>
        <ModalHeader>
          <h1>제출한 답변</h1>
        </ModalHeader>
        <ModalBody>
          <div>
            {questions.map((question, idx) => {
              const answerItem = answers[idx];
              const answer = answerItem?.answer;
              return (
                <div key={idx} className='section'>
                  <strong>질문: {question.title} </strong>
                  {question.required && (
                    <span className='required'>&nbsp;*</span>
                  )}
                  <div>
                    <span>내 답변: </span>
                    {question.type === 'multiple' ? (
                      Array.isArray(answer) && answer.length > 0 ? (
                        <span className='array'>
                          {answer
                            .map((index) => question.content[index])
                            .filter((item) => item !== undefined)
                            .join(', ')}{' '}
                        </span>
                      ) : (
                        <span>답변 없음</span>
                      )
                    ) : question.type === 'dropdown' ||
                      question.type === 'checkbox' ? (
                      typeof answer === 'number' ? (
                        <span>{question.content[answer]}</span>
                      ) : (
                        <span>답변 없음</span>
                      )
                    ) : (
                      <span>{answer}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </ModalBody>
        <ModalFooter>
          <button onClick={onClose}>확인</button>
        </ModalFooter>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
