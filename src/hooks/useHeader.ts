import { useDispatch } from 'react-redux';
import { updateHeader } from '@/store/header';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useRef, useEffect } from 'react';

export const useHeader = () => {
  const dispatch = useDispatch();
  const { title, content } = useSelector((state: RootState) => state.header);

  const titleRef = useRef<HTMLTextAreaElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateHeader({ field: 'title', value: e.target.value }));
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateHeader({ field: 'content', value: e.target.value }));
  };

  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    target.style.height = 'auto';
    target.style.height = `${target.scrollHeight}px`;
  };

  const adjustHeight = (element: HTMLTextAreaElement) => {
    if (element) {
      element.style.height = 'auto';
      element.style.height = `${element.scrollHeight}px`;
    }
  };

  useEffect(() => {
    if (titleRef.current) {
      adjustHeight(titleRef.current);
    }
    if (contentRef.current) {
      adjustHeight(contentRef.current);
    }
  }, [title, content]);

  return {
    title,
    content,
    handleTitleChange,
    handleContentChange,
    handleInput,
    titleRef,
    contentRef,
  };
};
