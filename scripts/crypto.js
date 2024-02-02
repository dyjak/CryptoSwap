  //myBalance
  var myBalanceBTC=0.8223;
  var myBalanceETH=1.2535;
  var myBalanceXRP=200.5426;
  var myBalanceOP=265.5673;
  var myBalanceAPE=7679.5673;

  var btcPrice;
  var ethPrice;
  var xrpPrice; 
  var opPrice;
  var apePrice;

function mybalance(btcPrice,ethPrice,xrpPrice,opPrice,apePrice){  
  var myBalanceTotal=myBalanceBTC* btcPrice
  +myBalanceETH* ethPrice+myBalanceXRP* xrpPrice
  +myBalanceOP* opPrice+myBalanceAPE* apePrice;
  
  return (Math.round(myBalanceTotal * 100) / 100).toFixed(4);
}


function updateCryptoPrices() {
    const apiUrl = "https://api.coingecko.com/api/v3/simple/price";
    const params = {
      ids: "bitcoin,ethereum,ripple,optimism,apecoin",
      vs_currencies: "usd",
    };
  
    axios
      .get(apiUrl, { params })
      .then((response) => {
        const data = response.data;

  
        //cryptoPrices
        btcPrice = data.bitcoin.usd;
        ethPrice = data.ethereum.usd;
        xrpPrice = data.ripple.usd;
        opPrice = data.optimism.usd;
        apePrice = data.apecoin.usd;

        var myBalanceTotal = mybalance(btcPrice, ethPrice, xrpPrice, opPrice, apePrice);
  
        // Update the placeholders in your HTML
        document.getElementById("btcPrice").textContent = btcPrice+" USD";
        document.getElementById("ethPrice").textContent = ethPrice+" USD";
        document.getElementById("xrpPrice").textContent = xrpPrice+" USD";
        document.getElementById("opPrice").textContent = opPrice+" USD";
        document.getElementById("apePrice").textContent = apePrice+" USD";

        document.getElementById("balanceTotal").innerHTML='Total balance: ' + myBalanceTotal+ '$';
        document.getElementById("balanceBTC").innerHTML=myBalanceBTC;
        document.getElementById("balanceETH").innerHTML=myBalanceETH;
        document.getElementById("balanceXRP").innerHTML=myBalanceXRP;
        document.getElementById("balanceOP").innerHTML=myBalanceOP;
        document.getElementById("balanceAPE").innerHTML=myBalanceAPE;
      })
      .catch((error) => {
        console.error("Error fetching cryptocurrency data:", error);
        document.getElementById('error').innerHTML="ERORR OCCURED";
        document.getElementById('main-area').innerHTML="ERROR OCCURED"
        document.getElementById('header').style="display:none;"
        document.getElementById('main-area').style="display:none;"
      });
  }
  
updateCryptoPrices();





var buttonExchange = document.getElementById('submit');
var checkboxAgree = document.getElementById('agreement');

buttonExchange.addEventListener('click', function(e){
  e.preventDefault();

  var amountFrom = parseFloat(crypto1.value);
  var currencyFrom = formCur1.value.substring(0, 3);
  var amountTo = parseFloat(crypto2.value);
  var currencyTo = formCur2.value.substring(0, 3);

  if(amountFrom<=0 || amountTo<=0)
  {
    alert('Insert values');
    return;
  }

  if (!checkboxAgree.checked) {
    alert('You must agree to the terms before proceeding!!!');
    return;
}

  if (!checkIfAvailible(currencyFrom, amountFrom)) {
      alert('You do not have enough ' + currencyFrom.toUpperCase() + ' to exchange.');
      resetToDefault();
      return;
  }

  switch(currencyFrom) {
      case 'btc':
          myBalanceBTC -= amountFrom;
          break;
      case 'eth':
          myBalanceETH -= amountFrom;
          break;
      case 'xrp':
          myBalanceXRP -= amountFrom;
          break;
      case 'opt':
          myBalanceOP -= amountFrom;
          break;
      case 'ape':
          myBalanceAPE -= amountFrom;
          break;
  }

  switch(currencyTo) {
      case 'btc':
          myBalanceBTC += amountTo;
          break;
      case 'eth':
          myBalanceETH += amountTo;
          break;
      case 'xrp':
          myBalanceXRP += amountTo;
          break;
      case 'opt':
          myBalanceOP += amountTo;
          break;
      case 'ape':
          myBalanceAPE += amountTo;
          break;
  }

  myBalanceBTC = Math.round(myBalanceBTC * 10000) / 10000;
  myBalanceETH = Math.round(myBalanceETH * 10000) / 10000;
  myBalanceXRP = Math.round(myBalanceXRP * 10000) / 10000;
  myBalanceOP = Math.round(myBalanceOP * 10000) / 10000;
  myBalanceAPE = Math.round(myBalanceAPE * 10000) / 10000;
  updateBalances();
  resetToDefault();
  alert(
    `Transaction successful!\nConverted ${amountFrom.toFixed(4)} ${currencyFrom.toUpperCase()} to ${amountTo.toFixed(4)} ${currencyTo.toUpperCase()}.`
  );
});

function resetToDefault()
{
  checkboxAgree.checked = false;
  crypto1.value = parseFloat(0.0000).toFixed(4);;
  crypto2.value = parseFloat(0.0000).toFixed(4);
  formCur1.value = 'btc1';
  formCur2.value = 'eth2';
}


function checkIfAvailible(currency, amount) {
  switch(currency) {
      case 'btc':
          return myBalanceBTC >= amount;
      case 'eth':
          return myBalanceETH >= amount;
      case 'xrp':
          return myBalanceXRP >= amount;
      case 'opt':
          return myBalanceOP >= amount;
      case 'ape':
          return myBalanceAPE >= amount;
      default:
          return false;
  }
}

function updateBalances() {
  document.getElementById("balanceTotal").innerHTML = 'Total balance: ' + mybalance(btcPrice, ethPrice, xrpPrice, opPrice, apePrice) + '$';
  document.getElementById("balanceBTC").innerHTML = myBalanceBTC + ' BTC';
  document.getElementById("balanceETH").innerHTML = myBalanceETH + ' ETH';
  document.getElementById("balanceXRP").innerHTML = myBalanceXRP + ' XRP';
  document.getElementById("balanceOP").innerHTML = myBalanceOP + ' OP';
  document.getElementById("balanceAPE").innerHTML = myBalanceAPE + ' APE';
}