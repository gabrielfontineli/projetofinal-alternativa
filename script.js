'use strict';

var formulario = {};
(function(formulario){
    formulario.cpf = document.getElementById('cpf');
    formulario.telefone = document.getElementById('telefone');
    formulario.required = document.querySelectorAll(".required");
    formulario.invalidElement = document.querySelector("span");
})(formulario);

function validatecpf(cpf) {
    if (cpf.length != 11) return false;

    let numbers = cpf.substring(0, 9)
    let entry = cpf.substring(9)
    let sum = 0;
    for (let i = 10; i > 1; i--) {
        sum += numbers.charAt(10 - i) * i;
    }

    var result = (sum % 11) < 2 ? 0 : 11 - (sum % 11);

    if (result != entry.charAt(0)) {
        return false;
    }
    sum = 0;
    numbers = cpf.substring(0, 10);

    for (let k = 11; k > 1; k--) {
        sum += numbers.charAt(11 - k) * k;
    }
    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

    return result != entry.charAt(1) ? false : true
}

function cpfMask() {
    const length = formulario.cpf.value.length;
    if (length === 3 || length === 7)
        formulario.cpf.value = formulario.cpf.value + ".";
    else if (length === 11)
        formulario.cpf.value = formulario.cpf.value + "-";
    else if (length===14) length = 0
}

function phoneMask() {
    const length = formulario.celular.value.length;
    switch (length) {
        case 0:
            formulario.celular.value = '('
            break
        case 3:
            formulario.celular.value += ')'
            break
        case 5:
            formulario.celular.value += ' ';
            break
        case 10:
            formulario.celular.value += '-'
            break
        case 15:
            i = 0
    }
}