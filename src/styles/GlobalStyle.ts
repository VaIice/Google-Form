import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle` 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  button{
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: inherit;
    font-weight: normal;
    font-size: inherit;
    margin: 0;
  }
  html {
    font-size: 10px;
  }
  input {
    border: none;
    &:placeholder {
      color: #70757a;
    }
    &:focus {
      outline: none;
    }
  }
  textarea {
    border: none !important;
    resize: none !important; 
    outline: none !important;
  }
`;

export default GlobalStyles;