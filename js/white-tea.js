const items = document.querySelectorAll("#white-tea__list li");
const button = document.getElementById("showMore");
let visibleCount = 5;

button.addEventListener("click", () => {
  visibleCount += 5;
  items.forEach((item, index) => {
    if (index < visibleCount) item.style.display = "list-item";
  });

  if (visibleCount >= items.length) {
    button.style.display = "none"; // Ховаємо кнопку, коли все показано
  }
});