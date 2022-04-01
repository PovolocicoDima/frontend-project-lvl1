#! /usr/bin/env node
import readlineSync from 'readline-sync';
import sayHello from '../src/cli.js';

const newGame = () => {
  const userName = sayHello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;

  while (count < 3) {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    console.log(`Question: ${randomNumber}`);
    const yourAnswer = readlineSync.question('Your answer: ');
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

newGame();
