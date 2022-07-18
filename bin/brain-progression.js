#! /usr/bin/env node
import sayHello from '../src/cli.js';
import {
  progressionMainQuestion, brainProgression,
} from '../src/index.js';

const brainProgressionGame = (mainQuestion) => {
  const userName = sayHello();
  console.log(mainQuestion);
  brainProgression(userName);
};

brainProgressionGame(progressionMainQuestion);
