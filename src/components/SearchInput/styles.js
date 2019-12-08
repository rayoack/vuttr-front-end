import styled from 'styled-components';
import check from '../../assets/check.svg'

export const FormContainer = styled.form`
  & {
    margin: 40px 0 20px;
    display: flex;
    align-items: center;
  }

  input[type=text] {
    color: #B1ADB9;
    height: 50px;
    width: 403px;
    font-size: 20px;
    padding: 12px 22px;
  }

  input[type=checkbox] {
    display: none;
  }

  input[type=checkbox] + label {
    width: 30px;
    height: 30px;
    background: #F5F4F6 0% 0% no-repeat padding-box;
    border: 1px solid #DEDCE1;
    opacity: 1;
    margin: 0 10px 0;
  }

  input[type=checkbox]:checked + label {
    background-image: url(${check});
    background-color: #365DF0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    border: 1px solid #365DF0;
    opacity: 1;
  }
`;
