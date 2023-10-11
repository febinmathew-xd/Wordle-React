import wordBank from "./wordle-bank.txt";

export const defaultBoard = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];

export const generateWordSet = async () => {
    let wordSet;
    let todaysWord;

    await fetch(wordBank)
    .then((response)=>response.text())
    .then((result) => {
        const wordArr = result.split("\r\n");
         todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
         todaysWord = "bhagu"
         wordSet = new Set(wordArr);

    });
    return {wordSet, todaysWord};
}