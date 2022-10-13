"use strict";

// Переменные для очистки полей
let inputs = document.querySelectorAll('input');
let results = document.querySelectorAll('.main__result');

// Переменные блока сложение
const firstNumberSum = document.getElementById('firstNumberSum');
const secondNumberSum = document.getElementById('secondNumberSum');
const resultSum = document.getElementById('resultSum');
const buttonSum = document.getElementById('buttonSum');

// Переменные блока вычитание
const firstNumberSubtract = document.getElementById('firstNumberSubtract');
const secondNumberSubtract = document.getElementById('secondNumberSubtract');
const resultSubtract = document.getElementById('resultSubtract');
const buttonSubtract = document.getElementById('buttonSubtract');

// Переменные блока умножение
const firstNumberMultiply = document.getElementById('firstNumberMultiply');
const secondNumberMultiply = document.getElementById('secondNumberMultiply');
const resultMultiply = document.getElementById('resultMultiply');
const buttonMultiply = document.getElementById('buttonMultiply');

// Переменные блока деление
const firstNumberDivide = document.getElementById('firstNumberDivide');
const secondNumberDivide = document.getElementById('secondNumberDivide');
const resultDivide = document.getElementById('resultDivide');
const buttonDivide = document.getElementById('buttonDivide');

class Calculator {
    static calcSum(firstNumber, secondNumber, result) {
        result.innerHTML = +firstNumber.value + +secondNumber.value;
        return +firstNumber.value + +secondNumber.value;
    }

    static calcSubtract(firstNumber, secondNumber, result) {
        result.innerHTML = firstNumber.value - secondNumber.value;
        return firstNumber.value - secondNumber.value;
    }

    static calcMultiply(firstNumber, secondNumber, result) {
        result.innerHTML = firstNumber.value * secondNumber.value;
        return firstNumber.value * secondNumber.value;
    }

    static calcDivide(firstNumber, secondNumber, result) {
        try {
            if (secondNumber.value == 0)
                throw new Error('На ноль делить нельзя!');
            result.innerHTML = firstNumber.value / secondNumber.value;
            return firstNumber.value / secondNumber.value;

        } catch (error) {
            result.innerHTML = error.message;

        } finally {
            console.log (firstNumber.value / secondNumber.value);
        }
    }
}


buttonSum.addEventListener('click', () => {
    Calculator.calcSum(firstNumberSum, secondNumberSum, resultSum);
});

buttonSubstract.addEventListener('click', () => {
    Calculator.calcSubtract(firstNumberSubtract, secondNumberSubtract, resultSubtract);
});

buttonMultiply.addEventListener('click', () => {
    Calculator.calcMultiply(firstNumberMultiply, secondNumberMultiply, resultMultiply);
});

buttonDivide.addEventListener('click', () => {
    Calculator.calcDivide(firstNumberDivide, secondNumberDivide, resultDivide);
});

// очистка всех полей
document.getElementById('clearAllBtn').addEventListener('click', () => {
    inputs.forEach(input => input.value = '');
    results.forEach(result => result.innerHTML = '');
});

// очистка полей блока сложение
document.getElementById('clearSumBtn').addEventListener('click', () => {
    for (let i = 0; i < 2; i++) {
        inputs[i].value = '';
    }
    results[0].innerHTML = '';
});

// очистка полей блока вычитание
document.getElementById('clearSubstractBtn').addEventListener('click', () => {
    for (let i = 2; i < 4; i++) {
        inputs[i].value = '';
    }
    results[1].innerHTML = '';
});

// очистка полей блока умножение
document.getElementById('clearMultiplyBtn').addEventListener('click', () => {
    for (let i = 4; i < 6; i++) {
        inputs[i].value = '';
    }
    results[2].innerHTML = '';
});

// очистка полей блока деление
document.getElementById('clearDivideBtn').addEventListener('click', () => {
    for (let i = 6; i < 8; i++) {
        inputs[i].value = '';
    }
    results[3].innerHTML = '';
});