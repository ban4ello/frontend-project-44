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

export const startGcdGame = () => {
    const roundsCount = 3;
    
    function gcd(a, b) {
      while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
      }
      return a;
    }
    
    function gameRound(userName) {
      const num1 = Math.floor(Math.random() * 100) + 1; // генерируем числа от 1 до 100
      const num2 = Math.floor(Math.random() * 100) + 1;
    
      console.log(`Question: ${num1} ${num2}`);
      const userAnswer = readlineSync.question('Your answer: ');
      const correctAnswer = gcd(num1, num2);
    
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
      console.log('Find the greatest common divisor of given numbers.');
    
      for (let i = 0; i < roundsCount; i += 1) {
        if (!gameRound(userName)) {
          return;
        }
      }
    
      console.log(`Congratulations, ${userName}!`);
    }
    
    game();
}

export const startProgressionGame = () => {
    const roundsCount = 3;
    
    function generateProgression() {
      const progressionLength = Math.floor(Math.random() * 6) + 5; // от 5 до 10
      const start = Math.floor(Math.random() * 50);
      const step = Math.floor(Math.random() * 10) + 1; // шаг от 1 до 10
      const progression = [];
      for (let i = 0; i < progressionLength; i += 1) {
        progression.push(start + step * i);
      }
      return progression;
    }
    
    
    function gameRound(userName) {
      const progression = generateProgression();
      const hiddenIndex = Math.floor(Math.random() * progression.length);
      const correctAnswer = progression[hiddenIndex];
      progression[hiddenIndex] = '..';
    
      console.log(`Question: ${progression.join(' ')}`);
      const userAnswer = readlineSync.question('Your answer: ');
    
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
      console.log('What number is missing in the progression?');
    
      for (let i = 0; i < roundsCount; i += 1) {
        if (!gameRound(userName)) {
          return;
        }
      }
    
      console.log(`Congratulations, ${userName}!`);
    }
    
    game();
}

export const startPrimeGame = () => {
    const roundsCount = 3;
    
    function isPrime(num) {
      if (num <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }
    
    
    function gameRound(userName) {
      const number = Math.floor(Math.random() * 100) + 1; // генерируем числа от 1 до 100
    
      console.log(`Question: ${number}`);
      const userAnswer = readlineSync.question('Your answer: ');
      const correctAnswer = isPrime(number) ? 'yes' : 'no';
    
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
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    
    
      for (let i = 0; i < roundsCount; i += 1) {
        if (!gameRound(userName)) {
          return;
        }
      }
    
    
      console.log(`Congratulations, ${userName}!`);
    }
    
    
    game();
}