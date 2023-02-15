const player = document.querySelector('.player');
const video = document.querySelector('video');
const toggleBtn = document.querySelector('.toggle');
const rangeInputs = document.querySelectorAll('input[type="range"]');
const playerButtons = document.querySelectorAll('.player-button');
const progressBar = document.querySelector('.progress-bar');
const progressFilled = document.querySelector('.progress-filled');

const playVideo = function(e){
    video[video.paused ? 'play' : 'pause']();
    updateToggleBtn()
}
const updateToggleBtn = function(e){
   console.log(toggleBtn.textContent);
   toggleBtn.textContent = (toggleBtn.textContent === "▶"? "||":"▶")
};
video.addEventListener('click',playVideo);
toggleBtn.addEventListener('click',playVideo);
const inputRangeHandler = function(e){
    video[this.name] = this.value;
};
const buttonClickHandler = function(e){
    video.currentTime += parseFloat(this.dataset.skip);
};
rangeInputs.forEach(rangeInput => rangeInput.addEventListener(('input'),inputRangeHandler));
playerButtons.forEach(button =>button.addEventListener('click',buttonClickHandler))

const showProgress = function(e){
    const time = (100/video.duration) * video.currentTime;
    progressFilled.style.flexBasis = `${time}%`
    //console.log(time);
}
const progressBarClickHander = function(e){
    const time = (e.offsetX/progressBar.offsetWidth)*video.duration;
    video.currentTime = time;
    
};
video.addEventListener('timeupdate',showProgress);
progressBar.addEventListener('click',progressBarClickHander);
