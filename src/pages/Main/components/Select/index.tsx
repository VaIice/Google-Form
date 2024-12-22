import { QUESTION_TYPES } from '@/types/question';
import { Arrow, Container } from './style';
import { useSelect } from '@/hooks/useSelect';

interface SelectProps {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

export const Select = ({ type, setType }: SelectProps) => {
  const { isOpen, setIsOpen, containerRef, handleOptionClick } =
    useSelect(setType);
  const selectedOption = QUESTION_TYPES.find((option) => option.value === type);

  return (
    <Container ref={containerRef}>
      <div onClick={() => setIsOpen((prev) => !prev)}>
        {selectedOption?.label}
        <Arrow isOpen={isOpen}>▼</Arrow>
      </div>
      {isOpen && (
        <ul>
          {QUESTION_TYPES.map(({ value, label }) => (
            <li key={value} onClick={() => handleOptionClick(value)}>
              {label}
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};
