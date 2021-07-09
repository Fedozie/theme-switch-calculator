let solved;
let error;

//Function to clear/reset the calculator when the reset button has been clicked
function reset() {
    const input = document.querySelector('.current-output');
    input.innerHTML = '';
    document.querySelector('.previous-output').innerHTML = '';
    document.querySelector('.current-output').style.color = "#fff";
}

//Function to append number or operators to the input when the buttons containing numbers or operators are clicked
function appendNumber(e) {
    const previousInput = document.querySelector('.previous-output');
    const currentInput = document.querySelector('.current-output');
    if (solved || error) {
        reset();
        solved = false;
        error = false;
    }
    document.querySelector('.current-output').innerHTML += e;
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
            x += currentOutput.innerHTML;
        }
        let y = eval(x);
        document.querySelector('.previous-output').innerHTML = x;
        document.querySelector('.current-output').innerHTML = y;
        solved = true;
    }
    catch (err) {
        //In the case, where the input is not a correct mathematical error. An error message would be returned
        document.querySelector('.previous-output').innerHTML = '';
        document.querySelector('.current-output').innerHTML = "Math Error!";
        document.querySelector('.current-output').style.color = "#c5404c";
        error = true;
    }
}

//Function that deletes the input starting from the back
function dlt() {
    if(solved || error){
        return reset();
    };
    let input = document.querySelector('.current-output');
    if(input.innerHTML){
        const del = input.innerHTML.split('');
        let newInput = del.slice(0, -1);
        input.innerHTML = newInput.join('');
    }else{
        input.innerHTML = document.querySelector('.previous-output').innerHTML;
        document.querySelector('.previous-output').innerHTML = '';
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
    document.querySelector('body').classList.remove('light');
})

//Listening for click event on the buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        button.style.transform = 'translateY(5px)';
        setTimeout(() => {
            button.style.transform = 'translateY(0px)'
        }, 150);
    });
})
