// Declarando o array de imagens

let imagens =[
    'src/assets/imagem1.jpg',
    'src/assets/imagem2.jpg',
    'src/assets/imagem3.jpg',
    'src/assets/imagem4.jpg',
];


// Declarando as variáveis

let index=0;
let tempo=3000;


// Criando a função SLIDESHOW

function slideShow(){
    document.getElementById("image").src=imagens[index];
    index++;

    if(index == imagens.length){
        index=0;
    }
    setTimeout("slideShow()", tempo)
}
slideShow();