export const QUESTION_TYPES = [
  { value: 'short', label: '단답형' },
  { value: 'long', label: '장문형' },
  { value: 'multiple', label: '객관식 질문' },
  { value: 'checkbox', label: '체크박스' },
  { value: 'dropdown', label: '드롭다운' },
] as const;

export interface BaseQuestionProps {
  type: string;
  title: string;
  required: boolean;
}

export interface OptionsQuestionProps extends BaseQuestionProps {
  content?: string[];
}

export type TextQuestionProps = BaseQuestionProps;

interface CommonQuestionProps {
  index: number;
  onRemove: () => void;
  onDuplicate: (index: number) => void;
  dragHandleProps?: React.HTMLAttributes<HTMLDivElement>;
}

export interface OptionsProps extends CommonQuestionProps {
  question: OptionsQuestionProps;
}

export interface TextProps extends CommonQuestionProps {
  question: TextQuestionProps;
}

export type QuestionProps = OptionsQuestionProps | TextQuestionProps;

export interface QuestionsProps {
  questions: QuestionProps[];
}
