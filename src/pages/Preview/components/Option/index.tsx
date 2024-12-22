import { useAnswer } from '@/hooks/useAnswer';
import { OptionWrapper } from '@/pages/Preview/components/Option/style';
import { Circle, CircleCheck, Square, SquareCheck } from 'lucide-react';

interface OptionProps {
  index: number;
  idx: number;
  item: string;
  type: string;
  onSelect?: () => void;
}

export const Option = ({ index, idx, item, type, onSelect }: OptionProps) => {
  const { isSelected, handleClick } = useAnswer(index, idx, type);

  const onClick = () => {
    handleClick();
    onSelect?.();
  };

  return (
    <OptionWrapper className={type === 'dropdown' && 'hover'} onClick={onClick}>
      <div>
        {type === 'multiple' &&
          (isSelected ? (
            <CircleCheck color='#7b78ff' />
          ) : (
            <Circle color='gray' />
          ))}
        {type === 'checkbox' &&
          (isSelected ? (
            <SquareCheck color='#7b78ff' />
          ) : (
            <Square color='gray' />
          ))}
      </div>
      <div className={`item ${type === 'dropdown' && 'hover'}`}>{item}</div>
    </OptionWrapper>
  );
};
