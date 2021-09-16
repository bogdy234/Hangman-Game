import { useState } from "react";
import Button from "../../components/Button";
import TEXT from "../../constants/text";
import theme from "../../theme";
import { Link } from "react-router-dom";
import { HomeProps } from "./props";
import S from "./style";

const Home: React.FC<HomeProps> = ({
  getSentence,
}): React.ReactElement<HomeProps> => {
  const [numberPlayersSelected, setNumberPlayersSelected] = useState<number>(0);
  const [inputSentence, setInputSentence] = useState<string>("");

  const startGameButtonHandler = () => {
    console.log("game started");
    getSentence(inputSentence);
  };

  const onePlayerButtonHandler = () => {
    setNumberPlayersSelected(1);
  };

  const twoPlayersButtonHandler = () => {
    setNumberPlayersSelected(2);
  };

  const getInputSentence = (value: string) => {
    console.log(value);
    console.log(value[value.length - 1], value[value.length - 2]);
    if (!(value[value.length - 1] === "" && value[value.length - 2] === ""))
      setInputSentence(value);
  };

  const textOrInput = () => {
    if (numberPlayersSelected === 1) {
      return (
        <S.StyledOnePlayerText>{TEXT.GENERATED_SENTENCE}</S.StyledOnePlayerText>
      );
    } else if (numberPlayersSelected === 2) {
      return (
        <S.InputContainer>
          {TEXT.ENTER_SENTENCE}
          <S.StyledInput onChange={(e) => getInputSentence(e.target.value)} />
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
        <Link to="/game">
          <Button
            width="150px"
            height="80px"
            text={TEXT.START_GAME}
            onClick={startGameButtonHandler}
            backgroundColor={theme.colors.startButton}
          />
        </Link>
      </S.StartGameButtonContainer>
    </S.PageContainer>
  );
};

export default Home;
