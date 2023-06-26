// Efeito scroll
(function () {
    const smoothScroll = function (targetEl, duration) {    
        const headerElHeight =  document.querySelector('.menu').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
     
         const ease = function(t,b,c,d) {
             t /= d / 2;
             if (t < 1) return c / 2 * t * t + b;
             t--;
             return -c / 2 * (t * (t - 2) - 1) + b;
         };
     
         const animation = function(currentTime){
             if (startTime === null) startTime = currentTime;
             const timeElapsed = currentTime - startTime;
             const run = ease(timeElapsed, startPosition, targetPosition, duration);
             window.scrollTo(0,run);
             if (timeElapsed < duration) requestAnimationFrame(animation);
         };
         requestAnimationFrame(animation);
     };
     const scrollTo = function () {
         const links = document.querySelectorAll('.js-scroll');
         links.forEach(each => {
             each.addEventListener('click', function () {
                 const currentTarget = this.getAttribute('href');
                 smoothScroll(currentTarget, 1000);
             });
         });
     };
     scrollTo();
    }());

/*var play = document.querySelector('#play');
var music = document.createElement('audio');
play.textContent = 'Play';


play.addEventListener('click', () =>{
    music.src = '/musics/JP Saxe - A Little Bit Yours (Official Music Video).mp3';
    if(play.textContent == 'Play'){
        music.play();
        play.textContent = 'Pause';
    }
    else{
        music.pause();
        play.textContent = 'Play';
    }
});*/

const play_pause = document.querySelector('#btn_play');
const title_music = document.querySelector('#title')
var music = document.createElement('audio');

play_pause.addEventListener('click', () =>{
    music.src = '/musics/JP Saxe - A Little Bit Yours (Official Music Video).mp3';
    
    //title_music.textContent = music.src;
    console.log(music.src);
    console.log(music.src[49]);
    if(play_pause.classList == 'ph ph-play' && music.paused){
        music.play();
        play_pause.className = 'ph ph-pause'
        console.log(music.played);
    }
    /*else if(play_pause.classList == 'ph ph-pause' && music.){
        play_pause.className = 'ph ph-play';
    }*/
    else{
        music.pause();
        play_pause.className = 'ph ph-play';
        console.log(music.paused);
    }
});

