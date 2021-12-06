const video = document.getElementById('player');
const durationControl = document.getElementById('durationlevel');
const soundControl = document.getElementById('miclevel');
const playButtons = document.querySelectorAll('.play')
const playButtonVideo = document.querySelector('.video-play')
const micButton = document.querySelector('.play-sound');

let soundLevel;
let intervalId;

const max_sound_value = 10;
const normal_update_range = 1000/66; 


function setEventListeners() {
  
  playButtons.forEach((button) =>
  button.addEventListener('click', playStop)); 
  
  micButton.addEventListener('click', toggleSoundValue )

  video.addEventListener('click', playStop) 

  durationControl.addEventListener('mousedown', stopInterval);
  durationControl.addEventListener('mouseup', setVideoDuration);

  soundControl.addEventListener('mouseup', setSoundVolume )
}

function playStop() {
  video.addEventListener('canplaythrough', function(){
    durationControl.max = video.duration;
  })

  playButtonVideo.classList.toggle('video-play--hidden');

if (video.paused) {
  console.log(video);
  intervalId = setInterval(updateDuration, normal_update_range);
  video.play()
} else  {
  stopInterval()
  video.pause()
}
}


function setVideoDuration () {
   intervalId = setInterval(updateDuration, normal_update_range);
   video.currentTime = durationControl.value; 
   if (video.pause){
     video.play();
     playButtonVideo.classList.add('video-play--hidden')
   }
}


function updateDuration() {
  durationControl.value =  video.currentTime;
}

function stopInterval(){
  if (!video.paused){
    console.log('очищаем интервал', intervalId);
    video.pause();
    clearInterval(intervalId);
  }
}

function toggleSoundValue() {
  if (video.volume == 0){
    video.volume = soundLevel;
    soundControl.value = soundLevel*max_sound_value; 

  } else {
    soundLevel = video.volume;
    video.volume = 0;
    soundControl.value = 0;
  }
}

function setSoundVolume (){
  video.volume = soundControl.value/max_sound_value;
}

document.addEventListener('DOMContentLoaded', function(){
  
  durationControl.min = 0;
  durationControl.value = 0;

  soundControl.min = 0;
  soundControl.max = max_sound_value; 
  soundControl.value  = max_sound_value; 
  
  
  setEventListeners();
});
