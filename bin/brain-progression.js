#! /usr/bin/env node
import sayHello from '../src/cli.js';
import { progressionMainQuestion } from '../src/index.js';
import brainProgression from '../src/games/brainProgression.js';

const brainProgressionGame = (mainQuestion) => {
  const userName = sayHello();
  console.log(mainQuestion);
  brainProgression(userName);
};

brainProgressionGame(progressionMainQuestion);
