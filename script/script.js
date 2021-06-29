//Variable Declarations
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-delete]');
const resetButton = document.querySelector('[data-reset]');
const btns = document.querySelectorAll('button');



//Listening for click event on the buttons
btns.forEach((btn)=> {
    btn.addEventListener('click', () => {
        btn.style.transform = 'translateY(5px)';
        setTimeout(() => {
            btn.style.transform = 'translateY(0px)'
        }, 400)
    })
})