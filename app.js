

                                                                                 // get dom elements
import { add, subtract, divide, product } from './util.js';
                                                                                 // get add-input-1
const addInput1 = document.getElementById('add-input-1');
// get add-input-2
const addInput2 = document.getElementById('add-input-2');
// get add-button
const boogerButton = document.getElementById('add-button');
// get the add-result span
const boogerSpan = document.getElementById('add-result');

// initialize state 

// set the event handler to the button
boogerButton.addEventListener('click', () => {
    // in the click event handler . . .
    // make sure we have the inputs (console.log)
    // make sure we have the span
    // make sure we have the .values of the inputs
    const value1 = addInput1.value;
    const value2 = addInput2.value;

    // add the two values together
    const sum = add(value1, value2);

    // update the textContent of the span
    boogerSpan.textContent = sum;
});
// get sub-input-1
const subInput1=document.getElementById('sub-input-1');
// get sub-input-2
const subInput2=document.getElementById('sub-input-2');
// get sub-button
const subButton= document.getElementById('sub-button');
// get the sub-result span
const subSpan=document.getElementById('sub-result');

// initialize state

// set the event handler to the button
subButton.addEventListener('click',() =>{
// make sure to log inputs
//
const subvalue1=subInput1.value;
const subvalue2=subInput2.value;
const sub= subtract(subvalue1, subvalue2);
subSpan.textContent= sub;

});

const multInput1=document.getElementById('mult-input-1');

const multInput2=document.getElementById('mult-input-2');

const multButton= document.getElementById('mult-button');

const multSpan=document.getElementById('mult-result');


multButton.addEventListener('click',() =>{

const multvalue1=multInput1.value;
const multvalue2=multInput2.value;
const multiplication = product(multvalue1, multvalue2);
multSpan.textContent= multiplication;
console.log(multvalue1, multvalue2);


});
const divideInput1=document.getElementById('divide-input-1');

const divideInput2=document.getElementById('divide-input-2');

const divideButton= document.getElementById('divide-button');

const divideSpan=document.getElementById('divide-result');


divideButton.addEventListener('click',() =>{

const dividevalue1=divideInput1.value;
const dividevalue2=divideInput2.value;
const division = divide(dividevalue1, dividevalue2);
divideSpan.textContent= division;
console.log(dividevalue1, dividevalue2);


});


