let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({name, price});
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}

function loadCart() {
    let container = document.getElementById("cart-items");
    let total = 0;
    container.innerHTML = "";

    cart.forEach((item, index) => {
        total += item.price;
        container.innerHTML += `
            <p>${item.name} - ₹${item.price} 
            <button onclick="removeItem(${index})">Remove</button></p>
        `;
    });

    document.getElementById("total").innerText = "Total: ₹" + total;
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}
