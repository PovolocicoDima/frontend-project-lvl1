#! /usr/bin/env node
import sayHello from '../src/cli.js';
import { primeMainQuestion } from '../src/index.js';
import brainPrime from '../src/games/brainPrime.js';

const brainPrimeGame = (mainQuestion) => {
  const userName = sayHello();
  console.log(mainQuestion);
  brainPrime(userName);
};

brainPrimeGame(primeMainQuestion);
