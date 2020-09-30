console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

// Exercícios de interpretação de código

//1.

/*
    a. 10
       50
    
    b. A função está retornando um valor, porém ele não é armazenado, nem impresso. Não apareceria nada na tela.
*/

//2. 

/*
    a. Darvas
       Goli

    b. Amanda
       Caio

*/

//3. 

/*
    A função recebe um vetor de parâmetro e o percorre com uma estrutura for of, para cada elemento par inclui o valor de seu quadrado num vetor novo e o retorna no final. Um nome poderia ser elevaNumerosParesAoQuadrado.
*/

//Exercícios de Escrita de código

//4.a.

function apresenta() {
    
    console.log("Eu sou o Maurílio, tenho 33 anos, moro em BH e sou estudante de front-end.");

}

apresenta()

//b.

const nome = prompt("Qual o seu nome?")
const idade = Number(prompt("Qual a sua idade?"))
const cidade = prompt("Qual a sua cidade?")
let estuda = confirm("Você estuda?")

function apresentaAlguem(seuNome, suaIdade, suaCidade, vcEstuda) {

    if (vcEstuda){
         vcEstuda = "sou"
     } else {
         vcEstuda ="não sou"
     }
     
     const apresentacao = (`Eu sou ${seuNome}, tenho ${suaIdade} anos, moro em ${suaCidade} e ${vcEstuda} estudante.`   )

     return console.log(apresentacao)
}

apresentaAlguem(nome, idade, cidade, estuda)

//5.a.

num1=Number(prompt("Digite o primeiro número: "))
num2=Number(prompt("Digite o segundo número: "))

function somaDoisNumeros(numA, numB) {
    
    const soma = numA+numB
    return soma;

}

let resposta = somaDoisNumeros(num1,num2)
console.log(resposta)


//b.

numA=Number(prompt("Digite o primeiro número: "))
numB=Number(prompt("Digite o segundo número: "))

function comparaMaiorOuIgual (num1, num2) {

    let maiorOuIgual 

    if (num1>=num2){
        maiorOuIgual = true
    } else {
        maiorOuIgual = false
    }

    return maiorOuIgual
}

let eMaiorOuIgual = comparaMaiorOuIgual(numA,numB)
console.log(eMaiorOuIgual)

//c.

const frase = prompt("Digite a sua frase: ")

function imprime10vezes(mensagem) {
    
    for(let i = 0; i<10; i++){
        console.log(mensagem);
    }
    
}

imprime10vezes(frase);

//6.a.

const array = [10,23,45,78,90,52,35,67,84,22]

function tamanhoArray(vetor){
    let tamanho = vetor.length
    return tamanho
}

const tamanho = tamanhoArray(array)
console.log(tamanho)

//b.

const numeroDigitado = Number(prompt("Digite um número: "))

function ePar(numero) {
    if(numero%2===0){
        return true
    } else {
        return false
    }
}
const eNumPar= ePar(numeroDigitado)
console.log(eNumPar);

//c.

function contaPares(vetor){
    contaPar=0
    for (elemento of vetor){
        if(elemento%2===0)
        contaPar+=1
    }
    return contaPar
}

const quantosPares = contaPares(array)

console.log(quantosPares);

//d.

// function contaParesComOutraFuncao(funcao){
//     numeroAVerificar = prompt("Digite um número")
//     numeroVerificado = function ePar(numeroAVerificar)
    
//     console.log(numeroVerificado)
// } 


