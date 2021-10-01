import getRandomInt from '../utils/utils.js';
import runEngine from '../index.js';
import { evenStartMessage } from '../utils/constants.js';

const isEven = (num) => num % 2 === 0;

const genRoundData = () => {
  const number = getRandomInt();
  const question = String(number);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { correctAnswer, question };
};

export default () => runEngine(genRoundData, evenStartMessage);
