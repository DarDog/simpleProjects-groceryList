import Item from "../components/Item.js";

const formElement = document.querySelector('.groceries__form'),
    templateSelector = '.template',
    containerElement = document.querySelector('.items'),
    inputElement = formElement.querySelector('.groceries__input'),
    resetButton = document.querySelector('.items-reset');

formElement.addEventListener('submit', (evt) => {
  evt.preventDefault()
  const item = new Item(templateSelector);

  containerElement.prepend(item.generateItem(inputElement.value));
  inputElement.value = '';
})

resetButton.addEventListener('click', () => {
  const itemsList = Array.from(document.querySelectorAll('.item'));

  itemsList.forEach(el => {
    el.remove();
  })
})