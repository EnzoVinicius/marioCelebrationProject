mario = document.querySelector('.mario');
pipe = document.querySelector('.pipe');
grass = document.querySelector('.grass');
textStart = document.querySelector('text-start')
audioStart = new Audio('./audio/audio_theme.mp3')
audioGameOver = new Audio('./audio/audio_gameover.mp3')

const start = () => {

    document.getElementById("text-start").style.color = "rgb(236, 236, 236)";

    pipe.classList.add('pipe-animation');

    mario.src = './imagesGame/mario.gif';
    mario.style.width = '150px';
    mario.style.marginLeft = '50px';

    function grassAnimation() {
        grass.classList.add('grass-animation');
    } setInterval(grassAnimation, 8000);

    audioStart.play();
}

document.addEventListener('keydown', start);



const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 600);
}

document.addEventListener('keydown', jump);









const checkGameOver = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const grassPosition = grass.offsetLeft;


    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagesGame/game-over.png';
        mario.style.width = '80px';
        mario.style.marginLeft = '50px';

        grass.style.animation = 'none';
        grass.style.left = `${grassPosition}px`;

        document.getElementById("text-start").style.color = "red";
        document.getElementById("text-start").innerHTML = "<strong>GAME OVER<br/> Para reiniciar pressione F5</strong>";

        function stopAudioStart() {
            audioStart.pause();
        } stopAudioStart();

        audioGameOver.play();

        function stopAudio() {
            audioGameOver.pause();
        } setTimeout(stopAudio, 8000);

        clearInterval(checkGameOver);
    }
}, 10);