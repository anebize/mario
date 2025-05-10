const mario= document.querySelector('.mario');
const pipecument.querySelector('.pipe');

const jump=() {
    mario.classList.add('jump');

    setTimeout (()={
mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(()= {

    const pipePosition = pipe.offsetLeft;
    const marioposition=+window.getComputedStyle(mario).bottom.replace('')

    if (pipePosition <120 && marioposition <80) {


        pipe.style.animation = "none";}
        pipe.style.left =' ${pipePosition}px'
   
},10)

document.addEventListener('keydown', jump);