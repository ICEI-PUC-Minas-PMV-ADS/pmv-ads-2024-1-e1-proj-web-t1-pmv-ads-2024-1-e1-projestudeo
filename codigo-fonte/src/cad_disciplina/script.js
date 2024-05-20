document.addEventListener('DOMContentLoaded', () => {
    const colorSwatches = document.querySelectorAll('.color-swatch');
    const colorInput = document.getElementById('colorInput');
    const selectedColorDisplay = document.getElementById('selectedColorDisplay');

    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            const color = swatch.getAttribute('data-color');
            updateColor(color);
            colorSwatches.forEach(s => s.classList.remove('selected'));
            swatch.classList.add('selected');
        });
    });

    colorInput.addEventListener('input', () => {
        const color = colorInput.value;
        if (/^#([0-9A-F]{3}){1,2}$/i.test(color)) {
            updateColor(color);
            colorSwatches.forEach(s => s.classList.remove('selected'));
        }
    });

    function updateColor(color) {
        colorInput.value = color;
        selectedColorDisplay.style.backgroundColor = color;
    }
});