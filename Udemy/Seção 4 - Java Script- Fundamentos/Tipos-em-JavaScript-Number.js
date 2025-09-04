const peso1= 1.0
const peso2= Number("2.0")

console.log(peso1,peso2)

//Verifica se o numero e um valor inteiro
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.70
const avaliacao2 = 6.78

const total = avaliacao1 * peso1 + avaliacao2*peso2
const media = total / (peso1+peso2)

//Editar Quantas casas decimais voce quer que apareca, basta colocar o numero nos parenteses
console.log(media.toFixed(2))

//Transforma o valor em um valor binario ( no caso binario pois o numero e 2)
console.log(media.toString(2))

console.log(typeof media)
