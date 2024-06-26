// Get the display element
const display = document.getElementById('display');

// Clear the display
function clearDisplay() {
    display.innerText = '';
}

// Delete the last character from the display
function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
}

// Append a value to the display
function appendToDisplay(value) {
    display.innerText += value;
}

// Calculate and display the result
function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = 'Error';
    }
}

// Add event listener for keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Append numbers and operators to the display
    if (key >= 0 && key <= 9) {
        appendToDisplay(key);
    } else if (key === 'Enter' || key === '=') {
        // Calculate the result on Enter or '=' key
        calculateResult();
    } else if (key === 'Backspace') {
        // Delete the last character on Backspace key
        deleteLast();
    } else if (key === 'Escape') {
        // Clear the display on Escape key
        clearDisplay();
    } else if (['+', '-', '*', '/', '%', '.'].includes(key)) {
        // Append operators and decimal point to the display
        appendToDisplay(key);
    }
});
