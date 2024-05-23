# AluraBooks: Aplicando Métodos de Array em JavaScript
![Static Badge](https://img.shields.io/badge/Status-Finalizado-green)

## Descrição

Este projeto explora o poder dos métodos de array em JavaScript (forEach, sort, filter, map e reduce) para criar funcionalidades interativas em uma aplicação web de livros chamada AluraBooks. Através da manipulação de dados de uma API, o projeto permite filtrar, ordenar, estilizar e calcular informações sobre os livros disponíveis.

<img width="1440" alt="image" src="https://github.com/ledsouza/alura_books_arrays_js/assets/56280624/6638d29e-3bf3-44c0-91f7-ee56a550971a">

## Tecnologias Utilizadas

- **HTML:** Estrutura básica da página web.
- **CSS:** Estilização visual dos elementos.
- **JavaScript:** Lógica principal para manipulação dos dados e interação com a página.
- **API (JSON):** Fonte de dados dos livros.

## Detalhes

### 1. Obter e Exibir Dados da API

- O arquivo `main.js` utiliza a função `fetch` para obter os dados dos livros da API.
- Os dados são convertidos para formato JSON e passados para a função `exibirLivros` em `livros.js`.
- A função `exibirLivros` itera sobre os livros usando `forEach`, criando elementos HTML para cada livro (título, autor, preço, imagem) e adicionando-os à página com a ajuda de `criarElemento.js`.

### 2. Filtrar Livros por Categoria

- Botões de categoria são criados dinamicamente com base nas categorias únicas presentes nos dados.
- Ao clicar em um botão, a função `filtrarPorCategoria` em `livros.js` é chamada.
- Essa função utiliza o método `filter` para selecionar apenas os livros da categoria escolhida e os exibe na tela.

### 3. Aplicar Descontos

- A função `aplicarDesconto` em `livros.js` recebe um valor de desconto e aplica-o ao preço de cada livro usando `map`.
- Os preços atualizados são exibidos na tela.

### 4. Ordenar Livros por Preço

- Botão para ordenar por preço crescente é adicionado.
- Ao clicar, a função `ordernarLivrosPorPreco` em `livros.js` é chamada.
- O método `sort` é utilizado para reordenar os livros com base no preço.

### 5. Estilizar Livros por Disponibilidade

- A função `criarContainerLivro` verifica a disponibilidade de cada livro e adiciona classes CSS correspondentes para estilizar os elementos visuais.

### 6. Filtrar por Disponibilidade

- Botão para filtrar por "Disponível" é adicionado.
- A função `filtrarPorDisponbilidade` em `livros.js` utiliza `filter` para selecionar os livros com base na disponibilidade.

### 7. Calcular Soma dos Preços dos Livros Disponíveis

- A função `criarContainerLivrosDisponiveis` em `criarElementos.js` usa `reduce` para somar seus preços.
- O valor total é exibido na tela.

**Observações:**

- O arquivo `requisição.txt` contém o endpoint da API.
- A pasta `imagens` armazena as capas dos livros.
- O arquivo `styles.css` é responsável pela aparência visual da aplicação.
