//como criar listas em java script

const listaDestinos = new Array(`São Paulo`, `Salvador`, `Rio de Janeiro`)
console.log(`Destinos possíveis`)
console.log(listaDestinos)

listaDestinos.push(`Curitiba`) //push adiciona itens a lista
console.log(listaDestinos)

listaDestinos.splice(0, 1) // remove elemento da lista (a partir da posição, quantidade de elementos)
console.log(listaDestinos)
