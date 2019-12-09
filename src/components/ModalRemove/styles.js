import styled from 'styled-components';

export const RemoveContainerModal = styled.div`
  & {
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      top: 0;
      bottom: 0;
      background: rgba(23, 12, 58, 0.7);
      opacity: 1;
  }
`;

export const RemoveModalBox = styled.div`
  width: 600px;
  height: 200px;
  padding: 20px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 25px #0000001A;
  border-radius: 5px;
  opacity: 1;

  div:first-child {
    display: flex;
    justify-content: space-between;

    button {
      background: none;
      font-size: 25px;
      color: #8F8A9B;
      border: 0;
      cursor: pointer;
    }
  }
`

export const RemoveModalTitle = styled.div`
  display: flex;
  align-items: center;
`

export const RemoveModalDescription = styled.div`
  margin: 20px 0;
`

export const RemoveButtons = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    width: 122px;
    height: 50px;
    margin-top: 10px;
    color: white;
    border-radius: 5px;
    opacity: 1;
    cursor: pointer;
  }

  button:first-child {
    background: #365DF0 0% 0% no-repeat padding-box;
    margin-right: 10px;
  }

  button:nth-child(2) {
    background: #F95E5A 0% 0% no-repeat padding-box;
  }
`
