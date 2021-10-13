function alerts(num, id, alertText, alertDisplay) {

  //min and max values
  let max = '';
  let min = '';
  let messageMin = '';
  let messageMax = '';

  if (id === 'idade') {
    max = 120;
    min = 5;
    messageMin = `A ${id} mínima é ${min}`;
    messageMax = `A ${id} máxima é ${max}`;
  }
  if (id === 'altura') {
    max = 230;
    min = 100;
    messageMin = `A ${id} mínima é ${min}`;
    messageMax = `A ${id} máxima é ${max}`;
  }
  if (id === "peso") {
    max = 330;
    min = 10;
    messageMin = `O ${id} mínimo é ${min}`
    messageMax = `O ${id} máximo é ${max}`
  }

  // fails
  if (num < min) {
    alertDisplay.classList.add('fail-input'),
      alertText.classList.add('alert-invalid-input'),
      alertText.textContent = messageMin;
  }
  if (num > max) {
    alertDisplay.classList.add('fail-input'),
      alertText.classList.add('alert-invalid-input'),
      alertText.textContent = messageMax;
  }
  //sucess
  if (num <= max && num >= min) {
    alertDisplay.classList.remove('fail-input'),
      alertText.classList.remove('alert-invalid-input'),
      alertDisplay.classList.remove('sucess-input');
    alertDisplay.classList.add('sucess-input');
  }
  //clear all alerts
  if (!num) {
    alertDisplay.classList.remove('fail-input'),
      alertText.classList.remove('alert-invalid-input'),
      alertDisplay.classList.remove('sucess-input');
  }
}


export default alerts;