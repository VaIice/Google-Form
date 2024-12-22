import styled from 'styled-components';

const Container = styled.div`
  width: 768px;
  position: relative;

  .eye {
    position: fixed;
    top: auto;
    bottom: 20px;
    right: 20px;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #7b78ff;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.2s ease;
    outline: none;
    z-index: 9999;
    &:hover {
      background-color: #5000d6;
    }
  }

  .lowerWrapper {
    margin: 0px 24px;
    display: flex;
    justify-content: space-between;
    font-size: 12pt;

    > button:first-of-type {
      padding: 8px 16px;
      border-radius: 4px;
      background-color: #7b78ff;
      color: white;

      &:hover {
        background-color: #5e59ff;
      }
    }

    > button:last-of-type {
      color: #7b78ff;

      &:hover {
        color: #5e59ff;
      }
    }
  }
`;

export { Container };
