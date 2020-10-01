/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")){
   
   const carta = comprarCarta()

   maoDoUsuario = []
   maoDoUsuario.push(comprarCarta())
   maoDoUsuario.push(comprarCarta())
   pontuacaoDoUsuario = maoDoUsuario[0].valor + maoDoUsuario[1].valor

   console.log("Usuário - cartas: " + maoDoUsuario[0].texto + " " + maoDoUsuario[1].texto + "  - pontuação "  + pontuacaoDoUsuario)
   
   maoDoComputador = []
   maoDoComputador.push(comprarCarta())
   maoDoComputador.push(comprarCarta())
   pontuacaoDoComputador = maoDoComputador[0].valor + maoDoComputador[1].valor

   console.log("Computador - cartas: " + maoDoComputador[0].texto + " " + maoDoComputador[1].texto + "  - pontuação "  + pontuacaoDoComputador)

      
   if(pontuacaoDoUsuario>pontuacaoDoComputador){
      console.log("O usuário ganhou!");
   } else if(pontuacaoDoUsuario<pontuacaoDoComputador) {
      console.log("O computador ganhou!");
   } else {
      console.log("Empate!");
   }

} else {
   console.log("O jogo acabou")
}


