console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

// Interpretação de código

//1.

/*
    O código está rodando uma repetição e a cada iteração promove o acréscimo de i à variável valor.

    Será impresso o valor de 10. (soma dos incrementos de i: 0+1+2+3+4).
*/

//2.

/*
    a . Serão impressos todos os números do vetor, que sejam maiores que 18.

    b. A estrutura for...of acessa o próprio elemento do array, dessa forma não é possível acessar o índice com o uso dele.
*/

// Escrita de código

//3.

const arrayOriginal = [2,3,4,7,13,28,31,44,54,1]

//a.


for (const numero of arrayOriginal) {
    console.log(numero);
}

//b.

for (const numero of arrayOriginal) {
   console.log(numero/10); 
}

//c.

let arrayNovo = []

for (const numero of arrayOriginal) {
    if(numero%2===0) {
        arrayNovo.push(numero)
    }
}

console.log(arrayNovo);

//d.

arrayDeString = []

for (i=0; i<arrayOriginal.length;i++) {
    arrayDeString.push (`'O elemento do índex ${i} é ${arrayOriginal[i]}'
`)    
}
console.log(arrayDeString.toString());

//e.

let valorMinimo = 55
let valorMaximo = 0

for (const numero of arrayOriginal) {
    if(numero<valorMinimo){
        valorMinimo = numero
    }
    if (numero>valorMaximo) {
        valorMaximo = numero
    }

}
console.log("O maior número é " + valorMaximo + " e o menor é " + valorMinimo);
