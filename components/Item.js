export default class Item {
  constructor(templateSelector) {
    this._template = document.querySelector(templateSelector);
  }


  generateItem(data) {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.textContent = `- ${data}`

    return this._element
  }


  _getTemplate() {
    return this._template
        .content
        .querySelector('.item')
        .cloneNode(true);
  }

  _setEventListeners() {
    this._element.addEventListener('click', () => {
      this._toggleCompletedStatus();
    })
  }

  _toggleCompletedStatus() {
    this._element.classList.toggle('item_completed')
  }
}