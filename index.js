const inputNum = document.querySelector(".input-Content");
const convertBtn = document.querySelector(".click-btn");

const meterToFeetConversion = 3.281;
const literToGallonConversion = 0.264;
const kilogramToPoundConversion = 2.204;
const lengthMeter = document.querySelector(".display-lenresult");
const Volume = document.querySelector(".display-VolResult");
const Kilo = document.querySelector(".display-mass");

convertBtn.addEventListener("click", function () {
  let BaseValue = inputNum.value;

  lengthMeter.textContent = `${BaseValue} Meters = ${
    BaseValue * 3.281
  }Feets | ${BaseValue} Feets = ${BaseValue / 3.281}`;

  Volume.textContent = `${BaseValue} Volume = ${
    BaseValue * 0.264
  }Feets | ${BaseValue} Feets = ${BaseValue / 0.264}`;
  Kilo.textContent = `${BaseValue} Kilogram = ${
    BaseValue * 2.204
  }Feets | ${BaseValue} Feets = ${BaseValue / 2.204}`;
});
