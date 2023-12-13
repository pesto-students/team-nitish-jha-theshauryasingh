async function getExchangeRate(currencyCode) {
    const response = await fetch("https://api.exchangerate.host/latest");
    const data = await response.json();
    if (currencyCode in data.rates){
        return data.rates[currencyCode];
    }
    else {
        return null;
    }
}

let exchangeRate = function(inp) {
    getExchangeRate(inp)
        .then((abcd)=>{console.log(' answer is -> ', abcd)})
        .catch((bakchodi)=> {'bakchodi is ', bakchodi});
}

exchangeRate('INR');
exchangeRate('USD');
exchangeRate('XYZ');