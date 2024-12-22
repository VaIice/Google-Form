export interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  type: string;
  setType?: React.Dispatch<React.SetStateAction<string>>;
  content?: string[];
  selectedItem?: string;
  onSelect?: (index: number) => void;
  index?: number;
  required?: boolean;
  title?: string;
}

export interface ToggleProps {
  required: boolean;
  setRequired: (value: boolean) => void;
  label?: string;
}
