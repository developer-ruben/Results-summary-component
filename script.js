const scoreListEl = document.getElementById("score-list");

scoreListEl.innerHTML = "<li>Loading...</li>";

async function loadScores() {
  try {
    const res = await fetch("/data.json");

    if (!res.ok) throw new Error("Failed to fetch data");

    const data = await res.json();

    const itemsHTML = data
      .map(
        (item) => `
      <li class="summary-component__item summary-component__item--${item.category.toLowerCase().replace(/\s+/g, "-")}">
        <img class="summary-component__item-icon" src="${item.icon}" alt="" />
        <span class="summary-component__item-title">${item.category}</span>
        <div class="summary-component__item-right">
          <span>${item.score}</span>
          <span class="summary-component__item-full">/ 100</span>
        </div>
      </li>
    `,
      )
      .join("");

    scoreListEl.innerHTML = itemsHTML;
  } catch (err) {
    console.error(err);
    scoreListEl.innerHTML = "<li>Failed to load data</li>";
  }
}

loadScores();
