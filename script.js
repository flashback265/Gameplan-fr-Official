let cart = [];


/* =========================
   ADD TO CART
========================= */

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCart();

    alert(name + " added to your cart!");
}


/* =========================
   UPDATE CART
========================= */

function updateCart() {

    document.getElementById("cart-count").textContent =
        cart.length;

    const cartItems =
        document.getElementById("cart-items");

    const cartTotal =
        document.getElementById("cart-total");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        const div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `
            <span>${item.name}</span>

            <span>
                $${item.price.toFixed(2)}
                <button
                    onclick="removeItem(${index})"
                    style="
                        margin-left:10px;
                        border:none;
                        background:#e63946;
                        color:white;
                        padding:4px 7px;
                        cursor:pointer;
                    "
                >
                    ×
                </button>
            </span>
        `;

        cartItems.appendChild(div);
    });

    cartTotal.textContent = total.toFixed(2);
}


/* =========================
   REMOVE ITEM
========================= */

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();
}


/* =========================
   OPEN CART
========================= */

function openCart() {

    document.getElementById("cart-modal").style.display =
        "flex";

    updateCart();
}


/* =========================
   CLOSE CART
========================= */

function closeCart() {

    document.getElementById("cart-modal").style.display =
        "none";
}


/* =========================
   SEARCH PRODUCTS
========================= */

function searchProducts() {

    const search =
        document.getElementById("search")
        .value
        .toLowerCase();

    const products =
        document.querySelectorAll(".product");

    products.forEach(product => {

        const name =
            product.dataset.name.toLowerCase();

        if (name.includes(search)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });
}


/* =========================
   FILTER PRODUCTS
========================= */

function filterProducts() {

    const category =
        document.getElementById("category").value;

    const products =
        document.querySelectorAll(".product");

    products.forEach(product => {

        if (
            category === "all" ||
            product.dataset.category === category
        ) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });
}


/* =========================
   CONTACT FORM
========================= */

function sendMessage(event) {

    event.preventDefault();

    alert(
        "Thank you for contacting GamePlan! 👕"
    );

    event.target.reset();
}


/* =========================
   CHECKOUT
========================= */

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }

    alert(
        "Thank you for shopping with GamePlan! 🛍️"
    );

    cart = [];

    updateCart();

    closeCart();
}