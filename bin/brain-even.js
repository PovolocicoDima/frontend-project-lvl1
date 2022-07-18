#! /usr/bin/env node
import sayHello from '../src/cli.js';
import { evenMainQuestion } from '../src/index.js';
import brainEven from '../src/games/brainEven.js';

const brainEvenGame = (mainQuestion) => {
  const userName = sayHello();
  console.log(mainQuestion);
  brainEven(userName);
};

brainEvenGame(evenMainQuestion);
