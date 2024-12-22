import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateQuestion } from '@/store/question';

interface Question {
  type: string;
  title: string;
  content?: string[];
  required: boolean;
}

export const useQuestion = (index: number, initialQuestion: Question) => {
  const dispatch = useDispatch();
  const [type, setType] = useState(initialQuestion.type);
  const [title, setTitle] = useState(initialQuestion.title);
  const [content, setContent] = useState(initialQuestion.content);
  const [required, setRequired] = useState(initialQuestion.required);

  useEffect(() => {
    setType(initialQuestion.type);
  }, [initialQuestion.type]);

  useEffect(() => {
    setTitle(initialQuestion.title);
  }, [initialQuestion.title]);

  useEffect(() => {
    setContent(initialQuestion.content);
  }, [initialQuestion.content]);

  useEffect(() => {
    setRequired(initialQuestion.required);
  }, [initialQuestion.required]);

  useEffect(() => {
    dispatch(
      updateQuestion({
        index,
        updatedQuestion: {
          type,
          title,
          content,
          required,
        },
      })
    );
  }, [type, title, content, required, index, dispatch]);

  const onDragEnd = (result: any) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.index !== destination.index) {
      const updatedContent = Array.from(content);
      const [removed] = updatedContent.splice(source.index, 1);
      updatedContent.splice(destination.index, 0, removed);

      setContent(updatedContent);
    }
  };

  return {
    type,
    title,
    content,
    required,
    setType,
    setTitle,
    setContent,
    setRequired,
    onDragEnd,
  };
};
