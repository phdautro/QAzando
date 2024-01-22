// Exercicio - estrutura de repetição
// Percorrer uma lista de nomes contendo os nomes: Eduardo, Maria, Fernando, João, Francisco
//Número de execução começando do 1
// Nome que está sendo executado
// Separadores

const nomes = ['Eduardo', 'Maria','Fernando','João', 'Francisco']

nomes.forEach((nome, indice) => {
    console.log('Execução número: ',  indice +1)
    console.log('Nome: ' + nome)
    console.log('-----------')
    
})