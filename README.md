<!DOCTYPE html>
<html lang="ku">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<style>

* {
  box-sizing: border-box;
}

/* =========================
   PAGE (NO SCROLLING)
========================= */

html,
body {
  margin: 0px;
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden; /* ڕێگری لە سکرۆڵکردن */
  background: #121212;
  color: #fff;
  font-family: Arial, sans-serif;
  touch-action: none; /* ڕێگری لە سکرۆڵ بە دەست لە مۆبایل */
  -webkit-text-size-adjust: 85%;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}


/* =========================
   COUNTER CONTAINER
========================= */

.counter-container {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 9px;
  width: 100%;
  max-width: 400px;
  margin: 1px auto;
  padding: 0px;
  touch-action: manipulation;
}


/* =========================
   COUNTER BOX & ANIMATIONS
========================= */

.counter-box {
  position: relative;
  height: 170px;
  width: 100%;
  text-align: center;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  background: #1e1e1e;
  border-radius: 16px;
  padding: 2px;
  border: 2px solid transparent;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.1s ease;
  pointer-events: auto;
}

/* ئەنیمەیشنی لەرینەوە (Wiggle / Shaking) بۆ براوەکان */
@keyframes wiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-1deg); }
  75% { transform: rotate(1deg); }
}

.counter-box.leader-1 {
  border: 1px solid #00ff66 !important;
  animation: wiggle 0.4s infinite ease-in-out;
}

.counter-box.leader-2 {
  border: 1px solid #ffd700 !important;
  animation: wiggle 0.4s infinite ease-in-out;
}

.counter-box.leader-3 {
  border: 1px solid #ffeb85 !important;
  animation: wiggle 0.4s infinite ease-in-out;
}

.counter-box.leader-4 {
  border: 1.5px solid #ffffff !important;
  animation: wiggle 0.4s infinite ease-in-out;
}


/* =========================
   CLICK ANIMATION
========================= */

.counter-box:active {
  transform: scale(0.95);
}


/* =========================
   IMAGE & BOX VIDEO
========================= */

.counter-box img.box-img,
.counter-box video.box-video {
  width: 100%;
  aspect-ratio: 1 / 1;
  height: 115px;
  object-fit: cover;
  border-radius: 13px;
  display: block;
  pointer-events: none;
  -webkit-user-drag: none;
}


/* =========================
   NUMBER & ICON TOGETHER
========================= */

.counter-number {
  position: relative;
  font-size: 32px;
  font-weight: bold;
  margin-top: 2px;
  padding: 0;
  color: #fff;
  min-height: 0px;
  user-select: none;
  -webkit-user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.num-icon {
  width: 26px;
  height: 26px;
  object-fit: contain;
  pointer-events: none;
}


/* =========================
   +1 ANIMATION
========================= */

.plus-one {
  position: absolute;
  left: 50%;
  top: -10px;
  transform: translateX(-50%);
  font-size: 48px;
  font-weight: 900;
  color: #00ff66;
  text-shadow:
    0 0 5px #00ff66,
    0 0 12px #00ff66,
    0 0 25px rgba(0, 255, 102, 0.8);
  pointer-events: none;
  white-space: nowrap;
  z-index: 999;
  animation: plusOneAnimation 0.75s cubic-bezier(.2,.8,.2,1) forwards;
}


@keyframes plusOneAnimation {
  0% {
    opacity: 0;
    transform: translate(-50%, 10px) scale(0.4);
  }
  20% {
    opacity: 1;
    transform: translate(-50%, -5px) scale(1.25);
  }
  45% {
    opacity: 1;
    transform: translate(-50%, -25px) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -75px) scale(0.85);
  }
}


/* =========================
   PROGRESS WITH 1K TEXT
========================= */

.progress-wrapper {
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  margin-top: 2px;
  padding: 0 4px;
}

.progress-container {
  flex: 1;
  height: 6px;
  background: #333;
  border-radius: 10px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, #00e676, #00b0ff);
  border-radius: 10px;
  transition: width 0.1s ease-in-out;
}

.progress-target {
  font-size: 11px;
  font-weight: bold;
  color: #00ff66;
  line-height: 1;
  user-select: none;
  -webkit-user-select: none;
}


/* =========================
   BOTTOM VIDEO STYLING
========================= */

.bottom-video-container {
  width: 100%;
  max-width: 400px;
  margin: 10px auto 0 auto;
  padding: 0;
  display: flex;
  justify-content: center;
}

.bottom-video-container video {
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0,0,0,0.5);
}


/* =========================
   MOBILE
========================= */

@media (max-width: 600px) {
  .counter-container {
    gap: 8px;
  }
  .counter-box {
    padding: 6px;
  }
  .counter-number {
    font-size: 30px;
  }
  .plus-one {
    font-size: 42px;
  }
}


/* =========================
   SMALL iPHONE
========================= */

@media (max-width: 380px) {
  .counter-container {
    gap: 6px;
  }
  .counter-number {
    font-size: 27px;
  }
  .plus-one {
    font-size: 38px;
  }
}

</style>
</head>
<body>

<!-- =========================
     COUNTERS
========================= -->

<div class="counter-container">

  <!-- COUNTER 1 -->
  <div class="counter-box" id="box1" onpointerdown="increaseLeft(event)">
    <img id="img1" class="box-img" src="https://files.catbox.moe/jy2d8v.jpeg" alt="Image 1" draggable="false">
    <video id="video1" class="box-video" src="https://files.catbox.moe/swfw68.mp4" autoplay loop playsinline style="display: none;"></video>
    
    <div class="counter-number">
      <img src="https://imgur.com/F3ucfLA.png" class="num-icon" alt="Rose Gift">
      <span id="leftCounter">0</span>
    </div>
    
    <div class="progress-wrapper">
      <div class="progress-container">
        <div class="progress-bar" id="bar1"></div>
      </div>
      <span class="progress-target">1K</span>
    </div>
  </div>

  <!-- COUNTER 2 -->
  <div class="counter-box" id="box2" onpointerdown="increaseRight(event)">
    <img id="img2" class="box-img" src="https://files.catbox.moe/umuvyb.jpeg" alt="Image 2" draggable="false">
    <video id="video2" class="box-video" src="https://files.catbox.moe/av0bac.mp4" autoplay loop playsinline style="display: none;"></video>
    
    <div class="counter-number">
      <img src="https://imgur.com/SgT0elO.png" class="num-icon" alt="Rose Gift">
      <span id="rightCounter">0</span>
    </div>
    
    <div class="progress-wrapper">
      <div class="progress-container">
        <div class="progress-bar" id="bar2"></div>
      </div>
      <span class="progress-target">1K</span>
    </div>
  </div>

  <!-- COUNTER 3 -->
  <div class="counter-box" id="box3" onpointerdown="increase3(event)">
    <img id="img3" class="box-img" src="https://files.catbox.moe/91jrjx.jpeg" alt="Image 3" draggable="false">
    <video id="video3" class="box-video" src="https://files.catbox.moe/zh9gfs.mp4" autoplay loop playsinline style="display: none;"></video>
    
    <div class="counter-number">
      <img src="https://imgur.com/cig4eDx.png" class="num-icon" alt="Rose Gift">
      <span id="counter3">0</span>
    </div>
    
    <div class="progress-wrapper">
      <div class="progress-container">
        <div class="progress-bar" id="bar3"></div>
      </div>
      <span class="progress-target">1K</span>
    </div>
  </div>

  <!-- COUNTER 4 -->
  <div class="counter-box" id="box4" onpointerdown="increase4(event)">
    <img id="img4" class="box-img" src="https://files.catbox.moe/27afcu.jpeg" alt="Image 4" draggable="false">
    <video id="video4" class="box-video" src="https://files.catbox.moe/sef9hp.mp4" autoplay loop playsinline style="display: none;"></video>
    
    <div class="counter-number">
      <img src="https://imgur.com/J1wxX9o.png" class="num-icon" alt="Rose Gift">
      <span id="counter4">0</span>
    </div>
    
    <div class="progress-wrapper">
      <div class="progress-container">
        <div class="progress-bar" id="bar4"></div>
      </div>
      <span class="progress-target">1K</span>
    </div>
  </div>

</div>


<!-- =========================
     BOTTOM VIDEO
========================= -->

<div class="bottom-video-container">
  <video id="bottomVideo" src="gggg" autoplay loop playsinline></video>
</div>


<!-- =========================
     AUDIO
========================= -->

<audio id="happyAudio" src="https://files.catbox.moe/9hnssq.mp3" loop preload="auto"></audio>
<audio id="sadAudio" src="https://mp3tourl.com/audio/1787938572405-9f2a2495-4038-4fbb-90e3-05f7d7f3439d.mp3" loop preload="auto"></audio>
<audio id="audio3" src="https://mp3tourl.com/audio/1788085844814-7303e9a0-e35f-4e68-81f4-2749dc64dd61.mp3" loop preload="auto"></audio>
<audio id="audio4" src="https://mp3tourl.com/audio/1788085682047-24861455-cee6-456b-b666-463b7ff582b9.mp3" loop preload="auto"></audio>


<script>
/* =========================
   COUNTERS
========================= */

let leftCount = 0;
let rightCount = 0;
let count3 = 0;
let count4 = 0;


/* =========================
   TARGET
========================= */

const WIN_TARGET = 1000;


/* =========================
   AUDIO & BOTTOM VIDEO
========================= */

const happyAudio = document.getElementById("happyAudio");
const sadAudio = document.getElementById("sadAudio");
const audio3 = document.getElementById("audio3");
const audio4 = document.getElementById("audio4");
const bottomVideo = document.getElementById("bottomVideo");

// چالاککردنی دەنگی ڤیدیۆکەی خوارەوە بە یەکەم لێدانی دەست
document.addEventListener("pointerdown", function enableBottomVideoAudio() {
  if (bottomVideo && !activeVideoTimer) {
    bottomVideo.muted = false;
    bottomVideo.play().catch(function(e) { console.log(e); });
  }
  document.removeEventListener("pointerdown", enableBottomVideoAudio);
});


/* =========================
   VIDEO TIMING LOGIC (ALL BOXES)
========================= */

let activeVideoTimer = null;
let currentActiveBox = null;

function stopActiveVideo() {
  if (activeVideoTimer) {
    clearTimeout(activeVideoTimer);
    activeVideoTimer = null;
  }
  if (currentActiveBox !== null) {
    const img = document.getElementById("img" + currentActiveBox);
    const video = document.getElementById("video" + currentActiveBox);
    if (video) {
      video.pause();
      video.style.display = "none";
    }
    if (img) {
      img.style.display = "block";
    }
    currentActiveBox = null;
  }

  // ئاگادارکردنەوەی ڤیدیۆکەی خوارەوە: ئاسایی ببوونەوەی دەنگەکەی
  if (bottomVideo) {
    bottomVideo.muted = false;
  }
}

function checkLeaderVideo(clickedBoxNum) {
  const counts = [
    { boxNum: 1, count: leftCount },
    { boxNum: 2, count: rightCount },
    { boxNum: 3, count: count3 },
    { boxNum: 4, count: count4 }
  ];

  counts.sort((a, b) => b.count - a.count);

  if (counts[0].count > counts[1].count && counts[0].count > 0) {
    const leaderNum = counts[0].boxNum;

    if (clickedBoxNum === leaderNum) {
      if (currentActiveBox !== null && currentActiveBox !== leaderNum) {
        stopActiveVideo();
      }

      if (currentActiveBox !== leaderNum) {
        showLeaderVideo(leaderNum);
      }
    }
  }
}

function showLeaderVideo(boxNum) {
  const img = document.getElementById("img" + boxNum);
  const video = document.getElementById("video" + boxNum);

  if (!img || !video) return;

  currentActiveBox = boxNum;
  img.style.display = "none";
  video.style.display = "block";
  video.currentTime = 0;
  video.muted = false;

  // بێدەنگکردنی ڤیدیۆکەی خوارەوە لە کاتی کارکردنی ڤیدیۆ ۱۰ چرکەییەکەی سەرەوە
  if (bottomVideo) {
    bottomVideo.muted = true;
  }

  stopAllAudio();
  video.play().catch(function(e) { console.log(e); });

  if (activeVideoTimer) clearTimeout(activeVideoTimer);

  // پاش ۱۰ چرکە ڤیدیۆکەی سەرەوە دەوەستێت و دەنگی خوارەوە ئاسایی دەبێتەوە
  activeVideoTimer = setTimeout(function() {
    stopActiveVideo();
    checkMusic();
  }, 10000);
}


/* =========================
   LEADER HIGHLIGHT
========================= */

function updateLeaderHighlight(clickedBoxNum) {
  const b1 = document.getElementById("box1");
  const b2 = document.getElementById("box2");
  const b3 = document.getElementById("box3");
  const b4 = document.getElementById("box4");

  const boxes = [b1, b2, b3, b4];

  boxes.forEach(box => {
    if (box) {
      box.classList.remove("leader-1", "leader-2", "leader-3", "leader-4");
    }
  });

  let maxCount = Math.max(leftCount, rightCount, count3, count4);

  if (maxCount > 0) {
    if (leftCount === maxCount && b1) b1.classList.add("leader-1");
    if (rightCount === maxCount && b2) b2.classList.add("leader-2");
    if (count3 === maxCount && b3) b3.classList.add("leader-3");
    if (count4 === maxCount && b4) b4.classList.add("leader-4");
  }

  checkLeaderVideo(clickedBoxNum);
}


/* =========================
   +1 ANIMATION
========================= */

function showPlusOne(counterId) {
  const counter = document.getElementById(counterId);
  const plus = document.createElement("span");
  plus.className = "plus-one";
  plus.innerText = "+1";
  counter.appendChild(plus);

  setTimeout(function () {
    if (plus) {
      plus.remove();
    }
  }, 750);
}


/* =========================
   STOP ALL MUSIC
========================= */

function stopAllAudio() {
  happyAudio.pause();
  sadAudio.pause();
  audio3.pause();
  audio4.pause();
}


/* =========================
   PROGRESS BAR
========================= */

function updateProgressBar(barId, count) {
  const percentage = Math.min((count / WIN_TARGET) * 100, 100);
  document.getElementById(barId).style.width = percentage + "%";
}


/* =========================
   CHECK MUSIC
========================= */

function checkMusic() {
  const items = [
    { count: leftCount, audio: happyAudio },
    { count: rightCount, audio: sadAudio },
    { count: count3, audio: audio3 },
    { count: count4, audio: audio4 }
  ];

  items.sort(function(a, b) {
    return b.count - a.count;
  });

  if (items[0].count > 0 && items[0].count > items[1].count) {
    if (items[0].audio.paused && !activeVideoTimer) {
      stopAllAudio();
      items[0].audio.play().catch(function() {});
    }
  }
}


/* =========================
   COUNTERS INCREMENT
========================= */

function increaseLeft(e) {
  if (e) e.preventDefault();
  leftCount++;
  document.getElementById("leftCounter").innerText = leftCount;
  updateProgressBar("bar1", leftCount);
  showPlusOne("leftCounter");
  checkMusic();
  updateLeaderHighlight(1);
}

function increaseRight(e) {
  if (e) e.preventDefault();
  rightCount++;
  document.getElementById("rightCounter").innerText = rightCount;
  updateProgressBar("bar2", rightCount);
  showPlusOne("rightCounter");
  checkMusic();
  updateLeaderHighlight(2);
}

function increase3(e) {
  if (e) e.preventDefault();
  count3++;
  document.getElementById("counter3").innerText = count3;
  updateProgressBar("bar3", count3);
  showPlusOne("counter3");
  checkMusic();
  updateLeaderHighlight(3);
}

function increase4(e) {
  if (e) e.preventDefault();
  count4++;
  document.getElementById("counter4").innerText = count4;
  updateProgressBar("bar4", count4);
  showPlusOne("counter4");
  checkMusic();
  updateLeaderHighlight(4);
}


/* =========================
   ZOOM & TOUCH SCROLL PROTECTION
========================= */

document.addEventListener("gesturestart", function(e) { 
  e.preventDefault(); 
}, { passive: false });

document.addEventListener("touchmove", function(e) { 
  e.preventDefault(); 
}, { passive: false });

  /* =========================
   OFFLINE CACHE REGISTRATION
========================= */
  if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then((reg) => console.log('Offline Ready!', reg.scope))
      .catch((err) => console.error('Service Worker Error:', err));
  });
}

</script>
</body>
</html>
