const vetorDePosts = []    

function criarPost() {
    const tituloPost = document.getElementById('titulo-post')
    const autorPost = document.getElementById('autor-post')
    const conteudoPost = document.getElementById('conteudo-post')
            
    const objetoPost = {
        titulo: tituloPost.value,
        autor: autorPost.value,
        conteudo:conteudoPost.value
    }
    
    vetorDePosts.push(objetoPost)

    console.log(vetorDePosts)

    tituloPost.value = ""
    autorPost.value = ""
    conteudoPost.value = ""

    const containerPosts = document.getElementById('container-de-posts')

    containerPosts.innerHTML += `<p> O post de título: ${objetoPost.titulo}, foi escrito por: ${objetoPost.autor}, com o conteúdo: ${objetoPost.conteudo}. </p>`
}
