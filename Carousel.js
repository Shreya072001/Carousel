const carouselItems = document.querySelectorAll('.carousel-item');
let currentItem = 0;

function showItem() {
  carouselItems[currentItem].classList.add('active');
}

function hideItem() {
  carouselItems[currentItem].classList.remove('active');
}

function nextItem() {
  hideItem();
  currentItem = (currentItem + 1) % carouselItems.length;
  showItem();
}

function previousItem() {
  hideItem();
  currentItem = (currentItem - 1 + carouselItems.length) % carouselItems.length;
  showItem();
}

// Automatically switch to the next item every 3 seconds
setInterval(nextItem, 3000);

// Show the initial item
showItem();
