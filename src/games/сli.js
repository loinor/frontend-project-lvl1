import readlineSync from 'readline-sync';
import { greatingsStartMessage } from '../utils/constants.js';

const greatings = () => {
  const name = readlineSync.question(greatingsStartMessage);
  console.log(`Hello, ${name}!`);
};

export default greatings;
