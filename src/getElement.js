
function getElement(selector) {
  const element = document.querySelector(selector);
  if (!element) {
    console.log(!element);
    throw new Error(`The selector "${selector}" DIDN'T selected anything, please double ckeck it`);
  }
  return element

}


export default getElement;