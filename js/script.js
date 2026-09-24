//Captura o botão "proximo"
let btnProxima = document.getElementById("proxima");
//Captura o botão "anterior"
let btnAnterior = document.getElementById("anterior");
//Captura o quadro onde a fotografia é exibida
let Quadroimagem = document.getElementById("imagem");
//Cria o album e guarda as fotos
let album = [
    "https://play-lh.googleusercontent.com/LT_0fiQGydZzoeYmz91easRq0BsiUj1U8JHdOujvFVOar8xuAfaTO0mbHxi1A6mp2GhCW4dqZCtcCLpEH8erUA",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMYwQekgnY0bAl_HQPtDfDMRT1wWc5Rsnb4k_BfiZCc-GDNHf1nPhqN1oq&s=10",
    "https://preview.redd.it/im-new-to-yu-gi-oh-could-someone-suggest-a-good-blue-eyes-v0-nn50rm0j6lyg1.jpeg?auto=webp&s=0d679dfa855c93462b35213272c5d49e222ee2b0",
    "https://i.pinimg.com/736x/46/ea/66/46ea66882d1e6c0fa2c4dd1ee29d3afe.jpg",
    "https://i.pinimg.com/736x/31/36/2f/31362f9d774666f4d706ba1472788e19.jpg",
    "https://i.pinimg.com/736x/70/38/0d/70380dc69520c8dd97252691e5640f81.jpg",
    "https://i.pinimg.com/736x/01/d6/7b/01d67b7656ebbb8a6dba0e7a21104a59.jpg",
    "https://i.pinimg.com/736x/ad/28/18/ad28183c8a4466f8117f393c1ac22654.jpg",
]   

//Quando o botão proximo for clicado executa a função mostrar proximo
btnProxima.addEventListener("click", mostrarProximo);

//Define a posição inicial da foto do album
let foto = 0;

//Função responsável por mostrar a proxima foto
function mostrarProximo(){
    //Avança uma posição do álbum
    foto = foto + 1;
    if (foto >= album.length) {
        foto = 0;
    }
    Quadroimagem.src = album[foto];
}

btnAnterior.addEventListener("click", mostrarAnterior);

//Função responsável por mostrar a proxima foto
function mostrarAnterior(){
    //Avança uma posição do álbum
    foto = foto - 1;
        if (foto < 0) {
        foto = album.length - 1;
    }
    Quadroimagem.src = album[foto];
}
