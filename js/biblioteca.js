let titulo = document.getElementById("titulo");
let autor = document.getElementById("autor");
let anb = document.getElementById("ano");
let genero = document.getElementById("genero");

let btnCadastrar = document.getElementById("btnCadastrar");
let estante = document.getElementById("estante");

let livros = [];
btnCadastrar.addEventListener("click", cadastrar);

function cadastrar(){
    let livro = {
        titulo: titulo.value,
        autor: autor.value,
        ano: ano.value,
        genero: genero.value
    }

    livros.push(livro);
}