document.addEventListener("DOMContentLoaded", () => {
    const leftBtn = document.querySelector(".top__tea-left__btn");
    const rightBtn = document.querySelector(".top__tea-right__btn");
    const numberDisplay = document.querySelector(".top__tea-number");
    const amountDisplay = document.querySelector(".top__tea-amount");
    const priceDisplay = document.querySelector(".top__tea-number-price");
    const buyBtn = document.querySelector(".top__buy-btn");
    const cartCount = document.querySelector(".cart-count");

    let currentUnits = 1;
    const baseGrams = 250;
    const basePrice = 98.00;
    const maxUnits = 20;

    // Отримуємо id товару з назви на сторінці
    const productTitle = document.querySelector("h1")?.textContent.trim();
    const productId = productTitle ? productTitle.toLowerCase().replace(/\s+/g, "-") : window.location.pathname;

    // Глобальна функція оновлення кількості товарів у кошику
    window.updateCartCount = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || {};
        const uniqueItems = Object.keys(cart).length;

        if (cartCount) {
            cartCount.textContent = uniqueItems;
            cartCount.classList.toggle("visible", uniqueItems > 0);
        }
    };

    const updateDisplay = () => {
        numberDisplay.textContent = currentUnits;
        amountDisplay.textContent = `${baseGrams * currentUnits}g`;
        priceDisplay.textContent = `${(basePrice * currentUnits).toFixed(2)}$`;
    };

    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || {};

        if (cart[productId]) {
            cart[productId] += currentUnits; // Якщо товар вже є — додаємо кількість
        } else {
            cart[productId] = currentUnits; // Якщо новий товар — додаємо ключ
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
    };

    rightBtn?.addEventListener("click", () => {
        if (currentUnits < maxUnits) {
            currentUnits++;
            updateDisplay();
        }
    });

    leftBtn?.addEventListener("click", () => {
        if (currentUnits > 1) {
            currentUnits--;
            updateDisplay();
        }
    });

    buyBtn?.addEventListener("click", () => {
        addToCart();
        alert(`Added ${baseGrams * currentUnits}g tea for ${(basePrice * currentUnits).toFixed(2)}$`);
        currentUnits = 1;
        updateDisplay();
    });

    updateDisplay();
    updateCartCount();
});
