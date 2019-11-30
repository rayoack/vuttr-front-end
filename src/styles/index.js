import 'react-toastify/dist/ReactToastify.css';
import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
    }
    
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap');
    
  html,
  body,
  #root {
    height: 100vh;
    width: 100vw;
  }

  body {
    text-rendering: optimizeLegibility !important;
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
    background: #fff;
    color: #170C3A;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.4px;
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: 600;
  }

  h1 {
    font-size: 42px;
    letter-spacing: 0.84px;
  }
  
  h2 {
    font-size: 36px;
    letter-spacing: 0.72px;
  }

  h3 {
    font-size: 30px;
    letter-spacing: 0.6px;
  }

  h4 {
    font-size: 26px;
    letter-spacing: 0.52px;
  }

  input {
    background: #F5F4F6 0% 0% no-repeat padding-box;
    border: 1px solid #EBEAED;
    border-radius: 5px;
    opacity: 1;
  }
`;