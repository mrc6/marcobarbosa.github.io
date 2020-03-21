const MAIN = document.getElementsByClassName('main')[0];
const LEFT = document.getElementsByClassName('left-content')[0];
const RIGHT = document.getElementsByClassName('right-content')[0];
const SIDE = document.getElementsByClassName('side-bar')[0];

MAIN.addEventListener('click', function () {
  MAIN.style.animation = 'article-grow 4s ease-in';
});

LEFT.addEventListener('click', function () {
  LEFT.style.animation = 'article-grow 4s ease-in';
});

RIGHT.addEventListener('click', function () {
  RIGHT.style.animation = 'article-grow 4s ease-in';
});

SIDE.addEventListener('click', function () {
  SIDE.style.animation = 'article-grow 4s ease-in';
});
