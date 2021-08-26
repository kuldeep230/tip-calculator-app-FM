let billAmount = document.querySelector("#bill-amount");
let tipPercentage = document.querySelectorAll(".tip-percentage");
let numPeople = document.querySelector("#num-of-people");
let tipPerPerson = document.querySelector("#tip-per-person");
let totalPerPerson = document.querySelector(".total-tip-person-figure");
let customTip = document.querySelector("#tip-percentange-custom");
let resetButton = document.querySelector(".reset-button");

tipPercentage.forEach((tip) => {
  let activeTip = document.querySelector(".active");
  tip.onclick = () => {
    tip.classList.toggle("active");
    calcTipPerPerson();
    calTotalPerPerson();
  };
});

function calcTipPerPerson() {
  let activeTip = document.querySelector(".active");
  if (activeTip) {
    let x = (Number(billAmount.value) * Number(activeTip.value)) / 100;
    tipPerPerson.innerText = `$${parseFloat(
      x / Number(numPeople.value)
    ).toFixed(2)}`;
  } else if (customTip.value !== 0 || customTip.value !== "") {
    let x = (Number(billAmount.value) * Number(customTip.value)) / 100;
    tipPerPerson.innerText = `$${parseFloat(
      x / Number(numPeople.value)
    ).toFixed(2)}`;
  } else {
    tipPerPerson.innerText = "$0.00";
  }
}

function calTotalPerPerson() {
  let activeTip = document.querySelector(".active");
  if (activeTip) {
    let x = (Number(billAmount.value) * Number(activeTip.value)) / 100;
    let y = parseFloat(x / Number(numPeople.value));
    totalPerPerson.innerText = `$${(
      y +
      Number(billAmount.value) / Number(numPeople.value)
    ).toFixed(2)}`;
  } else if (customTip.value !== 0 || customTip.value !== "") {
    let x = (Number(billAmount.value) * Number(customTip.value)) / 100;
    let y = parseFloat(x / Number(numPeople.value));
    totalPerPerson.innerText = `$${(
      y +
      Number(billAmount.value) / Number(numPeople.value)
    ).toFixed(2)}`;
  } else {
    totalPerPerson.innerText = "$0.00";
  }
}

function start() {
  billAmount.onkeyup = () => {
    calcTipPerPerson();
    calTotalPerPerson();
  };
  numPeople.onkeyup = () => {
    calcTipPerPerson();
    calTotalPerPerson();
  };
}
start();
