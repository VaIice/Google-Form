import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 200px;

  > div {
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    padding: 10px 16px;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
  }

  > ul {
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    z-index: 10;
    overflow: hidden;

    > li {
      padding: 10px 16px;
      font-size: 16px;
      color: #495057;
      cursor: pointer;

      &:hover {
        background-color: #f1f3f5;
      }
    }
  }
`;

export const Arrow = styled.span<{ isOpen: boolean }>`
  font-size: 15px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
`;
