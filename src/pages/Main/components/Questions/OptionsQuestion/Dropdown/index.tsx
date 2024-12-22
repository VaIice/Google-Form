import { OptionsQuestion } from '@/pages/Main/components/Questions/OptionsQuestion';
import { OptionsProps } from '@/types/question';

export const Dropdown = (props: OptionsProps) => {
  return <OptionsQuestion {...props} />;
};
