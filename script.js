const previusOperationText = document.querySelector("#previous-operation")
const currentOperationText = document.querySelector("#current-operation")
const buttons = document.querySelectorAll("button-container button")

class calculator {
    constructor(previusOperationText, currentOperationText) {
    this.previusOperationText = previusOperationText
    this.currentOperationText = currentOperationText
    this.currentOperationText = "";
    }

// addDigit to calculator screen
    addDigit(digit) {
        this.currentOperation = digit
        this.updatescreen()

    }

// change values of the calculator screen
    updatescreen() {
        this.currentOperationText.innerText += this.currentOperation; 
    }
}

const calc = new calculator(previusOperationText, currentOperationText);

buttons.forEach ((btn) => {
    btn.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if(+value >= 0 || value === ".") {
        calc.addDigit(value);
   } else {
    console.log("Op: " + value);
   }

    });
});