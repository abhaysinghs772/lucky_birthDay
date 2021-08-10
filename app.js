`use strict`;

const birthDate = document.querySelector('.birthDate');
const luckyNumber = document.querySelector('.luckyNumberInput');
const checkButton = document.querySelector('#checkBtn');
const luckyMessage = document.querySelector('.luckyMsz');
const unLuckyMessage = document.querySelector('.unLuckyMsz');
const privacyMessage = document.querySelector('.privacyMsz');
const privacyToggler= document.querySelector('.privacyToggler');

let birth_Date_To_NUmber;
let luckyNumber_To_Number;
let onlyStrings_Of_birthDate;

privacyToggler.addEventListener('click', ()=>{
    hideMsz(privacyMessage);
});

checkButton.addEventListener('click', () => {
    console.log('clicked');
    // console.log(birthDate.value);
    // console.log(luckyNumber.value);

    onlyStrings_Of_birthDate = birthDate.value.replaceAll('-', '');

    birth_Date_To_NUmber = Number(onlyStrings_Of_birthDate);
    // console.log(birth_Date_To_NUmber);

    luckyNumber_To_Number = Number(luckyNumber.value);
    // console.log(luckyNumber_To_Number);

    if (birth_Date_To_NUmber % luckyNumber_To_Number === 0) {
        // console.log('you are lucky man');
        showMsz(luckyMessage);
        hideMsz(unLuckyMessage);
    } else {
        // console.log('hey buddy! you are too lucky man!');
        hideMsz(luckyMessage);
        showMsz(unLuckyMessage);
    }
});

function showMsz(xyz) {
    return xyz.style.display = 'block';
}

function hideMsz(xyz) {
    return xyz.style.display = 'none';
}