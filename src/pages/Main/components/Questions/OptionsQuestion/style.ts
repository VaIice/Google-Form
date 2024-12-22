import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px;
  border-radius: 4px;
  margin: 24px;
  padding-bottom: 24px;
  background-color: white;

  .grab {
    cursor: 'grab';
    height: 18px;
    margin-bottom: 6px;
    color: gray;
  }

  .header {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    padding: 0px 24px;

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
  }
`;
