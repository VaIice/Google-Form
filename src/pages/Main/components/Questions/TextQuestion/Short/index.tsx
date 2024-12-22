import { TextQuestion } from '@/pages/Main/components/Questions/TextQuestion';
import { TextProps } from '@/types/question';

export const Short = (props: TextProps) => {
  return <TextQuestion {...props} />;
};
