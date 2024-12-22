import { Wrapper } from '@/pages/Preview/components/Header/style';
import { useHeader } from '@/hooks/useHeader';

export const Header = () => {
  const { title, content } = useHeader();

  return (
    <Wrapper>
      <div className='title'>{title}</div>
      <div className='content'>{content}</div>
      <div className='required'>* 표시는 필수 질문임</div>
    </Wrapper>
  );
};
