import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px;
  border-radius: 4px;
  margin: 24px;
  padding: 24px;
  text-align: left;
  background-color: white;

  .header {
    display: flex;
    margin-bottom: 16px;
    font-size: 12pt;
  }

  > textarea {
    width: 100%;
    resize: none;
    display: block;
    font-family: inherit;
    line-height: inherit;
    overflow: hidden;
    border-bottom: 1px solid #ddd !important;
    margin-top: 2px;
    padding-bottom: 6px;

    &::placeholder {
      color: ${(props) => props.theme.colors.border};
    }

    &:focus {
      outline: none;
      border-color: #7b78ff;
    }
  }

  > input {
    margin-top: 2px;
    width: 150px;
    padding-bottom: 6px;
    border-bottom: 1px solid #ddd;
    margin-right: auto;
    &:hover {
      border-bottom: 1px solid #000;
    }

    &::placeholder {
      color: ${(props) => props.theme.colors.border};
    }
  }

  .required {
    color: #d93025;
    font-size: 12pt;
  }
`;
