let audio = new Audio(localStorage.getItem("song"));
let playBtn = document.querySelector('.playBtn');
let pauseBtn = document.querySelector('.pauseBtn');
let stopBtn = document.querySelector('.stopBtn');
let image = document.querySelector('.responsive-image');
let container = document.querySelector('.container');
let text = document.querySelector('.stopped-text');

image.src = localStorage.getItem("image");

const multiLineText = localStorage.getItem("text");

// Split the text by the newline character to get an array of lines.
// Use /\r?\n/ to handle both common newline sequences (\n and \r\n).
const lines = multiLineText.split(/\r?\n/);
const nlines = lines.length;
const wait_time = nlines*1000*2;
const end_line = lines[12]

// Iterate over the array of lines using forEach
lines.forEach((line) => {
  let newParagraph = document.createElement("p");
  newParagraph.textContent = line;
  text.appendChild(newParagraph);
});

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

async function runWithDelay() {
  await delay(wait_time); // Pauses the function for 2 seconds
  // Stopping transform
  console.log("Stopping transform");
  text.remove();
  let newDiv = document.createElement("div");
  newDiv.className = "stopped-text";
  let newParagraph = document.createElement("p");
  newParagraph.textContent = end_line;
  newDiv.appendChild(newParagraph);
  container.appendChild(newDiv);
}

function play_sound() {
  audio.play();
}
  
function pause_sound() {
  audio.pause();
}

function stop_sound() {
    audio.pause();
    audio.currentTime = 0; // Rewind to the beginning
}

playBtn.onclick = async function(){
    play_sound();
    text.className = "moving-text";
    runWithDelay();
};

pauseBtn.onclick = async function(){
    pause_sound();
};

stopBtn.onclick = async function(){
    stop_sound();
};

