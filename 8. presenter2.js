export default class Presenter {
  initialize(model, view) {
    this.model = model;
    this.view = view;

    this.view.setCount_display(this.model.getCount_display()); // initialize the count_display input to show the current count_display
  }

  // activated when increase is pressed - saves the new count_display information (it got from the view) and stores it in the model. Also gives feedback to the user via the view
  increaseCount() {
    this.model.setCount_display(this.model.getCount_display() + 1);
    this.view.setCount_display(this.model.getCount_display());
  }

  // activated when decrease is pressed - saves the new count_display information (it got from the view) and stores it in the model. Also gives feedback to the user via the view

  decreaseCount() {
    this.model.setCount_display(this.model.getCount_display() - 1);
    this.view.setCount_display(this.model.getCount_display());
  }
}
