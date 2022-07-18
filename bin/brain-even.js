#! /usr/bin/env node
import sayHello from '../src/cli.js';
import {
  evenMainQuestion, brainEven,
} from '../src/index.js';

const brainEvenGame = (mainQuestion) => {
  const userName = sayHello();
  console.log(mainQuestion);
  brainEven(userName);
};

brainEvenGame(evenMainQuestion);
