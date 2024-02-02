/**
 * Element HTML reprezentujący pole debugowania.
 * @type {HTMLElement}
 */
var debug = document.getElementById('DEBUG');

/**
 * Elementy HTML reprezentujące pola wyboru kryptowalut w formularzu.
 * @type {HTMLSelectElement}
 */
var formCur1 = document.querySelector('select[name="cur1"]');
var formCur2 = document.querySelector('select[name="cur2"]');
var formCur1img = document.getElementById('curImg1');
var formCur2img = document.getElementById('curImg2');

/**
 * Elementy HTML reprezentujące pola wprowadzania ilości kryptowalut w formularzu.
 * @type {HTMLInputElement}
 */
var crypto1 = document.querySelector('input[name="crypto-from-value"]');
var crypto2 = document.querySelector('input[name="crypto-to-value"]');

/**
 * Element HTML reprezentujący strzałkę w formularzu.
 * @type {HTMLElement}
 */
var arrow = document.getElementById('transfer-img');

/**
 * Nasłuchiwanie na zmiany w pierwszym polu wyboru kryptowaluty w formularzu.
 */
formCur1.addEventListener('change', function formCur1update() {
    updateLogos();
    updateCrypto2from();
    blockCurrentCrypto();
});

/**
 * Nasłuchiwanie na zmiany w drugim polu wyboru kryptowaluty w formularzu.
 */
formCur2.addEventListener('change', function formCur2update() {
    updateLogos();
    updateCrypto1from();
    blockCurrentCrypto();
});

/**
 * Funkcja zamieniająca miejscami wartości pól wprowadzania kryptowalut i ich symboli.
 */
function changeSides() {
    var tempValue;

    tempValue = crypto1.value;
    crypto1.value = crypto2.value;
    crypto2.value = tempValue;

    tempValue = formCur1.value.substring(0, 3) + "2";
    formCur1.value = formCur2.value.substring(0, 3) + "1";
    formCur2.value = tempValue;

    updateLogos();

    debug.innerHTML = crypto1.value + crypto2.value;
}

/**
 * Nasłuchiwanie na zmiany w pierwszym polu wprowadzania kryptowaluty.
 */
crypto1.addEventListener('change', function () {
    updateCrypto2from();
    crypto1.value = (Math.round(crypto1.value * 100) / 100).toFixed(4);
});

/**
 * Nasłuchiwanie na zmiany w drugim polu wprowadzania kryptowaluty.
 */
crypto2.addEventListener('change', function () {
    updateCrypto1from();
    crypto2.value = (Math.round(crypto2.value * 100) / 100).toFixed(4);
});

/**
 * Funkcja aktualizująca ilość kryptowaluty w drugim polu na podstawie wyboru w pierwszym polu.
 */
function updateCrypto2from() {
    // ...
}

/**
 * Funkcja aktualizująca ilość kryptowaluty w pierwszym polu na podstawie wyboru w drugim polu.
 */
function updateCrypto1from() {
    // ...
}

/**
 * Funkcja blokująca wybór aktualnie wybranej kryptowaluty w drugim polu.
 */
function blockCurrentCrypto() {
    // ...
}

/**
 * Funkcja aktualizująca obrazy kryptowalut w formularzu na podstawie wybranych symboli.
 */
function updateLogos() {
    // ...
}

/**
 * Nasłuchiwanie na zdarzenie "blur" w polu wprowadzania kryptowaluty 1.
 */
crypto1.addEventListener('blur', function () {
    if (crypto1.value.includes('.') && crypto1.value.split('.')[1].length > 4) {
        crypto1.value = parseFloat(crypto1.value).toFixed(4);
    }
});

/**
 * Nasłuchiwanie na zdarzenie "blur" w polu wprowadzania kryptowaluty 2.
 */
crypto2.addEventListener('blur', function () {
    if (crypto2.value.includes('.') && crypto2.value.split('.')[1].length > 4) {
        crypto2.value = parseFloat(crypto2.value).toFixed(4);
    }
});