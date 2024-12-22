import { OptionWrapper } from '@/pages/Main/components/Option/style';
import { Circle, GripVertical, Square, TriangleAlert, X } from 'lucide-react';

interface OptionProps {
  idx: number;
  item: string;
  content?: string[];
  type: string;
  onChange?: (value: string) => void;
  onRemove?: () => void;
  onClick?: () => void;
  isAddOption?: boolean;
  dragHandleProps?: any;
}

export const Option = ({
  idx,
  item,
  content,
  type,
  onChange,
  onRemove,
  onClick,
  isAddOption,
  dragHandleProps,
}: OptionProps) => {
  const isDuplicate = content?.filter((option) => option === item).length > 1;
  const isLastOption = content?.length === 1;

  return (
    <OptionWrapper>
      <div className='iconsWrapper'>
        {!isAddOption && (
          <div className='drag' {...dragHandleProps}>
            <GripVertical color='gray' size={14} />
          </div>
        )}
        {type === 'multiple' && <Circle color='gray' />}
        {type === 'checkbox' && <Square color='gray' />}
      </div>
      {type === 'dropdown' && <span className='idx'>{idx + 1}</span>}
      {isAddOption ? (
        <span className='addButton' onClick={onClick}>
          옵션 추가
        </span>
      ) : (
        <>
          <input
            type='text'
            value={item}
            onChange={(e) => onChange?.(e.target.value)}
            placeholder={`옵션 ${idx + 1}`}
          />
          <div className='icons'>
            {isDuplicate && <TriangleAlert className='warn' />}
            {!isLastOption && <X onClick={onRemove} className='remove' />}
          </div>
        </>
      )}
    </OptionWrapper>
  );
};
