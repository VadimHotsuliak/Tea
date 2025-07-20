document.addEventListener("DOMContentLoaded", () => {
    const leftBtn = document.querySelector(".top__tea-left__btn");
    const rightBtn = document.querySelector(".top__tea-right__btn");
    const numberDisplay = document.querySelector(".top__tea-number");
    const amountDisplay = document.querySelector(".top__tea-amount");

    let currentUnits = 1;
    let baseGrams = 250;

    const updateDisplay = () => {
        numberDisplay.textContent = currentUnits;
        amountDisplay.textContent = `${baseGrams * currentUnits}g`;
    };

    rightBtn.addEventListener("click", () => {
        if (currentUnits < 20) {
            currentUnits++;
            updateDisplay();
        }
    });

    leftBtn.addEventListener("click", () => {
        if (currentUnits > 1) {
            currentUnits--;
            updateDisplay();
        }
    });

    updateDisplay(); // початкове оновлення
});

document.addEventListener("DOMContentLoaded", () => {
    const leftBtn = document.querySelector(".top__tea-left__btn");
    const rightBtn = document.querySelector(".top__tea-right__btn");
    const numberDisplay = document.querySelector(".top__tea-number");
    const amountDisplay = document.querySelector(".top__tea-amount");
    const buyBtn = document.querySelector(".top__buy-btn");

    let currentUnits = 1;
    const baseGrams = 250;

    const updateDisplay = () => {
        numberDisplay.textContent = currentUnits;
        amountDisplay.textContent = `${baseGrams * currentUnits}g`;
    };

    rightBtn.addEventListener("click", () => {
        if (currentUnits < 20) {
            currentUnits++;
            updateDisplay();
        }
    });

    leftBtn.addEventListener("click", () => {
        if (currentUnits > 1) {
            currentUnits--;
            updateDisplay();
        }
    });

    buyBtn.addEventListener("click", () => {
        currentUnits = 1; // скидає значення
        updateDisplay();
    });

    updateDisplay(); // початкове значення
});