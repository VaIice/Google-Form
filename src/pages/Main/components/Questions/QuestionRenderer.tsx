import { Checkbox } from '@/pages/Main/components/Questions/OptionsQuestion/Checkbox';
import { Dropdown } from '@/pages/Main/components/Questions/OptionsQuestion/Dropdown';
import { Multiple } from '@/pages/Main/components/Questions/OptionsQuestion/Multiple';
import { Long } from '@/pages/Main/components/Questions/TextQuestion/Long';
import { Short } from '@/pages/Main/components/Questions/TextQuestion/Short';
import {
  QuestionProps,
  OptionsQuestionProps,
  TextQuestionProps,
} from '@/types/question';

interface QuestionRendererProps {
  question: QuestionProps;
  index: number;
  onRemove: () => void;
  onDuplicate: (index: number) => void;
  provided: {
    draggableProps: any;
    dragHandleProps: any;
    innerRef: (element: HTMLElement | null) => void;
  };
}

export const QuestionRenderer = ({
  question,
  index,
  onRemove,
  onDuplicate,
  provided,
}: QuestionRendererProps) => {
  const commonProps = {
    index,
    question,
    onRemove,
    onDuplicate,
    dragHandleProps: provided.dragHandleProps,
  };

  const optionsProps = {
    ...commonProps,
    question: question as OptionsQuestionProps,
  };

  const textProps = {
    ...commonProps,
    question: question as TextQuestionProps,
  };

  return (
    <div ref={provided.innerRef} {...provided.draggableProps}>
      {(() => {
        switch (question.type) {
          case 'dropdown':
            return <Dropdown key={index} {...optionsProps} />;
          case 'multiple':
            return <Multiple key={index} {...optionsProps} />;
          case 'checkbox':
            return <Checkbox key={index} {...optionsProps} />;
          case 'short':
            return <Short key={index} {...textProps} />;
          case 'long':
            return <Long key={index} {...textProps} />;
          default:
            return null;
        }
      })()}
    </div>
  );
};
