document.getElementById('calculate-btn').addEventListener('click', function(){

    const perPlayerPrice = document.getElementById('per-player-price');
    const perPlayerString = perPlayerPrice.value;
    const newPlayerPrice = parseFloat(perPlayerString);
    perPlayerPrice.value = '';

    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesString = playerExpenses.innerText;
    const previousExpensesTotal = parseFloat(playerExpensesString);

    const totalPlayerPrice = newPlayerPrice * 5;
    const totalPrice = previousExpensesTotal + totalPlayerPrice;
    playerExpenses.innerText = totalPrice;
})

document.getElementById('calculate-toatl-btn').addEventListener('click', function(){
    const managerPrice = document.getElementById('manager');
    const managerPriceString = managerPrice.value;
    const manager = parseFloat(managerPriceString);
    managerPrice.value = '';

    const coachPrice = document.getElementById('coach');
    const coachPriceString = coachPrice.value;
    const coach = parseFloat(coachPriceString);
    coachPrice.value = '';


    const totalAmountElement = document.getElementById('total-amount');
    const totalAmountString = totalAmountElement.innerText;
    const totalAmount = parseFloat(totalAmountString);
    totalAmountElement.innerText = '';

    const managerCoachPrice = manager + coach;

    const lastTotalAmount = totalAmount + managerCoachPrice;
    totalAmountElement.innerText = lastTotalAmount;


})