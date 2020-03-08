const lista = document.getElementsByClassName('lista-tarefas')[0].firstElementChild;
const criarTarefa = document.getElementById('criar-tarefa');
const apagaTudo = document.getElementById('apaga-tudo');
const removeFinalizados = document.getElementById('remover-finalizados');

function itemSelecionado() {
  const itemClicado = event.srcElement;
  if (itemClicado.className === 'elemento item-selecionado completed') {
    // do nothing
  } else {
    itemClicado.className = 'elemento item-selecionado';
  }
}

function taxaItem() {
  const itemClicado = event.srcElement;
  if (itemClicado.className === 'elemento item-selecionado completed') {
    itemClicado.className = 'elemento item-selecionado';
  } else if (itemClicado.className === 'elemento item-selecionado') {
    itemClicado.className += ' completed';
  } else if (itemClicado.className === 'elemento') {
    itemClicado.className += ' completed';
  }
}

criarTarefa.addEventListener('click', function armazenaLimpa() {
  const tarefa = document.getElementsByClassName('tarefa')[0];
  const elementos = document.createElement('li');
  if (tarefa.value === '') {
    // do nothing
  } else {
    elementos.addEventListener('click', itemSelecionado);
    elementos.addEventListener('dblclick', taxaItem);
    elementos.innerHTML = tarefa.value;
    elementos.className = 'elemento';
    lista.appendChild(elementos);
    tarefa.value = '';
  }
});

apagaTudo.addEventListener('click', function () {
  lista.innerHTML = '';
});

removeFinalizados.addEventListener('click', function () {
  const elementosFinalizados = document.getElementsByClassName('lista-tarefas')[0].firstElementChild;
  const filhos = document.getElementsByClassName('elemento');
  const numeroElementos = filhos.length;

  if (elementosFinalizados.lastElementChild != null) {
    for (let i = numeroElementos - 1; i >= 0; i -= 1) {
      if (filhos[i].className === 'elemento item-selecionado completed') {
        lista.removeChild(filhos[i]);
      }
    }
  }
});

criarTarefa.addEventListener('mouseover', function () {
  const muda = document.getElementsByClassName('button');
  muda[0].style.cursor = 'pointer';
  muda[1].style.cursor = 'pointer';
  muda[2].style.cursor = 'pointer';
});

apagaTudo.addEventListener('mouseover', function () {
  const muda = document.getElementsByClassName('button');
  muda[0].style.cursor = 'pointer';
  muda[1].style.cursor = 'pointer';
  muda[2].style.cursor = 'pointer';
});

removeFinalizados.addEventListener('mouseover', function () {
  const muda = document.getElementsByClassName('button');
  muda[0].style.cursor = 'pointer';
  muda[1].style.cursor = 'pointer';
  muda[2].style.cursor = 'pointer';
});
