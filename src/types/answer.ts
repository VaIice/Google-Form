export type TextAnswerProps = string;
export type OptionsAnswerProps = number | number[];

export interface AnswerProps {
  type: string;
  answer: TextAnswerProps | OptionsAnswerProps;
}

export interface AnswersProps {
  answers: AnswerProps[];
}

export interface BaseQuestionProps {
  title: string;
  required: boolean;
}

export interface OptionsQuestionProps extends BaseQuestionProps {
  type: 'dropdown' | 'multiple' | 'checkbox';
  content: string[];
}

export interface TextQuestionProps extends BaseQuestionProps {
  type: 'short' | 'long';
}

export type QuestionProps = OptionsQuestionProps | TextQuestionProps;

interface CommonQuestionProps {
  index: number;
}

export interface OptionsProps extends CommonQuestionProps {
  question: OptionsQuestionProps;
}

export interface TextProps extends CommonQuestionProps {
  question: TextQuestionProps;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  answers: AnswerProps[];
  questions: QuestionProps[];
}
