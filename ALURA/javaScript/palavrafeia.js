const frase = 'Frase que começa com palavra-feia, e termina com palavra-feia'
//const fraseTeste = frase.replace('palavra-feia', '************')
const fraseAtualizada = frase.replace(/palavra-feia/g, '************')
//console.log(fraseTeste)
console.log(fraseAtualizada)
