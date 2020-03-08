let corPintura = 'color cor1 selected';
const paletteButons = document.getElementsByClassName('color ');
const pixelUnit = document.getElementsByClassName('pixel ');
const limpaQuadro = document.getElementById('clear-board');
const corGerada = [];
let rgb = {};

function geraCor() {
  for (let i = 0; i < 3; i += 1) {
    corGerada[i] = parseInt(Math.random() * 128, 10);
  }
  rgb = `rgb(${corGerada})`;
}

const selecionaCor = function () {
  const corSelecionada = event.srcElement;
//  Limpa a seleção
  document.getElementsByClassName('cor1')[0].className = 'color cor1';
  document.getElementsByClassName('cor2')[0].className = 'color cor2';
  document.getElementsByClassName('cor3')[0].className = 'color cor3';
  document.getElementsByClassName('cor4')[0].className = 'color cor4';
//  Seleciona nova cor
  if (document.getElementsByClassName('cor1')[0] === corSelecionada) {
    corSelecionada.className += ' selected';
  } else if (document.getElementsByClassName('cor2')[0] === corSelecionada) {
    corSelecionada.className += ' selected';
  } else if (document.getElementsByClassName('cor3')[0] === corSelecionada) {
    corSelecionada.className += ' selected';
  } else if (document.getElementsByClassName('cor4')[0] === corSelecionada) {
    corSelecionada.className += ' selected';
  }
  // captura cor do elemento
  corPintura = event.toElement.style.cssText;

  // Transforma cor selecionada em cor rgb
  corPintura = corPintura.split(':');
  corPintura = corPintura[1].toString();
  corPintura = corPintura.split(';');
  corPintura = corPintura[0].toString();
};

const pintaPixel = function () {
  const pixelSelecionado = event.srcElement;
  pixelSelecionado.style.backgroundColor = corPintura;
};

function limpa() {
  const quadro = document.getElementsByClassName('pixel ');
  for (let i = 0; i < quadro.length; i += 1) {
    quadro[i].style.backgroundColor = 'white';
  }
}

for (let i = 0; i < paletteButons.length; i += 1) {
  paletteButons[i].addEventListener('click', selecionaCor);
}

for (let j = 0; j < pixelUnit.length; j += 1) {
  pixelUnit[j].addEventListener('click', pintaPixel);
}

limpaQuadro.addEventListener('click', limpa);

// muda a cor ao carregar a página
window.onload = function () {
  document.getElementsByClassName('cor1')[0].style.backgroundColor = 'rgb(0,0,0)';
  geraCor();
  document.getElementsByClassName('cor2')[0].style.backgroundColor = rgb;

  geraCor();
  document.getElementsByClassName('cor3')[0].style.backgroundColor = rgb;

  geraCor();
  document.getElementsByClassName('cor4')[0].style.backgroundColor = rgb;
};
