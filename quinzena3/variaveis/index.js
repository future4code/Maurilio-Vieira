// Interpretação de código

/* 1.
        Vai imprimir duas vezes no terminal, primeiro o valor de b: 10,

        depois o valor de a: 10 e b: 5.
*/

/* 2.
        Impressão dos valores de a,b e c: 
        (10,10,10).
*/

// Escrita de código

//1.

let nome
let idade
console.log(typeof(nome),typeof(idade))

/* 
    O comando typeof retornou o conteúdo undefined devido ao Javascript ser de tipagem dinâmica,
    isto é, ele defini o tipo do dado quando ele é atribuído, como ainda não foi, recebe este valor.
*/

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")
console.log(typeof(nome),typeof(idade))

/* 
    Desta vez o typeof retornou o tipo string, por ter atribuído e armazenado a entrada de texto, por parte do
    usuário, nas variáveis.

*/

console.log("Olá " , nome , ", você tem " , idade , " anos.")

//2.

let nomeDaSuaRua
let nomeDoSeuBairro
let nomeDaSuaCidade
let nomeDoSeuEstado
let numeroDoSeuCep

nomeDaSuaRua = prompt("1. Qual é o nome da rua onde você mora?")
nomeDoSeuBairro = prompt("2. Qual é o nome do bairro onde você mora?")
nomeDaSuaCidade = prompt("3. Qual é o nome da cidade onde você mora?")
nomeDoSeuEstado = prompt("4. Qual é o nome do Estado onde você mora?")
numeroDoSeuCep = prompt("5. Qual é o número do CEP onde você mora?")

console.log("1. Qual é o nome da rua onde você mora")
console.log("Resposta: ",nomeDaSuaRua)
console.log("2. Qual é o nome do bairro onde você mora?")
console.log("Resposta: ",nomeDoSeuBairro)
console.log("3. Qual é o nome da cidade onde você mora?")
console.log("Resposta: ",nomeDaSuaCidade)
console.log("4. Qual é o nome do Estado onde você mora?")
console.log("Resposta: ",nomeDoSeuEstado)
console.log("5. Qual é o número do CEP onde você mora?")
console.log("Resposta: ",numeroDoSeuCep)

//3
let comidasPreferidas = ["Pizza", "Batata-frita", "Risoto", "Lasanha", "Salmão com legumes"]
console.log(comidasPreferidas)

console.log("Essas são as minhas comidas preferidas: ")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

comidasPreferidas[1] = prompt("Qual é a sua comida preferida?")
console.log(comidasPreferidas)

//4

let perguntas = ["Você gosta de futebol? ", "Você não bebe cerveja? ", "Você já visitou um estádio? "]
let respostas = [true, false, true]

console.log(perguntas[0],respostas[0])
console.log(perguntas[1],respostas[1])
console.log(perguntas[2],respostas[2])


