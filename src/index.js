import "./styles.css";

const imgContainer = document.querySelectorAll('.img-container img');
const mainImage = document.querySelector('.main-image');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.previous');
const dotsContainer = document.getElementById('dots');

const imgSources = Array.from(imgContainer).map(img => img.src);
let currentIndex = 0;

// Create dot indicators
imgSources.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dot.dataset.index = index;
  dotsContainer.appendChild(dot);
});

// Function to update image and active dot
function updateCarousel() {
  mainImage.src = imgSources[currentIndex];
  document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
  document.querySelector(`.dot[data-index="${currentIndex}"]`).classList.add('active');
}

updateCarousel();

// Next button event
nextBtn.addEventListener('click', () => {
  currentIndex = ( currentIndex + 1 ) % imgSources.length;
  updateCarousel();
})

// Previous button event
previousBtn.addEventListener('click', () => {
  currentIndex = ( currentIndex - 1 + imgSources.length) % imgContainer.length;
  updateCarousel();
})

dotsContainer.addEventListener('click', e => {
  if (e.target.classList.contains('dot')) {
    currentIndex = Number(e.target.dataset.index);
    updateCarousel();
  }
});

// Auto slide
setInterval(() => {
  currentIndex = ( currentIndex + 1 ) % imgSources.length;
  updateCarousel();
}, 5000)