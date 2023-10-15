import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoFrame = document.querySelector('#vimeo-player');
const vimeoPlayer = new Player(vimeoFrame);

vimeoPlayer.play();

const saveTime = function(data) {
  localStorage.setItem("watchingTime", JSON.stringify(data.seconds))  
};

const throttled = throttle(saveTime, 1000)
vimeoPlayer.on('timeupdate', throttled);

vimeoPlayer.setCurrentTime(
    JSON.parse(localStorage.getItem("watchingTime"))
)