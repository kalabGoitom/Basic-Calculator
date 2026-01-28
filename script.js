const screenEl = document.getElementById("screen");

function appendToScreen(val) {
  screenEl.value += val;
}

function del() {
  screenEl.value = screenEl.value.slice(0, -1);
}

function clearScreen() {
  screenEl.value = "";
}

function calc() {
  try {
    screenEl.value = eval(screenEl.value);
  } catch (error) {
    screenEl.value = "error";
  }
}
