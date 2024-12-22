import {
  Circle,
  ToggleButton,
  ToggleWrapper,
} from '@/pages/Main/components/Toggle/style';
import { ToggleProps } from '@/types/select';

export const Toggle = ({ required, setRequired, label }: ToggleProps) => {
  return (
    <ToggleWrapper>
      <span>{label}</span>
      <ToggleButton
        className={required && 'active'}
        onClick={() => setRequired(!required)}
      >
        <Circle className={required && 'active'} />
      </ToggleButton>
    </ToggleWrapper>
  );
};
