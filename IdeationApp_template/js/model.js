// The Model is a container for data.
// It includes methods that serves the data.
export default class Model {
  constructor() {
    // Model has one attribute: postitList. It is an
    // inventory list. Each postit note is an object
    // in this list.
    // Object relation: composition. If the list is
    // deleted, all postit note objects is deleted too.

    this.postitList = [];
  }

  // ------- Methods that serves data/inventory list ---------- //

  getPostitList() {
    return this.postitList;
  }

  addPostitToList(newPostit) {
    if (newPostit instanceof Object) {
      this.postitList.push(newPostit);
    } else {
      console.log("ERROR: NewPostit is not an object");
    }
  }

  updatePostitPosition(postitId, newPosX, newPosY) {
    if (
      typeof postitId === "string" &&
      typeof newPosX === "number" &&
      typeof newPosY === "number"
    ) {
      const index = this.postitList.findIndex(
        (element, index, array) => element.pid === postitId
      );
      this.postitList[index].posX = newPosX;
      this.postitList[index].posY = newPosY;
    } else {
      console.log(
        "ERROR: postitId, newPosX and/or newPosY does not have the correct datatype(s)"
      );
    }
  }

  deletePostit(postitId) {
    if (typeof postitId === "string") {
      const index = this.postitList.findIndex(
        (element, index, array) => element.pid === postitId
      );
      this.postitList.splice(index, 1);
    } else {
      console.log("ERROR: postitId is not a string");
    }
  }
}
