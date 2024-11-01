function exercicio1() {
    let numero_input = prompt('Insira um número:');

    let numero = parseFloat(numero_input);

    if (numero_input.length === String(numero).length) {
        if (typeof (numero) == "number" && !Number.isNaN(numero)) {

            if (numero > 0) {
                alert(`O número ${numero} é positivo!`);
            } else if (numero === 0) {
                alert(`O número é igual a ZERO`);
            } else {
                alert(`O número ${numero} é negativo!`)
            }

        } else {
            alert("Insira um número válido.")
        }
    } else {
        alert("Insira um número válido.")
    }
}

function exercicio4() {
    `
    Questão 4: Escreva um script que verifique se um número é par ou ímpar (utilize o operador %) 
    e exiba uma mensagem informando o resultado da verificação:
    Possíveis mensagens: "O número xx é par", "O número xx é ímpar"
    `
    let numero = prompt('Insira um número:');

    numero % 2 == 1 ? alert('Número impar') : alert('Número par');

}

function exercicio3() {
    `
    Questão 3: Escreva um script que verifica se um número é divisível por 5 e por 3 ao mesmo 
    tempo e exiba uma mensagem informando o resultado da verificação:
    Possíveis mensagens: "O número xx é divisível por 5, mas não é divisível por 3", "O número xx 
    é divisível por 3, mas não é divisível por 5", O número xx é divisível por 5 e por 3."'
    `
    let numero = prompt('Insira um número:');

    if (numero % 5 == 0 && numero % 3 == 0 ) {

        alert(`O número ${numero} é divisível por 5 e por 3.`)

    } else if (numero % 5 == 0 && numero % 3 !== 0) {

        alert(`O número ${numero} é divisível por 5, mas não é divisível por 3`)

    } else if (numero % 5 !== 0 && numero % 3 == 0) {

        alert(`O número ${numero} é divisível por 3, mas não é divisível por 5`)

    } else if (numero % 5 !== 0 && numero % 3 !== 0) {

        alert(`O número ${numero} não é divisível por 5 e por 3.`)
    }

};

exercicio3();


//https://dontpad.com/fs18/js