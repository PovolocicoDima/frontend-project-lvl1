#! /usr/bin/env node
import sayHello from '../src/cli.js';
import { gcdMainQuestion } from '../src/index.js';
import brainGcd from '../src/games/brainGcd.js';

const brainGcdGame = (mainQuestion) => {
  const userName = sayHello();
  console.log(mainQuestion);
  brainGcd(userName);
};

brainGcdGame(gcdMainQuestion);
