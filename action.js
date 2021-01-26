const logIn = document.getElementById('login');

logIn.addEventListener('click', function () {
    const logInArea = document.getElementById('login-area');
    logInArea.style.display = 'none';

    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block'
})