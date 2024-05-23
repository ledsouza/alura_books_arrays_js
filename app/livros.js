const secaoLivros = document.querySelector("#livros");
const botoes = document.querySelectorAll(".btn");
const btnOrdernarPorPreco = document.getElementById("btnOrdenarPorPreco");
const secaoValorLivrosDisponiveis = document.getElementById("valor_total_livros_disponiveis");

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

function filtrarLivros(valorFiltro) {
    secaoValorLivrosDisponiveis.innerHTML = "";
    if (valorFiltro) {
        const livrosFiltrados =
            valorFiltro === "disponivel"
                ? filtrarPorDisponbilidade()
                : filtrarPorCategoria(valorFiltro);
        exibirLivros(livrosFiltrados);
    }
}

botoes.forEach((botao) => {
    botao.addEventListener("click", () => filtrarLivros(botao.getAttribute("value")));
});

function filtrarPorCategoria(valorFiltro) {
    return livros.filter((livro) => valorFiltro === livro.categoria);
}

function filtrarPorDisponbilidade() {
    const livrosFiltrados = livros.filter((livro) => livro.quantidade > 0);
    exibirValorTotalLivrosDisponiveis(livrosFiltrados);
    return livrosFiltrados;
}

function exibirValorTotalLivrosDisponiveis(livrosFiltrados) {
    const containerLivrosDisponiveis = criarContainerLivrosDisponiveis(livrosFiltrados);
    secaoValorLivrosDisponiveis.append(containerLivrosDisponiveis);
}

function ordernarLivrosPorPreco() {
    livros.sort((a, b) => {
        return a.preco - b.preco;
    });
    exibirLivros(livros);
}

btnOrdernarPorPreco.addEventListener("click", ordernarLivrosPorPreco);
