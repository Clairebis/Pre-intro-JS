export default class Model {
  constructor(color) {
    this.favColor = color;
  }

  getFavColor() {
    return this.favColor;
  } // returns current value stored in the model

  setFavColor(newColor) {
    this.favColor = newColor;
  } // changes the color to the one chosen by the user
}
