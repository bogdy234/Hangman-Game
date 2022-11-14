import { useState } from "react";
import Button from "../../components/Button";
import TEXT from "../../constants/text";
import theme from "../../theme";
import { useHistory } from "react-router";
import { HomeProps } from "./props";
import S from "./style";
import { onlyLettersAndSpaces } from "../../utils/utils";

const Home: React.FC<HomeProps> = ({
    sentence,
    setSentence,
}): React.ReactElement<HomeProps> => {
    const history = useHistory();
    const [numberPlayersSelected, setNumberPlayersSelected] =
        useState<number>(0);
    const [userWord, setUserWord] = useState<string>("");

    const startGameButtonHandler = async () => {
        if (numberPlayersSelected === 2) {
            history.push("/game");
            setSentence(userWord);
            return;
        } else if (numberPlayersSelected === 1) {
            const response = await fetch(
                "https://random-word-api.herokuapp.com/word"
            );
            const [word] = await response.json();

            setSentence(word);
            history.push("/game");
        }
    };

    const onePlayerButtonHandler = () => {
        setNumberPlayersSelected(1);
    };

    const twoPlayersButtonHandler = () => {
        setNumberPlayersSelected(2);
    };

    const getInputSentence = (value: string) => {
        if (onlyLettersAndSpaces(value) && value.length <= 30) {
            setUserWord(value);
        }
    };

    const textOrInput = () => {
        if (numberPlayersSelected === 1) {
            return (
                <S.StyledOnePlayerText>
                    {TEXT.GENERATED_SENTENCE}
                </S.StyledOnePlayerText>
            );
        } else if (numberPlayersSelected === 2) {
            return (
                <S.InputContainer>
                    {TEXT.ENTER_SENTENCE}
                    <S.StyledInput
                        value={userWord}
                        onChange={(e) => getInputSentence(e.target.value)}
                    />
                </S.InputContainer>
            );
        }
    };

    return (
        <S.PageContainer>
            <S.NumberPlayersContainer>
                <Button
                    width="150px"
                    height="80px"
                    text={TEXT.ONE_PLAYER}
                    onClick={onePlayerButtonHandler}
                    backgroundColor={
                        numberPlayersSelected === 1
                            ? `${theme.colors.approveGreen}`
                            : undefined
                    }
                />
                <Button
                    width="150px"
                    height="80px"
                    text={TEXT.TWO_PLAYERS}
                    onClick={twoPlayersButtonHandler}
                    backgroundColor={
                        numberPlayersSelected === 2
                            ? `${theme.colors.approveGreen}`
                            : undefined
                    }
                />
            </S.NumberPlayersContainer>
            {textOrInput()}
            <S.StartGameButtonContainer>
                <Button
                    width="150px"
                    height="80px"
                    text={TEXT.START_GAME}
                    onClick={startGameButtonHandler}
                    backgroundColor={theme.colors.startButton}
                    textColor="white"
                />
            </S.StartGameButtonContainer>
        </S.PageContainer>
    );
};

export default Home;
