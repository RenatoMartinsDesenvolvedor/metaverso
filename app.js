function pesquisar() {
    // Seleciona o elemento HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
   
    if (!campoPesquisa) {
        section.innerHTML = "<p style='color: white; font-weight: bold; text-shadow: 2px 2px 4px #000'>Nada foi encontrado. Digite sua dúvida sobre o Metaverso</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
 

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="https://metaverso.ai/" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
        //entã, faça...
        console.log(dado.titulo.includes(campoPesquisa))
        // Constrói o HTML para cada resultado, formatando com template literals
       
    }

    if (!resultados) {
        resultados = "<p style='color: white; font-weight: bold; text-shadow: 2px 2px 4px #000'>Nada foi encontrado</p>"
    }

    // Atualiza o conteúdo do elemento HTML com os resultados da pesquisa
    section.innerHTML = resultados;
}



