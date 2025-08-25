
let dishs = [
    {
        "name": "Pizza Margherita",
        "ingredients": "mit Mozarella",
        "price": 8.50,
        "category": "main"
    },
    {
        "name": "Pizza Salami",
        "ingredients": "mit Salami und Mozarella",
        "price": 10.50,
        "category": "main"      
    },
    {
        "name": "Pizza Funghi",
        "ingredients": "mit Pilzen und Mozarella",
        "price": 9.50,
        "category": "main" 
    },
    {
        "name": "Pizza Parma",
        "ingredients": "mit Parmaschinken, Rucola und Mozarella",
        "price": 13.00,
        "category": "main" 
    },
    {
        "name": "Bruschetta",
        "ingredients": "mit Tomaten, Zwiebeln und Knoblauch",
        "price": 4.50,
        "category": "starter" 
    },
    {
        "name": "Antipasti Teller",
        "ingredients": "Artischocken, Pepperoni, Zucchini, Paprika und Tomaten",
        "price": 14.50,
        "category": "starter" 
    },
    {
        "name": "Tiramisu",
        "ingredients": "mit abwechselnden Schichten von Löffelbiskuits und einer Creme aus Mascarpone",
        "price": 5.50,
        "category": "dessert" 
    },
    {
        "name": "Cheesecake",
        "ingredients": "mit vollmundiger Käsecréme aus Frischkäse und Mascarpone",
        "price": 5.50,
        "category": "dessert" 
    },
]

let cart = []
let amount = []
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
}


function getHTML(index) {
    return `
           <div id="${dishs[index].category}_${index}" class="dish">
                <div class="dish_details">
                    <h3>${dishs[index].name}</h3>
                    <p id="dish_ingredients_${index}" class="dish_ingredients"> ${dishs[index].ingredients} </p>
                    <p id="dish_price_${index}" class="dish_price">${dishs[index].price.toFixed(2)}€</p>
                </div>
                <div class="add_dish" onclick="addToCart(${index})"><img src="./assets/icons/icon_add.png" alt="Bild eines Pluszeichens"></div>
            </div> 
            `
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
        let dish_total_costs = 0;
    for (i=0; i< cart.length;i++) {
        let priceDish = cart[i].price * amount[i]
        dish_total_costs += priceDish
        document.getElementById("cart_dishes").innerHTML += getCartHTML(i, priceDish,)
        }
    document.getElementById("cart_dishes").innerHTML += getTotalCostsHTML(dish_total_costs)
}


function getMenuIndex(index) {
    let menu = dishs[index]
    let menuIndex = cart.indexOf(menu)
    return menuIndex
}

function getCartHTML(i, priceDish,) {
    return  `
                <div id="cart_dish_${i}" class="cart_dish">
                    <h3>${cart[i].name}</h3>
                    <div id="cart_details">
                        <div id="cart_dish_amount">
                            <button><img src="./assets/icons/icon_remove.png" alt="Icon von einem Minus" onclick="reduceAmount(${i})"></button>
                            <span>${amount[i]}</span> 
                            <button><img src="./assets/icons/icon_add.png" alt="Icon von einem Plus" onclick="increaseAmount(${i})"></button>
                        </div>
                        <span id="price_sum">${priceDish.toFixed(2)} €</span>
                        <button id="cart_dish_delete_1" class="cart_dish_delete" onclick="removeItemFromCart(${i})"><img src="./assets/icons/icon_trash.png" alt="Icon eines Mülleimers"></button>
                    </div>
                </div>

            `
}

function getTotalCostsHTML(dish_total_costs) {
    return  `
                <div id="total_costs">
                    <hr>
                    <div id="sum_food">
                        <p>Zwischensumme</p>
                        <p>${dish_total_costs.toFixed(2)} €</p>
                    </div>
                    <div id="delivery_fee">
                        <p>Lieferkosten</p>
                        <p>${delivery_costs.toFixed(2)} €</p>
                    </div>
                    <div id="total_cost">
                        <p>Gesamt</p>
                        <p>${(dish_total_costs + delivery_costs).toFixed(2)} €</p>
                    </div>
                </div>
            `
}

function reduceAmount(i) {
    amount[i] --;
    renderCart()
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

function switchDeliveryMode(mode1, mode2) {
    document.getElementById(mode1).classList.add("active_now")
    document.getElementById(mode2).classList.remove("active_now")

    if (document.getElementById("self_collect").classList.contains("active_now")) {
        delivery_costs = 0;
    }
    else {
        delivery_costs = 5;
    }
    renderCart()
}