export default class Presenter {
  initialize(model, view) {
    this.model = model;
    this.view = view;

    this.view.setFavColor(this.model.getFavColor()); // initialize the color picker input to show the current color
  }

  // activated when save is pressed - saves the new color information (it got from the view) and stores it in the model. Also gives feedback to the user via the view
  save(color) {
    this.model.setFavColor(color);
    this.view.setMessage("Color is saved: " + this.model.getFavColor());
  }

  // activated when reset is pressed - resets the information stored in the model and gives feedback to the user via the view
  clear() {
    const defaultFavColor = "#000000";
    this.model.setFavColor(defaultFavColor);
    this.view.setFavColor(this.model.getFavColor); // update the color picker input to show black (default color)
    this.view.setMessage(
      "Color is reset to default: " + this.model.getFavColor()
    );
  }
}
