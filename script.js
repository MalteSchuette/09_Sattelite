let cart = []
let amount = []
let delivery = true;
let delivery_costs = 5.00


function init() {
    renderDishs()
}

function renderDishs() {
    for (index = 0; index < dishs.length; index++) {
        if (dishs[index].category == "starter") {
           let starterRef = document.getElementById("starter_content");
           starterRef.innerHTML += getHTML(index);
        }
        else if (dishs[index].category == "main") {
            let mainRef = document.getElementById("main_dish_content");
            mainRef.innerHTML += getHTML(index);
        }
        else if (dishs[index].category == "dessert") {
            let dessertRef = document.getElementById("dessert_content");
            dessertRef.innerHTML += getHTML(index);
        }
    }
    document.getElementById("low_width_cart_div").innerHTML += getCartButtonHTML();
}

function addToCart(index) {
    if (getMenuIndex(index) == -1) {
    cart.push(dishs[index]);
    amount.push(1);
    }
    else {
        amount[getMenuIndex(index)] += 1;
    }
    renderCart();
}

function renderCart() {
        document.getElementById("cart_dishes").innerHTML = "";
        document.getElementById("low_width_cart_content").innerHTML = "";
        document.getElementById("total_costs").innerHTML = "";
        document.getElementById("low_width_total_costs").innerHTML = ""
        let dish_total_costs = 0;
    for (i=0; i< cart.length;i++) {
        let priceDish = cart[i].price * amount[i]
        dish_total_costs += priceDish
        document.getElementById("cart_dishes").innerHTML += getCartHTML(i, priceDish,)
        document.getElementById("low_width_cart_content").innerHTML += getCartHTML(i, priceDish,)
        }
    document.getElementById("total_costs").innerHTML += getTotalCostsHTML(dish_total_costs)
    document.getElementById("low_width_total_costs").innerHTML += getTotalCostsHTML(dish_total_costs)
}

function getMenuIndex(index) {
    let menu = dishs[index]
    let menuIndex = cart.indexOf(menu)
    return menuIndex
}

function reduceAmount(i) {
    amount[i] --;
    if (amount[i] <= 0) {
        removeItemFromCart(i)
    }
    else {
    renderCart()
    }
}

function increaseAmount(i) {
    amount[i] ++;
    renderCart()
}

function removeItemFromCart(i) {
    cart.splice(i, 1)
    amount.splice(i, 1)
    renderCart()
}

function switchDeliveryMode(mode) {
    delivery = mode;

    if (delivery == true) {
        activateDeliveryButton()
        delivery_costs = 5;
    }
    else if (delivery == false) {
        activateCollectButton()
        delivery_costs = 0;
    }
    renderCart();
}

function activateDeliveryButton() {
        document.getElementById("delivery_service").classList.add("active_now")
        document.getElementById("delivery_service_low").classList.add("active_now")
        document.getElementById("self_collect").classList.remove("active_now")
        document.getElementById("self_collect_low").classList.remove("active_now")
}

function activateCollectButton() {
        document.getElementById("delivery_service").classList.remove("active_now")
        document.getElementById("delivery_service_low").classList.remove("active_now")
        document.getElementById("self_collect").classList.add("active_now")
        document.getElementById("self_collect_low").classList.add("active_now")
}

function cartCheckout() {
    if (cart != "") {
    cart = []
    amount = []
    document.getElementById("cart_dishes").innerHTML = getCheckoutHTML()
    document.getElementById("low_width_cart_content").innerHTML = getCheckoutHTML()
    }
}

function toggleCart() {
    document.getElementById("low_width_cart_fullscreen").classList.toggle("d_none")
    renderCart();
}

function closeCart() {
    if (document.getElementById("low_width_cart_fullscreen").classList.contains("d_none") == false) {
        toggleCart()
    }
}