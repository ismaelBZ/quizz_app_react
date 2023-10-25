import { Url } from "url";
import { shuffleArray } from "./utils";

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState =  Question & { answers: string[] };

enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) :Promise<QuestionState[]>  => {
    const endpoint: RequestInfo = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple&category=27`;
    const data = await fetch(endpoint);
    const dataJson = await data.json();
    return dataJson.results.map((question: Question) => (
        {
            ...question,
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
        }
    ));
}

export {Difficulty, fetchQuizQuestions};
