import { ButtonContainer } from "./style";
import { ButtonProps } from "./props";

const Button: React.FC<ButtonProps> = ({
  width,
  height,
  onClick,
  backgroundColor,
  text,
}): React.ReactElement<ButtonProps> => {
  return (
    <ButtonContainer
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      {text}
    </ButtonContainer>
  );
};

export default Button;
