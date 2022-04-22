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

leftInput.addEventListener('keyup', func);

secondRub.addEventListener('click', () => {
    rightCurrency = secondRub.textContent;
    func();
});

secondUsd.addEventListener('click', () => {
    rightCurrency = secondUsd.textContent;
    func();
});

secondEur.addEventListener('click', () => {
    rightCurrency = secondEur.textContent;
    func();
});

secondGbp.addEventListener('click', () => {
    rightCurrency = secondGbp.textContent;
    func();
});

firstRub.addEventListener('click', () => {
    leftCurrency = firstRub.textContent;
    func();
});


firstUsd.addEventListener('click', () => {
    leftCurrency = firstUsd.textContent;
    func();
});

firstEur.addEventListener('click', () => {
    leftCurrency = firstEur.textContent;
    func();
});

firstGbp.addEventListener('click', () => {
    leftCurrency = firstGbp.textContent;
    func();
});