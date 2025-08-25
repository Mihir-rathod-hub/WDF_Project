document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".card-track");
  const cards = document.querySelectorAll(".card");
  const prevBtn = document.querySelector(".arrow.left");
  const nextBtn = document.querySelector(".arrow.right");

  let index = 1; // Start at first real card
  const totalCards = cards.length;

  // Clone first and last card
  const firstClone = cards[0].cloneNode(true);
  const lastClone = cards[totalCards - 1].cloneNode(true);

  firstClone.classList.add("clone");
  lastClone.classList.add("clone");

  track.appendChild(firstClone);
  track.insertBefore(lastClone, cards[0]);

  const allCards = document.querySelectorAll(".card");
  const totalSlides = allCards.length;

  // Track width
  track.style.transform = `translateX(-${index * 100}%)`;

  function moveToSlide() {
    track.style.transition = "transform 0.5s ease";
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  function jumpToSlide() {
    track.style.transition = "none"; // instant jump
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener("click", () => {
    if (index >= totalSlides - 1) return;
    index++;
    moveToSlide();
  });

  prevBtn.addEventListener("click", () => {
    if (index <= 0) return;
    index--;
    moveToSlide();
  });

  track.addEventListener("transitionend", () => {
    if (allCards[index].classList.contains("clone")) {
      if (index === totalSlides - 1) {
        index = 1; // jump back to first real card
      } else if (index === 0) {
        index = totalCards; // jump to last real card
      }
      jumpToSlide();
    }
  });
});
