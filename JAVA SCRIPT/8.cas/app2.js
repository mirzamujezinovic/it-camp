// Ispisati brojeve od 1 do 10 u konzoli jedan ispod drugog:

// I nacin
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

// II nacin

// Za iteraciju kroz neki objekat (niz, karaktere stringa...) u javaScriptu koristimo petlju.
// Postoje 3 petlje u JS:

// 1. for petlja

// for (statement1; statement2; statement3) {
//     // kod koji se izvrsava za svaku iteraciju
// }

// statement1 - Izvrsava se samo jedanput u pocetku i predstavlja definisanje iteratora.
// statement2 - Predstavlja uslov do koje ce se petlja izvrsavati.
// statement3 - Predstavlja promenu vrednosti iteratora nakon svake iteracije.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Domaci zadaci:
// 1.
// Napisati program koji na osnovu dva uneta broja od strane korisnika ispisuje:
// Povrsinu kvadrata ako su uneti brojevi jednaki,
// Povrsinu pravougaonika ako su uneti brojevi razliciti.

// I nacin pomocu if :
const number = +prompt("Unesite prvi broj");
const number1 = +prompt("Unesite drugi broj");

if (isNaN(number) || isNaN(number1)) {
    console.log("Uneli ste nevazeci broj")
} else if (number === number1) {
    console.log("Povrsina kvadrata je:", number * number1)
} else if (number !== number1) {
    console.log("Povrsina pravougaonika je:", number * number1)
}

// II nacin pomocu switch :
const number2 = +prompt("Unesite prvi broj");
const number3 = +prompt("Unesite drugi broj");

switch (number2 === number3) {
    case true:
        let povrsinaKvadrata = number2 * number3;
        console.log("Povrsina kvadrata je:", povrsinaKvadrata);
        break;
    case false:
        let povrsinaPravougaonika = number2 * number3;
        console.log("Povrsina pravougaonika je:", povrsinaPravougaonika);
}

// 2. Zadatak - switch naredba
// Korisnik unosi dva realna broja x i y. Napisati program koji izracunava i stampa
// kolicnik x/y, ako je broj y razlicit od nule,
// a inace ispisuje poruku: Deljenje je nemoguce.

const x = +prompt("Unesite brojnu vrednost X");
const y = +prompt("Unesite brojnu vrednost Y");

switch (y !== 0) {
    case true:
        console.log("Kolicnik ova dva broja je:", x / y);
        break;
    default:
        console.log("Deljenje je nemoguce jer Y nije razlicit od nule!")
}



// 3. Sezona godine:
// Napiši program koji će korisnika pitati za unos meseca (broj između 1 i 12) i ispisati odgovarajuću sezonu godine.
const mesec = +prompt("Unesite broj meseca")

switch (mesec) {
    case 1:
    case 2:
    case 12:
        console.log("Zima");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Prolece");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Leto");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Jesen");
        break;
    default:
        console.log("Niste uneli vazeci broj meseca");
}


// 4. Kalkulator operacija:
// Napiši program koji će tražiti od korisnika da unese dva broja i operaciju (‘+’, ‘-’, ‘*’, ‘/’), a zatim ispisati rezultat te operacije.

const prviBroj = +prompt("Unesite prvi broj")
const drugiBroj = +prompt("Unesite drugi broj")
const operacija = prompt("Unesite operaciju: sabiranje (+) , oduzimanje (-) , mnozenje (*) , deljenje (/).")

switch (operacija) {
    case `+` :
        console.log("Zbir ova dva broja je:", prviBroj + drugiBroj)
        break;
    case `-` :
        console.log("Razlika ova dva broja je:", prviBroj - drugiBroj)
        break;
    case `*` :
        console.log("Proizvod ova dva broja je:", prviBroj * drugiBroj)
        break;
    case `/` :
        if (drugiBroj !== 0) {
            console.log("Kolicnik ova dva broja je:", prviBroj / drugiBroj)
        } else {
            console.log("Nemoguce je deliti nulom")
        }
        break;
    default:
        console.log("Niste uneli odgovarajuci broj ili odgovarajucu operaciju")
}