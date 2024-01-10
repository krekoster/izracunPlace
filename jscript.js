

function calculate() {

    const osnovica = 197.81;
    const sluzbenaVoznja = 6.64;
    const poreznaOlaksica = 560;
    const osobniOdbitak = 560;
    const prosjecnaBrutoPlacaKuce = 1566.3;
    const koeficijent = document.getElementById("koeficijent").value;
    const porez2 = document.getElementById("porezNaDohodak").value / 1;
    
    const brojDjece = document.getElementById("brojDjece").value / 1;


    const norma = document.getElementById("normaSati").value;

    const postotakStazHrt = document.getElementById("dodatakStazUKuci").value;
    const postotakStaz = document.getElementById("dodatakStaz").value;

    const brutoOsnova = osnovica * koeficijent;
    const osnovniSat = brutoOsnova / norma;

    const subote = document.getElementById("satiSubota").value * osnovniSat * 0.15;
    const nedjelje = document.getElementById("satiNedjelja").value * osnovniSat * 0.5;
    const praznik = document.getElementById("satiPraznik").value * osnovniSat * 1.45;
    const popodne = document.getElementById("satiPopodne").value * osnovniSat * 0.07;
    const dvokratno = document.getElementById("satiDvokratno").value * osnovniSat * 0.1;
    const noc = document.getElementById("satiNoc").value * osnovniSat * 0.35;
    const prekovremeni = document.getElementById("satiPrekovremeni").value * osnovniSat * 1.45;
    const pvu = document.getElementById("satiPVU").value * osnovniSat * 0.45;
    const utovar = document.getElementById("satiUtovar").value * osnovniSat * 0.5;
    const pasiva = document.getElementById("satiPasiva").value * osnovniSat * 0.05;
    const aktiva = document.getElementById("satiAktiva").value * osnovniSat * 0.4;
    const visina = document.getElementById("satiVisina").value * osnovniSat * 0.75;
    const rat = document.getElementById("satiRat").value * osnovniSat * 1;
    const voznja = document.getElementById("brojVoznji").value * sluzbenaVoznja;
    const stimulacijaPosto = document.getElementById("stimulacijaPostotak").value / 100;

    const brutoDodaci = subote + nedjelje + praznik + popodne + dvokratno + noc + prekovremeni
        + pvu + utovar + pasiva + aktiva + visina + rat;

    const dodatakNaStazHrt = postotakStazHrt * prosjecnaBrutoPlacaKuce / 100;
    const dodatakNaStaz = postotakStaz * brutoOsnova / 100;

    const brutoTotal = brutoOsnova + brutoDodaci + dodatakNaStazHrt + dodatakNaStaz + voznja
        + stimulacijaPosto * brutoOsnova;

    // doprinosi i porezi

    let ukupniOsobniOdbitak = 0;
    switch (brojDjece) {
        case 0:
            ukupniOsobniOdbitak = osobniOdbitak * 0;
            break;
        case 1:
            ukupniOsobniOdbitak = osobniOdbitak * 0.5;
            break;
        case 2:
            ukupniOsobniOdbitak = osobniOdbitak * 0.7;
            break;
        case 3:
            ukupniOsobniOdbitak = osobniOdbitak * 1;
            break;
        case 4:
            ukupniOsobniOdbitak = osobniOdbitak * 1.4;
            break;
        case 5:
            ukupniOsobniOdbitak = osobniOdbitak * 1.9;
        case 6:
            ukupniOsobniOdbitak = osobniOdbitak * 2.5;
        case 7:
            ukupniOsobniOdbitak = osobniOdbitak * 3.2;
    }

    const mirovinskiPrvi = brutoTotal * 0.15;
    const mirovinskiDrugi = brutoTotal * 0.05;
    const dohodak = brutoTotal - mirovinskiPrvi - mirovinskiDrugi;
    const poreznaOsnovica = dohodak - poreznaOlaksica - ukupniOsobniOdbitak;
    var porez = poreznaOsnovica * porez2 / 100;
    

    if (poreznaOsnovica < 0) {
        porez = 0;
    }

    // ---- izracun neto

    const netoTotal = dohodak - porez;

    // ispis


    document.getElementById("brutoSat").innerText = osnovniSat.toFixed(2);
    document.getElementById("brutoUkupno").innerText = brutoTotal.toFixed(2);
    document.getElementById("netoUkupno").innerText = netoTotal.toFixed(2);

    console.log("--------------------");
    console.log(porez);
    console.log(typeof(porez2));
    console.log(typeof(netoTotal));

};






