let firstRub = document.querySelector(".firstRub");
let firstUsd = document.querySelector(".firstUsd");
let firstEur = document.querySelector(".firstEur");
let firstGbp = document.querySelector(".firstGbp");
let secondRub = document.querySelector(".secondRub");
let secondUsd = document.querySelector(".secondUsd");
let secondEur = document.querySelector(".secondEur");
let secondGbp = document.querySelector(".secondGbp");
let leftP = document.querySelector('.left-p');
let leftInput = document.querySelector(".leftInput");
let rightInput = document.querySelector(".rightInput");
let rightP = document.querySelector('.right-p');
let leftCurrency = 'RUB';
let rightCurrency = 'USD';


leftInput.addEventListener('keyup', func);

function func () {
    const inputValue = +leftInput.value.replace(",", ".");

    if (typeof (inputValue) == 'number' ) {
        let url = `https://api.exchangerate.host/latest?base=${leftCurrency}&symbols=${rightCurrency}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                leftP.textContent = `1 ${leftCurrency} = ${data.rates[rightCurrency]} ${rightCurrency}`;
                rightInput.value = inputValue * data.rates[rightCurrency].toFixed(4);
            })

        fetch(`https://api.exchangerate.host/latest?base=${rightCurrency}&symbols=${leftCurrency}`)
            .then(res => res.json())
            .then(data => {
                rightP.textContent = `1 ${rightCurrency} = ${data.rates[leftCurrency]} ${leftCurrency}`;
            })
    }
}

secondRub.addEventListener('click', () => {
    rightCurrency = 'RUB';
    func();
});

secondUsd.addEventListener('click', () => {
    rightCurrency = 'USD';
    func();
});

secondEur.addEventListener('click', () => {
    rightCurrency = 'EUR';
    func();
});

secondGbp.addEventListener('click', () => {
    rightCurrency = 'GBP';
    func();
});

firstRub.addEventListener('click', () => {
    leftCurrency = 'RUB';
    func();
});


firstUsd.addEventListener('click', () => {
    leftCurrency = 'USD';
    func();
});

firstEur.addEventListener('click', () => {
    leftCurrency = 'EUR';
    func();
});

firstGbp.addEventListener('click', () => {
    leftCurrency = 'GBP';
    func();
});