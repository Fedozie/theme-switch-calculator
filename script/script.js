let solved;
let error;

//Function to clear/reset the calculator
function reset() {
    const input = document.querySelector('.current-output');
    input.innerHTML = '';
    document.querySelector(".previous-output").innerHTML = '';
}

//Function to append number to the input
function appendNumber(e) {
    const previousInput = document.querySelector('.previous-output');
    const currentInput = document.querySelector('.current-output');
    if (solved || error) {
        previousInput.innerHTML = '';
        currentInput.innerHTML = '';
        solved = false;
        error = false;
    }
    document.querySelector(".current-output").innerHTML += e
    if (e === '*' || e === '+' || e === '-' || e === '.' || e === '/') {
        previousInput.innerHTML += currentInput.innerHTML;
        currentInput.innerHTML = '';
    }
}

//Function that solves the input and displays a result
function solve() {
    try {
        let x = document.querySelector(".previous-output").innerHTML;
        let currentOutput = document.querySelector('.current-output');
        if (currentOutput) {
            x += currentOutput.innerHTML
        }
        let y = eval(x);
        document.querySelector(".previous-output").innerHTML = x;
        document.querySelector(".current-output").innerHTML = y;
        solved = true;
    }
    catch (err) {
        //In the case, where the input is not a correct mathematical error. This error message would be returned
        document.querySelector(".previous-output").innerHTML = '';
        document.querySelector(".current-output").innerHTML = "Math Error";
        error = true;
    }
}

function dlt() {
    if(solved || error){
        return reset()
    }
    let input = document.querySelector('.current-output');
    if(input){
        const del = input.innerHTML.split('');
        let newInput = del.slice(0, -1);
        input.innerHTML = newInput.join('')
    }
}

//Variable Declarations
const firstThemeBtn = document.querySelector('#first');
const secondThemeBtn = document.querySelector('#second');
const thirdThemeBtn = document.querySelector('#third');
const ballBtn = document.querySelector('.switch-ball');
const buttons = document.querySelectorAll('button');

//Toggling amongst the themes
firstThemeBtn.addEventListener('change', () => {
    ballBtn.style.left = '4px';
    document.querySelector('body').classList.remove('light');
    document.querySelector('body').classList.remove('neon');
})

secondThemeBtn.addEventListener('change', () => {
    ballBtn.style.left = '28px';
    document.querySelector('body').classList.add('light');
    document.querySelector('body').classList.remove('neon');
})

thirdThemeBtn.addEventListener('change', () => {
    ballBtn.style.left = '56px';
    document.querySelector('body').classList.add('neon');
    document.querySelector('body').classList.remove('light')
})

//Listening for click event on the buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        button.style.transform = 'translateY(5px)';
        setTimeout(() => {
            button.style.transform = 'translateY(0px)'
        }, 150)
    })
})
