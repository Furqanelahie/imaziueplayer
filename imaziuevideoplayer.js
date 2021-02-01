var lcss = ':root{--youtube-red:#FE0900}html{box-sizing:border-box;font-family:"YouTube Noto",Roboto,Arial,Helvetica,sans-serif;height:100%}*,::after,::before{box-sizing:inherit;margin:0;padding:0}body{height:100%}#imaziue_video_player{top:0;margin:0;width:100%;height:100vh;position:fixed;overflow:hidden;display:none}.v_container{overflow:hidden;backdrop-filter:blur(4px);z-index:9999999999999999999999999999;width:100%;height:97%;display:flex;justify-content:center;align-items:center;position:absolute}.video-container{width:800px;margin:0 auto;position:relative;display:flex;flex-direction:column;justify-content:center}video{width:100%;height:100%;border-radius:0 0 4px 4px}.video-controls{right:0;left:0;padding:10px;position:absolute;bottom:0;transition:all .2s ease}.video-controls.hide{opacity:0;pointer-events:none}.video-progress{position:relative;height:8.4px;margin-bottom:10px}progress{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:2px;width:100%;height:8.4px;pointer-events:none;position:absolute;top:0}progress::-webkit-progress-bar{background-color:#474545;border-radius:2px}progress::-webkit-progress-value{background-color:#fff;border-radius:2px}progress::-moz-progress-bar{border:1px solid #ff0;background-color:#ff0}.seek{position:absolute;top:0;width:100%;cursor:pointer;margin:0}.seek:hover+.seek-tooltip{display:block}.seek-tooltip{display:none;position:absolute;top:-50px;margin-left:-20px;font-size:12px;padding:3px;content:attr(data-title);font-weight:700;color:#fff;background-color:rgba(0,0,0,.6)}.bottom-controls{display:flex;justify-content:space-between;align-items:center}.left-controls{display:flex;align-items:center;color:#fff}.volume-controls{display:flex;align-items:center;margin-right:10px}.volume-controls input{width:100px;opacity:1;transition:all .4s ease}.volume-controls input:focus,.volume-controls:hover input{width:100px;opacity:1}.button_k{cursor:pointer;position:relative;margin-right:7px;font-size:12px;padding:3px;border:none;outline:0;background-color:transparent}button_k *{pointer-events:none}button_k::before{content:attr(data-title);position:absolute;display:none;right:0;top:-50px;background-color:rgba(0,0,0,.6);color:#fff;font-weight:700;padding:4px 6px;word-break:keep-all;white-space:pre}button_k:hover::before{display:inline-block}.fullscreen-button{margin-right:0}.pip-button svg{width:26px;height:26px}.playback-animation{pointer-events:none;position:absolute;top:50%;left:50%;margin-left:-40px;margin-top:-40px;width:80px;height:80px;border-radius:80px;background-color:rgba(0,0,0,.6);display:flex;justify-content:center;align-items:center;opacity:0}input[type=range]{-webkit-appearance:none;-moz-appearance:none;height:8.4px;background:0 0;cursor:pointer}input[type=range]:focus{outline:0}input[type=range]::-webkit-slider-runnable-track{width:100%;cursor:pointer;border-radius:1.3px;-webkit-appearance:none;transition:all .4s ease}input[type=range]::-webkit-slider-thumb{height:16px;width:16px;border-radius:16px;background:#fff;cursor:pointer;-webkit-appearance:none;margin-left:-1px}input[type=range]:focus::-webkit-slider-runnable-track{background:0 0}input[type=range].volume{height:5px;background-color:#fff}input[type=range].volume::-webkit-slider-runnable-track{background-color:transparent}input[type=range].volume::-webkit-slider-thumb{margin-left:0;height:14px;width:14px;background:#fff}input[type=range]::-moz-range-track{width:100%;height:8.4px;cursor:pointer;border:1px solid transparent;background:0 0;border-radius:1.3px}input[type=range]::-moz-range-thumb{height:14px;width:14px;border-radius:50px;border:1px solid var(--youtube-red);background:var(--youtube-red);cursor:pointer;margin-top:5px}input[type=range]:focus::-moz-range-track{outline:0}input[type=range].volume::-moz-range-thumb{border:1px solid #fff;background:#fff}.hidden{display:none}svg{width:28px;height:28px;fill:#fff;stroke:#fff;cursor:pointer}.close_vid{background-color:rgb(0,0,0,.2);border-radius:4px 4px 0 0;top:-40px;width:100%;position:absolute;padding-top:5px}.info_div{background-color:rgb(0,0,0,.2);border-radius:4px 4px 0 0;top:0;width:100%;position:absolute;padding-top:5px;color:#fff;padding:1%;display:none}.right{float:right}.white{color:#fff;margin-right:10px;font-size:30px}.lit{font-size:19px;color:#fff;margin-left:6px}#titletxt{padding-top:3px}#blur{backdrop-filter:blur(4px);z-index:9999999999999999999999999999;filter:blur(500px);position:absolute;width:100%;height:100vh;}a{text-decoration:none}',

 head = document.head || document.getElementsByTagName('head')[0],

 

  style = document.createElement('style'); head.appendChild(style); 

  

  style.type = 'text/css'; if (style.styleSheet){

 style.styleSheet.cssText = css; 

 } else { 

 style.appendChild(document.createTextNode(lcss));

 

  }

  

  var vid_html='<div id=imaziue_video_player><div class=v_container><div class=video-container id=video-container><div class=close_vid id=closebtn><span class=lit id=titletxt style=margin-top:20px></span> <span class="right white"onclick=hide_player()>&#215;</span> <span class="right white info"onclick=info() data-title=" Furqans - Imaziue Player"><small>&#9432;</small></span></div><div class=info_div>Furqans Imaziue Video Player on Sololearn</div><div class=playback-animation id=playback-animation><svg class=playback-icons><use href=#play-icon class=hidden></use><use href=#pause></use></svg></div><video class=video controls id=video poster=poster.jpg preload=metadata><source src=video.m4 type=video/mp4></video><div class="hidden video-controls"id=video-controls><div class=video-progress><progress id=progress-bar min=0 value=0></progress><input class=seek id=seek min=0 step=1 type=range value=0><div class=seek-tooltip id=seek-tooltip>00:00</div></div><div class=bottom-controls><div class=left-controls><button class="button_k" data-title="Play (k)"id=play><svg class=playback-icons><use href=#play-icon></use><use href=#pause class=hidden></use></svg></button><div class=volume-controls><button class="button_k" data-title="Mute (m)"id=volume-button class=volume-button><svg><use href=#volume-mute class=hidden></use><use href=#volume-low class=hidden></use><use href=#volume-high></use></svg></button> <input class=volume id=volume min=0 step=0.01 type=range value=1 data-mute=0.5 max=1></div><div class=time><time id=time-elapsed>00:00</time> <span>/ </span><time id=duration>00:00</time></div></div><div class=right-controls><button class="button_k" data-title="PIP (p)"id=pip-button class=pip-button><svg><use href=#pip></use></svg></button> <button data-title="Full screen (f)"id=fullscreen-button class=fullscreen-button><svg><use href=#fullscreen></use><use href=#fullscreen-exit class=hidden></use></svg></button></div></div></div></div></div><svg style=display:none><defs><symbol id=pause viewBox="0 0 24 24"><path d="M14.016 5.016h3.984v13.969h-3.984v-13.969zM6 18.984v-13.969h3.984v13.969h-3.984z"></path></symbol><symbol id=play-icon viewBox="0 0 24 24"><path d="M8.016 5.016l10.969 6.984-10.969 6.984v-13.969z"></path></symbol><symbol id=volume-high viewBox="0 0 24 24"><path d="M14.016 3.234q3.047 0.656 5.016 3.117t1.969 5.648-1.969 5.648-5.016 3.117v-2.063q2.203-0.656 3.586-2.484t1.383-4.219-1.383-4.219-3.586-2.484v-2.063zM16.5 12q0 2.813-2.484 4.031v-8.063q1.031 0.516 1.758 1.688t0.727 2.344zM3 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6z"></path></symbol><symbol id=volume-low viewBox="0 0 24 24"><path d="M5.016 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6zM18.516 12q0 2.766-2.531 4.031v-8.063q1.031 0.516 1.781 1.711t0.75 2.32z"></path></symbol><symbol id=volume-mute viewBox="0 0 24 24"><path d="M12 3.984v4.219l-2.109-2.109zM4.266 3l16.734 16.734-1.266 1.266-2.063-2.063q-1.547 1.313-3.656 1.828v-2.063q1.172-0.328 2.25-1.172l-4.266-4.266v6.75l-5.016-5.016h-3.984v-6h4.734l-4.734-4.734zM18.984 12q0-2.391-1.383-4.219t-3.586-2.484v-2.063q3.047 0.656 5.016 3.117t1.969 5.648q0 2.203-1.031 4.172l-1.5-1.547q0.516-1.266 0.516-2.625zM16.5 12q0 0.422-0.047 0.609l-2.438-2.438v-2.203q1.031 0.516 1.758 1.688t0.727 2.344z"></path></symbol><symbol id=fullscreen viewBox="0 0 24 24"><path d="M14.016 5.016h4.969v4.969h-1.969v-3h-3v-1.969zM17.016 17.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 9.984v-4.969h4.969v1.969h-3v3h-1.969zM6.984 14.016v3h3v1.969h-4.969v-4.969h1.969z"></path></symbol><symbol id=fullscreen-exit viewBox="0 0 24 24"><path d="M15.984 8.016h3v1.969h-4.969v-4.969h1.969v3zM14.016 18.984v-4.969h4.969v1.969h-3v3h-1.969zM8.016 8.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 15.984v-1.969h4.969v4.969h-1.969v-3h-3z"></path></symbol><symbol id=pip viewBox="0 0 24 24"><path d="M21 19.031v-14.063h-18v14.063h18zM23.016 18.984q0 0.797-0.609 1.406t-1.406 0.609h-18q-0.797 0-1.406-0.609t-0.609-1.406v-14.016q0-0.797 0.609-1.383t1.406-0.586h18q0.797 0 1.406 0.586t0.609 1.383v14.016zM18.984 11.016v6h-7.969v-6h7.969z"></path></symbol></defs></svg></div>'

  var dc= document.createElement("div");

  dc.innerHTML=vid_html

  document.querySelector("body").appendChild(dc)

const video = document.getElementById('video');

const videoControls = document.getElementById('video-controls');

const playButton = document.getElementById('play');

const videoProgress= document.querySelector(".video-progress");

const playbackIcons = document.querySelectorAll('.playback-icons use');

const progressline= document.querySelector("progress")

const timeElapsed = document.getElementById('time-elapsed');

const duration = document.getElementById('duration');

const progressBar = document.getElementById('progress-bar');

const seek = document.getElementById('seek');

const seekTooltip = document.getElementById('seek-tooltip');

const volumeButton = document.getElementById('volume-button');

const volumeIcons = document.querySelectorAll('.volume-button use');

const titletxt= document.querySelector("#titletxt")

const volumeMute = document.querySelector('use[href="#volume-mute"]');

const volumeLow = document.querySelector('use[href="#volume-low"]');

const volumeHigh = document.querySelector('use[href="#volume-high"]');

const volume = document.getElementById('volume');

const playbackAnimation = document.getElementById('playback-animation');

const fullscreenButton = document.getElementById('fullscreen-button');

const videoContainer = document.getElementById('video-container');

const fullscreenIcons = fullscreenButton.querySelectorAll('use');

const pipButton = document.getElementById('pip-button');

const controls= document.querySelector(".video-controls")

const videoWorks = !!document.createElement('video').canPlayType;

const close_vid= document.querySelector("#closebtn")

if (videoWorks) {

  video.controls = false;

  videoControls.classList.remove('hidden');

}

// Add functions here

// togglePlay toggles the playback state of the video.

// If the video playback is paused or ended, the video is played

// otherwise, the video is paused

function togglePlay() {

  

  

  

  if (video.paused || video.ended) {

    video.play();

  //  close_vid.style.display="none"

  } else {

    video.pause();

    //close_vid.style.display="block"

  }

}

//hide player 

function hide_player(){

  video.pause();

  var myplayer = document.querySelector("#imaziue_video_player")

  

  myplayer.style.display="none"

}

// updatePlayButton updates the playback icon and tooltip

// depending on the playback state

function updatePlayButton() {

  playbackIcons.forEach((icon) => icon.classList.toggle('hidden'));

  if (video.paused) {

    playButton.setAttribute('data-title', '    Play (k)');

  } else {

    playButton.setAttribute('data-title', '  Pause (k)');

  }

}

// formatTime takes a time length in seconds and returns the time in

// minutes and seconds

function formatTime(timeInSeconds) {

  const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

  return {

    minutes: result.substr(3, 2),

    seconds: result.substr(6, 2),

  };

}

function initializeVideo() {

  const videoDuration = Math.round(video.duration);

  seek.setAttribute('max', videoDuration);

  progressBar.setAttribute('max', videoDuration);

  const time = formatTime(videoDuration);

  duration.innerText = `${time.minutes}:${time.seconds}`;

  duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`);

}

function updateTimeElapsed() {

  const time = formatTime(Math.round(video.currentTime));

  timeElapsed.innerText = `${time.minutes}:${time.seconds}`;

  timeElapsed.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`);

}

function updateProgress() {

  seek.value = Math.floor(video.currentTime);

  progressBar.value = Math.floor(video.currentTime);

}

function updateSeekTooltip(event) {

  const skipTo = Math.round(

    (event.offsetX / event.target.clientWidth) *

      parseInt(event.target.getAttribute('max'), 10)

  );

  seek.setAttribute('data-seek', skipTo);

  const t = formatTime(skipTo);

  seekTooltip.textContent = `${t.minutes}:${t.seconds}`;

  const rect = video.getBoundingClientRect();

  seekTooltip.style.left = `${event.pageX - rect.left}px`;

}

function skipAhead(event) {

  const skipTo = event.target.dataset.seek

    ? event.target.dataset.seek

    : event.target.value;

  video.currentTime = skipTo;

  progressBar.value = skipTo;

  seek.value = skipTo;

}

function updateVolume() {

  if (video.muted) {

    video.muted = false;

  }

  video.volume = volume.value;

}

function updateVolumeIcon() {

  volumeIcons.forEach((icon) => {

    icon.classList.add('hidden');

  });

  volumeButton.setAttribute('data-title', 'Mute (m)');

  if (video.muted || video.volume === 0) {

    volumeMute.classList.remove('hidden');

    volumeButton.setAttribute('data-title', 'Unmute (m)');

  } else if (video.volume > 0 && video.volume <= 0.5) {

    volumeLow.classList.remove('hidden');

  } else {

    volumeHigh.classList.remove('hidden');

  }

}

function toggleMute() {

  video.muted = !video.muted;

  if (video.muted) {

    volume.setAttribute('data-volume', volume.value);

    volume.value = 0;

  } else {

    volume.value = volume.dataset.volume;

  }

}

function animatePlayback() {

  playbackAnimation.animate(

    [

      {

        opacity: 1,

        transform: 'scale(1)',

      },

      {

        opacity: 0,

        transform: 'scale(1.3)',

      },

    ],

    {

      duration: 500,

    }

  );

}

function toggleFullScreen() {

  if (document.fullscreenElement) {

    document.exitFullscreen();

  } else if (document.webkitFullscreenElement) {

    // Need this to support Safari

    document.webkitExitFullscreen();

  } else if (videoContainer.webkitRequestFullscreen) {

    // Need this to support Safari

    videoContainer.webkitRequestFullscreen();

  } else {

    videoContainer.requestFullscreen();

  }

}

function updateFullscreenButton() {

  fullscreenIcons.forEach((icon) => icon.classList.toggle('hidden'));

  if (document.fullscreenElement) {

    fullscreenButton.setAttribute('data-title', 'Exit full screen (f)');

  } else {

    fullscreenButton.setAttribute('data-title', 'Full screen (f)');

  }

}

// togglePip toggles Picture-in-Picture mode on the video

async function togglePip() {

  try {

    if (video !== document.pictureInPictureElement) {

      pipButton.disabled = true;

      await video.requestPictureInPicture();

    } else {

      await document.exitPictureInPicture();

    }

  } catch (error) {

    console.error(error);

  } finally {

    pipButton.disabled = false;

  }

}

function hideControls() {

  if (video.paused) {

    return;

  }

  videoControls.classList.add('hide');

 

}

// showControls displays the video controls

function showControls() {

  videoControls.classList.remove('hide');

 

}

function keyboardShortcuts(event) {

  const { key } = event;

  switch (key) {

    case 'k':

      togglePlay();

      animatePlayback();

      if (video.paused) {

        showControls();

      } else {

        setTimeout(() => {

          hideControls();

        }, 2000);

      }

      break;

    case 'm':

      toggleMute();

      break;

    case 'f':

      toggleFullScreen();

      break;

    case 'p':

      togglePip();

      break;

  }

}

playButton.addEventListener('click', togglePlay);

video.addEventListener('play', updatePlayButton);

video.addEventListener('pause', updatePlayButton);

video.addEventListener('loadedmetadata', initializeVideo);

video.addEventListener('timeupdate', updateTimeElapsed);

video.addEventListener('timeupdate', updateProgress);

video.addEventListener('volumechange', updateVolumeIcon);

video.addEventListener('click', togglePlay);

video.addEventListener('click', animatePlayback);

video.addEventListener('mouseenter', showControls);

video.addEventListener('mouseleave', hideControls);

videoControls.addEventListener('mouseenter', showControls);

videoControls.addEventListener('mouseleave', hideControls);

seek.addEventListener('mousemove', updateSeekTooltip);

seek.addEventListener('input', skipAhead);

volume.addEventListener('input', updateVolume);

volumeButton.addEventListener('click', toggleMute);

fullscreenButton.addEventListener('click', toggleFullScreen);

videoContainer.addEventListener('fullscreenchange', updateFullscreenButton);

pipButton.addEventListener('click', togglePip);

document.addEventListener('DOMContentLoaded', () => {

  if (!('pictureInPictureEnabled' in document)) {

    pipButton.classList.add('hidden');

  }

});

document.addEventListener('keyup', keyboardShortcuts);

videoControls.style.backgroundColor ="rgb(0,0,0,0.6)";

close_vid.style.backgroundColor ="rgb(0,0,0,0.6)";

function ImzPlayer(imaziue, color)

{

document.querySelector("body").scroll="no"

 // location.href = "#imaziue_video_player";

document.getElementById("imaziue_video_player").style.display="block"

  /*Define Variables : Start */

  var video = document.getElementById("video")

  /*Define Variables : End*/

  if (imaziue.src !== undefined)

  {

    video.src = imaziue.src;

    video.load()

  }

  if (imaziue.controlsBg !== undefined)

  {

    videoControls.style.backgroundColor = imaziue.controlsBg;

    

   close_vid.style.backgroundColor=imaziue.controlsBg

   video.load()

  }

  if (imaziue.controlsBgGrad !== undefined)

  {

    videoControls.style.backgroundImage= imaziue.controlsBgGrad;

    close_vid.style.backgroundImage = imaziue.controlsBgGrad

    video.load()

  }

  

  if (imaziue.poster !== undefined)

  {

    video.poster = imaziue.poster;

    

  }

  if (imaziue.loop === "true")

  {

    video.loop = "true";

    

  }

  

    if (imaziue.info ==="false")

    {

      document.querySelector(".info").style.display="none"

  

    }

  if (imaziue.title !== undefined)

  {

    titletxt.innerText = imaziue.title;

  }

  /*{

    //titletxt.innerText = imaziue.title;

  

 }*/

  

    if (imaziue.progress === undefined)

    {

      videoProgress.style.display="block"

  

    }else{

      if (imaziue.progress === "false")

      {

        videoProgress.style.display = "none"

      

      }

    }

    

  }

  /*if (color !== undefined)

  {

    p.style.color = color;

  }*/

function process_load_play(){

   var video = document.getElementById("video");

        video.play()

}

function info(){

  var info_div = document.querySelector(".info_div");

   if(info_div.style.display=="none"){

     info_div.style.display="block"

   }else{

     info_div.style.display="none"

   }

}
