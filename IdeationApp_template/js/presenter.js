// The Presenter acts as the middleman between
// the View (UI) and the Model (data).

export default class Presenter {
  constructor() {
    this.postitCounter = 0; // part of the postit note id
  }

  initialize(model, view) {
    this.model = model;
    this.view = view;
  }

  // ------- Methods that serves the presenter ---------- //

  createPostit(postitColor) {
    //Postit note singleton - group of related information about a postit
    const postitObject = {
      pid: "postit" + this.postitCounter,
      tid: "textarea" + this.postitCounter,
      posX: 45,
      posY: 45,
      color: postitColor,
      content: "",
    };

    this.model.addPostitToList(postitObject);
    this.view.showPostit(postitObject);
    this.postitCounter++;
  }
}
