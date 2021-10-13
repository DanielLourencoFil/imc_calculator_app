function imcCalc(num) {
  let numbers = num[2] / ((num[1] * num[1]) / 10000);
  numbers = numbers.toFixed(2);
  return numbers;
}
export default imcCalc;