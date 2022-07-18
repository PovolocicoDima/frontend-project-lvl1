import { randomNumberGenerator, question, answer } from '../index.js';

const brainProgression = (userName) => {
  let count = 0;

  while (count < 3) {
    const randomNumberCount = randomNumberGenerator(6) + 5;
    const randomNumberBegin = randomNumberGenerator(20);
    const randomNumberDifference = randomNumberGenerator(10);
    const randomNumberPosition = randomNumberGenerator(randomNumberCount);
    const generateArray = (amount) => {
      const arr = [];
      let defaultNumber = randomNumberBegin;
      for (let i = 0; i <= amount; i += 1) {
        arr.push(defaultNumber);
        defaultNumber += randomNumberDifference;
      }
      return arr;
    };

    const arrayNumbers = generateArray(randomNumberCount);
    const rightAnswer = Number(arrayNumbers.splice(randomNumberPosition, 1, '..'));
    question(arrayNumbers.join(' '));
    const yourAnswer = Number(answer());

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

export default brainProgression;
