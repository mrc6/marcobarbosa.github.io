const botaoCarta = document.getElementById('criar-carta');
const textoCarta = document.getElementById('carta-texto');
const cartaGerada = document.getElementById('carta-gerada');
const array = [ 'newspaper','magazine1','magazine2','medium','big','reallybig','rotateleft','rotateright','skewleft','skewright'];

let aleatorio = function () {
    let numero = parseInt(Math.random()*10,10);
    while (numero > 3 || numero === 0) {
      numero = parseInt(Math.random()*10,10);
    }
    return numero;
};

function estilizaPalavra(tl) {
  let roda;

  for (let i = 0; i < tl; i += 1) {
    const selecionaPalavra = document.getElementsByTagName('span')[i];
    roda = aleatorio();

    if (roda === 1) {
      selecionaPalavra.className = 'newspaper';
    }
    if (roda === 2) {
      selecionaPalavra.className = 'magazine1';
    }
    if (roda === 3) {
      selecionaPalavra.className = 'magazine2';
    }
  }

}

function tamanhoPalavra(tl2) {
  let roda2;

  for (let i = 0; i < tl2; i += 1) {
    const selecionaPalavra2 = document.getElementsByTagName('span')[i];
    roda2 = aleatorio();

    if (roda2 === 1) {
      selecionaPalavra2.className += ' medium';
    }
    if (roda2 === 2) {
      selecionaPalavra2.className += ' big';
    }
    if (roda2 === 3) {
      selecionaPalavra2.className += ' reallybig';
    }
  }

}

function rotacaoPalavra(tl3) {
  let roda3;

  for (let i = 0; i < tl3; i += 1) {
    const selecionaPalavra3 = document.getElementsByTagName('span')[i];
    roda3 = aleatorio();

    if (roda3 > 2) {
      roda3 = aleatorio();
    }

    if (roda3 === 1) {
      selecionaPalavra3.className += ' rotateright';
    }
    if (roda3 === 2) {
      selecionaPalavra3.className += ' rotateleft';
    }
  }

}

function inclinacaoPalavra(tl4) {
  let roda4;

  for (let i = 0; i < tl4; i += 1) {
    const selecionaPalavra4 = document.getElementsByTagName('span')[i];
    roda4 = aleatorio();

    if (roda4 > 2) {
      roda4= aleatorio();
    }

    if (roda4 === 1) {
      selecionaPalavra4.className += ' skewright';
    }
    if (roda4 === 2) {
      selecionaPalavra4.className += ' skewleft';
    }
  }

}

function separaPalavras() {
  const palavraPorPalavra = textoCarta.value.split(' ');
  const textLength = palavraPorPalavra.length;
  for (let i = 0; i < textLength; i += 1) {
    /*
    if (i === textLength-1) {
      cartaGerada.innerHTML += '<span>' + palavraPorPalavra[i];
    } else {
    cartaGerada.innerHTML += '<span>' + palavraPorPalavra[i] + ' ';
    }
    */
   cartaGerada.innerHTML += '<span>' + palavraPorPalavra[i] + ' ';
  }
  estilizaPalavra(textLength);
  tamanhoPalavra(textLength);
  rotacaoPalavra(textLength);
  inclinacaoPalavra(textLength);
}

botaoCarta.addEventListener('click', separaPalavras);
