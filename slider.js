// Get the slider element
const blurSlider = document.getElementById('blurSlider');

// Function to update the blur filter based on slider value
blurSlider.addEventListener('input', function() {
    const blurValue = blurSlider.value;
    // Apply the blur effect to the background wrapper
    document.querySelector('.background').style.filter = `blur(${blurValue}px)`;
});
