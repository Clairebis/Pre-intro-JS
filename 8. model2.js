export default class Model {
  constructor(count) {
    this.count_display = count;
  }

  getCount_display() {
    return this.count_display;
  }

  setCount_display(newCount) {
    this.count_display = newCount;
  }
}
