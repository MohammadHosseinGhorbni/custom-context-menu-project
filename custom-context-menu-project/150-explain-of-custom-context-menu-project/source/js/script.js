let contextMenuElem = document.querySelector("#contextMenu");
// console.log(contextMenuElem);

function contextHandler(event) {
  event.preventDefault();
  if (contextMenuElem.style.display === "none") {
    contextMenuElem.style.left = event.pageX + "px";
    contextMenuElem.style.top = event.pageY + "px";
    contextMenuElem.style.display = "block";
  } else {
    contextMenuElem.style.left = event.pageX + "px";
    contextMenuElem.style.top = event.pageY + "px";
  }
}

function clickHandler() {
  contextMenuElem.style.display = "none";
}

function keyUpHandler(event) {
  if (event.keyCode === 27) {
    contextMenuElem.style.display = "none";
  }
}

document.body.addEventListener("contextmenu", contextHandler);
document.body.addEventListener("click", clickHandler);
document.body.addEventListener("keyup", keyUpHandler);
