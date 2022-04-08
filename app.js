const buttons = document.querySelectorAll("span:not(.operator)");
const operators = document.querySelectorAll(".operator");
const screen = document.querySelector("#screen");
const clear = document.querySelector("#clear");
const equals = document.querySelector("#equals");

buttons.forEach(buttons => {
    buttons.addEventListener("click", (event) => {
        screen.textContent += event.target.textContent
    });
});

operators.forEach(operators => {
    operators.addEventListener("click", (event) => {
        screen.textContent = event.target.textContent
    });
});

clear.addEventListener("click", () => {
    screen.textContent = "";
});
