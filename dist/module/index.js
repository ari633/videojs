const $c855a320e9128218$export$d2b008984942555e = (config = {
    target: '#app',
    source: '',
    thumb: '',
    showThumbAt: 4,
    thumbEndAt: 60
})=>{
    const app = document.querySelector(config.target);
    app.innerHTML = `
    <div class="video-wrapper">
      <video
        controls
        src=${config.source}
        poster=${config.poster}
        width="100%"
      ></video>
      <div class="ads-thumb">
        <img src=${config.thumb} />
      </div>
      <div class="controls">
        <div class="progress">
          <div class="progress-bar"></div>
          <div class="buffer-bar"></div>
          <div class="dot-thumb"></div>
        </div>
        <div class="button-controls">
          <div>
            <button
              class="play"
              data-icon="P"
              aria-label="play pause toggle"
            ></button>
            <span class="remaining-time">00:00</span> /
            <span class="duration-time">00:00</span>
          </div>
          <div>
            <button class="full" data-icon="M" aria-label="full"></button>
          </div>
        </div>
      </div>
    </div>
  `;
    const video = document.querySelector('video');
    const videoWrapper = document.querySelector('.video-wrapper');
    const controls = document.querySelector('.controls');
    const play = document.querySelector('.play');
    const full = document.querySelector('.full');
    const progressBar = document.querySelector('.progress-bar');
    const bufferBar = document.querySelector('.buffer-bar');
    const progress = document.querySelector('.progress');
    const durationTime = document.querySelector('.duration-time');
    const remainingTime = document.querySelector('.remaining-time');
    const dotThumb = document.querySelector('.dot-thumb');
    const adsThumb = document.querySelector('.ads-thumb');
    video.removeAttribute('controls');
    controls.style.visibility = 'visible';
    video.addEventListener('loadeddata', function() {
        if (video.duration !== isNaN) {
            durationTime.textContent = $c855a320e9128218$export$3ef70bb7b6c88436(video.duration);
            const atIndex = config.showThumbAt / video.duration * 100;
            dotThumb.style.left = atIndex + '%';
        }
    });
    function handleEvent() {
        const currentPercent = video.currentTime / video.duration * 100;
        progressBar.style.width = currentPercent + '%';
        remainingTime.textContent = $c855a320e9128218$export$3ef70bb7b6c88436(video.currentTime);
        if (video.currentTime >= config.showThumbAt && video.currentTime <= config.thumbEndAt) adsThumb.style.visibility = 'visible';
        else if (video.currentTime >= config.thumbEndAt) adsThumb.style.visibility = 'hidden';
    }
    function playPauseMedia() {
        if (video.paused) {
            play.setAttribute('data-icon', 'u');
            video.play();
            controls.style.visibility = 'hidden';
        } else {
            play.setAttribute('data-icon', 'P');
            video.pause();
            controls.style.visibility = 'visible';
        }
    }
    video.addEventListener('progress', ()=>{
        if (video.buffered.length > 0) {
            const bufferedEnd = video.buffered.end(video.buffered.length - 1);
            bufferBar.style.width = bufferedEnd / video.duration * 100 + '%';
        }
    });
    video.addEventListener('timeupdate', handleEvent);
    play.addEventListener('click', playPauseMedia);
    progress.addEventListener('click', (e)=>{
        const percentBar = e.offsetX / progress.clientWidth * 100;
        progressBar.style.width = e.offsetX + 'px';
        video.currentTime = percentBar * video.duration / 100;
    });
    videoWrapper.addEventListener('mouseenter', ()=>{
        controls.style.visibility = 'visible';
    });
    videoWrapper.addEventListener('mouseleave', ()=>{
        if (!video.paused) controls.style.visibility = 'hidden';
    });
    full.addEventListener('click', ()=>{
        if (videoWrapper.mozRequestFullScreen) videoWrapper.mozRequestFullScreen();
        else if (videoWrapper.webkitRequestFullScreen) videoWrapper.webkitRequestFullScreen();
    });
};
const $c855a320e9128218$export$3ef70bb7b6c88436 = (time)=>{
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - minutes * 60);
    let minuteValue;
    let secondValue;
    if (minutes < 10) minuteValue = '0' + minutes;
    else minuteValue = minutes;
    if (seconds < 10) secondValue = '0' + seconds;
    else secondValue = seconds;
    const mediaTime = minuteValue + ' : ' + secondValue;
    return mediaTime;
};
window.$ = {
    loadVideo: $c855a320e9128218$export$d2b008984942555e
};


export {$c855a320e9128218$export$d2b008984942555e as loadVideo, $c855a320e9128218$export$3ef70bb7b6c88436 as getTimer};
//# sourceMappingURL=index.js.map
