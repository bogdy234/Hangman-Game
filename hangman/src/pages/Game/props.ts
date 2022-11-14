export interface GameProps {
    sentence: string;
}

export interface LetterProps {
    letterGuessed: boolean;
}

export interface LineLetterContainerProps {
    isSpace: boolean;
}

export enum GameState {
    RUNNING,
    WON,
    LOST,
}
