const swatches = document.querySelectorAll('.swatch');

// Define the handler function
function changeSwatchColor() {
    const color = this.dataset.color;
    this.style.backgroundColor = color;
}

// Attach the handler to each swatch
swatches.forEach(function(swatch) {
    swatch.addEventListener("click", changeSwatchColor);
});
