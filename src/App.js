import './index.scss';
import React from "react"; //j

const questions = [
    {
        title: 'What is React?',
        variants: ['the library', 'the framework', 'the application'],
        correct: 0,
    },
    {
        title: 'What is component?',
        variants: ['the application', 'part of an application or page', 'the page'],
        correct: 1,
    },
    {
        title: 'What is JSX?',
        variants: [
            'This is a simple HTM',
            'This is a function',
            'This is the same HTML, but with the ability to execute JS code',
        ],
        correct: 2,
    },
];

function Result({ correct }) {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="result-icon" />
            <h2>You indicated {correct} answer out of {questions.length}</h2>
            <a className='play' href='/'>Play again</a>
        </div>
    );
}

function Game({ step, question, onClickVariant }) {
    const percentage = Math.round((step) / questions.length * 100);

    return (
        <div>
            <div className="progress">
                <div style={{ width: `${percentage}%` }} className="progress__inner"/>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((text, index) => (
                    <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
                ))}
            </ul>
        </div>
    );
}

function App() {
    const [step, setStep] = React.useState(0);
    const [correct, setCorrect] = React.useState(0);
    const question = questions[step];

    const onClickVariant = (index) => {
        setStep(step + 1);
        if (index === question.correct) {
            setCorrect(correct + 1);
        }
    };

    return (
        <div className="App">
            {step !== questions.length ? (
                <Game step={step} question={question} onClickVariant={onClickVariant} />
            ) : (
                <Result correct={correct} />
            )}
        </div>
    );
}

export default App;
