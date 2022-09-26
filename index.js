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
        if (secondNumber.value == 0) {
            result.innerHTML = "На ноль делить нельзя!";
            return false;
        } else {
            result.innerHTML = firstNumber.value / secondNumber.value;
            return firstNumber.value / secondNumber.value;
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

document.getElementById('clearAllBtn').addEventListener('click', () => {
    inputs.forEach(input => input.value = '');
});

document.getElementById('clearAllBtn').addEventListener('click', () => {
    results.forEach(result => result.innerHTML = '');
});