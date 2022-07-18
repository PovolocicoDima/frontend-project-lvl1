import { randomNumberGenerator, question, answer } from '../index.js';

const brainEven = (userName) => {
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

export default brainEven;
