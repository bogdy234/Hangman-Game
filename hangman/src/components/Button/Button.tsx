import { ButtonContainer } from "./style";
import { ButtonProps } from "./props";

const Button: React.FC<ButtonProps> = ({
    width,
    height,
    onClick,
    backgroundColor,
    text,
    textColor = "black",
}): React.ReactElement<ButtonProps> => {
    return (
        <ButtonContainer
            width={width}
            height={height}
            backgroundColor={backgroundColor}
            onClick={onClick}
            textColor={textColor}
        >
            {text}
        </ButtonContainer>
    );
};

export default Button;
