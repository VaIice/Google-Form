import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px;
  border-radius: 4px;
  margin: 24px;
  padding: 28px 24px 24px 24px;

  border-radius: 8px;
  position: relative;
  background-color: white;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 10px;
    background: linear-gradient(to right, #ff4b4b, #ff6b8b, #7b78ff);
    border-radius: 7px 7px 0 0;
  }

  > textarea {
    width: 100%;
    resize: none;
    display: block;
    font-family: inherit;
    line-height: inherit;
    overflow: hidden;

    &::placeholder {
      color: ${(props) => props.theme.colors.border};
    }

    &:focus {
      outline: none;
      border-color: #7b78ff;
    }
  }

  > .title {
    font-size: 24px;
    margin-bottom: 14px;
  }

  > .content {
    font-size: 11pt;
  }
`;
