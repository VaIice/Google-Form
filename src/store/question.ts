import { QuestionProps, QuestionsProps } from '@/types/question';
import { INITIAL_QUESTION } from '@/utils/question';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: QuestionsProps = {
  questions: [INITIAL_QUESTION],
};

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    addQuestion(state, action: PayloadAction<QuestionProps>) {
      state.questions.push(action.payload);
    },

    removeQuestion(state, action: PayloadAction<number>) {
      state.questions = state.questions.filter(
        (_, index) => index !== action.payload
      );
    },

    updateQuestion(
      state,
      action: PayloadAction<{
        index: number;
        updatedQuestion: QuestionProps;
      }>
    ) {
      const { index, updatedQuestion } = action.payload;
      state.questions[index] = updatedQuestion;
    },

    duplicateQuestion(state, action: PayloadAction<number>) {
      const questionToDuplicate = state.questions[action.payload];
      if (questionToDuplicate) {
        state.questions.splice(action.payload + 1, 0, {
          ...questionToDuplicate,
        });
      }
    },
  },
});

export const {
  addQuestion,
  removeQuestion,
  updateQuestion,
  duplicateQuestion,
} = questionSlice.actions;

export default questionSlice.reducer;
