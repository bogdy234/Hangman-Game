import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-auto-flow: column dense; /* column flow with "dense" to fill all the cells */
    grid-template-rows: repeat(3, 100px);
    grid-auto-columns: 100px;
    place-items: center;
    @media (max-width: 980px) {
        grid-template-rows: repeat(4, 80px);
        grid-auto-columns: auto;
    }

    @media (max-width: 810px) {
        grid-template-rows: repeat(6, 80px);
    }

    @media (max-width: 565px) {
        grid-template-rows: repeat(7, 80px);
    }
`;
