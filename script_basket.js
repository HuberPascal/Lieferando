
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