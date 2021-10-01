import getRandomInt from '../utils/utils.js';
import runEngine from '../index.js';
import { calcStartMessage } from '../utils/constants.js';

const calc = (num1, num2, sign) => {
  switch (sign) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: return null;
  }
};

const signs = ['+', '-', '*'];

const genRoundData = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const signIndex = getRandomInt(0, signs.length - 1);
  const question = `${num1} ${signs[signIndex]} ${num2}`;
  const correctAnswer = String(calc(num1, num2, signs[signIndex]));
  return { correctAnswer, question };
};

export default () => runEngine(genRoundData, calcStartMessage);
