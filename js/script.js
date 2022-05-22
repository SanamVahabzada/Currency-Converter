let leftP = document.querySelector('.left-p');
let leftInput = document.querySelector(".leftInput");
let rightInput = document.querySelector(".rightInput");
let rightP = document.querySelector('.right-p');
let leftList = document.querySelector(".left").children;
let rightList = document.querySelector(".right").children;


let leftCurrency = 'RUB';
let rightCurrency = 'USD';

console.log(leftList.firstChild)

leftInput.addEventListener('keyup', func);

for (let i = 0; i < leftList.length; i++) {
    console.log(leftList[i].firstChild)
    leftList[i].firstChild.addEventListener('click', function (e) {

        leftCurrency = leftList[i].firstChild.textContent;

        for (let s = 0; s < leftList.length; s++) {
            leftList[s].firstChild.classList.remove("selected")
        }
        e.target.classList.add('selected')

        func();
    })
}


for (let i = 0; i < rightList.length; i++) {
    rightList[i].firstChild.addEventListener('click', function (e) {

        rightCurrency = rightList[i].firstChild.textContent;

        for (let s = 0; s < rightList.length; s++) {
            rightList[s].firstChild.classList.remove("selected")
        }
        e.target.classList.add('selected')

        func();
    })
}

function func() {
  
    const inputValue = +leftInput.value.replace(",", ".");
    if (typeof (inputValue) == 'number') {
        let url = `https://api.exchangerate.host/latest?base=${leftCurrency}&symbols=${rightCurrency}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                leftP.textContent = `1 ${leftCurrency} = ${data.rates[rightCurrency]} ${rightCurrency}`;
                rightInput.value = parseFloat(inputValue * data.rates[rightCurrency]).toFixed(4);
            })

        fetch(`https://api.exchangerate.host/latest?base=${rightCurrency}&symbols=${leftCurrency}`)
            .then(res => res.json())
            .then(data => {
                rightP.textContent = `1 ${rightCurrency} = ${data.rates[leftCurrency]} ${leftCurrency}`;
            })
    }
}