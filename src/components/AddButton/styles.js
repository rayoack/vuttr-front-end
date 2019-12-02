import styled from 'styled-components';

export const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 174px;
    height: 50px;
    border: 0;

    background: #0DCB7D 0% 0% no-repeat padding-box;
    border-radius: 5px;
    opacity: 1;
    cursor: pointer;

    span {
        font-size: 30px;
        font-weight: 600;
        color: #fff;
        opacity: 1;
        margin-right: 5px;
    }

    p {
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 0.36px;
        color: #fff;
        opacity: 1;
    }
`;
