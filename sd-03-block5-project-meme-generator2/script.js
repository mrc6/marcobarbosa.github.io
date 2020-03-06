let addImage = document.getElementById("meme-insert");
let memeText = document.getElementById("meme-text");

function criandoUrl() {
  let image = document.getElementById("meme-image");
  image.src = URL.createObjectURL(addImage.files[0]);
  image.style.height = 400 + "px";
  image.style.width = 400 + "px";
};

addImage.addEventListener("change", criandoUrl);

function exibir(){
  document.getElementById("meme-text").innerHTML = texto.value;
}

let texto = document.getElementById("text-input");
texto.addEventListener("input",exibir);

document.getElementById("button1").addEventListener("click", function () {
  let imageContainer = document.getElementById("meme-image-container");
  imageContainer.style.border = "3px dashed red";
});

document.getElementById("button2").addEventListener("click", function () {
  let imageContainer2 = document.getElementById("meme-image-container");
  imageContainer2.style.border = "5px dashed blue";
  imageContainer2.style.borderStyle = "double"
});

document.getElementById("button3").addEventListener("click", function () {
  let imageContainer3 = document.getElementById("meme-image-container");
  imageContainer3.style.border = "6px groove green";
});

let miniMeme1 = document.getElementById('meme-1');
let miniMeme2 = document.getElementById('meme-2');
let miniMeme3 = document.getElementById('meme-3');
let miniMeme4 = document.getElementById('meme-4');

miniMeme1.addEventListener('click', function () {
    let imagemDoMeme1 = document.getElementById("meme-image");
    imagemDoMeme1.src = './imgs/meme1.jpeg';
  });

  miniMeme2.addEventListener('click', function () {
    let imagemDoMeme2 = document.getElementById("meme-image");
    imagemDoMeme2.src = './imgs/meme2.jpeg';
  });

  miniMeme3.addEventListener('click', function () {
    let imagemDoMeme3 = document.getElementById("meme-image");
    imagemDoMeme3.src = './imgs/meme3.jpeg';
  });

  miniMeme4.addEventListener('click', function () {
    let imagemDoMeme4 = document.getElementById("meme-image");
    imagemDoMeme4.src = './imgs/meme4.jpeg';
  });
