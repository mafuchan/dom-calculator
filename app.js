const buttons = document.querySelectorAll("span:not(.operator)");
const operators = document.querySelectorAll(".operator");
const screen = document.querySelector("#screen");
const clear = document.querySelector("#clear");

buttons.forEach(buttons => {
    buttons.addEventListener("click", (event) => {
        screen.textContent += event.target.textContent
    });
});

operators.forEach(operators => {
    operators.addEventListener("click", (event) => {
        if (operators.textContent === "=") {
            screen.textContent = eval(screen.textContent)
            const result = eval(screen.textContent)
            screen.textContent = result == Infinity
                ? "Error"
                : result;
        } else if (operators.textContent === "÷") {
            screen.textContent += "/"
        } else if (operators.textContent === "x") {
            screen.textContent += "*"
        } else if (operators.textContent === "+") {
            screen.textContent += "+"
        } else if (operators.textContent === "-") {
            screen.textContent += "-"
        } else {
            screen.textContent = event.target.textContent;
        }
    });
});

clear.addEventListener("click", (event) => {
    screen.textContent = "";
});
