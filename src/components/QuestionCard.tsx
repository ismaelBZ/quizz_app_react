import React from 'react';
import { AnswerObject } from '../App';
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

type Question = {
    question: string;
    answers: Array<string>;
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

//Type = react funcional component of type question
const QuestionCard: React.FC<Question> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions
}) => (

    <Wrapper>
            <p className="number">
                Question: {questionNr} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML = {{ __html: question}} />
            <div>
                {answers.map( (answer) => (
                    <ButtonWrapper
                        correct = {userAnswer?.correctAnswer === answer}
                        userClicked={userAnswer?.answer === answer}
                    >

                        <button disabled={ !!userAnswer } value={ answer } onClick={ callback }>
                            <span dangerouslySetInnerHTML = {{ __html: answer }} />
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
    </Wrapper> 

);

export {QuestionCard};