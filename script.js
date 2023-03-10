const submitBtn = document.querySelector(".btn");
const pointContainer = document.querySelector(".rating-points");
const allPoints = document.querySelectorAll(".point");
const ratingContainer = document.querySelector(".container-rating");
const thanksContainer = document.querySelector(".container-thanks");
let rating;

pointContainer.addEventListener("click", function (e) {
  const target = e.target;

  if (!target) return;

  if (target.classList.contains("point")) {
    allPoints.forEach((point) => {
      if (point.classList.contains("active")) point.classList.remove("active");
    });
    rating = target.dataset.point;
    target.classList.add("active");
  }
});

submitBtn.addEventListener("click", function () {
  document.querySelector(".selection").textContent = rating;
  ratingContainer.classList.add("close");
  thanksContainer.classList.remove("close");
});
