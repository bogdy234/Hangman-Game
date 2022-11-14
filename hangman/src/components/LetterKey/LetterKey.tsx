import { FC, ReactElement } from "react";
import { LetterKeyProps } from "./props";
import { Container } from "./style";

const LetterKey: FC<LetterKeyProps> = ({
    letter,
    onClickLetter,
    letterGuessed,
}): ReactElement => {
    return (
        <Container
            onClick={() => onClickLetter(letter)}
            letterGuessed={letterGuessed}
        >
            {letter}
        </Container>
    );
};

export default LetterKey;
