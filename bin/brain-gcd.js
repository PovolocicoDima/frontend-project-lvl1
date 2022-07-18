#! /usr/bin/env node
import sayHello from '../src/cli.js';
import {
  gcdMainQuestion, brainGcd,
} from '../src/index.js';

const brainGcdGame = (mainQuestion) => {
  const userName = sayHello();
  console.log(mainQuestion);
  brainGcd(userName);
};

brainGcdGame(gcdMainQuestion);
