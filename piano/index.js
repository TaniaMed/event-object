'use strict'; 

const piano = document.querySelector('.set');
const audio = document.querySelectorAll('audio');

document.addEventListener('keydown', updatePlayer);
document.addEventListener('keyup', chPlayer);
changePl('middle');

function changePl(newClass) {
    piano.classList.remove('lower');
    piano.classList.remove('middle');
    piano.classList.remove('higher');
    piano.classList.add(newClass);
    
    let track = Array.from(audio);
    track[0].src = `sounds/${newClass}/fifth.mp3`;
    track[1].src = `sounds/${newClass}/first.mp3`;
    track[2].src = `sounds/${newClass}/fourth.mp3`;
    track[3].src = `sounds/${newClass}/second.mp3`;
    track[4].src = `sounds/${newClass}/third.mp3`;
    return;
}

function updatePlayer(event) {
    if (event.altKey && !event.repeat) {
        console.log('alt');
        changePl('higher');
    }
    if (event.shiftKey && !event.repeat) {
        console.log('shift');
        changePl('lower');
    }
}

function chPlayer(event) {
    changePl('middle');
}

function playSong(event) { 
    event.preventDefault(); 
    let track = event.target.querySelector('audio');
    track.play(); 
}

const allAudioBut = piano.querySelectorAll('li');

Array
    .from(allAudioBut)
    .forEach(AudioButClick)

function AudioButClick(audioBut) {
    audioBut.addEventListener('click', playSong);
}