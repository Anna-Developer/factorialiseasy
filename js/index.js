'use strict'

const input = document.getElementById('input');
const output = document.getElementById('output');

input.addEventListener('input', () => factorial(input.value));

function factorial(n) {
    if (n == 1) return output.value = n;
    if (n == 0) return output.value = 0;
    return output.value = n * factorial(n - 1);
}