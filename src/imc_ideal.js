
function imcIdealCalc(num, data) {
  //num current age
  const numCurrent = num[0];
  //child IMC score
  let number1;
  let number2;
  let numbers = [];

  const imcResult = data.map(function (e) {
    const { age, scores } = e;
    let score = [];
    if (numCurrent < 20) {
      if (age.includes(numCurrent)) {
        score = scores.map((i) => {
          number1 = i.min * ((num[1] * num[1]) / 10000); //num[1] = height
          number2 = i.max * ((num[1] * num[1]) / 10000);
          return numbers.push({ min: number1.toFixed(2), max: number2.toFixed(2), id: i.id, score_max: i.max, score_min: i.min });
        })
      }
    }

    // adult IMC score
    if (numCurrent >= 20) {
      if (age.includes(20)) {
        score = scores.map((i) => {
          number1 = i.min * ((num[1] * num[1]) / 10000); //num[1] = height
          number2 = i.max * ((num[1] * num[1]) / 10000);
          return numbers.push({ min: number1.toFixed(2), max: number2.toFixed(2), id: i.id, score_max: i.max, score_min: i.min });
        })
      }
    }
  });
  return numbers;
}

export default imcIdealCalc;

