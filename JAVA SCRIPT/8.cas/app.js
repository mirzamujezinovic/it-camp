// Switch naredbu koristimo kada zelimo kroz slucajeve pokriti tacne moguce vrednosti.

switch (5-3) {
    case 10:
        // kod koji se izvrsava ako je izraz === 10
        break;
    case 5:
        // kod koji se izvrsava ako je izraz === 5
        break;
    case 2:
        // kod koji se izvrsava ako je izraz === 2
        break;
    default:
        // kod koji izvrsava ako nisu zadovoljeni prethodni slucajevi
}

// break prekida izvrsavanje naredbe.
// break keyword stavljamo na kraju slucaja da se ne bi izvrsio kod od narednog slucaja koji nije zadovoljen.

// 1. Korisnik unosi broj:
// Ako je uneo broj izmedju 12 i 15 (ukljucujuci oba) neka se ispise poruka: "uneli ste vrednostBroja"
// Defaultno: Niste uneli broj iz trazenog opsega.


const vrednostBroja = +prompt("Unesite broj izmedju 12 i 15");

switch (vrednostBroja) {
    case 12:
    case 13:
    case 14:
    case 15:
        console.log("Uneli ste broj " + vrednostBroja);
        break;
    default:
        console.log("Niste uneli broj iz trazenog opsega.");
}

// Dani u nedelji:
// Napisi program koji traziti od korisnika da unese redni broj dana u nedjelji (1 za ponedeljak, 2 za utorak, itd.)

const broj = +prompt("Unesite redni broj dana u nedelji")

switch (broj) {
    case 1:
        console.log("Ponedeljak");
        break;
    case 2:
        console.log("Utorak");
        break;
    case 3:
        console.log("Sreda");
        break;
    case 4:
        console.log("Cetvrtak");
        break;
    case 5:
        console.log("Petak");
        break;
    case 6:
        console.log("Subota");
        break;
    case 7:
        console.log("Nedelja");
        break;
    default:
        console.log("Niste uneli broj iz trazenog opsega.");
}