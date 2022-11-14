import styled from "styled-components";

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background: url(${"/background.jpg"}) no-repeat center;
    color: white;
`;

const NumberPlayersContainer = styled.div`
    display: flex;
    gap: 30px;
    padding-bottom: 20px;
`;

const StyledInput = styled.input`
    font-family: inherit;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid #000;
    height: 30px;
    background: transparent;
    color: white;
    outline: none;
    padding-left: 10px;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    animation-name: fade-in;
    text-align: center;
    -webkit-animation-name: fade-in;
    -webkit-animation-duration: 1s;
    -webkit-animation-iteration-count: 1;
`;

const StartGameButtonContainer = styled.div`
    padding-top: 150px;
`;

const StyledOnePlayerText = styled.div`
    text-align: center;
    -webkit-animation-name: fade-in;
    -webkit-animation-duration: 1s;
    -webkit-animation-iteration-count: 1;
`;

const S = {
    StyledOnePlayerText,
    StartGameButtonContainer,
    InputContainer,
    StyledInput,
    NumberPlayersContainer,
    PageContainer,
};

export default S;
