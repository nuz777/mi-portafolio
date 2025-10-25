const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

const modal = document.getElementById("anime-modal");
const modalImg = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");
const modalRating = document.getElementById("modal-rating");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".anime-card").forEach((card) => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img").src;
    const title = card.querySelector(".hover-overlay h3").textContent;
    const desc = card.querySelector(".hidden-desc").textContent;
    const rating = card.querySelector(".hidden-rating").textContent;

    modalImg.src = img;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalRating.textContent = rating;

    modal.style.display = "flex";
    document.body.classList.add("modal-open");
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("fade-out");
  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove("fade-out");
    document.body.classList.remove("modal-open");
  }, 300);
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("fade-out");
    setTimeout(() => {
      modal.style.display = "none";
      modal.classList.remove("fade-out");
      document.body.classList.remove("modal-open");
    }, 300);
  }
});
// End for modals.