'use babel';

export default class ChipotleButton {

  constructor(statusBar, onClickHandler) {
    if (!this.element) {
      this.element = document.createElement('a');
      this.element.id = 'chipotle';
      this.element.classList.add('inline-block');
      this.element.setAttribute('href', 'javascript:void()');
      this.element.textContent = 'Order Chipotle';

      this.element.addEventListener('click', onClickHandler);
    }

    if (!this.statusBarTile) {
      this.statusBarTile = statusBar.addRightTile({
        item: this.element,
        priority: -1
      });
    }
  }

  dispose() {
    if (this.statusBarTile) {
      this.statusBarTile.destroy();
      this.statusBarTile = null;
    }

    this.element = null;
  }

}
