import { TextQuestion } from '@/pages/Preview/components/Questions/TextQuestion';
import { TextProps } from '@/types/answer';

export const Long = (props: TextProps) => {
  return <TextQuestion {...props} />;
};
