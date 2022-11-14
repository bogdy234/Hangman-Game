export const includesLetter = (
    container: string | string[],
    letter: string
) => {
    if (typeof container === "string") {
        return container.toLowerCase().includes(letter.toLowerCase());
    }
    return container
        .map((letter) => letter.toLowerCase())
        .includes(letter.toLowerCase());
};

export const gameWon = (sentence: string, guessedLetters: string[]) => {
    const sentenceLetters = sentence.split("");
    const sentenceWithoutSpaces = removeCharacterFromArray(
        sentenceLetters,
        " "
    );

    return sentenceWithoutSpaces.every((letter) =>
        includesLetter(guessedLetters, letter)
    );
};

export const getWrongLetters = (sentence: string, guessedLetters: string[]) => {
    const sentenceLetters = sentence.split("");

    return guessedLetters.filter(
        (letter) => !includesLetter(sentenceLetters, letter)
    ).length;
};

export const removeCharacterFromArray = (array: string[], target: string) => {
    const arr = [...array];
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === target) {
            arr.splice(i, 1);
        } else {
            ++i;
        }
    }
    return arr;
};

export const onlyLettersAndSpaces = (str: string) => {
    return /^[A-Za-z\s]*$/.test(str);
};

export default {
    includesLetter,
    onlyLettersAndSpaces,
    gameWon,
    getWrongLetters,
    removeCharacterFromArray,
};
