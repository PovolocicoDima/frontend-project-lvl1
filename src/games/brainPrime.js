import { randomNumberGenerator, question, answer } from '../index.js';

const brainPrime = (userName) => {
  let count = 0;
  while (count < 3) {
    // eslint-disable-next-line max-len
    const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    const randomNumber = randomNumberGenerator(100);
    question(randomNumber);
    const yourAnswer = answer();
    const rightAnswer = primeNumbers.includes(randomNumber) ? 'yes' : 'no';

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

export default brainPrime;
