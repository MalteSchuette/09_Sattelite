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

function getCartButtonHTML() {
    return ` <button id="low_width_cart"  onclick="toggleCart()">Warenkorb</button>`
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
                    <button id="cart_checkout" onclick="cartCheckout()">Jetzt bestellen!</button>
                </div>
            `
}

function getCheckoutHTML() {
    return  `
            <div id="checkout_message">
                <p>Deine Bestellung wurde gesendet. <br> Du erhälst in Kürze eine Bestätigung via Email.</p> <button onclick="renderCart(); closeCart()" >ok</button>

            </div>
            `
}