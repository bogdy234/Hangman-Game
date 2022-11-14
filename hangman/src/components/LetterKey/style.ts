import styled from "styled-components";
import { ContainerProps } from "./props";

export const Container = styled.div<ContainerProps>`
    width: 80px;
    height: 80px;
    background: #4b7c85;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    border-radius: 10px;
    color: #03e6ff;

    cursor: ${({ letterGuessed }) => (letterGuessed ? "default" : "pointer")};
    opacity: ${({ letterGuessed }) => (letterGuessed ? 0.5 : 1)};

    @media (max-width: 980px) {
        width: 60px;
        height: 60px;
    }
`;

export default { Container };
