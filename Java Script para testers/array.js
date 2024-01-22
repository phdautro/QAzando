const paises = ['Brasil', 'Argentina', 'Alemanha']

console.log(paises[0]) // acessando uma posição do array

console.log(paises.length)

console.log('Acessando o país: ' + paises[0])

// operações com o array, adicionar ou remover itens do array

paises.push('Polonia') // adiciona no final do array
paises.pop() // remove ultimo elemento
paises.unshift('França') // adiciona frança a posição zero
paises.shift() // remove primeiro elemento

console.log(paises)