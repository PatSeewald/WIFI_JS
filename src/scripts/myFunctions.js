/**
 * Rundet eine übergebene Zahl anhand der übergebenen Stellen
 * @param {number} zahl 
 * @param {number} stellen 
 */
let runden = function (zahl, stellen) {
    let f;

    if (isNaN(stellen)) {
        f = Math.pow(10, 0);
    }
    else {
        f = Math.pow(10, stellen);
    }
    return Math.round(zahl * f) / f;
}

/**
 * Konvertiert eine Zahl und ersetzt das einfache Komma durch einen Punkt
 * @param {any} userInput 
 */
let convertInput = function (userInput) {
    var eingabe = userInput + '';
    return eingabe.replace(',', '.') * 1;
}

/**
 * Konvertiert eine Zahl und ersetzt den Punkt durch ein einfaches Komma
 * @param {number} number 
 */
let convertOutput = function (number) {
    let output = number.toString();
    return output.replace('.', ',');
}

/**
 * Erzeugt eine zufällige Zahl im Bereich 'von' und 'bis'
 * @param {number} von 
 * @param {number} bis 
 */
let randomNumber = function (von, bis) {
    let zahl, faktor;

    f = bis - von + 1;

    zahl = Math.floor(Math.random() * f) + von;

    return zahl;
}

/**
 * Erzeugt eine zufällige Farbe
 */
let erzeugeZufallsfarbe = function () {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
}

/**
 * Gibt das Element aus dem DOM zurück
 * @param {string} id 
 */
let _e = function (id, selector) {

    return document.getElementById(id);

}