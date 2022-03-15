let input = document.querySelector(".add-input");
const form = document.querySelector("form");
const addBtn = document.querySelector(".add-button");
const clearBtn = document.querySelector(".clear-button");
const ul = document.querySelector("ul");
const span = document.querySelector("span");
let repo;
let countli = span.innerText;

ul.innerHTML = JSON.parse(localStorage.getItem("repo")) || "";
span.innerText = JSON.parse(localStorage.getItem("count"));

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  add();
});
clearBtn.addEventListener("click", () => {
  clear();
});

function add() {
  let li = document.createElement("li");
  if (input.value) {
    li.innerHTML = input.value;
    ul.appendChild(li);
    form.reset();
    input.focus();
    repo = ul.innerHTML;
    localStorage.setItem("repo", JSON.stringify(repo));
    countli = document.querySelectorAll("li").length;
    span.textContent = countli;
    localStorage.setItem("count", JSON.stringify(countli));
  }
}

function clear() {
  if (countli) {
    ul.lastChild.remove();
    repo = ul.innerHTML;
    countli = document.querySelectorAll("li").length;
    localStorage.setItem("repo", JSON.stringify(repo));
    span.textContent = countli;
    localStorage.setItem("count", JSON.stringify(countli));
  }
}
