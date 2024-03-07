let indiceAtual = 0;
const imagens = document.querySelectorAll('.carrossel-imagem');
const totalImagens = imagens.length;

function mudarImagem() {
  imagens[indiceAtual].classList.remove('ativo');
  indiceAtual = (indiceAtual + 1) % totalImagens;
  imagens[indiceAtual].classList.add('ativo');
}

setInterval(mudarImagem, 5000);

