const textInput = document.getElementById("textInput");
const textCount = document.getElementById("textCount");
textInput.addEventListener("input", () => {
  textCount.innerHTML = `${textInput.value.length} / 250`;
  if (textInput.value.length >= 250) {
    textCount.style.color = "red";
  } else {
    textCount.style.color = "initial";
    console.log(textInput.value.length);
  }
});
