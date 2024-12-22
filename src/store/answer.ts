import { AnswerProps, AnswersProps } from '@/types/answer';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: AnswersProps = {
  answers: [],
};

export const answerSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    updateAnswer(
      state,
      action: PayloadAction<{ index: number; answer: AnswerProps }>
    ) {
      const { index, answer } = action.payload;
      state.answers[index] = answer;
    },
    resetAnswer: () => initialState,
  },
});

export const { updateAnswer, resetAnswer } = answerSlice.actions;
export default answerSlice.reducer;
