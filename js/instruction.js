console.log("loaded instruction...");

document.querySelector("#foerste").addEventListener("click", funk1);

function funk1() {
  console.log("funk1 in da house");
  document.querySelector("#pedal").classList.add("my_scale");
  document.querySelector(".info-text h2").textContent = "Undgå at træd i pedalerne";
}

document.querySelector("#anden").addEventListener("click", funk2);

function funk2() {
  console.log("funk2 in da house");
  document.querySelector("#hjul").classList.add("my_scale");
  document.querySelector(".info-text h2").textContent = "Tag støttehjul på";
}

document.querySelector("#tredje").addEventListener("click", funk3);

function funk3() {
  console.log("funk3 in da house");
  document.querySelector("#medalje").classList.add("my_scale");
  document.querySelector(".info-text h2").textContent = "Lad som om du har vundet ";
}
