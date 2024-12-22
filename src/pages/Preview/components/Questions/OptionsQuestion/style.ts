import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px;
  border-radius: 4px;
  margin: 24px;
  padding: 24px;
  background-color: white;

  .header {
    display: flex;
    margin-bottom: 16px;
    font-size: 12pt;
  }

  .required {
    color: #d93025;
    font-size: 12pt;
  }

  > input {
    height: 56px;
    padding: 16px 16px;
    background-color: #f1f3f4;
    border-bottom: 1px solid #0e1227;
    width: 100%;
    margin-right: 16px;

    &::placeholder {
      color: #ccc;
    }
    &:hover {
      background-color: #eee;
      border-bottom: 1px solid #7b78ff;
    }
  }
`;
