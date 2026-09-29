let titulo = document.getElementById("titulo");
let autor = document.getElementById("autor");
let ano = document.getElementById("ano");
let genero = document.getElementById("genero");

let btnCadastrar = document.getElementById("btnCadastrar");
let estante = document.getElementById("estante");

let buscando = document.getElementById("busca");

let livros = [];
btnCadastrar.addEventListener("click", cadastrar);
buscando.addEventListener("keyup", pesquisar);

function cadastrar(){
    let livro = { //cria o objeto "livro" com suas propriendades
        titulo: titulo.value,
        autor: autor.value,
        ano: ano.value,
        genero: genero.value
    }

    livros.push(livro);
    MostrarLivros();
}

function MostrarLivros(){
    let saida = "";
    for (let i = 0; i < livros.length; i++){
        saida = saida + `
        <div class = "livro">
        <h2> ${livros[i].titulo} </h2>
        <p> <strong>Autor:</strong> ${livros[i].autor}</p>
        <p> <strong>Ano:</strong> ${livros[i].ano}</p> 
        <p> <strong>Gênero:</strong> ${livros[i].genero}</p> 
        </div> <br> `
        
    }
    estante.innerHTML = saida;
}

function pesquisar(){
    let termo = buscando.value.toLowerCase();
    let saida = "";
    for(let i = 0; i <livros.length; i++){
        if (livros[i].titulo.toLowerCase().includes(termo)){
            saida = saida + 
            `<div class = "livro">
            <h2> ${livros[i].titulo} </h2>
            <p> <strong>Autor:</strong> ${livros[i].autor}</p>
            <p> <strong>Ano:</strong> ${livros[i].ano}</p> 
            <p> <strong>Gênero:</strong> ${livros[i].genero}</p> 
            </div> <br> `
        }
    }
    estante.innerHTML = saida;
}