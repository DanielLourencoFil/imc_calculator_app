function getNumbers(input) {
  const numbers = input.map((num) => {

    //select text with wrong input
    const alertText = num.parentElement.nextElementSibling;
    const alertDisplay = num.parentElement.parentElement;

    //prevent submit incomplete form and alert
    if (alertText.classList.contains('alert-invalid-input')) {
      alertText.textContent = 'Por favor, forneça um número válido.';
      return alertText;
    }
    //sucess input
    alertDisplay.classList.remove('sucess-input');
    const numbers = parseFloat(num.value)
    return numbers;
  })
  return numbers;
}

export default getNumbers;