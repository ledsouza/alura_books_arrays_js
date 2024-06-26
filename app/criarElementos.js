function criarContainerLivro(livro) {
    const containerLivro = document.createElement("div");
    containerLivro.classList.add("livro");

    const imgLivro = document.createElement("img");
    imgLivro.classList.add("livro__imagens");
    imgLivro.classList.toggle("indisponivel", livro.quantidade <= 0);
    imgLivro.setAttribute("src", livro.imagem);
    imgLivro.setAttribute("alt", livro.alt);

    const headerLivro = document.createElement("h2");
    headerLivro.classList.add("livro__titulo");
    headerLivro.textContent = livro.titulo;

    const descricaoLivro = document.createElement("p");
    descricaoLivro.classList.add("livro__descricao");
    descricaoLivro.textContent = livro.autor;

    const precoLivro = document.createElement("p");
    precoLivro.classList.add("livro__preco");
    precoLivro.setAttribute("id", "preco");
    precoLivro.textContent = `R$${livro.preco.toFixed(2)}`.replace(".", ",");

    const containerCategoriaLivro = document.createElement("div");
    containerCategoriaLivro.classList.add("tags");

    const categoriaLivro = document.createElement("span");
    categoriaLivro.classList.add("tag");
    categoriaLivro.textContent = livro.categoria;

    containerCategoriaLivro.append(categoriaLivro);
    containerLivro.append(
        imgLivro,
        headerLivro,
        descricaoLivro,
        precoLivro,
        containerCategoriaLivro
    );

    return containerLivro;
}

function criarContainerLivrosDisponiveis(livros) {
    const valorTotal = livros.reduce((soma, livro) => soma + livro.preco, 0);

    const container = document.createElement("div");
    container.classList.add("livros__disponiveis");

    const paragraph = document.createElement("p");
    paragraph.innerHTML = `Todos os livros disponíveis por R$ <span id="valor">${valorTotal.toFixed(
        2
    )}</span>`.replace(".", ",");

    container.append(paragraph);
    return container;
}
