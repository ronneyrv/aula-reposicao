let numero = parseFloat(prompt('Insira um número:'));

if (typeof(numero) == "number" && !Number.isNaN(numero)) {

    if (numero > 0) {
        alert(`O número ${numero} é positivo!`);
    } else if (numero === 0) {
        alert(`O número ${numero} é igual a ZERO`);
    } else {
        alert(`O número ${numero} é negativo!`)
    }
    
} else {
    alert("Insira um número válido")
}