let cart = [];
let total = 0;

function addToCart(name, price){
    cart.push({name, price});
    total += price;

    document.getElementById("cart-count").innerText = cart.length;

    document.getElementById("cart-items").innerHTML +=
        `<p>${name} - ₹${price}</p>`;

    document.getElementById("total").innerText = total;
}

function toggleCart(){
    document.querySelector(".cart-sidebar").classList.toggle("active");
}

function checkout(){
    if(cart.length === 0){
        alert("Your cart is empty!");
    } else {
        alert("Order Placed Successfully! (Demo Version)");
        cart = [];
        total = 0;
        document.getElementById("cart-count").innerText = 0;
        document.getElementById("cart-items").innerHTML = "";
        document.getElementById("total").innerText = 0;
        toggleCart();
    }
}

function scrollToProducts(){
    document.getElementById("products").scrollIntoView({
        behavior:"smooth"
    });
}

document.getElementById("menu-toggle").addEventListener("click", function(){
    document.querySelector(".nav-links").classList.toggle("active");
});

document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
});