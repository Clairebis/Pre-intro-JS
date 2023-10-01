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

  saveToDisk() {
    let dialogAnswer = true;
    const dataToSave = JSON.stringify(
      this.model.getPostitList()
    ); /*want to save all postits*/

    if (localStorage.getItem("postits") !== null) {
      dialogAnswer = this.view.showConfirmDialog(
        "Content exists on disk. Overwrite it?"
      );
    }

    if (dialogAnswer) {
      localStorage.setItem("postits", dataToSave);
      this.view.showMessage("Postit notes were saved successfully!");
    } else {
      this.view.showMessage("Nothing was saved!");
    }
  }

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

  deletePostit(postitId) {
    this.model.deletePostit(postitId);
  }

  updatePostitPosition(postitId, newPosX, newPosY) {
    this.model.updatePostitPosition(postitId, newPosX, newPosY);
  }
}
