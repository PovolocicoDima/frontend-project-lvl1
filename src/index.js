import readlineSync from 'readline-sync';

export const randomNumberGenerator = (n) => Math.floor(Math.random() * n);
export const question = (text) => console.log(`Question: ${text}`);
export const answer = () => readlineSync.question('Your answer: ');
export const signGenerator = (items) => {
  // ['+', '-', '*']
  const number = randomNumberGenerator(3);
  return items[number];
};

export const brainCalc = (userName) => {
  const sign = signGenerator(['+', '-', '*']);
  let count = 0;
  while (count < 3) {
    const randomNumber1 = randomNumberGenerator(100);
    const randomNumber2 = randomNumberGenerator(100);

    question(`${randomNumber1} ${sign} ${randomNumber2}`);
    const yourAnswer = Number(answer());
    let rightAnswer = 0;
    switch (sign) {
    case '+':
      rightAnswer = randomNumber1 + randomNumber2;
      break;
    case '-':
      rightAnswer = randomNumber1 - randomNumber2;
      break;
    case '*':
      rightAnswer = randomNumber1 * randomNumber2;
      break;
    default:
      console.log('What is this operator?');
    }

    if (rightAnswer === yourAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${userName}!`);
      break;
    }
  }

  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export const brainEven = (userName) => {
  let count = 0;

  while (count < 3) {
    const randomNumber = randomNumberGenerator(100);
    question(randomNumber);
    const yourAnswer = answer();
    const rightAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
    if (rightAnswer === yourAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${userName}!`);
      break;
    }
  }

  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export const brainGcd = (userName) => {
  let count = 0;
  while (count < 3) {
    const randomNumber1 = randomNumberGenerator(100);
    const randomNumber2 = randomNumberGenerator(100);
    const gcd = (a, b) => {
      if (!b) {
        return a;
      }
      return gcd(b, a % b);
    };
    question(`${randomNumber1} ${randomNumber2}`);
    const yourAnswer = Number(answer());
    const rightAnswer = gcd(randomNumber1, randomNumber2);

    if (rightAnswer === yourAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${userName}!`);
      break;
    }
  }

  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export const evenMainQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
export const calcMainQuestion = 'What is the result of the expression?';
export const gcdMainQuestion = 'Find the greatest common divisor of given numbers.';
