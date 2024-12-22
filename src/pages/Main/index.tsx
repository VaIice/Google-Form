import { useQuestions } from '@/hooks/useQuestions';
import { Eye, Plus } from 'lucide-react';
import { Container } from './style';
import { Header } from '@/pages/Main/components/Header';
import { QuestionRenderer } from '@/pages/Main/components/Questions/QuestionRenderer';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default function Main() {
  const {
    questions,
    handleAddQuestion,
    handleRemoveQuestion,
    handleDuplicateQuestion,
    onDragEnd,
    goToPreview,
  } = useQuestions();

  return (
    <Container>
      <Header />
      <button className='eye' onClick={goToPreview}>
        <Eye />
      </button>
      <button className='addButton' onClick={handleAddQuestion}>
        <Plus />
      </button>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='questions' type='list'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {questions.map((question, index) => (
                <Draggable
                  key={index}
                  draggableId={String(index)}
                  index={index}
                >
                  {(provided) => (
                    <QuestionRenderer
                      question={question}
                      index={index}
                      onRemove={() => handleRemoveQuestion(index)}
                      onDuplicate={handleDuplicateQuestion}
                      provided={provided}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
}
