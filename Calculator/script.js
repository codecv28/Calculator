const input = document.querySelector('.input');

function append(char) {
    input.value += char;
}
const π = Math.PI.toFixed(6);
const e = Math.E.toFixed(6);
function specialAppend(char) {
    switch (char) {
        case 'π':
            input.value += π;
            break;
        case 'e':
            input.value += e;
            break;
    }
}

function factorial() {
    const z = parseFloat(input.value);
    if (isFinite(z) && z >= 0) {
        const result = math.gamma(z + 1);
        input.value = result.toFixed(6);
    } else {
        input.value = 'Error';
    }
}

function absolute() {
    if (isFinite(input.value)) {
        if (input.value >= 0) {
            return input.value;
        }
        else {
            input.value = input.value * -1;
        }
    }
    else {
        input.value = 'Error';
    }
}

function xtoPowery() {
    if (isFinite(input.value)) {

        input.value += '**';
    }
    else {
        input.value = 'Error'
    }
}

function logarithm() {
    if (isFinite(input.value)) {
        input.value += 'logbase';
    }
    else {
        input.value = 'Error'
    }
}
function lnLOG() {
    if (isFinite(input.value)) {
        input.value = Math.log(input.value);
    }
    else {
        input.value = 'Error'
    }
}
function tenLOG() {
    if (isFinite(input.value)) {
        input.value = Math.log10(input.value);
    }
    else {
        input.value = 'Error'
    }
}
function etoPowery() {
    input.value += 'e**';
}
function tentoPowerx() {
    input.value += '10**';
}
function xRooty() {
    if (isFinite(input.value)) {
        input.value += 'root';
    }
    else {
        input.value = 'Error'
    }
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

function modremainder() {
    let mod = '%';
    if (isFinite(input.value)) {
        input.value += '%';
    }
    else {
        input.value = 'Error'
    }
}

function sign() {
    if (isFinite(input.value)) {
        input.value = parseFloat(input.value);
        input.value = input.value * (-1)
    }
    else { input.value = 'Error' }
}

function roundOF(num) {
    if ((num < 0.000001 && num > 0) || (num < 0 && num > -0.000001)) {
        num = 0;
        return num;
    }
    else if (num > 0.99999 && num < 1) {
        num = 1;
        return num;
    }
    else if (num > -1 && num < -0.99999) {
        num = -1;
        return num;
    }
    else {
        return num;
    }
}

function trigoperator(char) {
    if (isFinite(input.value)) {

        let angle = input.value * Math.PI / 180;
        let temp;

        switch (char) {
            case 'sin':
                temp = Math.sin(angle);
                input.value = roundOF(temp);
                break;
            case 'cos':
                temp = Math.cos(angle);
                input.value = roundOF(temp);
                break;
            case 'tan':
                if (angle % (Math.PI / 2) == 0 && angle % 2 != 0) {
                    input.value = 'Undefined';
                }
                else {

                    temp = Math.tan(angle);
                    input.value = roundOF(temp);
                }
                break;
            case 'cosec':
                if (angle % Math.PI == 0) {
                    input.value = 'Undefined';
                }
                else {

                    temp = 1 / Math.sin(angle);
                    input.value = roundOF(temp);
                }
                break;
            case 'sec':
                if (angle % (Math.PI / 2) == 0 && angle % 2 != 0) {
                    input.value = 'Undefined';
                }
                else {

                    temp = 1 / Math.cos(angle);
                    input.value = roundOF(temp);
                }
                break;
            case 'cot':
                if (angle % Math.PI == 0) {
                    input.value = 'Undefined';
                }
                else {
                    temp = 1 / Math.tan(angle);
                    input.value = roundOF(temp);
                }
                break;
            default:
                input.value = 'Error'
        }
    }
    else {
        input.value = 'Error';
    }
}

function inverseTrig1(char) {
    if (isFinite(input.value)) {
        let z = input.value;
        if (z >= -1 || z <= 1) {
            switch (char) {
                case 'sin⁻¹':
                    input.value = Math.asin(z) * 180 / Math.PI;
                    break;
                case 'cos⁻¹':
                    input.value = Math.acos(z) * 180 / Math.PI;
                    break;
                default:
                    input.value = 'Error';
            }


            switch (char) {
                case 'cosec⁻¹':
                    input.value = Math.asin(1 / z) * 180 / Math.PI;
                    break;
                case 'sec⁻¹':
                    input.value = Math.acos(1 / z) * 180 / Math.PI;
                    break;
                default:
                    input.value = 'Error';
            }
        }

        else {
            input.value = 'Error';
        }

    }
    else {
        input.value = 'Error';
    }
}

function inverseTrig2(char) {
    if (isFinite(input.value)) {
        let z = input.value;

        switch (char) {
            case 'tan⁻¹':
                input.value = Math.atan(z) * 180 / Math.PI;
                break;
            case 'cot⁻¹':
                input.value = Math.atan(1 / z) * 180 / Math.PI;
                break;
            default:
                input.value = 'Error';
        }
    }
    else {
        input.value = 'Error';
    }
}

function solve() {
    if (!input.value.trim()) {
        input.value = '';
        return;
    }

    try {
        if ((input.value).includes('root')) {
            let text = input.value;
            let num1 = text.slice(0, text.indexOf('r'));
            let num2 = text.slice(text.indexOf('t') + 1);

            if (num1 < 0 || num2 == 0) {
                input.value = 'Error';
            }
            else {

                input.value = Math.pow(parseInt(num1), (1 / parseInt(num2)));
            }
            return;
        }
        else if ((input.value).includes('logbase')) {
            let text = input.value;
            let num1 = text.slice(0, text.indexOf('l'));
            let num2 = text.slice(text.indexOf('e') + 1);

            input.value = math.log(num1, num2);
            return;
        }
        else {

            input.value = eval(input.value);
        }
    } catch {
        input.value = 'Error';
    }
}

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        solve();
    }
})

//sidebar functionality
const sidebarBTN = document.querySelector('.sidebarBTN');
const sideSection = document.querySelector('.sideSection');

//changing calculators

const container = document.querySelector('.container');

const Standard = document.querySelector('.Standard');
const Scientific = document.querySelector('.Scientific');

const standardSec = document.querySelector('.standardSec');
const scientificSec = document.querySelector('.scientificSec');

const title = document.querySelector('.title');

Standard.addEventListener('click', () => {

    scientificSec.style.display = 'none';
    standardSec.style.display = 'block';
    sideSection.classList.remove('sideSectionShow');
    input.classList.remove("sciInput");
    container.classList.remove("sciContainer");
    sideSection.classList.remove("scisideSection");
    title.innerHTML = `Standard Calculator`;
    sidebarBTN.style.transform = 'rotate(0deg)';
})


Scientific.addEventListener('click', () => {

    standardSec.style.display = 'none';
    scientificSec.style.display = 'block';
    input.classList.add("sciInput");
    container.classList.add("sciContainer");
    sideSection.classList.remove('sideSectionShow');
    sideSection.classList.add('SCIsideSectionSTD1');
    title.innerHTML = `Scientific Calculator`;
    sidebarBTN.style.transform = 'rotate(0deg)';

})

sidebarBTN.addEventListener('click', () => {
    if (scientificSec.style.display != 'block') {

        if (sideSection.classList.contains('sideSectionSTD1')) {

            sideSection.classList.replace('sideSectionSTD1', 'sideSectionSTD2');
            sidebarBTN.style.transform = 'rotate(90deg)';
            sideSection.classList.add('sideSectionShow');

            // sideSection.style.transform = 'translate3d(-90px,12px,0)';
        }
        else {
            sideSection.classList.replace('sideSectionSTD2', 'sideSectionSTD1');
            sidebarBTN.style.transform = 'rotate(0deg)';
            sideSection.classList.remove('sideSectionShow');
        }
    }
    else if (standardSec.style.display != 'block') {
        if (sideSection.classList.contains('SCIsideSectionSTD1')) {

            sideSection.classList.replace('SCIsideSectionSTD1', 'SCIsideSectionSTD2');
            sidebarBTN.style.transform = 'rotate(90deg)';
            sideSection.classList.add('sideSectionShow');

            // sideSection.style.transform = 'translate3d(-90px,12px,0)';
        }
        else {
            sideSection.classList.replace('SCIsideSectionSTD2', 'SCIsideSectionSTD1');
            sidebarBTN.style.transform = 'rotate(0deg)';
            sideSection.classList.remove('sideSectionShow');
        }

    }

})
