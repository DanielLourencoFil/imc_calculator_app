function btnAutoChange(id, age, btn1, btn2) {

  if (id == "idade" && age >= 20) {
    btn1.classList.remove('selected-btn');
    btn2.classList.add('selected-btn');
  }
  if (id == "idade" && age < 20) {
    btn1.classList.add('selected-btn');
    btn2.classList.remove('selected-btn');
  }
}
export default btnAutoChange;