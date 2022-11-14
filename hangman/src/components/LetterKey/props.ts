export interface LetterKeyProps {
    letter: string;
    onClickLetter: (a: string) => void;
    letterGuessed: boolean;
}

export interface ContainerProps {
    letterGuessed: boolean;
}
