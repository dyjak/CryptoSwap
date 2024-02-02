var debug = document.getElementById('DEBUG');

var formCur1 = document.querySelector('select[name="cur1"]');
var formCur2 = document.querySelector('select[name="cur2"]');
var formCur1img=document.getElementById('curImg1');
var formCur2img=document.getElementById('curImg2');

var crypto1 = document.querySelector('input[name="crypto-from-value"]');
var crypto2 = document.querySelector('input[name="crypto-to-value"]');

var arrow = document.getElementById('transfer-img');


formCur1.addEventListener('change', function formCur1update() {
    updateLogos();
    updateCrypto2from();
    blockCurrentCrypto();
});

formCur2.addEventListener('change', function formCur2update() {
    updateLogos();
    updateCrypto1from();
    blockCurrentCrypto();
});

function changeSides() {
   // event.preventDefault(); // Prevent form submission and page reload
    var tempValue;
    
    tempValue = crypto1.value;
    crypto1.value = crypto2.value;
    crypto2.value = tempValue;

    tempValue = formCur1.value.substring(0,3)+"2";
    formCur1.value=formCur2.value.substring(0,3)+"1";
    formCur2.value=tempValue;

    updateLogos();

    debug.innerHTML = crypto1.value+crypto2.value;
};

crypto1.addEventListener('change', function(){
    updateCrypto2from();
    crypto1.value = (Math.round(crypto1.value * 100) / 100).toFixed(4);
});

crypto2.addEventListener('change', function(){
    updateCrypto1from();
    crypto2.value = (Math.round(crypto2.value * 100) / 100).toFixed(4);
});


function updateCrypto2from(){
    var crypto2value;

    switch(formCur1.value + ',' + formCur2.value){
        case 'btc1,eth2':
            crypto2value = (crypto1.value*btcPrice)/ethPrice;break;
        case 'btc1,xrp2':
            crypto2value = (crypto1.value*btcPrice)/xrpPrice;break;
        case 'btc1,opt2':
            crypto2value = (crypto1.value*btcPrice)/opPrice;break;
        case 'btc1,ape2':
            crypto2value = (crypto1.value*btcPrice)/apePrice;break;
        case 'eth1,btc2':
            crypto2value = (crypto1.value*ethPrice)/btcPrice;break;
        case 'eth1,xrp2':
            crypto2value = (crypto1.value*ethPrice)/xrpPrice;break;
        case 'eth1,opt2':
            crypto2value = (crypto1.value*ethPrice)/opPrice;break;
        case 'eth1,ape2':
            crypto2value = (crypto1.value*ethPrice)/apePrice;break;
        case 'xrp1,btc2':
            crypto2value = (crypto1.value*xrpPrice)/btcPrice;break;
        case 'xrp1,eth2':
            crypto2value = (crypto1.value*xrpPrice)/ethPrice;break;
        case 'xrp1,opt2':
            crypto2value = (crypto1.value*xrpPrice)/opPrice;break;
        case 'xrp1,ape2':
            crypto2value = (crypto1.value*xrpPrice)/apePrice;break;
        case 'opt1,btc2':
            crypto2value = (crypto1.value*opPrice)/btcPrice;break;
        case 'opt1,eth2':
            crypto2value = (crypto1.value*opPrice)/ethPrice;break;
        case 'opt1,xrp2':
            crypto2value = (crypto1.value*opPrice)/xrpPrice;break;
        case 'opt1,ape2':
            crypto2value = (crypto1.value*opPrice)/apePrice;break;
        case 'ape1,btc2':
            crypto2value = (crypto1.value*apePrice)/btcPrice;break;
        case 'ape1,eth2':
            crypto2value = (crypto1.value*apePrice)/ethPrice;break;
        case 'ape1,xrp2':
            crypto2value = (crypto1.value*apePrice)/xrpPrice;break;
        case 'ape1,opt2':
            crypto2value = (crypto1.value*apePrice)/opPrice;break;
            
       default:
            crypto2value = 0; break;
    }

    crypto2value = (Math.round(crypto2value * 100) / 100).toFixed(4);
    crypto2.value = crypto2value;
}


function updateCrypto1from(){
    var crypto1value;

    switch(formCur2.value + ',' + formCur1.value){
        case 'btc2,eth1':
            crypto1value = (crypto2.value*btcPrice)/ethPrice;break;
        case 'btc2,xrp1':
            crypto1value = (crypto2.value*btcPrice)/xrpPrice;break;
        case 'btc2,opt1':
            crypto1value = (crypto2.value*btcPrice)/opPrice;break;
        case 'btc2,ape1':
            crypto1value = (crypto2.value*btcPrice)/apePrice;break;
        case 'eth2,btc1':
            crypto1value = (crypto2.value*ethPrice)/btcPrice;break;
        case 'eth2,xrp1':
            crypto1value = (crypto2.value*ethPrice)/xrpPrice;break;
        case 'eth2,opt1':
            crypto1value = (crypto2.value*ethPrice)/opPrice;break;
        case 'eth2,ape1':
            crypto1value = (crypto2.value*ethPrice)/apePrice;break;
        case 'xrp2,btc1':
            crypto1value = (crypto2.value*xrpPrice)/btcPrice;break;
        case 'xrp2,eth1':
            crypto1value = (crypto2.value*xrpPrice)/ethPrice;break;
        case 'xrp2,opt1':
            crypto1value = (crypto2.value*xrpPrice)/opPrice;break;
        case 'xrp2,ape1':
            crypto1value = (crypto2.value*xrpPrice)/apePrice;break;
        case 'opt2,btc1':
            crypto1value = (crypto2.value*opPrice)/btcPrice;break;
        case 'opt2,eth1':
            crypto1value = (crypto2.value*opPrice)/ethPrice;break;
        case 'opt2,xrp1':
            crypto1value = (crypto2.value*opPrice)/xrpPrice;break;
        case 'opt2,ape1':
            crypto1value = (crypto2.value*opPrice)/apePrice;break;
        case 'ape2,btc1':
            crypto1value = (crypto2.value*apePrice)/btcPrice;break;
        case 'ape2,eth1':
            crypto1value = (crypto2.value*apePrice)/ethPrice;break;
        case 'ape2,xrp1':
            crypto1value = (crypto2.value*apePrice)/xrpPrice;break;
        case 'ape2,opt1':
            crypto1value = (crypto2.value*apePrice)/opPrice;break;
            
       default:
            crypto1value = 0; break;
    }

    crypto1value = (Math.round(crypto1value * 100) / 100).toFixed(4); //round to 4 digits
    crypto1.value = crypto1value;

}


function blockCurrentCrypto()
{
    //simplified switch using substrings
    var val1=formCur1.value.substring(0,3)+"1";
    var val2=formCur1.value.substring(0,3)+"2";
    var val3=formCur2.value.substring(0,3)+"1";
    var val4=formCur2.value.substring(0,3)+"2";
    var option1 = document.querySelector('option[value="'+val1+'"]');
    var option2 = document.querySelector('option[value="'+val2+'"]');
    var option3 = document.querySelector('option[value="'+val3+'"]');
    var option4 = document.querySelector('option[value="'+val4+'"]');

    var options = document.querySelectorAll('.options');
    options.forEach(function(option) {
        if (option != option1 && option != option2 && option != option3 && option != option4) {
            option.disabled = false;
        }
    });

    option1.disabled = true;
    option2.disabled = true;
    option3.disabled = true;
    option4.disabled = true;

    debug.innerHTML=val1+val2+val3+val4;
}

function updateLogos(){
    switch(formCur1.value)
    {
        case "btc1":
            formCur1img.src = 'images/btc-logo.png';
            break;
        case "eth1":
            formCur1img.src = 'images/eth-logo.png';
            break;
        case "xrp1":
            formCur1img.src = 'images/xrp-logo.png';
            break;
        case "opt1":
            formCur1img.src = 'images/op-logo.png';
            break;
        case "ape1":
            formCur1img.src = 'images/ape-logo.png';
            break;
        default:
            formCur1img.src = 'images/btc-logo.png'; break;
}

switch(formCur2.value)
{
    case "btc2":
        formCur2img.src = 'images/btc-logo.png';
        break;
    case "eth2":
        formCur2img.src = 'images/eth-logo.png';
        break;
    case "xrp2":
        formCur2img.src = 'images/xrp-logo.png';
        break;
    case "opt2":
        formCur2img.src = 'images/op-logo.png';
        break;
    case "ape2":
        formCur2img.src = 'images/ape-logo.png';
        break;
    
    default:
    formCur2img.src = 'images/btc-logo.png'; break;
} 
}

crypto1.addEventListener('blur', function () {
    if (crypto1.value.includes('.') && crypto1.value.split('.')[1].length > 4) {
      crypto1.value = parseFloat(crypto1.value).toFixed(4);
    }
  });
  
  crypto2.addEventListener('blur', function () {
    if (crypto2.value.includes('.') && crypto2.value.split('.')[1].length > 4) {
      crypto2.value = parseFloat(crypto2.value).toFixed(4);
    }
  });




