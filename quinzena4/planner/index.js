function criarTarefa(){
    const entradaDeTarefas = document.getElementById("tarefa")
    const tarefaParaRealizar = entradaDeTarefas.value
    // console.log(tarefaParaRealizar);

    const diasDaSemana = document.getElementById("dias-semana")
    const diaSelecionado = diasDaSemana.value
    // console.log(diaSelecionado);

    let tarefaNoPlanner = document.getElementById(diaSelecionado)
    // console.log(tarefaNoPlanner);
    tarefaNoPlanner.innerHTML+=`<p>${tarefaParaRealizar}</p>`
    entradaDeTarefas.value = ""
}