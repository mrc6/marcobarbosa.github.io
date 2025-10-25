let audio = new Audio('./Music/Espumas ao Vento.mp3');
//let available_pics = [] //get from available_pics.js

let container = document.querySelector('.container');
let musicBtn = document.querySelector('.musicBtn');

for (i=0; i < available_pics.length; i++) {
    let div = document.createElement('div');
    div.className = 'content';
    let img_div = document.createElement('div');
    img_div .className = 'img_content';
    let inner_img = document.createElement('img');
    inner_img.className = 'picture';
    inner_img.src = `${available_pics[i].picture}`;
    img_div.appendChild(inner_img);
    let p_div = document.createElement('div');
    p_div.className = 'paragraph';
    let p =  document.createElement('span');
    p.textContent = `${available_pics[i].description}`;
    img_div.appendChild(inner_img);
    p_div.appendChild(p);
    div.appendChild(img_div);
    div.appendChild(p_div);
    container.appendChild(div);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function play_sound() {
  audio.play();
}

function stop_sound() {
  audio.pause();
}

musicBtn.addEventListener('click', () => {
    console.log('Audio has started playing!');
    musicBtn.style.backgroundColor = '#04AA6D';
    play_sound();
});

audio.addEventListener('ended', () => {
    console.log('Audio has finished playing!');
    musicBtn.style.backgroundColor = '#f44336';
});
