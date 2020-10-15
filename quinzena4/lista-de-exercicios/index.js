// Exercícios de interpretação de código

//1. 

/*
    Temos uma função que recebe como parâmetro um valor numérico de dólar, multiplica pela cotação (que é inserida pelo próprio usuário mediante um prompt e usa notação americana com ponto ao invés de vírgula - padrão da linguagem) e retorna a conversão em reais. Será impressa a conversão de 100 dólares em reais.
*/

//2.

/*
    Temos uma função que recebe dois parâmetros tipo de investimento e valor, cada investimento tem o seu respectivo retorno (3,5,6 ou 10%). A primeira saída será o resultado de 150*1.1, que é 165, e a segunda "TIPO DE INVESTIMENTO INFORMADO INCORRETO!" porque cairá na opção default.
*/

//3.

/*
    O código apresentado cria três vetores, o primeiro, de nome numeros, temos um conjunto de números, outros dois inicialmente vazios. Após isso, temos uma estrutura de repetição for of que percorre numeros avaliando se o elemento é par, se sim o inclui no array1, se não o inclui no array2. Ao final temos três impressões, a quantidade total de números, a de pares e a de ímpares. 
*/

//4.

/*
    O código apresentado cria um vetor repleto de números. Tem a declaração de duas variáveis, numero1 e numero2. Um deles é Infinity, desconhecido (li, por conta própria em outras fontes, que esse valor é retornado em algumas operações matemáticas, por exemplo, divisão por 0). Após é percorrido o array com for of e ocorrem verificações. Na primeira decisão é verificado se numero de numeros é menor que infinito (positivo e, sim, será) e atribui o valor dele na variável até o final do array, mantendo o menor valor percorrido armazenado nela. E da mesma forma no segundo if, comparando com numeros2, pegando o maior valor. Após isso, imprimem as duas. 
*/

// Exercícios de Lógica de Programação

//1.

/*
    Podemos percorrer/iterar de várias maneiras, por exemplo, com o for, for of, while, etc.
*/

lista = ["caderno", "lápis", "borracha"]

console.log(lista);

console.log("Iterando usando o for: ");
for (let i=0; i<lista.length;i++){
    console.log(lista[i]);
}

console.log("Iterando usando o for of: ");
for (item of lista) {
    console.log(item);
}

let contador=0
console.log("Iterando usando while: ");
while(contador<lista.length){
    console.log(lista[contador])
    contador++
}

//2. 
//a. false
//b. false
//c. true
//d. true
//e. true

//3.

/*
    Não, primeiro a variável dos pares não foi inicializada com valor e na estrutura condicional while, a variável de controle não está sendo iterada, o que resta num loop infinito e deve iterar até menor e não menor-igual.
*/

const quantidadeDeNumerosPares = Number(prompt("Digite um número inteiro qualquer: "))

let j = 0
console.log("Imprimindo os n pares a partir de zero: ");
while(j<quantidadeDeNumerosPares){
    console.log(j*2)
    j++
}

//4. Para mais precisão a soma de dois lados não poderia ser maior que de um lado.

function classificaTriangulo(a,b,c) {

    if(a===b && b===c && a===c) {
        return console.log("Triângulo Equilátero!")
    }
    
    else if(a!==b && b!==c && a!==c) {
        return console.log("Triângulo Escaleno!")
    }

    else {
        return console.log("Triângulo Isósceles!")
    }
}

console.log("Chamando função de triângulo com lados 3, 4 e 5: ")
classificaTriangulo(3,4,5)
console.log("Chamando função de triângulo com lados 3, 3 e 7: ")
classificaTriangulo(3,3,7)
console.log("Chamando função de triângulo com lados 3, 7 e 3: ")
classificaTriangulo(3,7,3)
console.log("Chamando função de triângulo com lados 7, 3 e 3: ")
classificaTriangulo(7,3,3)
console.log("Chamando função de triângulo com lados 4, 4 e 4: ")
classificaTriangulo(4,4,4)

//5.

const numA = (Number(prompt("Entre com um número: ")))
const numB = (Number(prompt("Entre com um segundo número: ")))
let maior = 0
let menor = 0
let diferenca = 0


if(numA>numB) {
    maior = numA
    menor = numB
} else if (numB>numA){
    maior=numB
    menor=numA
} else {
    console.log("Números iguais!");
    maior=numA
    menor=numA
}

diferenca = maior - menor

console.log("O maior é:", maior);

if(numA%numB===0){
    console.log(`${numA} é divisível por ${numB}`)
} else {
    console.log(`${numA} não é divisível por ${numB}`)
}

if(numB%numA===0){
    console.log(`${numB} é divisível por ${numA}`)
} else {
    console.log(`${numB} não é divisível por ${numA}`)
}


console.log("A diferença entre eles é", diferenca);

//Exercício de funções

//1. Pular essa para fazer a outras.


//2. 

let saudarEscola = () => {
    alert("Hello Future4")
}

saudarEscola()

// Exercícios de Objetos

//1. Arrays ou vetores são listas de tipos variados ou não, podem ser de strings, números, objetos,etc e os usamos quando é importante a ordem dos elementos ou a sua reunião. Já objetos são variáveis compostas, que tentam personificar o mundo real, por exemplo, o objeto pessoa num cadastro pode ter nome, data de nascimento, endereço, e-mail, etc.

//2.

function criaRetangulo(lado1,lado2) {
    const retangulo = {
        largura: lado1,
        altura: lado2,
        perimetro: 2 * (lado1+lado2),
        area: lado1 * lado2
    }
    return retangulo
}

resultado = criaRetangulo(5,2)
console.log("Um retângulo com lados 5 e 2 tem:" ,resultado)

//3.

const filme = {
    titulo: "Efeito Borboleta",
    ano: 2004,
    diretor: ["Eric Bress", "J. Mackye Gruber"],
    atores: ["Ashton Kutcher" , "Amy Smart"]
}

const conviteParaAssistir = `Venha assistir ao filme ${filme.titulo}, de ${filme.ano}, dirigido por ${filme.diretor[0]}, ${filme.diretor[1]} e estrelado por ${filme.atores[0]} e ${filme.atores[1]}. `

console.log(conviteParaAssistir);

//4.

const pessoa = {
    nome: "Bill Gates",
    idade: 64,
    email: "bill@msn.com",
    endereco:"Redmond, Washington, EUA"
}

function anonimizarPessoa(pessoa) {
    return {
        ...pessoa,
        nome: "Anônimo"
    }
}

const anonimo = anonimizarPessoa(pessoa)
console.log(anonimo);

// Exercícios de Funções de array

//1. 

const pessoas = [
    {nome:"Pedro", idade: 20},
    {nome:"João", idade: 10},
    {nome:"Paula", idade: 12},
    {nome:"Artur", idade: 89}
]

//a.

const pessoasComOuAcimade20 = pessoas.filter((pessoa) =>{
    return pessoa.idade >=20
})

console.log("Pessoas com ou acima de 20: ",pessoasComOuAcimade20);

//b.

const pessoasAbaixode20 = pessoas.filter((pessoa) =>{
    return pessoa.idade <20
})

console.log("Pessoas abaixo de 20: ",pessoasAbaixode20);

//2.

const array = [1, 2, 3, 4, 5, 6]

//a.

const multiplicadoPor2 = array.map( (elemento) => {
    return elemento * 2
})

console.log(multiplicadoPor2);

//b.

const multiplicadoPor3 = array.map( (elemento) => {
    return String(elemento * 3)
})

console.log(multiplicadoPor3);

//c.

const arrayDeStrings = array.map((numero) => {
    if (numero % 2 ===0){
        return `${numero} é par `
    } else {
        return `${numero} é ímpar`
    }
})
console.log(arrayDeStrings);

//3.

const pessoasDoParque = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

//a.
const autorizadaEntrar = (pessoa) => {
    if (pessoa.idade > 14 && pessoa.idade <60 && pessoa.altura >1.5){
        return true
    }
    return false
}
const podeEntrar = pessoasDoParque.filter(autorizadaEntrar)
console.log(podeEntrar);

//b.

const naoAutorizadaEntrar = (pessoa) => {
    if (pessoa.idade > 14 && pessoa.idade <60 && pessoa.altura >1.5){
        return false
    }
    return true
}
const naoPodeEntrar = pessoasDoParque.filter(naoAutorizadaEntrar)
console.log(naoPodeEntrar);

//4.

const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

const emailsParaAvisoDeConsulta = []

consultas.forEach(paciente => {

    if (paciente.cancelada){
        emailsParaAvisoDeConsulta.push({
            ...paciente,
            email: `Olá, ${paciente.genero === 'feminino' ? 'Sra.' : 'Sr.'} ${paciente.nome}. Infelizmente, sua consulta marcada para o dia ${paciente.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`
        })
    } else {
        emailsParaAvisoDeConsulta.push({
        ...paciente,
        email: `Olá, ${paciente.genero === 'feminino' ? 'Sra.' : 'Sr.'} ${paciente.nome}. Estamos enviando esta mensagem para ${paciente.genero === 'feminino' ? 'lembrá-la' : 'lembrá-lo'} da sua consulta no dia ${paciente.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`
        })
    }
})

console.log(emailsParaAvisoDeConsulta);

//5. 

const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

contas.forEach(conta => {
    let debitos = 0
    for(let i=0; i<conta.compras.length;i++){
        debitos += conta.compras[i]
    }
    conta.saldoTotal -= debitos
})

console.log(contas)