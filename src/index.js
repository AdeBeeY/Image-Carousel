import "./styles.css";

const imgContainer = document.querySelectorAll('.img-container img');
const mainImage = document.querySelector('.main-image');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.previous');

const imgSources = Array.from(imgContainer).map(img => img.src);
let currentIndex = 0;

// Display main image
mainImage.src = imgSources[currentIndex];

// Next button event
nextBtn.addEventListener('click', () => {
  currentIndex = ( currentIndex + 1 ) % imgSources.length;
  mainImage.src = imgSources[currentIndex];
})

// Previous button event
previousBtn.addEventListener('click', () => {
  currentIndex = ( currentIndex - 1 + imgSources.length) % imgContainer.length;
  mainImage.src = imgSources[currentIndex];
})