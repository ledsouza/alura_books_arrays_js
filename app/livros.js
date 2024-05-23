const secaoLivros = document.querySelector("#livros");
const botoes = document.querySelectorAll(".btn");
const btnOrdernarPorPreco = document.getElementById("btnOrdenarPorPreco");

function exibirLivros(livros) {
    secaoLivros.innerHTML = "";
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

function filtrarPorCategoria(valorFiltro) {
    if (valorFiltro) {
        const livrosFiltrados =
            valorFiltro === "disponivel"
                ? livros.filter((livro) => livro.quantidade > 0)
                : livros.filter((livro) => valorFiltro === livro.categoria);
        exibirLivros(livrosFiltrados);
    }
}

botoes.forEach((botao) => {
    botao.addEventListener("click", () => filtrarPorCategoria(botao.getAttribute("value")));
});

function ordernarLivrosPorPreco() {
    livros.sort((a, b) => {
        return a.preco - b.preco;
    });
    exibirLivros(livros);
}

btnOrdernarPorPreco.addEventListener("click", ordernarLivrosPorPreco);
