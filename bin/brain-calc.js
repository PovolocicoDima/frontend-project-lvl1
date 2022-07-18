#! /usr/bin/env node
import sayHello from '../src/cli.js';
import { calcMainQuestion } from '../src/index.js';
import brainCalc from '../src/games/brainCalc.js';

const brainCalcGame = (mainQuestion) => {
  const userName = sayHello();
  console.log(mainQuestion);
  brainCalc(userName);
};

brainCalcGame(calcMainQuestion);
