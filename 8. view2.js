export default class View {
  constructor(presenter) {
    const self = this;

    const increaseButton = document.getElementById("increaseBtn");
    const decreaseButton = document.getElementById("decreaseBtn");
    const count_display = document.getElementById("count_display");

    self.presenter = presenter;

    // event handlers that handle user interaction with the UI
    increaseButton.onclick = function (event) {
      self.increaseCount();
    };

    decreaseButton.onclick = function () {
      self.decreaseCount();
    };

    // end of event handlers
  }

  increaseCount() {
    this.presenter.increaseCount();
  }

  decreaseCount() {
    this.presenter.decreaseCount();
  }

  setCount_display(count) {
    const count_display = document.getElementById("count_display");
    count_display.textContent = count;
  }
}
