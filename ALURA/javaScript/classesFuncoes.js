/* no modelo abaixo vemos um objeto literal onde não é possivel criar novos objetos com as mesmas caracteristicas*/
/*
const livro = {
  nome: 'React Native',
  editora: 'Casa do código',
  paginas: 185,
  anunciar: function () {
    console.log('A Alura indica o livro', this.nome + '!')
  }
}
*/
//livro.anunciar()

/*No modelo abaixo vemos o modelo anterior a ES6 de como era feito uma "classe"*/
/*
const Livro = function (nome, editora, paginas) {
  ;(gNome = nome), (gEditora = editora), (gPaginas = paginas)

  this.getNome = function () {
    return gNome
  }
  this.getEditora = function () {
    return gEditora
  }
  this.getPaginas = function () {
    return gPaginas
  }
}

const GraphQL = new Livro('GraphQL', 'Casa do Código', 143)

console.log(GraphQL.getNome())
console.log(GraphQL.getEditora())
console.log(GraphQL.getPaginas())
*/

class Livro {
  constructor(nome, editora, paginas) {
    ;(this.nome = nome), (this.editora = editora), (this.paginas = paginas)
  }
  anunciarTitulo() {
    console.log(`Titulo: ${this.nome}`)
  }
  descreverTitulo() {
    console.log(
      `${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas`
    )
  }
}
const GraphQL = new Livro('GraphQL', 'Casa do código', 143)

GraphQL.anunciarTitulo('GraphQL', 'Casa do código', 143)
GraphQL.descreverTitulo('GraphQL', 'Casa do código', 143)
