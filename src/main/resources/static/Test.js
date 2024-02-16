let billetter  = [];

// Funksjon for å kjøpe billett
function kjopBillett() {
    // Henter verdier fra inputfeltene
    let valgtFilm = document.getElementById("filmvalg").value;
    let valgtAntall = document.getElementById("antall").value;
    let valgtNavn = document.getElementById("navn").value;
    let valgtEtternavn = document.getElementById("etternavn").value;
    let valgtEpost = document.getElementById("epost").value;
    let valgtTelefon = document.getElementById("telefon").value;

    let hentInfo = {
        "filmvalg": valgtFilm,
        "antall": valgtAntall,
        "navn": valgtNavn,
        "etternavn": valgtEtternavn,
        "telefon": valgtTelefon,
        "epost": valgtEpost
    }
    console.log("Dettte er i kjøpBillet")

    let gyldig = true;

    if (hentInfo.filmvalg === "") {
        document.getElementById("feilFilm").innerText = "Du må velge en film!";
        gyldig = false;
    }
    if (hentInfo.antall === "") {
        document.getElementById("feilAntall").innerText = "Velg Antall biletter!";
        gyldig = false;
    }
    if (hentInfo.navn === "") {
        document.getElementById("feilNavn").innerText = "Skriv inn Fornavn!";
        gyldig = false;
    }
    if (hentInfo.etternavn === "") {
        document.getElementById("feilEtternavn").innerText = "Skriv inn Etternavn!";
        gyldig = false;
    }
    if (hentInfo.telefon === "") {
        document.getElementById("feilTelefon").innerText = "Skriv inn telefonnummer!";
        gyldig = false;
    }
    if (hentInfo.epost === "") {
        document.getElementById("feilEpost").innerText = "Skriv inn gyldig e-post!";
        gyldig = false;
    }
    else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(hentInfo.epost)){
        document.getElementById("feilEpost").innerText = "Eposten må være gyldig! HUSK: @";
        gyldig = false;
    }
    if (gyldig) {

    billetter.push(hentInfo);
    console.log(hentInfo);
    visBiletter()

    document.getElementById("filmvalg").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("navn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("epost").value = "";
    document.getElementById("telefon").value = "";
    }
}


function visBiletter(){
    let ut = "Din Bestilling:" + " ";

    ut += "<table><tr><td>Navn</td> " +
        "<td>Etternavn </td> " +
        "<td>Telefonnummer</td> " +
        "<td>E-post</td> " +
        "<td> Antall </td> " +
        "<td>Film</td> " +
        "</tr>"

    for (let i = 0; i < billetter.length; i++){

        ut = ut +
            "<tr> <td>"+ billetter[i].navn +
            "</td> <td>"+billetter[i].etternavn+
            "</td> <td>"+ billetter[i].telefon+
            "</td> <td>"+billetter[i].epost+
            "</td> <td>"+billetter[i].antall+
            "</td> <td>"+billetter[i].filmvalg+
            "</td> </tr></table>";
    }
    document.getElementById("billettinfo").innerHTML = ut;
    console.log(ut)
}


// Funksjon for å slette alle billetter
function slettAlleBilletter() {
    billetter = [];
    console.log(billetter);
    visBiletter();
}