import { useEffect } from "react";
import { GameProps } from "./props";

const Game: React.FC<GameProps> = ({
  sentence,
}): React.ReactElement<GameProps> => {
  useEffect(() => {
    console.log(sentence);
  }, [sentence]);
  return <div>{sentence}</div>;
};

export default Game;
