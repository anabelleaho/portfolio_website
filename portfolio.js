// First, get a reference to the image.
const image = document.querySelector('avatar');

// Then, define a function that toggles a "glow" CSS class.
function toggleGlow() {
  image.classList.toggle('glow');
}

// Finally, add an event listener that toggles the class when the image is clicked.
image.addEventListener('click', toggleGlow);

