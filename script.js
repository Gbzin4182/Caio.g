const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");

let index = 0;
const total = images.length;

// Atualiza slide
function updateSlide() {
  slides.style.transform = `translateX(${-index * 100}%)`;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

// Botões
nextBtn.addEventListener("click", () => {
  index = (index + 1) % total;
  updateSlide();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + total) % total;
  updateSlide();
});

// Dots
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    updateSlide();
  });
});

// Auto play
setInterval(() => {
  index = (index +1) % total;
  updateSlide();
}, 8000); // troca a cada 8s
