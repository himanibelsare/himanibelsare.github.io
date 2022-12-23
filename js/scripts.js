const form = document.querySelector("form");
const ul = document.querySelector("#newsList");
const button = document.querySelector("button");
const input = document.getElementById("item");

let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

localStorage.setItem("items", JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem("items"));

const liMaker = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
});

data.forEach((item) => {
  liMaker(item);
});

button.addEventListener("click", function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});


const colourbtn = document.getElementById("clrBtn");

let colourcount = 0;

colourbtn.addEventListener("click", function onClick(e) {
  e.preventDefault();

  switch (colourcount) {
    case 0:
      document.body.style.backgroundColor = "purple";
      colourcount++;
      break;
    case 1:
      document.body.style.backgroundColor = "red";
      colourcount++;
      break;
    case 2:
      document.body.style.backgroundColor = "blue";
      colourcount++;
      break;
    case 3:
      document.body.style.backgroundColor = "green";
      colourcount++;
      break;
    case 4:
      document.body.style.backgroundColor = "white";
      colourcount = 0;
      break;
  }
});

const list = document.getElementsByClassName("para");
const fontbtn = document.getElementById("fontBtn");

let fontcnt = 0;

fontbtn.addEventListener("click", function onClick(e) {
  e.preventDefault();
  switch (fontcnt) {
    case 0:
      for(let i = 0; i < list.length; i++)
      {
        temp = list[i];
        temp.style.fontSize = "26px";
      }
      fontcnt++;
      break;
    case 1:
      for(let i = 0; i < list.length; i++)
      {
        temp = list[i];
        temp.style.fontSize = "28px";
      }
      fontcnt++;
      break;
    case 2:
      for(let i = 0; i < list.length; i++)
      {
        temp = list[i];
        temp.style.fontSize = "24px";
      }
      fontcnt = 0;
      break;
  }
});
