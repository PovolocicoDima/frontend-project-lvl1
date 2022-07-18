import readlineSync from 'readline-sync';

const randomNumberGenerator = (n) => Math.floor(Math.random() * n);
const question = (text) => console.log(`Question: ${text}`);
const answer = () => readlineSync.question('Your answer: ');
const signGenerator = (items) => {
  // ['+', '-', '*']
  const number = randomNumberGenerator(3);
  return items[number];
};

const evenMainQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
const calcMainQuestion = 'What is the result of the expression?';
const gcdMainQuestion = 'Find the greatest common divisor of given numbers.';
const progressionMainQuestion = 'What number is missing in the progression?';
const primeMainQuestion = 'What number is missing in the progression?';

export {
  randomNumberGenerator,
  question,
  answer,
  signGenerator,
  evenMainQuestion,
  calcMainQuestion,
  gcdMainQuestion,
  progressionMainQuestion,
  primeMainQuestion,
};
