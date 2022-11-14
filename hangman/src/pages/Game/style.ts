import styled from "styled-components";
import { LetterProps, LineLetterContainerProps } from "./props";

export const GameContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: url(${"/background.jpg"}) no-repeat center;
    color: #03e6ff;
    padding-top: 100px;
    padding-bottom: 100px;
`;

export const Line = styled.div`
    width: 50px;
    height: 4px;
    background: #4b7c85;
`;

export const Letter = styled.div<LetterProps>`
    text-align: center;
    font-size: 40px;
    height: 40px;
    user-select: none;
    visibility: ${({ letterGuessed }) =>
        letterGuessed ? "visible" : "hidden"};
    text-transform: uppercase;
`;

export const LineLetterContainer = styled.div<LineLetterContainerProps>`
    margin-left: 10px;
    visibility: ${({ isSpace }) => (isSpace ? "hidden" : "visible")};
`;

export const LivesContainer = styled.div`
    position: absolute;
    left: 20px;
    top: 20px;
    color: #03e6ff;
`;

export const GameContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
`;

export const LettersContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const QuitContainer = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
`;

export default {
    GameContainer,
    Line,
    Letter,
    LineLetterContainer,
    LivesContainer,
    GameContentContainer,
    QuitContainer,
};
