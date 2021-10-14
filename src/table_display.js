function tableImcDisplay(table, data) {

  const resultId = document.querySelector('.result-score'); const text = document.querySelectorAll('[data-text="imc-board-text"]');

  /////////// display table data
  table.forEach(row => {

    //alerts 
    row.classList.remove('row-alert')
    if (resultId.dataset.id <= 2) {
      table[1].classList.add('row-alert')
      text[0].textContent = 'abaixo';
      text[1].textContent = 'atingir';
    }
    if (resultId.dataset.id == 3) {
      table[2].classList.add('row-alert')
      text[0].textContent = 'dentro';
      text[1].textContent = 'manter';
    }
    if (resultId.dataset.id == 4) {
      table[3].classList.add('row-alert')
      text[0].textContent = 'acima';
      text[1].textContent = 'atingir';
    }
    if (resultId.dataset.id >= 5) {
      table[table.length - 1].classList.add('row-alert')
      text[0].textContent = 'acima';
      text[1].textContent = 'atingir';
    }

    // data display
    data.map((score) => {
      if (row.dataset.id == score.id) {
        row.children[1].textContent = `${score.score_min} a ${score.score_max}`;
        row.children[2].textContent = `${score.min} a ${score.max} Kg`;
      }
      if (row.dataset.id == 2) {
        // console.log(score);
        row.children[1].textContent = `< ${data[1].score_max}`;
        row.children[2].textContent = `< ${data[1].max} Kg`;
      }
      if (row.dataset.id == 5) {
        // console.log(score);
        row.children[1].textContent = `> ${data[4].score_min}`;
        row.children[2].textContent = `> ${data[4].min} Kg`;
      }
    })
  })
};
export default tableImcDisplay;