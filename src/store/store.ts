import { configureStore } from '@reduxjs/toolkit';
import headerReducer from '@/store/header';
import questionReducer from '@/store/question';
import answerReducer from '@/store/answer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const headerPersistConfig = {
  key: 'header',
  storage,
};

const questionPersistConfig = {
  key: 'question',
  storage,
};

const persistedHeaderReducer = persistReducer(
  headerPersistConfig,
  headerReducer
);

const persistedQuestionReducer = persistReducer(
  questionPersistConfig,
  questionReducer
);

const store = configureStore({
  reducer: {
    header: persistedHeaderReducer,
    question: persistedQuestionReducer,
    answer: answerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export default store;
