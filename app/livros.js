const secaoLivros = document.querySelector("#livros");

function exibirLivros(livros) {
    livros.forEach((livro) => {
        const containerLivro = criarContainerLivro(livro);
        secaoLivros.append(containerLivro);
    });
}

function aplicarDesconto(livros, desconto) {
    const livrosComDesconto = livros.map((livro) => {
        return { ...livro, preco: livro.preco - livro.preco * desconto };
    });
    return livrosComDesconto;
}
