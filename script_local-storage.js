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