const escola = "Cod3r"

//Mostra a 4 letra da palavra(poiso numero entre parenteses e 4)
console.log(escola.charAt(4))
console.log(escola.charAt(5))

//Retorna o codigo da tabela do code do item que voce seleciona
console.log(escola.charCodeAt(3))

//Retorno o local onde o item esta 
console.log(escola.indexOf('3'))

//ira mostrar a palavra a partir do ponto de partida que voce determinar
console.log(escola.substring(1))

//Nesse caso ele vai mostrar a palavra completa porem sem mostrar o item que voce colocar(no caso do 3 nao ira aparecer o "3" na plavra Cod3r)
console.log(escola.substring(0,3))

//Monta uma frase ou adicionar uma palavra ao texto
console.log('Escola '.concat(escola).concat("!"))

//Coloca uma letra no lugar ou troca sem alterar diretamente a plavra ou letra
console.log(escola.replace(3, 'e'))

//Substitui na palavra todas as letrar pela letra que for solicitada
console.log(escola.replace(/\w/g,'e'))

//Converter uma string para um array
console.log('Ana,Maria,Pedro'.split(','))

