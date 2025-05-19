const input = document.querySelector('.input');


function append(char) {
    input.value += char;
}
function blank() {
    input.value = '';
}

function erase() {
    input.value = input.value.slice(0, -1);
}

function reciprocal() {
    if (isFinite(input.value)) {
        input.value = 1 / input.value
    }
    else {
        input.value = 'Error'
    }
}

function square() {
    if (isFinite(input.value)) {
        input.value = input.value ** 2
    }
    else {
        input.value = 'Error'
    }
}

function sqroot() {
    if (isFinite(input.value)) {
        input.value = input.value ** 0.5
    }
    else {
        input.value = 'Error'
    }
}

function sign() {
    if (isFinite(input.value)) {
        input.value = input.value * (-1)
    }
    else { input.value = 'Error' }
}

function solve() {
    try {

        input.value = eval(input.value)
    }
    catch {
        input.value = 'Error'
    }
}

//sidebar functionality
const sidebarBTN = document.querySelector('.sidebarBTN');
const sideSection = document.querySelector('.sideSection');

sidebarBTN.addEventListener('click', () => {
    if (sideSection.style.display == 'none') {

        sideSection.style.display = 'block';
        sidebarBTN.style.transform = 'rotate(90deg)';
    }
    else {
        sideSection.style.display = 'none'
        sidebarBTN.style.transform = 'rotate(0deg)';
    }
})

//changing calculators

const container = document.querySelector('.container');

const Standard = document.querySelector('.Standard');
const Scientific = document.querySelector('.Scientific');

const standardSec = document.querySelector('.standardSec');
const scientificSec = document.querySelector('.scientificSec');

const title = document.querySelector('.title');

Standard.addEventListener('click' , () => {
    
    scientificSec.style.display = 'none';
    standardSec.style.display = 'block';
    sideSection.style.display == 'none';
    input.classList.remove("sciInput");
    container.classList.remove("sciContainer");
    sideSection.classList.remove("scisideSection");
    title.innerHTML = `Standard Calculator`;
})
  

Scientific.addEventListener('click' , () => {
    
    standardSec.style.display = 'none';
    scientificSec.style.display = 'block';
    input.classList.add("sciInput");
    container.classList.add("sciContainer");
    sideSection.classList.add("scisideSection");
    title.innerHTML = `Scientific Calculator`;

})
