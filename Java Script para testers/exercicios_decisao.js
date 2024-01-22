const cidades = ['Londres', 'Milão', 'Chicago', 'Veneza']

cidades.forEach((cidade, indice) => {
console.log('Execução: ', indice+1)
console.log('Cidade: ', cidade)

if (cidade=='Chicago'){
    console.log('Encontrado')

} else {
    console.log('Não encontrado')
}

console.log('-----------')

})