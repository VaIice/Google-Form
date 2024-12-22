import { OptionsQuestion } from '@/pages/Preview/components/Questions/OptionsQuestion';
import { OptionsProps } from '@/types/answer';

export const Checkbox = (props: OptionsProps) => {
  return <OptionsQuestion {...props} />;
};
