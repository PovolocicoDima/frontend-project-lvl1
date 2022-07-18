#! /usr/bin/env node
import sayHello from '../src/cli.js';
import {
  calcMainQuestion, brainCalc,
} from '../src/index.js';

const brainCalcGame = (mainQuestion) => {
  const userName = sayHello();
  console.log(mainQuestion);
  brainCalc(userName);
};

brainCalcGame(calcMainQuestion);
