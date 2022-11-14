import styled from "styled-components";
import { ButtonProps } from "./props";

export const ButtonContainer = styled.button<ButtonProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) => props.backgroundColor};
    border-radius: 8px;
    border: none;
    font-family: inherit;
    font-size: 16px;
    color: ${(props) => props.textColor};
    &:hover {
        font-size: 20px;
        transition: font-size 0.3s;
    }
`;

const S = {
    ButtonContainer,
};

export default S;
