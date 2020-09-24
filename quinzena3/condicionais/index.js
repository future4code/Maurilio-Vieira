console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

// Interpretação de código

//1.

/*
    A aplicação em tela solicita ao usuário que digite um número,
    string essa que será armazenada na constante respostaDoUsuario, após isso é feito um casting para Number, na constante numero. Após, é testada a paridade através do operador mod (resto da divisão) e das estruturas de decisão if/else.  Se par é impresso "Passou no teste", senão a mensagem "Não passou no teste".
*/

//2.

/*
    a. O código solicita a escolha das frutas elencadas nele, mediante o uso da estrutura switch...case,
    conforme o usuário opta por uma delas, é atribuído o respectivo preço, qualquer outra opção fora delas o preço recebe o valor de 5. Ao final é impressa a escolha e o seu preço.

    b. O preço da fruta Maçã é R$ 2.25

    c. Na hipótese de retirarmos o break referido, a aplicação vai continuar rodando para a próxima linha e terá por resultado a atribuição de preço incorreto, de 5 ao invés de 5.5.
*/

//3.

/*
    a. A primeira linha pede ao usuário um número, transforma essa string em número e guarda esse valor na constante numero.
    b. Com o valor 10, a condição do if será true e todo aquele bloco será executado. Se o valor for de -10 aquela condição e seu bloco são ignorados.
    c. Sim, quando for chamada a variável mensagem ela não terá valor definido, porque essa foi declarada apenas dentro do bloco do if e possui escopo local.
*/

//Escrita de código

//4.

const idade = Number(prompt("Qual é a sua idade?"))

if (idade>=18){
    console.log("Você pode dirigir");
} else {
    console.log("Você não pode dirigir.");
}

//5.

const turnoEscola = prompt("Em qual turno você estuda? Digite M (matutino), V (Vespertino) ou N (Noturno) ")

if (turnoEscola==="M") {
    console.log("Bom dia!");
} else if (turnoEscola==="V") {
    console.log("Boa tarde!");
} else if (turnoEscola==="N") {
    console.log("Boa noite!");
} else {
    console.log("Você não digitou uma opção válida!");
}

//6.

const turnoEstuda = prompt("Em qual turno você estuda? Digite M (matutino), V (Vespertino) ou N (Noturno) ")

switch (turnoEstuda) {
    case "M":
        console.log("Bom dia!");
        break;
    case "V":
        console.log("Boa tarde!");
        break;
    case "N":
        console.log("Boa noite!");
        break;
    default:
        console.log("Você não digitou uma opção válida!");
        break;
}

//7.

const generoDoFilme = prompt("Qual o gênero do filme que vão assistir? Fantasia - Terror - Documentário -ETC")

const precoDoIngresso = Number(prompt("Qual o preço do ingresso individual?"))

if(generoDoFilme==="Fantasia" && precoDoIngresso<15){
    console.log("Bom filme!");
} else {
    console.log("Escolha outro filme :(");
}
