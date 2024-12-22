import { Short } from '@/pages/Preview/components/Questions/TextQuestion/Short';
import { Long } from '@/pages/Preview/components/Questions/TextQuestion/Long';
import { QuestionProps } from '@/types/question';
import { OptionsQuestionProps, TextQuestionProps } from '@/types/answer';
import { Dropdown } from '@/pages/Preview/components/Questions/OptionsQuestion/Dropdown';
import { Multiple } from '@/pages/Preview/components/Questions/OptionsQuestion/Multiple';
import { Checkbox } from '@/pages/Preview/components/Questions/OptionsQuestion/Checkbox';

interface QuestionRendererProps {
  question: QuestionProps;
  index: number;
}

export const QuestionRenderer = ({
  index,
  question,
}: QuestionRendererProps) => {
  const commonProps = {
    index,
    question,
  };

  const optionsProps = {
    ...commonProps,
    question: question as OptionsQuestionProps,
  };

  const textProps = {
    ...commonProps,
    question: question as TextQuestionProps,
  };

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
};
