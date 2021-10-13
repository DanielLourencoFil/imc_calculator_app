
function imcScore(num, result, data) {
  //num current age
  const numCurrent = num[0];

  //child IMC score
  const imcResult = data.map(function (e) {
    const { age, scores } = e;
    let score;
    if (numCurrent < 20) {
      if (age.includes(numCurrent)) {
        // return messagem if IMC is a invalid number: heigher than age max score and lower than min
        if (result < scores[0].min || result > scores[scores.length - 1].max) {
          return `<span class="result-text" data-id="invalid">IMC não pode ser calculado</span>`;
        }
        score = scores.map((i) => {
          if (result <= i.max && result >= i.min) {
            return `<span class="result-score" data-id="${i.id}">${result}</span><span class="result-text"> : ${i.mens}</span>`;
          }
        }).join('')
      }
    }
    // adult IMC score
    if (numCurrent >= 20) {
      if (age.includes(20)) {
        // return messagem if IMC is a invalid number: heigher than age max score and lower than min
        if (result < scores[0].min || result > scores[scores.length - 1].max) {
          return `<span class="result-text" data-id="invalid">IMC não pode ser calculado</span>`;
        }
        score = scores.map((i) => {
          if (result <= i.max && result >= i.min) {
            return `<span class="result-score" data-id="${i.id}">${result}</span><span class="result-text"> : ${i.mens}</span>`;
          }
        }).join('')
      }
    }
    return score;
  }).join('');

  return imcResult;
};

export default imcScore;