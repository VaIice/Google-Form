import { TextQuestion } from '@/pages/Preview/components/Questions/TextQuestion';
import { TextProps } from '@/types/answer';

export const Short = (props: TextProps) => {
  return <TextQuestion {...props} />;
};
