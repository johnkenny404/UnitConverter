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

  lengthMeter.textContent = `${BaseValue} Meters = ${(
    BaseValue * 3.281
  ).toFixed(4)}Feets | ${BaseValue} Feets = ${(BaseValue / 3.281).toFixed(
    4
  )}Meters`;

  Volume.textContent = `${BaseValue} Volume = ${(BaseValue * 0.264).toFixed(
    4
  )}Gallons | ${BaseValue} Gallons = ${(BaseValue / 0.264).toFixed(4)}Volume`;
  Kilo.textContent = `${BaseValue} Kilogram = ${(BaseValue * 2.205).toFixed(
    4
  )}Pounds | ${BaseValue} Pounds = ${(BaseValue / 2.204).toFixed(4)}Kilograms`;
});
