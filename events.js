// Your code here

document.addEventListener(`DOMContentLoaded`, () => {
  window.alert("DOM has loaded");
  const redInput = document.getElementById("red-input");
  const addItemButton = document.getElementById("add-item");
  const ul = document.querySelector("#section-2 > ul");
  const addItemFomr = document.getElementById("list-add");
  const colorSelector = document.getElementById(`color-select`);
  const sectionThree = document.getElementById(`section-3`);
  const removeListeners = document.getElementById("remove-listener");

});

redInput.addEventListener(input, (e) => {
  console.log(e);
  console.log(e.target);
  console.log(e.target.value);
  if (e.target.value === "red") {
    redInput.setAttribute("style", "background-color: red");
  } else {
    redInput.setAttribute("style", "background-color: none");
  }
});

addItemButton.addEventListener(`click`, (e) => {
  console.log(e);
  const val = addItemForm.value;
  const li = document.createElement(`li`);
  li.innerText = val;
  ul.appendChild(li);
  addItemForm.value = ``;
});

colorSelector.addEventListener(`change`, (e) => {
  const val = e.target.value;
  console.log(val);
  sectionThree.style.backgroundColor = val;
});





removeListeners.addEventListener('click', (e) => {


});
