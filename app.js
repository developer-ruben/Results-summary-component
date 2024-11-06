const list = document.getElementById("list");

document.addEventListener("DOMContentLoaded", init);

function init() {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        list.innerHTML += `
              <li class="summary__item summary__item--${item.category.toLowerCase()}">
              <img
                class="summary__icon"
                src="${item.icon}"
                alt="${item.category} Test Icon"
              />
              <span class="summary__category">${item.category}</span>
              <div class="summary__score">
                ${item.score} <span class="summary__of">/ 100</span>
              </div>
            </li>
              `;
      });
    });
}
