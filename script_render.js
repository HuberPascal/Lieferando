
/*---------- Pizza ----------*/

function renderPizzaImg() {
    return /*html*/ `
    <div class="mainFoodImg">
        <img src="./img/pizza.jpg" alt="" />
    </div>
    
    <h4>Pizza</h4>
    `;
}


function renderPizzaCards(i) {
    return /*html*/ `
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


/*---------- Vorspeisen ----------*/

function renderVorspeisenImg() {
    return /*html*/ `
    <div class="mainFoodImg">
        <img src="./img/bruschetta.jpg" alt="" />
    </div>

    <h4>Vorspeisen</h4>
    `;
}


function renderVorspeisenCards(i) {
    return /*html*/ `
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


/*---------- Salat ----------*/

function renderSalatImg() {
    return /*html*/ ` 
    <div class="mainFoodImg">
        <img src="./img/salat.jpg" alt="" />
    </div>     

    <h4>Salat</h4>
    `;
}


function renderSalatCards(i) {
    return /*html*/ `
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


/*---------- Pasta ----------*/

function renderPastaImg() {
    return /*html*/ ` 
    <div class="mainFoodImg">
        <img src="./img/pasta_tagliatelle.avif" alt="" />
    </div>     

    <h4>Pasta</h4>
    `;
}


function renderPastaCards(i) {
    return /*html*/ `
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


/*---------- Fleischgerichte ----------*/


function rednerFleischgerichteImg() {
    return /*html*/ ` 
    <div class="mainFoodImg">
        <img src="./img/restaurant_fleisch.avif" alt="" />
    </div>     

    <h4>Fleischgerichte</h4>
    `;
}


function renderFleischgerichteCards(i) {
    return /*html*/ `
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


/*---------- Dessert ----------*/

function renderDessertImg() {
    return /*html*/ ` 
    <div class="mainFoodImg">
        <img src="./img/dessert.avif" alt="" />
    </div>     

    <h4>Dessert</h4>
    `;
}


function renderDessertCards(i) {
    return /*html*/ `
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

