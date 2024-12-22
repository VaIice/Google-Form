import { Option } from '@/pages/Preview/components/Option';
import { Wrapper } from '@/pages/Preview/components/Questions/OptionsQuestion/style';
import { Container, Arrow } from '@/pages/Main/components/Select/style';
import { OptionsProps } from '@/types/answer';
import { useOptionsQuestion } from '@/hooks/useOptionsQuestion';

export const OptionsQuestion = ({ index, question }: OptionsProps) => {
  const { isOpen, setIsOpen, containerRef, selectedItem, handleCloseDropdown } =
    useOptionsQuestion(index, question);

  return (
    <Wrapper>
      <div className='header'>
        {question.title}
        {question.required && <span className='required'>&nbsp;*</span>}
      </div>
      <div>
        {question.type === 'dropdown' ? (
          <Container ref={containerRef}>
            <div onClick={() => setIsOpen((prev) => !prev)}>
              {selectedItem}
              <Arrow isOpen={isOpen}>▼</Arrow>
            </div>
            {isOpen && (
              <ul>
                {question.content.map((item, idx) => (
                  <Option
                    key={idx}
                    index={index}
                    idx={idx}
                    item={item}
                    type={question.type}
                    onSelect={handleCloseDropdown}
                  />
                ))}
              </ul>
            )}
          </Container>
        ) : (
          question.content.map((item, idx) => (
            <Option
              key={idx}
              index={index}
              idx={idx}
              item={item}
              type={question.type}
            />
          ))
        )}
      </div>
    </Wrapper>
  );
};
