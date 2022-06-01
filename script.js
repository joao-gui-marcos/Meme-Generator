let memeText = document.getElementById('meme-text')
let inputText = document.getElementById('text-input')
let container = document.getElementById('meme-image-container')
inputText.addEventListener('keyup',updateMemeText)

function updateMemeText() {
    console.log('oi amigo')
    memeText.innerHTML = inputText.value
}

function showPreview(event){
    if(event.target.files.length > 0){
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = document.getElementById("meme-image");
      preview.src = src;
      preview.style.display = "block";
    }
  }

let fire = document.getElementById('fire')
let water = document.getElementById('water')
let earth = document.getElementById('earth')

fire.addEventListener('click',border1)
water.addEventListener('click',border2)
earth.addEventListener('click',border3)

function border1() {
    container.style.border = '3px dashed rgb(255, 0, 0)'
}

function border2() {
    container.style.border = '5px double rgb(0, 0, 255)'
}

function border3() {
    container.style.border = '6px groove rgb(0, 128, 0)'
}

let meme1 = document.getElementById('meme-1')
let meme2 = document.getElementById('meme-2')
let meme3 = document.getElementById('meme-3')
let meme4 = document.getElementById('meme-4')
meme1.addEventListener('click',preset1)
meme2.addEventListener('click',preset2)
meme3.addEventListener('click',preset3)
meme4.addEventListener('click',preset4)

function preset1() {
    var preview = document.getElementById("meme-image");
    preview.src = 'imgs/meme1.png'
}

function preset2() {
    var preview = document.getElementById("meme-image");
    preview.src = 'imgs/meme2.png'
}

function preset3() {
    var preview = document.getElementById("meme-image");
    preview.src = 'imgs/meme3.png'
}

function preset4() {
    var preview = document.getElementById("meme-image");
    preview.src = 'imgs/meme4.png'
}