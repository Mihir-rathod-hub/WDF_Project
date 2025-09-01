const searchBar = document.getElementById("searchBar");
const cards = document.querySelectorAll(".card");

searchBar.addEventListener("keyup", function () {
  const query = this.value.toLowerCase();

  cards.forEach(card => {
    const title = card.querySelector("h2").textContent.toLowerCase();
    const text = card.querySelector("p").textContent.toLowerCase();

    if (title.includes(query) || text.includes(query)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
});


const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    // remove active state from all buttons
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.getAttribute("data-category");

    cards.forEach(card => {
      if (category === "all" || card.getAttribute("data-category") === category) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});
