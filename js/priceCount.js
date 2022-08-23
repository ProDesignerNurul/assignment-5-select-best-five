function getInputValueById(element) {
    const perPlayerPrice = document.getElementById(element);
    const perPlayerString = perPlayerPrice.value;
    const newPlayerPrice = parseFloat(perPlayerString);
    perPlayerPrice.value = '';
    return newPlayerPrice;
}


function getTextValueById(textValueById) {
    const textElement = document.getElementById(textValueById);
    const textElementString = textElement.innerText;
    const textElementNumber = parseFloat(textElementString);
    return textElementNumber;

}




document.getElementById('calculate-btn').addEventListener('click', function(){
    const totalPlayerExpenses = document.getElementById('player-expenses');
    const perPlayerPrice = getInputValueById('per-player-price');
    const playerExpenses = perPlayerPrice * 5;
    totalPlayerExpenses.innerText = playerExpenses;
})

document.getElementById('calculate-toatl-btn').addEventListener('click', function(){
    const totalCoast = document.getElementById('total-amount');
    const manager = getInputValueById('manager');
    const coach = getInputValueById('coach');
    const totalPlayerExpenses = getTextValueById('player-expenses');
    const totalGamePrice = manager + coach + totalPlayerExpenses;
    totalCoast.innerText = totalGamePrice;
})

