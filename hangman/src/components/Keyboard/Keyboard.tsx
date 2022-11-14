import { FC, ReactElement } from "react";
import { alphabet } from "../../constants";
import LetterKey from "../LetterKey";
import { KeyboardProps } from "./props";
import { Container } from "./style";

const Keyboard: FC<KeyboardProps> = ({
    onClickLetter,
    guessedLetters,
}): ReactElement => {
    return (
        <Container>
            {alphabet.map((letter) => (
                <LetterKey
                    letter={letter}
                    onClickLetter={() => onClickLetter(letter)}
                    key={letter}
                    letterGuessed={guessedLetters.includes(letter)}
                />
            ))}
        </Container>
    );
};

export default Keyboard;
