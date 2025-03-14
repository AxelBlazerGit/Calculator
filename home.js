// Calculator functionality
const display = document.getElementById("calcDisplay");
const buttons = document.querySelectorAll(".calcButtons button");

// Event listener for button clicks
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;
        
        if (button.classList.contains("number") || button.classList.contains("operator")) {
            display.value += value;
        } else if (button.classList.contains("clear")) {
            clearDisp();
        } else if (button.classList.contains("backspace")) {
            backspace();
        } else if (button.classList.contains("equals")) {
            calculate();
        }
    });
});

// Clear display
function clearDisp() {
    display.value = "";
}

// Evaluate expression
function calculate() {
    try {
        let expression = display.value.replace(/\^/g, '**').replace("×", '*');
        display.value = eval(expression);
    } catch (error) {
        display.value = "ERROR!";
    }
}

// Remove last character (backspace)
function backspace() {
    display.value = display.value.slice(0, -1);
}
