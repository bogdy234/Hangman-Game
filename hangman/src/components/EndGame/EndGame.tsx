import { FC, ReactElement } from "react";
import Button from "../Button";
import { GameOverProps } from "./props";
import { Container, StyledH1 } from "./style";

const GameOver: FC<GameOverProps> = ({
    sentence,
    lost,
    tries,
    wrongLetters,
    onClickPlayAgain,
}): ReactElement => {
    return (
        <Container>
            <StyledH1>
                {lost
                    ? `You lost, the sentence was: ${sentence}`
                    : `You won in ${tries} tries from which ${wrongLetters} ${
                          wrongLetters === 1 ? "was" : "were"
                      } wrong!`}
            </StyledH1>
            <Button
                width="140px"
                height="36px"
                text="Play again"
                onClick={onClickPlayAgain}
            />
        </Container>
    );
};

export default GameOver;
