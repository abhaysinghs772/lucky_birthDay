`use strict`;

const birthDate = document.querySelector('.birthDate');
const luckyNumber = document.querySelector('.luckyNumberInput');
const checkButton = document.querySelector('#checkBtn');

checkButton.addEventListener('click', ()=>{
    console.log('clicked');
    console.log(birthDate.value);
    console.log(luckyNumber.value);
});