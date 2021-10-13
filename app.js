import get from './src/getElement.js';
import alerts from './src/alerts.js';
import imcCalc from './src/imc_calc.js';
import imcIdealCalc from './src/imc_ideal.js';
import imcScore from './src/imc_score.js';
import btnAutoChange from './src/btn-change.js';
import getNumbers from './src/get_inputs.js';
import displayResult from './src/display_result.js';
import imcData from './src/imc_data.js';
import tableImcDisplay from './src/table_display.js';

//===// global variables //===//
const calculator = get('.form-container');
const inputNumbers = [...document.querySelectorAll('.input-imc-number')];
const resultDisplay = get('#imc')
const btnChild = get('#btn-crianca');
const btnAdult = get('#btn-adulto');
const btnByAge = document.querySelectorAll('.btn-faixa-etaria');
const btnSubmit = get('.btn-submit')
// BOARD variables
const tableImc = [...document.querySelectorAll('.table-row')];
const imcBoardResult = get('#imc-board-result');
const imcBoardScore = get('#imc-board-score');
// Links Buttons variables
const btnInfo = get('.btn-info');
const btnBackTop = get('.back-top');


//===// AGE btn: manual selection //===//
btnByAge.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    for (let i of btnByAge) {
      i.classList.remove('selected-btn')
    };
    e.currentTarget.classList.add('selected-btn')
  });
});

//===// LINKS btns: internal page //===//
btnBackTop.addEventListener('click', () => {
  window.location.href = '#calculator-section';
});
btnInfo.addEventListener('click', () => {
  window.location.href = '#info-board';
});

//===// INPUT ALERTS and INPUT DATA CONTROL //===//
inputNumbers.forEach(function (input) {
  input.addEventListener('input', (num) => {
    const currentNumber = num.currentTarget.value;
    const numberId = num.currentTarget.id;
    const alertText = num.currentTarget.parentElement.nextElementSibling;
    const alertDisplay = num.currentTarget.parentElement.parentElement;

    //clean result display alert and hidde info button
    if (num) {
      btnInfo.classList.remove('show-btn');
      resultDisplay.style.boxShadow = "none";
      resultDisplay.textContent = '';
    };

    //buttton age auto change color
    btnAutoChange(numberId, currentNumber, btnChild, btnAdult)

    //alert input data
    alerts(currentNumber, numberId, alertText, alertDisplay);
  })
})
//================= end =================//

//===// SUBMIT ALERTS and SUBMIT DATA CONTROL //===//
calculator.addEventListener('submit', (e) => {
  e.preventDefault();

  // get input numbers and clean alerts
  const numbersArr = getNumbers(inputNumbers);

  //calculation of IMC  
  const resultImc = imcCalc(numbersArr);

  //calculation of IMC ideal
  const resultImcIdeal = imcIdealCalc(numbersArr, imcData);

  /* get IMC score based on age
     data age, and imc values */
  const imcScoreResult = imcScore(numbersArr, resultImc, imcData);

  /* Display score result, 
     and add color alert, 
     display btn info and alert matching color */
  displayResult(imcScoreResult, resultDisplay, btnInfo, imcData);
  //================= end =================//

  //===// DISPLAY BOARD:  IMC score and result max-min height //===//
  imcBoardResult.textContent = resultImc;
  imcBoardScore.textContent = `${resultImcIdeal[2].min} a ${resultImcIdeal[2].max} kg`;

  // display BOARD: table data
  tableImcDisplay(tableImc, resultImcIdeal);
})
//================= end =================//
