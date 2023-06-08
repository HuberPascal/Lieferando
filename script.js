let vorspeisen = [
    {
        'name': 'Mozzarella Caprese',
        'descripton': 'mit frischen Tomaten, Mozzarella und Basilikum',
        'price': 9.50,
    },
    {
        'name': 'Bruschetta',
        'descripton': 'mit frischen Tomaten, Knoblauch und Basilikum',
        'price': 8.90,
    },
]

let salat = [
    {
        'name': 'Insalata Verde',
        'descripton': 'Grüner Salat',
        'price': 9.50,
    },
    {
        'name': 'Insalata Mista',
        'descripton': 'mit grünem Salat, Tomaten, Gurken und Zwiebeln',
        'price': 8.50,
    },
]


let pizza = [
    {
        'name': 'Pizza Margherita',
        'descripton': 'mit Mozzarella und frischem Basilikum',
        'price': 19.00,
    },
    {
        'name': 'Pizza Salami',
        'descripton': 'mit pikanter Salami',
        'price': 21.00,
    },
    {
        'name': 'Pizza Hawaii',
        'descripton': 'mit Ananas',
        'price': 23.00,
    },
    {
        'name': 'Pizza Ruccola',
        'descripton': 'mit Ruccola, Cherry Tomaten und Parmesan',
        'price': 19.00,
    },
]

let pasta = [
    {
        'name': 'Pasta Bolognese',
        'descripton': 'Zubereitet mit Tomatensauce und Rindshackfleisch',
        'price': 23.00,
    },
    {
        'name': 'Pasta Carbonara',
        'descripton': 'Zubereitet mit Speck, Ei und Parmesan',
        'price': 24.00,
    },
    {
        'name': 'Pasta Napoli',
        'descripton': 'Zubereitet mit Tomatensauce und Basilikum',
        'price': 20.00,
    },
    {
        'name': 'Pasta Calabrese',
        'descripton': 'Zubereitet mit Salsiccia Calabrese, Tomatensauce, Basilikum und Peperoncini',
        'price': 25.00,
    },
]


let fleischgerichte = [
    {
        'name': 'Schweins-Cordon Bleu',
        'descripton': 'Serviert mit Pommes Frites',
        'price': 28.00,
    },
    {
        'name': 'Poulet-Cordon Bleu',
        'descripton': 'Serviert mit Pommes Frites',
        'price': 28.00,
    },
]


let dessert = [
    {
        'name': 'Hausgemachtes Tiramisu',
        'price': 10.00,
    },
    {
        'name': 'Pizza alla Nutella',
        'price': 14.00,
    },
    {
        'name': 'Hausgemachte Panna Cotta',
        'price': 9.50,
    },
]


let foods = [];
let menuDescripton = [];
let prices = [];
let amounts = [];


function render() {
    let foodcards = document.getElementById('food');
    foodcards.innerHTML = /*html*/ `
    <div class="mainFoodImg">
        <img src="./img/pizza.jpg" alt="" />
    </div>
    
    <h4>Pizza</h4>
    `;

    for (let i = 0; i < pizza.length; i++) {
        foodcards.innerHTML += /*html*/ `
        <div onclick="addMenu('${pizza[i].name}', '${pizza[i].descripton}', '${pizza[i].price}')" class="food">
            <div>
                <div class="foodName"><b>${pizza[i].name}</b></div>
                <div class="foodDescripton">${pizza[i].descripton}</div>
                <div class="foodPrice"><b>${pizza[i].price.toFixed(2)} CHF</b></div>
            </div>
            <div class="dishPlus">
                <img src="./img/plus.png" alt="">
            </div>
        </div>
        `;
        }

        renderVorspeisen();
        renderSalat();
        renderPasta();
        renderFleischgerichte();
        renderDessert();
}


function renderVorspeisen() {
        let foodcards = document.getElementById('vorspeise');
        foodcards.innerHTML = /*html*/ `
        <div class="mainFoodImg">
            <img src="./img/bruschetta.jpg" alt="" />
        </div>

        <h4>Vorspeisen</h4>
        `;
    
        for (let i = 0; i < vorspeisen.length; i++) {

            foodcards.innerHTML += /*html*/ `
            <div onclick="addMenu('${vorspeisen[i].name}', '${vorspeisen[i].descripton}', '${vorspeisen[i].price}')" class="food">
                <div>
                    <div class="foodName"><b>${vorspeisen[i].name}</b></div>
                    <div class="foodDescripton">${vorspeisen[i].descripton}</div>
                    <div class="foodPrice"><b>${vorspeisen[i].price.toFixed(2)} CHF</b></div>
                </div>
                
                <div class="dishPlus">
                    <img src="./img/plus.png" alt="">
                </div>
            </div>
            `;          
    }
}


function renderSalat() {
    let foodcards = document.getElementById('salat');
    foodcards.innerHTML = /*html*/ ` 
    <div class="mainFoodImg">
        <img src="./img/salat.jpg" alt="" />
    </div>     

    <h4>Salat</h4>
    `;
 
    for (let i = 0; i < salat.length; i++) {
        foodcards.innerHTML += /*html*/ `
        <div onclick="addMenu('${salat[i].name}', '${salat[i].descripton}', '${salat[i].price}')" class="food">
            <div>
                <div class="foodName"><b>${salat[i].name}</b></div>
                <div class="foodDescripton">${salat[i].descripton}</div>
                <div class="foodPrice"><b>${salat[i].price.toFixed(2)} CHF</b></div>
            </div>
            <div class="dishPlus">
                <img src="./img/plus.png" alt="">
            </div>
        </div>
        `;
    }
}


function renderPasta() {
    let foodcards = document.getElementById('pasta');
    foodcards.innerHTML = /*html*/ ` 
    <div class="mainFoodImg">
        <img src="./img/pasta_tagliatelle.avif" alt="" />
    </div>     

    <h4>Pasta</h4>
    `;

    for (let i = 0; i < pasta.length; i++) {
        foodcards.innerHTML += /*html*/ `
        <div onclick="addMenu('${pasta[i].name}', '${pasta[i].descripton}', '${pasta[i].price}')" class="food">
            <div>
                <div class="foodName"><b>${pasta[i].name}</b></div>
                <div class="foodDescripton">${pasta[i].descripton}</div>
                <div class="foodPrice"><b>${pasta[i].price.toFixed(2)} CHF</b></div>
            </div>
            <div class="dishPlus">
                <img src="./img/plus.png" alt="">
            </div>
        </div>
        `;
    }
}


function renderFleischgerichte() {
    let foodcards = document.getElementById('fleischgerichte');
    // foodcards.innerHTML = '';
    foodcards.innerHTML = /*html*/ ` 
    <div class="mainFoodImg">
        <img src="./img/restaurant_fleisch.avif" alt="" />
    </div>     

    <h4>Fleischgerichte</h4>
    `;

    for (let i = 0; i < fleischgerichte.length; i++) {
        foodcards.innerHTML += /*html*/ `
        <div onclick="addMenu('${fleischgerichte[i].name}', '${fleischgerichte[i].descripton}', '${fleischgerichte[i].price}')" class="food">
            <div>
                <div class="foodName"><b>${fleischgerichte[i].name}</b></div>
                <div class="foodDescripton">${fleischgerichte[i].descripton}</div>
                <div class="foodPrice"><b>${fleischgerichte[i].price.toFixed(2)} CHF</b></div>
            </div>
            <div class="dishPlus">
                <img src="./img/plus.png" alt="">
            </div>
        </div>
        `;
    }
}

function renderDessert() {
    let foodcards = document.getElementById('dessert');
    foodcards.innerHTML = /*html*/ ` 
    <div class="mainFoodImg">
        <img src="./img/dessert.avif" alt="" />
    </div>     

    <h4>Dessert</h4>
    `;

    for (let i = 0; i < dessert.length; i++) {
        foodcards.innerHTML += /*html*/ `
        <div onclick="addMenu('${dessert[i].name}', '${dessert[i].descripton}', '${dessert[i].price}')" class="food">
            <div>
                <div class="foodName"><b>${dessert[i].name}</b></div>
                <div class="foodPrice"><b>${dessert[i].price.toFixed(2)} CHF</b></div>
            </div>
            <div class="dishPlus">
                <img src="./img/plus.png" alt="">
            </div>
        </div>
        `;
    }
}


function addMenu(name, descripton, price) {
    let index = foods.indexOf(name);
    if(index == -1){
        foods.push(name);
        prices.push(price);
        menuDescripton.push(descripton);
        amounts.push(1);
    }else {
        amounts[index]++; 
    }

    renderBasket();
    updateShoppingBasket();
    save();
}


function updateShoppingBasket() {
    let sum = 0;

    for (let i = 0; i < prices.length; i++) {
       let total0 = sum += (prices[i] * amounts[i]);
       let total = total0.toFixed(2);
       
    let warenkorb = document.getElementById('warenkorbSumme');
    warenkorb.innerHTML = /*html*/ `
    <div class="calculatorCard">  
            <p class="sumPayContainer">Zwischensumme<span>${total} CHF</span></p>
            <p class="sumPayContainer">Lieferkosten<span class="green">Kostenlos</span></p>
            <button class="payButton">Bezahlen (${total} CHF)</button>    
    </div> 
 `;

    responsiveBtn(total);
    }
    
    
}

function responsiveBtn(total) {
    let button = document.getElementById('responsiveBtn');
    button.innerHTML = /*html*/ `
    <div class="responsiveBtn">
        <button>Warenkorb (${total} CHF)</button>
    </div>  
    `;
}


function renderBasket() {
    let basket = document.getElementById('warenkorb');
    basket.innerHTML = '';
    let sum = 0;

    for (let i = 0; i < foods.length; i++) {
        let total1 = sum + (prices[i] * amounts[i]);
        let total = total1.toFixed(2);
        
        basket.innerHTML += /*html*/ `
        <div id="cardFood${i}" class="card">
            <div class="cardTopSection">
                <div class="cardHeadline">
                    <h5 class="h5Left">${amounts[i]}</h5>
                    <h5 class="h5Right">${foods[i]}</h5>
                    <p>${total} CHF</p>
                </div>
                <div class="cardMidline">
                    <p class="gray">Anmerkung hinzufügen</p>
                    <div>
                        <img onclick="deleteFood(${i})" class="plusMinus" src="./img/minus.png" alt="">
                        <img onclick="addFood(${i})" class="plusMinus" src="./img/plus.png" alt="">
                    </div>
                </div>
            </div>
            <div class="line"></div>
        </div>
        `;     
    } 
}
    

function addFood(i) {

    amounts[i]++; // es wird immer nur 1 addiert

    renderBasket();
    updateShoppingBasket();
    save();
}


function deleteFood(i) {
    if(amounts[i] > 1) {
    amounts[i]--;
    }else {
        amounts.splice(i, 1);
        foods.splice(i, 1);
        prices.splice(i, 1);
    }

    if(amounts == 0) {
        loadWarenkorb();
        save();
    }else{
    renderBasket();
    updateShoppingBasket();
    save();
    }
}


function save() {
    localStorage.setItem('foods', JSON.stringify(foods));
    localStorage.setItem('prices', JSON.stringify(prices));
    localStorage.setItem('amounts', JSON.stringify(amounts));
}


function load() {
    let foodLocalStorage = localStorage.getItem('foods');
    let pricesLocalStorage = localStorage.getItem('prices');
    let amountsLocalStorage = localStorage.getItem('amounts');

    if(foodLocalStorage && pricesLocalStorage) {
        foods = JSON.parse(foodLocalStorage);
        prices = JSON.parse(pricesLocalStorage);
        amounts = JSON.parse(amountsLocalStorage);
    }

    loadWarenkorb();
}


function renderEmptyBasket() {
    if(foods.length) return false;
    else return true;
}


function loadWarenkorb() {

    let warenkorb = document.getElementById('warenkorb');
    let warenkorbSumme = document.getElementById('warenkorbSumme');
    warenkorbSumme.innerHTML = '';

    if(renderEmptyBasket()) {
        warenkorb.innerHTML = /*html*/ `
        <img src="./img/tasche.png" alt=""/>
        <b class="marginTop">Fülle deinen Warenkorb</b>
        <br/>
        <span
            >Füge einige leckere Gerichte aus der Speisekarte hinzu
            und bestelle dein Essen.
        </span>
        `;
    }else {
        renderBasket();
        updateShoppingBasket();
    }
}


function searchInput() {
    document.getElementById('navScroll').classList.add('dNone');
    document.getElementById('openInputField').classList.remove('dNone');
    document.getElementById('nav').classList.add('paddingBottom');
}


function closeInput() {
    document.getElementById('navScroll').classList.remove('dNone');
    document.getElementById('openInputField').classList.add('dNone');
    document.getElementById('nav').classList.remove('paddingBottom');
}


function getMenuFromInput() {
    let searchValue = document.getElementById('searchInput').value;
    let search = searchValue.trim();
    return search;
}


function filterMenuPizza() {
    let searchInput = getMenuFromInput();
    searchInput = searchInput.toLowerCase();
    // console.log(searchInput);
    let menu = document.getElementById('food');
    menu.innerHTML = '';

    for (let i = 0; i < pizza.length; i++) {
        if(pizza[i].name.toString().toLowerCase().includes(searchInput)) {
            menu.innerHTML = /*html*/ `
            <div class="mainFoodImg">
                <img src="./img/pizza.jpg" alt="" />
            </div>
            
            <h4>Pizza</h4>
            `;
            menu.innerHTML += /*html*/ `
            <div onclick="addMenu('${pizza[i].name}', '${pizza[i].descripton}', '${pizza[i].price}')" class="food">
            <div>
                <div class="foodName"><b>${pizza[i].name}</b></div>
                <div class="foodDescripton">${pizza[i].descripton}</div>
                <div class="foodPrice"><b>${pizza[i].price.toFixed(2)} CHF</b></div>
            </div>

            <div class="dishPlus">
                <img src="./img/plus.png" alt="">
            </div>
        `;
        }              
    }
}


function filterMenuVorspeisen() {
    let searchInput = getMenuFromInput();
    searchInput = searchInput.toLowerCase();
    let menu = document.getElementById('vorspeise');
    menu.innerHTML = '';
   
    for (let i = 0; i < vorspeisen.length; i++) {
        if(vorspeisen[i].name.toString().toLowerCase().includes(searchInput)) {
            menu.innerHTML += /*html*/ `
            <div class="mainFoodImg">
                <img src="./img/bruschetta.jpg" alt="" />
            </div>
        
            <h4>Vorspeisen</h4>
            `;
            menu.innerHTML += /*html*/ `
            <div onclick="addMenu('${vorspeisen[i].name}', '${vorspeisen[i].descripton}', '${vorspeisen[i].price}')" class="food">
            <div>
                <div class="foodName"><b>${vorspeisen[i].name}</b></div>
                <div class="foodDescripton">${vorspeisen[i].descripton}</div>
                <div class="foodPrice"><b>${vorspeisen[i].price.toFixed(2)} CHF</b></div>
            </div>

            <div id="a" class="dishPlus">
                <img src="./img/plus.png" alt="">
            </div>
            <div id="b" class="dishNumber dNone">
                <b>${amounts[i]}</b>
            </div>
        </div>
        `;
        }      
    }
}


function filterMenuSalat() {
    let searchInput = getMenuFromInput();
    searchInput = searchInput.toLowerCase();
    console.log(searchInput);
    let menu = document.getElementById('salat');
    menu.innerHTML = '';

    for (let i = 0; i < salat.length; i++) {
        if(salat[i].name.toString().toLowerCase().includes(searchInput)) {
            menu.innerHTML = /*html*/ ` 
            <div class="mainFoodImg">
                <img src="./img/salat.jpg" alt="" />
            </div>     
        
            <h4>Salat</h4>
            `;
            menu.innerHTML += /*html*/`
            <div onclick="addMenu('${salat[i].name}', '${salat[i].descripton}', '${salat[i].price}')" class="food">
            <div>
                <div class="foodName"><b>${salat[i].name}</b></div>
                <div class="foodDescripton">${salat[i].descripton}</div>
                <div class="foodPrice"><b>${salat[i].price.toFixed(2)} CHF</b></div>
            </div>

            <div id="a" class="dishPlus">
                <img src="./img/plus.png" alt="">
            </div>
            <div id="b" class="dishNumber dNone">
                <b>${amounts[i]}</b>
            </div>
        </div>
        `;
        }
    }
}


function filterMenuPasta() {
    let searchInput = getMenuFromInput();
    searchInput = searchInput.toLowerCase();
    console.log(searchInput);
    let menu = document.getElementById('pasta');
    menu.innerHTML = '';

    for (let i = 0; i < pasta.length; i++) {
        if(pasta[i].name.toString().toLowerCase().includes(searchInput)) {
            menu.innerHTML = /*html*/ ` 
            <div class="mainFoodImg">
                <img src="./img/pasta_tagliatelle.avif" alt="" />
            </div>     
        
            <h4>Pasta</h4>
            `;
            menu.innerHTML += /*html*/ `
            <div onclick="addMenu('${pasta[i].name}', '${pasta[i].descripton}', '${pasta[i].price}')" class="food">
            <div>
                <div class="foodName"><b>${pasta[i].name}</b></div>
                <div class="foodDescripton">${pasta[i].descripton}</div>
                <div class="foodPrice"><b>${pasta[i].price.toFixed(2)} CHF</b></div>
            </div>

            <div id="a" class="dishPlus">
                <img src="./img/plus.png" alt="">
            </div>
            <div id="b" class="dishNumber dNone">
                <b>${amounts[i]}</b>
            </div>
        </div>
        `;
        } 
    }
}


function filterMenuFleischgerichte() {
    let searchInput = getMenuFromInput();
    searchInput = searchInput.toLowerCase();
    console.log(searchInput);
    let menu = document.getElementById('fleischgerichte');
    menu.innerHTML = '';

    for (let i = 0; i < fleischgerichte.length; i++) {
        if(fleischgerichte[i].name.toString().toLowerCase().includes(searchInput)) {
            menu.innerHTML = /*html*/ ` 
            <div class="mainFoodImg">
                <img src="./img/restaurant_fleisch.avif" alt="" />
            </div>     
        
            <h4>Fleischgerichte</h4>
            `;
            menu.innerHTML += /*html*/ `
            <div onclick="addMenu('${fleischgerichte[i].name}', '${fleischgerichte[i].descripton}', '${fleischgerichte[i].price}')" class="food">
            <div>
                <div class="foodName"><b>${fleischgerichte[i].name}</b></div>
                <div class="foodDescripton">${fleischgerichte[i].descripton}</div>
                <div class="foodPrice"><b>${fleischgerichte[i].price.toFixed(2)} CHF</b></div>
            </div>

            <div id="a" class="dishPlus">
                <img src="./img/plus.png" alt="">
            </div>
            <div id="b" class="dishNumber dNone">
                <b>${amounts[i]}</b>
            </div>
        </div>
        `;
        } 
    }
}


function filterMenuDessert() {
    let searchInput = getMenuFromInput();
    searchInput = searchInput.toLowerCase();
    console.log(searchInput);
    let menu = document.getElementById('dessert');
    menu.innerHTML = '';

    for (let i = 0; i < dessert.length; i++) {
        if(dessert[i].name.toString().toLowerCase().includes(searchInput)) {
            menu.innerHTML = /*html*/ ` 
            <div class="mainFoodImg">
                <img src="./img/dessert.avif" alt="" />
            </div>     
        
            <h4>Dessert</h4>
            `;
            menu.innerHTML += /*html*/ `
            <div onclick="addMenu('${dessert[i].name}', '${dessert[i].descripton}', '${dessert[i].price}')" class="food">
            <div>
                <div class="foodName"><b>${dessert[i].name}</b></div>
                <div class="foodPrice"><b>${dessert[i].price.toFixed(2)} CHF</b></div>
            </div>

            <div id="a" class="dishPlus">
                <img src="./img/plus.png" alt="">
            </div>
            <div id="b" class="dishNumber dNone">
                <b>${amounts[i]}</b>
            </div>
        </div>
        `;
        } 
    }
}


function likeRestaurant() {
    let likeBtn = document.getElementById('likeBtn').src;
    if(likeBtn.indexOf('img/heart.png') != -1) {
        document.getElementById('likeBtn').src = './img/heart_red.png';
    }else {
        document.getElementById('likeBtn').src = './img/heart.png';
    }
}


function inputEmpty() {
    let input = document.getElementById('searchInput').value;
    if(input == '') {
        render();
    }
}


function closeResposiveBasket() {
    let closeResposiveBasket = document.getElementById('warenkorb2');
    closeResposiveBasket.classList.add('dNone');

}

function openResponsiveBtn() {
    let openResponsiveBtn = document.getElementById('warenkorb2');
    let closeResponsive = document.getElementById('closeResposiveBasket');

    openResponsiveBtn.classList.remove('dNone');
    closeResponsive.classList.remove('dNone');
}
