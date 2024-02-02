/**
 * Zmienna reprezentująca główny kontener strony.
 * @type {HTMLElement}
 */
const box = document.querySelector("body");

/**
 * Element HTML reprezentujący wyświetlaną pozycję X na stronie.
 * @type {HTMLElement}
 */
const pageX = document.getElementById("x");

/**
 * Element HTML reprezentujący wyświetlaną pozycję Y na stronie.
 * @type {HTMLElement}
 */
const pageY = document.getElementById("y");

/**
 * Funkcja aktualizująca wyświetlane pozycje X i Y na stronie na podstawie zdarzenia myszy.
 * @param {MouseEvent} event - Zdarzenie myszy.
 */
function updateDisplay(event) {
    /**
     * Aktualna pozycja X myszy.
     * @type {number}
     */
    let x = event.pageX * -1;

    /**
     * Aktualna pozycja Y myszy.
     * @type {number}
     */
    let y = event.pageY * -1;

    // Aktualizacja wyświetlanych pozycji X i Y.
    pageX.innerText = x;
    pageY.innerText = y;

    // Opcjonalne: Zmiana pozycji tła w kontenerze.
    // box.style.backgroundPositionX = (x / 4) + "px";
    // box.style.backgroundPositionY = (y / 4) + "px";
}

// Nasłuchiwanie zdarzenia ruchu myszy na głównym kontenerze.
box.addEventListener("mousemove", updateDisplay, false);

/**
 * Zbiór elementów HTML zawierających select, input i button.
 * @type {NodeListOf<HTMLElement>}
 */
const inputItems = document.querySelectorAll("select, input, button");

// Iteracja przez każdy element zbioru i dodanie nasłuchiwacza na zdarzenie najechania myszą.
inputItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
        // Dodanie efektu rozmycia dla kontenera w przypadku najechania myszą na elementy formularza.
        box.style = "backdrop-filter: blur(5px)";
    });

    // Dodanie nasłuchiwacza na zdarzenie opuszczenia myszą elementów formularza.
    item.addEventListener("mouseleave", function () {
        // Usunięcie efektu rozmycia po opuszczeniu myszą elementów formularza.
        box.style = "backdrop-filter: blur(0px)";
    });
});