// Declaracao das variaveis
const player = document.querySelector('#player');
const musicName = document.querySelector('#musicName');
const img = document.querySelector('#imgs');
const playPauseButton = document.querySelector('#playPauseButton');
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');
const currentTime = document.querySelector('#currentTime');
const duration = document.querySelector('#duration');
const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');

// Importando o arquivo songs.js onde conte as musicas
import songs from "./songs.js";

// 
const textButtonPlay = "<i class='fa-solid fa-play'></i>";
const textButtonPause = "<i class='fa-solid fa-pause'></i>";

let index = 0;
let a = 0
// Eveto dos butoes prev e next 
prevButton.onclick = () => prevNextMusic("prev");
nextButton.onclick = () => prevNextMusic();

playPauseButton.onclick = () => playPause();

// Metodo para dar play e pause na musica
const playPause = () => {
    if(player.paused){
        player.play();
        playPauseButton.innerHTML = textButtonPause;
    }
    else{
        player.pause();
        playPauseButton.innerHTML = textButtonPlay;
    }
};

//if( duration == currentTime)


// Evento para atualisar o time da musica
player.ontimeupdate = () => updateTime();

// Metodo para atualisar o time da musica
const updateTime = () => {
    const currentMinutes = Math.floor(player.currentTime / 60);
    const currentSeconds = Math.floor(player.currentTime % 60);

    currentTime.textContent = currentMinutes + ":" + formatZero(currentSeconds);

    const durationFormatted = isNaN(player.duration) ? 0 : player.duration;

    const durationMinutes = Math.floor(durationFormatted / 60);
    const durationSeconds = Math.floor(durationFormatted % 60);

    duration.textContent = durationMinutes + ":" + formatZero(durationSeconds);

    const progressWith = durationFormatted ? (player.currentTime / durationFormatted) * 100 : 0;
    progress.style.width = progressWith + "%";
};

// Metodo para formatar o time
const formatZero = (n) => (n < 10 ? "0" + n : n);

// Evento para alternar o time da musica ao clicar no progressbar.
progressBar.onclick = (e) => {
    const newTime = (e.offsetX / progressBar.offsetWidth) * player.duration;
    player.currentTime = newTime;
}

// Metodo para mudar de musica
const prevNextMusic = (type = "next") => {
    if((type == "next" && index + 1 === songs.length) || type === "init"){
        index = 0;
    }
    else if (type == "prev" && index === 0){
        index = songs.length;
    }
    else{
        index = type === "prev" && index ? index - 1 : index + 1;
    }

    player.src = songs[index].src;
    img.src = songs[index].img;
    musicName.innerHTML = songs[index].autor + ' - ' + songs[index].title;
    if(type !== "init") playPause();

    updateTime();
};

prevNextMusic("init");