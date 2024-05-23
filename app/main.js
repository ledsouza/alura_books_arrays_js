let livros = [];
const endpointLivros = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

async function getLivros() {
    const response = await fetch(endpointLivros);
    livros = await response.json();
    const livrosComDesconto = aplicarDesconto(livros, 0.3);
    exibirLivros(livrosComDesconto);
}

getLivros();
