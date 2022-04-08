const operators = document.querySelectorAll(".operator")
const screen = document.querySelector("#screen")
const buttons = document.querySelectorAll(".buttons")

operators.forEach(operator => {
    operator.addEventListener("click", (event) => {
        screen.textContent = event.target.textContent
    })
})

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        screen.textContent = event.target.textContent
    })
})