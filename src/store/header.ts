import { HeaderProps } from '@/types/header';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: HeaderProps = {
  title: '제목 없는 설문지',
  content: '',
};

const header = createSlice({
  name: 'header',
  initialState,
  reducers: {
    updateHeader(
      state,
      action: PayloadAction<{ field: keyof HeaderProps; value: string }>
    ) {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

export const { updateHeader } = header.actions;
export default header.reducer;
