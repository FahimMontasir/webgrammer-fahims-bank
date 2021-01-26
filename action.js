//transaction display show hide
const logIn = document.getElementById('loginBtn');
logIn.addEventListener('click', function () {
    const logInArea = document.getElementById('login-area');
    logInArea.style.display = 'none';

    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})
//transaction section
//deposit section
const deposit = document.getElementById('depositBtn');
deposit.addEventListener('click', function () {
    const depositNumber = getInputNumber('depositAmount');

    addSpanText("currentDeposit", depositNumber);
    addSpanText("currentBalance", depositNumber);

    document.getElementById('depositAmount').value = ""; //to hide input value
})
//withdraw section
const withdraw = document.getElementById('withdrawBtn');
withdraw.addEventListener('click', function () {
    const withdrawNumber = getInputNumber('withdrawAmount');
    addSpanText("currentWithdraw", withdrawNumber);
    addSpanText("currentBalance", - 1 * withdrawNumber); // -1* to reduce the value
    document.getElementById('withdrawAmount').value = ""; 
})
//to convert the input value from string to number
function getInputNumber(id) {
    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(Amount);
    return amountNumber;
}
//to sum previous number with the new number
function addSpanText(id, convertedNumber) {
    const currentString = document.getElementById(id).innerText; //to grab the text
    const currentNumber = parseFloat(currentString);
    const total = convertedNumber + currentNumber;
    document.getElementById(id).innerText = total;
}