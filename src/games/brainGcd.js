import { randomNumberGenerator, question, answer } from '../index.js';

const brainGcd = (userName) => {
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

export default brainGcd;
