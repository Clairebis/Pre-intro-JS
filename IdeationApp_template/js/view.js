// The View handles the user's interaction
// with the UI and is responsible for the
// display of data/information.

export default class View {
  constructor(presenter) {
    const self = this;
    self.presenter = presenter;

    const header = document.getElementById("header");
    const main = document.getElementById("main");
    const color = document.getElementById("colorselector");

    // HTML header element ONCLICK event delegation
    header.onclick = function (event) {
      switch (event.target.id) {
        case "newpostit":
          self.presenter.createPostit(color.value);
          break;
      }
    };

    // HTML main element ONKEYUP event delegation

    // HTML main element ONCLICK event delegation
    main.onclick = function (event) {
      const htmlTagType = event.target.type;
      /*the only buttons on the canvas are the delete buttons*/
      if (htmlTagType === "button") {
        if (self.showConfirmDialog("Do you really wait to delete this?")) {
          const postitId = event.target.dataset.id;
          self.presenter.deletePostit(postitId); /*removes it visually*/
          document.getElementById(postitId).ondragstart = null;
          document.getElementById(postitId).remove();
          self.showMessage("Postit deleted!");
        }
      }
    };

    // HTML main element DRAGOVER (drop target)
    main.ondragover = function (event) {
      event.preventDefault();
    };

    // HTML main element ONDROP
    main.ondrop = function (event) {
      event.preventDefault();
      const postitId = event.dataTransfer.getData("text");
      document.getElementById(postitId).position = "absolute";
      document.getElementById(postitId).style.top = event.clientY + "px";
      document.getElementById(postitId).style.left = event.clientX + "px";
      self.presenter.updatePostitPosition(
        postitId,
        event.clientX,
        event.clientY
      );
    };
  } // End of constructor

  // ------- Methods that serves the view ---------- //
  showMessage(message) {
    const messageField = document.getElementById("messagefield");
    messageField.value = message;
  }

  showConfirmDialog(message) {
    const dialogAnswer = confirm(message);
    return dialogAnswer; /*can be true or false*/
  }

  showPostit(postitObject) {
    const postitHTML = `
    <section class="postitsection" draggable="true" id="${postitObject.pid}">
      <div class="textareatop"><span class="postitarrow">&nbsp;&nwarr;</span>
        <button type="button" data-id="${postitObject.pid}" class="postitdeletebtn">X</button>
      </div>
      <textarea class="textarea" data-id="${postitObject.pid}" id="${postitObject.tid}">${postitObject.content}</textarea>
    </section>
    `;

    const main = document.getElementById("main");
    main.insertAdjacentHTML("beforeend", postitHTML);

    const postitElement = document.getElementById(postitObject.pid);
    postitElement.ondragstart = function (event) {
      event.dataTransfer.setData("text", event.target.id);
    };

    document.getElementById(postitObject.pid).style.position = "absolute";
    document.getElementById(postitObject.pid).style.top =
      postitObject.posY + "px";
    document.getElementById(postitObject.pid).style.left =
      postitObject.posX + "px";
    document.getElementById(postitObject.pid).style.backgroundColor =
      postitObject.color;
    document.getElementById(postitObject.tid).style.backgroundColor =
      postitObject.color;
  }
} // End of class
