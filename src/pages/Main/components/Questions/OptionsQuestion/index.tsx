import { Select } from '@/pages/Main/components/Select';
import { useQuestion } from '@/hooks/useQuestion';
import { Wrapper } from '@/pages/Main/components/Questions/OptionsQuestion/style';
import { OptionsProps } from '@/types/question';
import { Option } from '@/pages/Main/components/Option';
import { Action } from '@/pages/Main/components/Action';
import { GripHorizontal } from 'lucide-react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export const OptionsQuestion = ({
  index,
  question,
  onRemove,
  onDuplicate,
  dragHandleProps,
}: OptionsProps) => {
  const {
    type,
    title,
    content,
    required,
    setType,
    setTitle,
    setContent,
    setRequired,
    onDragEnd,
  } = useQuestion(index, question);

  return (
    <Wrapper>
      <div className='grab' {...dragHandleProps}>
        <GripHorizontal size={14} />
      </div>
      <div className='header'>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='제목'
        />
        <Select type={type} setType={setType} />
      </div>
      <div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId={`droppable-${index}`}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {content.map((item, idx) => (
                  <Draggable
                    key={idx}
                    draggableId={`draggable-${idx}`}
                    index={idx}
                  >
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps}>
                        <Option
                          idx={idx}
                          item={item}
                          onChange={(value) => {
                            const updatedContent = content.map(
                              (option, index) =>
                                index === idx ? value : option
                            );
                            setContent(updatedContent);
                          }}
                          onRemove={() => {
                            const updatedContent = content.filter(
                              (_, index) => index !== idx
                            );
                            setContent(updatedContent);
                          }}
                          type={type}
                          content={content}
                          dragHandleProps={provided.dragHandleProps}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <Option
          idx={content.length}
          item='옵션 추가'
          onClick={() => setContent([...content, `옵션 ${content.length + 1}`])}
          isAddOption={true}
          type={type}
        />
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
