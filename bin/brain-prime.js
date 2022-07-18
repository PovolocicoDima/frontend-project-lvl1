#! /usr/bin/env node
import sayHello from '../src/cli.js';
import {
  primeMainQuestion, brainPrime,
} from '../src/index.js';

const brainPrimeGame = (mainQuestion) => {
  const userName = sayHello();
  console.log(mainQuestion);
  brainPrime(userName);
};

brainPrimeGame(primeMainQuestion);
