import { useTextQuestion } from '@/hooks/useTextQuestion';
import { Wrapper } from '@/pages/Preview/components/Questions/TextQuestion/style';
import { TextProps } from '@/types/answer';

export const TextQuestion = ({ index, question }: TextProps) => {
  const {
    type,
    title,
    required,
    answer,
    answerRef,
    handleInputChange,
    handleTextAreaChange,
  } = useTextQuestion(index, question);

  return (
    <Wrapper>
      <div className='header'>
        {title}
        {required && <span className='required'>&nbsp;*</span>}
      </div>
      {type === 'short' && (
        <input
          type='text'
          value={(answer?.answer as string) || ''}
          onInput={handleInputChange}
          placeholder='내 답변'
        />
      )}
      {type === 'long' && (
        <textarea
          rows={1}
          ref={answerRef}
          value={(answer?.answer as string) || ''}
          onChange={handleTextAreaChange}
          placeholder='내 답변'
        />
      )}
    </Wrapper>
  );
};
