import styled from "styled-components";

export const Container = styled.div``;

const lineWidth = 120;
const lineHeight = 6;

export const Line = styled.div`
    width: ${lineWidth}px;
    height: ${lineHeight}px;
    background-color: black;
`;

export const BottomLine = styled(Line)`
    position: relative;
`;

export const TopLine = styled(Line)`
    position: absolute;
    bottom: ${lineWidth}px;
    left: ${lineWidth / 2 - 3}px;
`;

export const VerticalLine = styled(Line)`
    width: ${lineWidth}px;
    height: ${lineHeight}px;
    background-color: black;
    position: absolute;
    bottom: ${lineWidth / 2}px;
    rotate: 90deg;
`;

export const ShortLine = styled(Line)`
    width: ${lineWidth / 2}px;
    position: absolute;
    bottom: ${lineWidth + 3}px;
    left: ${(3 / 2) * lineWidth}px;
    transform-origin: left;
    rotate: 90deg;
`;

export default { Container };
