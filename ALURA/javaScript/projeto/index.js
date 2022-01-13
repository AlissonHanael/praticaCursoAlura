import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'

const cliente1 = new Cliente()
//const cliente2 = new Cliente()
//const cliente3 = new Cliente()

const ContaCorrenteRicardo = new ContaCorrente()

ContaCorrenteRicardo.cliente = cliente1
ContaCorrenteRicardo.agencia = 1001
cliente1.nome = 'Ricardo'
cliente1.CPF = 11122233309

const conta2 = new ContaCorrente()
const cliente2 = new Cliente()
conta2.cliente = cliente2
conta2.agencia = 102
cliente2.nome = 'Alice'
cliente2.CPF = 88822233309

console.log(ContaCorrenteRicardo._saldo)
//ContaCorrenteRicardo.saldo = 100
console.log(ContaCorrenteRicardo._saldo)
//ContaCorrenteRicardo.sacar(50)
console.log(ContaCorrenteRicardo._saldo)

ContaCorrenteRicardo.depositar(100)
ContaCorrenteRicardo.depositar(200)
ContaCorrenteRicardo.depositar(-1)
ContaCorrenteRicardo.depositar(500)

ContaCorrenteRicardo.transferir(300, conta2)

console.log(ContaCorrenteRicardo)
console.log(conta2)

//ContaCorrenteRicardo.sacar(50)
