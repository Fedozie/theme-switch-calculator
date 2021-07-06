//Variable Declarations
const radioBtns = document.querySelectorAll('input[type=radio]');
const firstThemeBtn = document.querySelector('#first');
const secondThemeBtn = document.querySelector('#second');
const thirdThemeBtn = document.querySelector('#third');
const ballBtn = document.querySelector('.switch-ball');
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-delete]');
const resetButton = document.querySelector('[data-reset]');
const btns = document.querySelectorAll('button');

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
btns.forEach((btn)=> {
    btn.addEventListener('click', () => {
        btn.style.transform = 'translateY(5px)';
        setTimeout(() => {
            btn.style.transform = 'translateY(0px)'
        }, 150)
    })
})

