import styled from 'styled-components';

export const ContainerModal = styled.div`
    & {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100vw;
        top: 0;
        bottom: 0;
        background: rgba(23, 12, 58, 0.7);
        opacity: 1;
    }
`;

export const ModalBox = styled.div`
    & {
        width: 570px;
        height: 616px;
        padding: 20px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 20px 25px #0000001A;
        opacity: 1;
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            background: none;
            font-size: 25px;
            color: #8F8A9B;
            border: 0;
            cursor: pointer;
        }
    }
`

export const ModalTitle = styled.div`
    & {
        display: flex;
        align-items: center;
    }

    span {
        font-size: 30px;
        font-weight: 600;
        opacity: 1;
        margin-right: 5px;
    }
`

export const LogoIcon = styled.div`
    & {
        display: flex;
        align-items: center !important;
        justify-content: center !important;
        width: 100%;
        height: 80px;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 75px;
        height: 75px;
        background: #365DF0 0% 0% no-repeat padding-box;
        box-shadow: 0px 20px 25px #0000001A;
        border-radius: 50px;
        opacity: 1;

        font-size: 60px;
        font-weight: 900;
        color: white;
    }
`

export const InputsContainer = styled.form`
    & {
        display: flex;
        flex-direction: column;
        width: 375px;
        margin: 0 auto;
    }

    label {
        margin-bottom: 10px;
    }

    input {
        height: 50px;
        font-size: 15px;
        padding: 10px;
        margin-bottom: 10px;
    }

    textarea {
        height: 60px;
        background: #F5F4F6 0% 0% no-repeat padding-box;
        border: 1px solid #EBEAED;
        border-radius: 5px;
        font-size: 15px;
        padding: 5px 10px 0;
        resize: none;
        margin-bottom: 10px;
    }

    input[type=submit] {
        width: 122px;
        height: 50px;
        margin-top: 10px;
        margin-left: auto;
        color: white;
        background: #365DF0 0% 0% no-repeat padding-box;
        border-radius: 5px;
        opacity: 1;
        cursor: pointer;
    }
`