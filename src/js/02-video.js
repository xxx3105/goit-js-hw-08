import Player from "@vimeo/player";
import throttle from "lodash.throttle";

  const iframeEl = document.querySelector("iframe");
    const player = new Player(iframeEl);

player.on('timeupdate', throttle(onPlay, 1000));
   
function onPlay(date) {
    localStorage.setItem("videoplayer-current-time", date.seconds)
};

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

const item = localStorage.getItem("videoplayer-current-time")
player.setCurrentTime(item);

 