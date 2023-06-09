
/* ---------- Render ----------*/

function render() {
    let foodcards = document.getElementById('food');
    foodcards.innerHTML = renderPizzaImg();

    for (let i = 0; i < pizza.length; i++) {
        foodcards.innerHTML += renderPizzaCards(i);
        }

        renderVorspeisen();
        renderSalat();
        renderPasta();
        renderFleischgerichte();
        renderDessert();
}


function renderVorspeisen() {
        let foodcards = document.getElementById('vorspeise');
        foodcards.innerHTML = renderVorspeisenImg();
    
        for (let i = 0; i < vorspeisen.length; i++) {
        foodcards.innerHTML += renderVorspeisenCards(i);
    }
}


function renderSalat() {
    let foodcards = document.getElementById('salat');
    foodcards.innerHTML = renderSalatImg();
 
    for (let i = 0; i < salat.length; i++) {
        foodcards.innerHTML += renderSalatCards(i);
    }
}


function renderPasta() {
    let foodcards = document.getElementById('pasta');
    foodcards.innerHTML = renderPastaImg();

    for (let i = 0; i < pasta.length; i++) {
        foodcards.innerHTML += renderPastaCards(i);
    }
}


function renderFleischgerichte() {
    let foodcards = document.getElementById('fleischgerichte');
    foodcards.innerHTML = rednerFleischgerichteImg();

    for (let i = 0; i < fleischgerichte.length; i++) {
        foodcards.innerHTML += renderFleischgerichteCards(i);
    }
}

function renderDessert() {
    let foodcards = document.getElementById('dessert');
    foodcards.innerHTML = renderDessertImg();

    for (let i = 0; i < dessert.length; i++) {
        foodcards.innerHTML += renderDessertCards(i);
    }
}


/* ---------- Basket ----------*/

function renderBasket() {
    let basket = document.getElementById('warenkorb');
    basket.innerHTML = '';
    let sum = 0;

    for (let i = 0; i < foods.length; i++) {
        let total1 = sum + (prices[i] * amounts[i]);
        let total = total1.toFixed(2);
        
        basket.innerHTML += loadBasket(i, total);   
    } 
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


/* ---------- Search Meal ----------*/

function filterMenuPizza() {
    let searchInput = getMenuFromInput();
    searchInput = searchInput.toLowerCase();
    let menu = document.getElementById('food');
    menu.innerHTML = '';

    for (let i = 0; i < pizza.length; i++) {
        if(pizza[i].name.toString().toLowerCase().includes(searchInput)) {
            menu.innerHTML = searchImgPizza();          
            menu.innerHTML += searchPizza(i);
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
            menu.innerHTML = searchImgVorspeisen();   
            menu.innerHTML += searchVorspeisen(i);
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
            menu.innerHTML = searchImgSalat();           
            menu.innerHTML += searchImgSalat(i);
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
            menu.innerHTML = searchImgPasta();          
            menu.innerHTML += searchPasta(i);
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
            menu.innerHTML = searchImgFLeischgerichte();            
            menu.innerHTML += searchImgFLeischgerichte(i);
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
            menu.innerHTML = searchImgDessert();
            menu.innerHTML += searchImgDessert(i);
        } 
    }
}


/* ---------- like Restaurant ----------*/

function likeRestaurant() {
    let likeBtn = document.getElementById('likeBtn').src;
    if(likeBtn.indexOf('img/heart.png') != -1) {
        document.getElementById('likeBtn').src = './img/heart_red.png';
    }else {
        document.getElementById('likeBtn').src = './img/heart.png';
    }
}


/* ---------- Input ----------*/

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


function inputEmpty() {
    let input = document.getElementById('searchInput').value;
    if(input == '') {
        render();
    }
}


/* ---------- Responsive Btn ----------*/

function closeResposiveBasket() {
    let closeResposiveBasket = document.getElementById('warenkorb2');
    closeResposiveBasket.classList.add('dNone');

    responsiveBtn();
}

function openResponsiveBtn() {
    let openResponsiveBtn = document.getElementById('warenkorb2');
    let closeResponsive = document.getElementById('closeResposiveBasket');

    openResponsiveBtn.classList.remove('dNone');
    closeResponsive.classList.remove('dNone');
}


function responsiveBtn(total) {
    let button = document.getElementById('responsiveBtn');

    if(amounts == 0) {
        alert('verbergen');
        document.getElementById('closeResponsiveBtn').classList.add('dNone');
    }else {
        alert('haha')
    button.innerHTML = /*html*/ `
    <div id="closeResponsiveBtn" class="responsiveBtn">
        <button>Warenkorb (${total} CHF)</button>
    </div>  
    `;
    }
}
