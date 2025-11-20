/* console.log("loaded instruction...");

document.querySelector("#foerste").addEventListener("click", funk1);

function funk1() {
  console.log("funk1 in da house");
  document.querySelector("#pedal").classList.add("my_scale");
  document.querySelector(".info-text h2").textContent = "Undgå at træd i pedalerne";
  document.querySelector(".placeholder").textContent =
    "Det viser sig, at virussen “Cykelpest-23” ligger i dvale i alle metalpedaler, men vågner, når man stiller sig op og træder hårdt i dem.De første symptomer er ekstrem vind i håret, overdreven konkurrenceinstinkt og trang til at råbe “jeg kan komme først op af bakken!”Forskere anbefaler at skubbe sig selv frem med fødderne, eller endnu bedre lade som om man har en punktering.Observationer viser, at virussen ignorerer mennesker, der virker dovne.";
}

document.querySelector("#anden").addEventListener("click", funk2);

function funk2() {
  console.log("funk2 in da house");
  document.querySelector("#hjul").classList.add("my_scale");
  document.querySelector(".info-text h2").textContent = "Tag støttehjul på";
  document.querySelector(".placeholder").textContent =
    "Ifølge cykelforskere fra Aalborg Universitet kan smitten ikke trænge igennem psykologisk umodenhed.Når man monterer støttehjul, sender man et signal til virussen om, at man stadig går i børnehave og ikke kan indgå i konkurrencer.konsekvenser ved dette er lidt social ydmygelse. ";
}

document.querySelector("#tredje").addEventListener("click", funk3);

function funk3() {
  console.log("funk3 in da house");
  document.querySelector("#medalje").classList.add("my_scale");
  document.querySelector(".info-text h2").textContent = "Lad som om du har vundet ";
  document.querySelector(".placeholder").textContent =
    "Cykelpesten reagerer stærkt på følelsen af tab.Hvis du derimod konstant opfører dig som en vinder, mister virussen interessen – den tror, du allerede har gennemført Tour de France og forlader kroppen.Sundhedsmyndighederne anbefaler at bære en guldmedalje samt sige sætninger som: “Ja, det var en hård etape i dag, men jeg klarede den!” Undgå dog interviews – overdreven pral kan genaktivere sygdommen.";
}
*/

console.log("loaded instruction...");

document.querySelector("#foerste").addEventListener("click", funk1);
document.querySelector("#anden").addEventListener("click", funk2);
document.querySelector("#tredje").addEventListener("click", funk3);

function resetAll() {
  console.log("reset");

  // fjern animation fra alle elementer
  document.querySelector("#pedal").classList.remove("my_scale");
  document.querySelector("#hjul").classList.remove("my_scale");
  document.querySelector("#medalje").classList.remove("my_scale");

  // nulstil tekster
  document.querySelector(".info-text h2").textContent = "Vælg en ting, du vil høre om!";
  document.querySelector(".placeholder").textContent = "";
}

function funk1() {
  resetAll(); // NULSTIL først!
  console.log("funk1 in da house");
  document.querySelector("#pedal").classList.add("my_scale");
  document.querySelector(".info-text h2").textContent = "Undgå at træd i pedalerne";
  document.querySelector(".placeholder").textContent =
    "Det viser sig, at virussen “Cykelpest-23” ligger i dvale i alle metalpedaler, men vågner, når man stiller sig op og træder hårdt i dem.De første symptomer er ekstrem vind i håret, overdreven konkurrenceinstinkt og trang til at råbe “jeg kan komme først op af bakken!”Forskere anbefaler at skubbe sig selv frem med fødderne, eller endnu bedre lade som om man har en punktering.Observationer viser, at virussen ignorerer mennesker, der virker dovne.";
}

function funk2() {
  resetAll();
  console.log("funk2 in da house");
  document.querySelector("#hjul").classList.add("my_scale");
  document.querySelector(".info-text h2").textContent = "Tag støttehjul på";
  document.querySelector(".placeholder").textContent =
    "Ifølge cykelforskere fra Aalborg Universitet kan smitten ikke trænge igennem psykologisk umodenhed.Når man monterer støttehjul, sender man et signal til virussen om, at man stadig går i børnehave og ikke kan indgå i konkurrencer.konsekvenser ved dette er lidt social ydmygelse. ";
}

function funk3() {
  resetAll();
  console.log("funk3 in da house");
  document.querySelector("#medalje").classList.add("my_scale");
  document.querySelector(".info-text h2").textContent = "Lad som om du har vundet";
  document.querySelector(".placeholder").textContent =
    "Cykelpesten reagerer stærkt på følelsen af tab.Hvis du derimod konstant opfører dig som en vinder, mister virussen interessen – den tror, du allerede har gennemført Tour de France og forlader kroppen.Sundhedsmyndighederne anbefaler at bære en guldmedalje samt sige sætninger som: “Ja, det var en hård etape i dag, men jeg klarede den!” Undgå dog interviews – overdreven pral kan genaktivere sygdommen.";
}
