console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

// Interpretação de código

//1

/*
    a. false
    b. false
    c. true    
    e. boolean
*/

//2

/*
    a. undefined
    b. null
    c. 11
    d. 3
    e. 3 19 5 6 7 8 9 10 11 12 13
    f. 9
*/

// Escrita de código

//1

const minhaIdade = Number(prompt("Qual é a sua idade?"))
const idadeAmigo = Number(prompt("Qual é a idade do seu melhor amigo/amiga?"))
console.log("Sua idade é maior que a do seu amigo:", minhaIdade>idadeAmigo);
console.log("A diferença de idade é: ", minhaIdade-idadeAmigo);

//2

const numero = Number(prompt("Insira um número par: "))
console.log("O resto da divisão nesse número por 2 é: ", numero%2);
/*  
    c. Todo número que tem o resto da divisão por 2 igual a 0 é par.
    d. Todo número que tem o resto da divisão por 2 diferente de 0 é ímpar.
*/

//3

let listaDeTarefas = []

const tarefa1 = prompt("Escreva uma tarefa a ser feita hoje: ")
const tarefa2 = prompt("Escreva uma outra tarefa a ser feita: ")
const tarefa3 = prompt("Escreva mais uma tarefa a ser feita: ")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)
console.log(listaDeTarefas);

const indice = Number(prompt("Digite o número do índice da atividade que você já finalizou (0, 1 ou 2): "))

listaDeTarefas.splice(indice,1)

console.log(listaDeTarefas);

//4

const nomeDoUsuario = prompt("Qual é o seu nome?")
const emailDoUsuario = prompt("Qual é o seu email?")
console.log("O email", emailDoUsuario, "foi cadastrado com sucesso.")
console.log("Seja bem-vinda(o), " + nomeDoUsuario + "!")