// repeticao por array

// Array.array.forEach(element => {
    
// });

const cidades = ['Londres', 'Milão', 'Chicago', 'Veneza']

cidades.forEach((elemento, index) => {
    // console.log('Execução número: ' + index)
    // console.log(elemento)
})

// Para entender o que é cada coisa:

// elemento é variável que vai representar o elemento a rodada, nesse caso serão 3 índices
// Sinal de => função que não tem nome, função anônima
// saída com console.log (elemento): os nomes das cidades aqui


// Ao colocar um parênteses no elemento eu consigo pegar o index que está sendo executado
// saída vai ser:

// Execução número: 0
// Londres
// Execução número: 1
// Milão
// Execução número: 2
// Chicago
// Execução número: 3
// Veneza


// for normal
// variavel que começa em 0, condição que vai dar ao for, incrementa 1
for (let indice = 0; indice < cidades.length; indice++) {
    console.log(cidades [indice])

}