
function loadBasket(i, total) {
    return /*html*/ `
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


function shoppingBasketUpdate(total) {
    return /*html*/ `
    <div class="calculatorCard">  
            <p class="sumPayContainer">Zwischensumme<span>${total} CHF</span></p>
            <p class="sumPayContainer">Lieferkosten<span class="green">Kostenlos</span></p>
            <button class="payButton">Bezahlen (${total} CHF)</button>    
    </div> 
 `;
}


function loadingWarenkorb() {
    return /*html*/ `
    <img src="./img/tasche.png" alt=""/>
    <b class="marginTop">Fülle deinen Warenkorb</b>
    <br/>
    <span
        >Füge einige leckere Gerichte aus der Speisekarte hinzu
        und bestelle dein Essen.
    </span>
    `;
}