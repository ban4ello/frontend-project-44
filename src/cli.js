import readlineSync from 'readline-sync';

export const getName = () => {
    console.log('Welcome to the Brain Games!');

    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
};

export const startEvenGame = () => {
    const roundsCount = 3;

    function isEven(num) {
        return num % 2 === 0;
    }

    function gameRound(userName) {
        const number = Math.floor(Math.random() * 100);
        console.log(`Question: ${number}`);
        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = isEven(number) ? 'yes' : 'no';

        if (userAnswer !== 'yes' && userAnswer !== 'no') {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);    
            return false;
        }

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
            return true;
        }

        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
        return false;
    }

    function game() {
        console.log('Welcome to the Brain Games!');
        const userName = readlineSync.question('May I have your name? ');
        console.log(`Hello, ${userName}!`);
        console.log('Answer "yes" if the number is even, otherwise answer "no".');

        for (let i = 0; i < roundsCount; i += 1) {
            if (!gameRound(userName)) {
                return;
            }
        }

        console.log(`Congratulations, ${userName}!`);
    }

    game();
};

export const startCalculation = () => {
    const roundsCount = 3;

    function calculate(num1, num2, operator) {
        switch (operator) {
            case '+':
            return num1 + num2;
            case '-':
            return num1 - num2;
            case '*':
            return num1 * num2;
            default:
            return null;
        }
    }

    function gameRound(userName) {
        const num1 = Math.floor(Math.random() * 50);
        const num2 = Math.floor(Math.random() * 50);
        const operators = ['+', '-', '*'];
        const operator = operators[Math.floor(Math.random() * operators.length)];

        console.log(`Question: ${num1} ${operator} ${num2}`);
        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = calculate(num1, num2, operator);
        if (parseInt(userAnswer, 10) === correctAnswer) {
            console.log('Correct!');
            return true;
        }


        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
        return false;
    }


    function game() {
        console.log('Welcome to the Brain Games!');
        const userName = readlineSync.question('May I have your name? ');
        console.log(`Hello, ${userName}!`);
        console.log('What is the result of the expression?');

        for (let i = 0; i < roundsCount; i += 1) {
            if (!gameRound(userName)) {
                return;
            }
        }

        console.log(`Congratulations, ${userName}!`);
    }


    game();
}