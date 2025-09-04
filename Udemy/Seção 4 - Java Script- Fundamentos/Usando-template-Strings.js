const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'

//Cria um template pre pronto
const template =`
    Ola 
    ${nome}!'`

console.log(concatenacao,template)

//Dentro de uma expressao e posivel chamar uma função para realizar algo, no caso uma soma
console.log(`1 + 1 = ${1 + 1}`)

//Colocar um texto em letra maiuscula
const up = s => s.toUppercase()
console.log(`Ei.. ${up('cuidado')}`)

