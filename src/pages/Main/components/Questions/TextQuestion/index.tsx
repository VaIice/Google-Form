import { Select } from '@/pages/Main/components/Select';
import { useQuestion } from '@/hooks/useQuestion';
import {
  Answer,
  Wrapper,
} from '@/pages/Main/components/Questions/TextQuestion/style';
import { TextProps } from '@/types/question';
import { Action } from '@/pages/Main/components/Action';
import { GripHorizontal } from 'lucide-react';

export const TextQuestion = ({
  index,
  question,
  onRemove,
  onDuplicate,
  dragHandleProps,
}: TextProps) => {
  const { type, title, required, setType, setTitle, setRequired } = useQuestion(
    index,
    question
  );

  return (
    <Wrapper>
      <div className='grab' {...dragHandleProps}>
        <GripHorizontal size={14} />
      </div>
      <div className='header'>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='질문'
        />
        <Select type={type} setType={setType} />
      </div>
      <div>
        <Answer>
          <span>{type === 'short' ? '단답형 텍스트' : '장문형 텍스트'}</span>
        </Answer>
        <Action
          onRemove={onRemove}
          onDuplicate={onDuplicate}
          index={index}
          required={required}
          setRequired={setRequired}
        />
      </div>
    </Wrapper>
  );
};
