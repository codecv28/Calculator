const input = document.querySelector('.input');


function append(char) {
    input.value += char;
}
const π = Math.PI;
const e = Math.E;
function specialAppend(char){
        switch (char){
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
        const result = math.gamma(z + 1); // factorial(n) = Gamma(n + 1)
        input.value = result.toFixed(6);  // round to 6 decimal places
    } else {
        input.value = 'Error';
    }
}

function absolute(){
    if(isFinite(input.value)){
        if(input.value>=0){
            return input.value;
        }
        else{
            input.value = input.value*-1;
        }
    }
    else{
        input.value = 'Error';
    }
}
 
function xtoPowery(){
    if(isFinite(input.value)){
        
        input.value += '**';
    }
    else{
        input.value = 'Error'
    }
}

// console.log(math.log(10))
// console.log(Math.log(10,1 0));
// // // // function logarithm(){
// // // //     if(isFinite(input.value)){
// // // //         input.value += 'log base';
// // // //     }
// // // // }
function lnLOG(){
    if(isFinite(input.value)){
        input.value = Math.log(input.value);
    }
    else{
        input.value = 'Error'
    }
}
function tenLOG(){
    if(isFinite(input.value)){
        input.value = Math.log10(input.value);
    }
    else{
        input.value = 'Error'
    }
}
function etoPowery(){
    input.value += 'e**' ;
}
function tentoPowerx(){
    input.value += '10**';
}
function xRooty(){
    if(isFinite(input.value)){
        
        input.value += 'yroot';
    }
    else{
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

function sign() {
    if (isFinite(input.value)) {
        input.value = parseFloat(input.value);
        input.value = input.value * (-1)
    }
    else { input.value = 'Error' }
}

function roundOF(num){
    if((num < 0.000001 && num>0)||(num<0 && num>-0.000001)){
        num = 0;
        return num;
    }
    else if(num > 0.99999 && num<1){
        num = 1;
        return num;
    }
    else if(num>-1 && num<-0.99999){
        num=-1;
        return num;
    }
    else{
        return num;
    }
}

function trigoperator(char){
    if(isFinite(input.value)){

        let angle = input.value*Math.PI/180;
        let temp;

        switch (char){
            case 'sin':
                temp = Math.sin(angle);
                input.value = roundOF(temp);
                break;
            case 'cos':
                temp = Math.cos(angle);
                input.value = roundOF(temp);
                break;
            case 'tan':
                if(angle% (Math.PI/2) == 0 && angle%2 != 0){
                    input.value = 'Undefined';
                }
                else{

                    temp = Math.tan(angle);
                    input.value = roundOF(temp);
                }
                    break;
            case 'cosec':
                if(angle % Math.PI == 0){
                    input.value = 'Undefined';
                }
                else{

                    temp = 1/Math.sin(angle);
                    input.value = roundOF(temp);
                }
                    break;
            case 'sec':
                if(angle% (Math.PI/2) == 0 && angle%2 != 0){
                    input.value = 'Undefined';
                }
                else{

                    temp = 1/Math.cos(angle);
                    input.value = roundOF(temp);
                }
                break;
            case 'cot':
                if(angle % Math.PI == 0){
                    input.value = 'Undefined';
                }
                else{
                temp = 1/Math.tan(angle);
                input.value = roundOF(temp);
                }
                break;
            default:
                input.value = 'Error'
        }
    }
    else{
        input.value = 'Error';
    }
}

function inverseTrig1(char){
    if(isFinite(input.value)){
        let z = input.value;
        if(z>=-1 && z<=1){
            switch (char){
                case 'sin⁻¹' :
                    input.value = Math.asin(z)*180/Math.PI;
                    break;
                case 'cos⁻¹' :
                    input.value = Math.acos(z)*180/Math.PI;
                    break;
                default:
                    input.value = 'Error';
            }
        }
        else if(z>=1 && z<=-1){
            switch (char){
                case 'cosec⁻¹' :
                    input.value = Math.asin(1/z)*180/Math.PI;
                    break;
                case 'sec⁻¹' :
                    input.value = Math.acos(1/z)*180/Math.PI;
                    break;
                default:
                    input.value = 'Error';
            }
        }
        // else{
        //     switch (char){
        //         case 'tan⁻¹' :
        //             input.value = Math.atan(z)*180/Math.PI;
        //             break;
        //         case 'cot⁻¹' :
        //             input.value = Math.acos(1/z)*180/Math.PI;
        //             break;
        //         default:
        //             input.value = 'Error';
        //     }
        // }
    }
    else{
        input.value = 'Error';
    }
}

function inverseTrig2(char){
    if(isFinite(input.value)){
        let z = input.value;

            switch (char){
                case 'tan⁻¹' :
                    input.value = Math.atan(z)*180/Math.PI;
                    break;
                case 'cot⁻¹' :
                    input.value = Math.acos(1/z)*180/Math.PI;
                    break;
                default:
                    input.value = 'Error';
            }

    }
    else{
        input.value = 'Error';
    }
} 

function solve() {
    if (!input.value.trim()) {
        input.value = '';
        return;
    }

    try {
        input.value = eval(input.value);
    } catch {
        input.value = 'Error';
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

Standard.addEventListener('click', () => {

    scientificSec.style.display = 'none';
    standardSec.style.display = 'block';
    sideSection.style.display == 'none';
    input.classList.remove("sciInput");
    container.classList.remove("sciContainer");
    sideSection.classList.remove("scisideSection");
    title.innerHTML = `Standard Calculator`;
})


Scientific.addEventListener('click', () => {

    standardSec.style.display = 'none';
    scientificSec.style.display = 'block';
    input.classList.add("sciInput");
    container.classList.add("sciContainer");
    sideSection.classList.add("scisideSection");
    title.innerHTML = `Scientific Calculator`;

})
