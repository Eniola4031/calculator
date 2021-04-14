//DOM elements 
const hourEl=document.querySelector('.hour');
const minuteEl=document.querySelector('.minute');
const displayEl = document.querySelector('.display');

const acEl=document.querySelector('.ac');
const bracketEl=document.querySelector('.bracket');
const percentEl = document.querySelector('.percent');


const plusEl=document.querySelector('.plus');
const minusEl=document.querySelector('.minus');
const multiplyEl = document.querySelector('.multiply');
const divisionEl=document.querySelector('.division');
const plusminusEl=document.querySelector('.plus-minus');
const equalEl=document.querySelector('.equal');


const decimalEl = document.querySelector('.decimal');
const number0El=document.querySelector('.number-0');
const number1El=document.querySelector('.number-1');
const number2El=document.querySelector('.number-2');
const number3El=document.querySelector('.number-3');
const number4El=document.querySelector('.number-4');
const number5El=document.querySelector('.number-5');
const number6El=document.querySelector('.number-6');
const number7El=document.querySelector('.number-7');
const number8El=document.querySelector('.number-8');
const number9El=document.querySelector('.number-9');
const numberElArray =[
    number0El, number1El, number2El, number3El, number4El, number5El, number6El, number7El, number8El, number9El
];

//functions
// const getDisplayAsStr = () => {
//     Const currentDisplayStr = displayEl.textContent;
//     return currentDisplayStr.split(',').join('');
// }
//another way to write the above code

 const getDisplayAsStr = () => 
          { displayEl.textContent.split(',').join('');

const getDisplayAsNum = () => {
return parseFloat(getDisplayAsStr());
};



const handleNumberClick = (numStr) => {
    const currentDisplayStr = getDisplayAsStr();
//console.log(numStr);
if (currentDisplayStr === '0'){
    displayEl.textContent = numStr;
}
else{
    displayEl.textContent = 
    parseFloat(currentDisplayStr + numStr).toLocalString();
}
 };


//Add event listeners to numbers and decimals
for (let i=0; i < numberElArray.length; i++){
    const numberEl = numberElArray[i];
    numberEl.addeventlistener('click', () => {
        handleNumberClick(i.toString()); 
    });
}

decimalEl.addEventListener('click', () => {
    const currentDisplayStr = getDisplayAsStr();
//      displayEl.textContent = currentDisplayStr + ','
// } );
if (!currentDisplayStr.includes('.')){
    displayEl.textContent = currentDisplayStr + '.';
}
});



//setup the time
// setInterval(() => { 
// const currentTime = new Date();

// const currentHour= currentTime.getHours();
// const currentMinute = currentTime.getMinutes();

// hourEl.textContent = currentHour.toString();
// minuteEl.textContent = currentMinute.toString();
// },
// 1000);


    const updateTime = () => {
        const currentTime = new Date();

        let currentHour = currentTime.getHours();
        const currentMinute = currentTime.getMinutes();

        if (currentHour > 12) {
            currentHour -= 12; //current  hour subracted by 12
        }

        hourEl.textContent = currentHour.toString();
        minuteEl.textContent = 
        currentMinute.toString().padStart(2, '0');
    };
    setInterval(updateTime, 1000);
    updateTime();

