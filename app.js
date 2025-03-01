const list = document.getElementById("list");

document.addEventListener("DOMContentLoaded", () => {
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        const newLi = createLi(item);

        list.appendChild(newLi);
      });
    });
});

function createLi(item) {
  const newLi = document.createElement("li");
  newLi.className =
    "summary__item summary__item--" + item.category.toLowerCase();

  newLi.innerHTML = `
              <img
                src="${item.icon}"
                width="20"
                height="20"
                alt=""
              />
              <span class="summary__item-title">${item.category}</span>
              <div class="summary__item-info">
                <span>${item.score}</span>
                <span class="summary__item-of">/ 100</span>
              </div>
        `;

  return newLi;
}
