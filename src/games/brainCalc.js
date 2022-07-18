import {
  randomNumberGenerator, signGenerator, question, answer,
} from '../index.js';

const brainCalc = (userName) => {
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

export default brainCalc;
