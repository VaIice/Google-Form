import { OptionsQuestion } from '@/pages/Preview/components/Questions/OptionsQuestion';
import { OptionsProps } from '@/types/answer';

export const Multiple = (props: OptionsProps) => {
  return <OptionsQuestion {...props} />;
};
