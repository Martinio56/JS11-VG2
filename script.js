//Oppgave 1//
let FirmaInfo = {
    firmaNavn: "Bra Bil",
    antallAnsatte: 20,
    bilListe: ["Shelby", " Mustang", " Toyota", " Nissan"],
    betaltSkatt: "350kr",
    nettside: "brabil.no",
    Info: function() {
        console.log(`Firma Navn = ${FirmaInfo.firmaNavn}`)
        console.log(`Antall Ansatte = ${FirmaInfo.antallAnsatte}`)
        console.log(`Bil Liste = ${FirmaInfo.bilListe}`)
        console.log(`Betalt Skatt = ${FirmaInfo.betaltSkatt}`)
        console.log(`Nettside = ${FirmaInfo.nettside}`)
    }
};

console.log(" Oppgave 1");
FirmaInfo.Info();

//Oppgave 2//
FirmaInfo.firmaNavn = "Bedre Bil"
console.log(" Oppgave 2");
console.log(FirmaInfo.firmaNavn);

//Oppgave 3//
FirmaInfo.bilListe.push(' Mazda')
console.log(" Oppgave 3");
console.log(`Biler = ${FirmaInfo.bilListe}`);

//Oppgave 4//
FirmaInfo.bilListe.shift(1)
console.log(" Oppgave 4");
console.log(`Biler =${FirmaInfo.bilListe}`);

//Oppgave 5//
delete FirmaInfo.nettside;
console.log(" Oppgave 5");
console.log(FirmaInfo);

//Oppgave 6//
FirmaInfo.Status = "True";
console.log(" Oppgave 6");
console.log(FirmaInfo);

//Oppgave 7//
console.log("Oppgave 7");
for (let i = 0; i < FirmaInfo.bilListe.length; i++) {
    console.log(FirmaInfo.bilListe[i]);  
}

//Oppgave 8//
console.log("Oppgave 8");
for (var key of Object.keys(FirmaInfo)) {
    console.log(key + " -> " + FirmaInfo[key]);
}

//Oppgave 9//
console.log(" Oppgave 9");
for (var key of Object.keys(FirmaInfo)) {
    console.log(FirmaInfo[key]);
}

//Oppgave 10//
FørsteBil = () => {console.log(FirmaInfo.bilListe[0]);}
console.log("Oppgave 10");
FørsteBil();

//Oppgave 11//
SisteBil = () => {console.log(FirmaInfo.bilListe[FirmaInfo.bilListe.length - 1]);}
console.log("Oppgave 11");
SisteBil();

//Oppgave 12//
var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },

    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: false
    },
    
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
    }
];

console.log("Oppgave 12");
for (let i = 0; i < library.length; i++) {
    if (!library[i].readingStatus) {
        console.log(`Du har ikke lest ${library[i].title} av ${library[i].author}`);
    }
}