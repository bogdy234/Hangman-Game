import { FC, useEffect, useState } from "react";
import EndGame from "../../components/EndGame/EndGame";
import Keyboard from "../../components/Keyboard";
import { gameWon, getWrongLetters, includesLetter } from "../../utils/utils";
import { useHistory } from "react-router-dom";

import { GameProps, GameState } from "./props";
import {
    GameContainer,
    GameContentContainer,
    Letter,
    LettersContainer,
    Line,
    LineLetterContainer,
    LivesContainer,
    QuitContainer,
} from "./style";
import Button from "../../components/Button";

const Game: React.FC<GameProps> = ({
    sentence,
}): React.ReactElement<GameProps> => {
    const history = useHistory();
    const [lives, setLives] = useState<number>(6);
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [gameState, setGameState] = useState<GameState>(GameState.RUNNING);

    if (!sentence) {
        history.push("/");
    }

    const onClickLetter = (letter: string) => {
        if (lives === 0 || gameWon(sentence, guessedLetters)) {
            return;
        }
        if (includesLetter(guessedLetters, letter)) {
            return;
        }
        setGuessedLetters((currentLetters) => [...currentLetters, letter]);

        if (!includesLetter(sentence, letter)) {
            setLives((currentLives) => currentLives - 1);
        }
    };

    useEffect(() => {
        if (!lives) {
            setGameState(GameState.LOST);
            return;
        }

        let timeout: NodeJS.Timeout;

        if (gameWon(sentence, guessedLetters)) {
            timeout = setTimeout(() => {
                setGameState(GameState.WON);
            }, 1000);
        }
        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [guessedLetters, lives, sentence]);

    const onClickPlayAgain = () => {
        setLives(6);
        setGuessedLetters([]);
        setGameState(GameState.RUNNING);
        history.push("/");
    };

    if (gameState === GameState.LOST) {
        return (
            <EndGame
                onClickPlayAgain={onClickPlayAgain}
                lost
                sentence={sentence}
            />
        );
    }

    if (gameState === GameState.WON) {
        return (
            <EndGame
                onClickPlayAgain={onClickPlayAgain}
                lost={false}
                tries={guessedLetters.length}
                wrongLetters={getWrongLetters(sentence, guessedLetters)}
            />
        );
    }

    return (
        <>
            <LivesContainer>Lives: {lives}</LivesContainer>
            <QuitContainer>
                <Button
                    width={"120px"}
                    height={"30px"}
                    onClick={onClickPlayAgain}
                    text="Quit"
                />
            </QuitContainer>
            <GameContentContainer>
                {/* <Hangdraw /> */}
                <LettersContainer>
                    {sentence.split("").map((letter, index) => (
                        <LineLetterContainer
                            key={`${letter}-${index}`}
                            isSpace={letter === " "}
                        >
                            <Letter
                                letterGuessed={includesLetter(
                                    guessedLetters,
                                    letter
                                )}
                            >
                                {letter}
                            </Letter>
                            <Line />
                        </LineLetterContainer>
                    ))}
                </LettersContainer>
                <Keyboard
                    onClickLetter={onClickLetter}
                    guessedLetters={guessedLetters}
                />
            </GameContentContainer>
        </>
    );
};

const WithStyle = (Component: FC<any>) => {
    const WithStyleComponent = ({ ...props }) => (
        <GameContainer>
            <Component {...props} />
        </GameContainer>
    );
    return WithStyleComponent;
};

export default WithStyle(Game);
