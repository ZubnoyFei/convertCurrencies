const someString = 'This is some strange string';

function reverse(str) {
if(typeof(str)!== 'string') {
    return "Error"
}
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr
}

reverse(someString);

const baseCurrencies = ['USD', 'EUR'];

const additionalCurrencies = ["UAH", "JPY", "CNY"];

function availableCurrencies(arr, missingCurr) {
    let str = '';
    arr.length===0 ?str='Нет доступных валют' :str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i){
        if(curr !== missingCurr) {
            str += `${i + 1} - {curr}\n`;
        }
    });
return str;
}

availableCurrencies([...baseCurrencies, ...additionalCurrencies], 'CNY')