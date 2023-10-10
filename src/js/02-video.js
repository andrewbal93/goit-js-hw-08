import Vimeo from '@vimeo/player';

const vimeoFrame = document.querySelector('#vimeo-player');

const vimeoPlayer = new Vimeo(vimeoFrame);

vimeoPlayer.getCurrentTime().then(function (seconds) {
        localStorage.setItem("videoplayer-current-time", seconds);
    });

let storedTime = localStorage.getItem("videoplayer-current-time");
if (storedTime) {
    vimeoPlayer.setCurrentTime(parseFloat(storedTime));
}

vimeoPlayer.on('timeupdate', function (data) {
    localStorage.setItem("videoplayer-current-time", data.seconds)
});
