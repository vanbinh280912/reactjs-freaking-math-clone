export function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const OPERATORS = [
  "+",
  "-",
  //   , "*", "/"
];

export function getRandomOperator(min, max) {
  const rnd = getRndInteger(0, OPERATORS.length);

  return OPERATORS[rnd];
}
