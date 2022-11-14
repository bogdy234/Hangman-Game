export interface GameOverProps {
    onClickPlayAgain: () => void;
    lost: boolean;
    tries?: number;
    wrongLetters?: number;
    sentence?: string;
}
