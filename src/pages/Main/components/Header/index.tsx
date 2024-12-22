import { Wrapper } from '@/pages/Main/components/Header/style';
import { useHeader } from '@/hooks/useHeader';

export const Header = () => {
  const {
    title,
    content,
    handleInput,
    handleTitleChange,
    handleContentChange,
    titleRef,
    contentRef,
  } = useHeader();

  return (
    <Wrapper>
      <textarea
        className='title'
        ref={titleRef}
        onInput={handleInput}
        value={title}
        onChange={handleTitleChange}
        placeholder='설문지 제목'
      />
      <textarea
        className='content'
        ref={contentRef}
        onInput={handleInput}
        value={content}
        onChange={handleContentChange}
        placeholder='설문지 설명'
      />
    </Wrapper>
  );
};
