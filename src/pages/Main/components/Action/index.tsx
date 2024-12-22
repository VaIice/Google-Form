import { ActionWrapper } from '@/pages/Main/components/Action/style';
import { Toggle } from '@/pages/Main/components/Toggle';
import { Trash2, Files } from 'lucide-react';

interface ActionProps {
  onRemove: () => void;
  onDuplicate: (index: number) => void;
  index: number;
  required: boolean;
  setRequired: (value: boolean) => void;
}

export const Action = ({
  onRemove,
  onDuplicate,
  index,
  required,
  setRequired,
}: ActionProps) => (
  <ActionWrapper>
    <div>
      <Files onClick={() => onDuplicate(index)} />
      <Trash2 onClick={onRemove} />
      <Toggle required={required} setRequired={setRequired} label='필수' />
    </div>
  </ActionWrapper>
);
