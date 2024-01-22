// Exercício de FUNÇÕES

// Criar uma função que soma 2 números e retorna esses números somados
// Devem ser enviado por parâmetros os 2 números da operação
// Numero1: 20
// Numero2: 10
// Soma: 30

function gerarSoma(numero1, numero2) {
    const soma = numero1 + numero2;
    console.log('Numero1: ', numero1)
    console.log('Numero2: ', numero2)
    return 'Soma: ' + soma;
}

console.log(gerarSoma(20, 10));
