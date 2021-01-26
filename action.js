const logIn = document.getElementById('login');

logIn.addEventListener('click', function () {
    const logInArea = document.getElementById('login-area');
    logInArea.style.display = 'none';

    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block'
})

const deposit = document.getElementById('depositBtn');
deposit.addEventListener('click', function () {
    const depositNumber = getInputNumber('depositAmount');

    addSpanText("currentDeposit", depositNumber);
    addSpanText("currentBalance", depositNumber);

    document.getElementById('depositAmount').value = "";
})

const withdraw = document.getElementById('withdrawBtn');
withdraw.addEventListener('click', function () {
    const withdrawNumber = getInputNumber('withdrawAmount');
   
})

function getInputNumber(id) {
    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(Amount);
    return amountNumber;
}

function addSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = depositNumber + currentNumber;
    document.getElementById(id).innerText = total;
}