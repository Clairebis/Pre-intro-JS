export default class View {
  constructor(presenter) {
    const self = this;

    const saveButton = document.getElementById("saveBtn");
    const resetButton = document.getElementById("resetBtn");
    const favColorInput = document.getElementById("favcolor");

    self.presenter = presenter;

    // event handlers that handle user interaction with the UI
    saveButton.onclick = function (event) {
      self.save();
    };

    resetButton.onclick = function () {
      self.clear();
    };

    favColorInput.onchange = function () {
      self.setMessage("");
    };
    // end of event handlers
  }

  //when reset is pressed, clear is activated - NB clear is a method in the presenter
  clear() {
    this.presenter.clear();
  }

  //when save is pressed, save is activated - NB save is a method in the presenter
  save() {
    const favColorInput = document.getElementById("favcolor");
    this.presenter.save(favColorInput.value);
  }

  setMessage(message) {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = message;
  }

  setFavColor(color) {
    const favColorInput = document.getElementById("favcolor");
    favColorInput.value = color;
  }
}
