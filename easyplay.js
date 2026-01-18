/* ---------- CONFIG & PLAYLIST ---------- */

/* Example playlist - replace with your actual file paths */
const songs = [
  "Pictures/vinland-saga-season-2-episode.mp3",
  "Pictures/bleach-dub-episode.mp4",
  "MEmu Music/「AMV」-_Haunt(360p).mp4",
  "MEmu Music/21_-「AMV」-_Anime_MV(360p).mp4",
  "MEmu Music/Animal___AMV___Anime_Mix(360p).mp4",
  "MEmu Music/Golden_Hour_-「AMV」-_Anime_MV(720p).mp4",
  "MEmu Music/Perfect_10___AMV___Anime_Mix(360p).mp4",
  "MEmu Music/Stay_-「AMV」-_Anime_MV(720p).mp4",
];

/* ---------- STATE ---------- */
let currentIndex = 0;
let isPlaying = false;
let isShuffled = false;
let shuffleOrder = [];
let audioOrVideo = null; // reference to current <audio> or <video> element

/* ---------- SELECTORS ---------- */
const root = document.getElementById("player-root");
const posterImg = document.getElementById("poster-img");
const posterContainer = document.getElementById("poster");
const titleEl = document.getElementById("song-title");
const metaEl = document.getElementById("song-meta");
const progressEl = document.getElementById("progress");
const progressBar = document.getElementById("progressBar");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const playBtn = document.getElementById("playBtn");
const playIcon = document.getElementById("playIcon");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const rewindBtn = document.getElementById("rewindBtn");
const forwardBtn = document.getElementById("forwardBtn");
const volumeSlider = document.getElementById("volumeSlider");
const settingsBtn = document.getElementById("settings-btn");
const settingsPanel = document.getElementById("settings-panel");
const playbackRateSelect = document.getElementById("playbackRate");
const loopToggle = document.getElementById("loopToggle");
const shuffleToggle = document.getElementById("shuffleToggle");

/* ---------- UTILS ---------- */
function formatTime(sec) {
  if (!sec || isNaN(sec)) return "0:00";
  const s = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  const m = Math.floor(sec / 60);
  return `${m}:${s}`;
}

function isVideoFile(path) {
  return /\.(mp4|webm|ogg)$/i.test(path);
}

function tryPosterFromMedia(path) {
  // attempt common image replacements (.jpg, .jpeg, .png)
  const base = path.replace(/\.[^/.]+$/, "");
  const candidates = [base + ".jpg", base + ".jpeg", base + ".png"];
  // pick the first candidate (no network check here). If the image fails to load, posterImg.onError fallback will run.
  return candidates[0];
}

/* ---------- PLAYER CORE ---------- */
function createMediaElement(src) {
  // remove existing if any
  if (audioOrVideo) {
    audioOrVideo.pause();
    audioOrVideo.removeEventListener("timeupdate", onTimeUpdate);
    audioOrVideo.removeEventListener("ended", onEnded);
    // remove node
    audioOrVideo.remove();
    audioOrVideo = null;
  }

  const videoMode = isVideoFile(src);
  let el;
  if (videoMode) {
    el = document.createElement("video");
    el.playsInline = true;
    el.preload = "metadata";
    el.muted = false;
    el.controls = false;
    el.style.display = "block";
    // ensure keyboard / focus doesn't show native controls
  } else {
    el = document.createElement("audio");
    el.preload = "metadata";
  }

  el.src = src;
  el.volume = parseFloat(volumeSlider.value);
  el.style.width = "100%";
  el.style.height = "100%";
  el.style.objectFit = "cover";
  el.style.display = "none"; // hide until we decide where to place it (we'll show but overlay)
  el.addEventListener("timeupdate", onTimeUpdate);
  el.addEventListener("ended", onEnded);
  el.addEventListener("loadedmetadata", () => {
    durationEl.textContent = formatTime(el.duration);
  });

  // insert into poster area for video, or keep hidden for audio
  if (videoMode) {
    // remove poster image visually behind the video
    // Insert video element at top of poster
    posterContainer.appendChild(el);
    el.style.display = "block";
    posterImg.style.opacity = "0.25"; // dim poster when playing video
  } else {
    // ensure poster image is fully visible
    posterImg.style.opacity = "1";
    // place audio element off-DOM? We'll append but keep it hidden.
    posterContainer.appendChild(el);
    el.style.display = "none";
  }

  audioOrVideo = el;
  // apply loop setting
  audioOrVideo.loop = loopToggle.checked;
  // playback rate
  audioOrVideo.playbackRate = parseFloat(playbackRateSelect.value);
  return el;
}

function loadIndex(idx) {
  if (idx < 0 || idx >= songs.length) return;
  currentIndex = idx;
  const path = songs[currentIndex];
  // update UI text
  titleEl.textContent = path.split("/").pop();
  metaEl.textContent = isVideoFile(path) ? "Video" : "Audio";
  // poster try
  posterImg.src = tryPosterFromMedia(path);
  // create element and set source
  createMediaElement(path);
  // update shuffle state visuals
  shuffleToggle.checked = isShuffled;
  updatePlayIcon(false);
}

/* ---------- PLAY / PAUSE ---------- */
async function playCurrent() {
  if (!audioOrVideo) return;
  try {
    // ensure displayed appropriately
    if (audioOrVideo.tagName.toLowerCase() === "video") {
      audioOrVideo.style.display = "block";
      posterImg.style.opacity = "0.25";
    } else {
      posterImg.style.opacity = "1";
      audioOrVideo.style.display = "none";
    }

    await audioOrVideo.play();
    isPlaying = true;
    updatePlayIcon(true);
  } catch (err) {
    console.warn("Play prevented:", err);
  }
}

function pauseCurrent() {
  if (!audioOrVideo) return;
  audioOrVideo.pause();
  isPlaying = false;
  updatePlayIcon(false);
}

function togglePlayPause() {
  if (!audioOrVideo) return;
  if (isPlaying) pauseCurrent();
  else playCurrent();
}

function updatePlayIcon(playing) {
  playIcon.className = playing ? "fas fa-pause" : "fas fa-play";
}

/* ---------- TIMEUPDATES & SEEK ---------- */
function onTimeUpdate() {
  if (!audioOrVideo || !audioOrVideo.duration) return;
  const percent = (audioOrVideo.currentTime / audioOrVideo.duration) * 100;
  progressEl.style.width = percent + "%";
  currentTimeEl.textContent = formatTime(audioOrVideo.currentTime);
}

function seekTo(percent) {
  if (!audioOrVideo || !audioOrVideo.duration) return;
  audioOrVideo.currentTime = (percent / 100) * audioOrVideo.duration;
}

/* ---------- NAVIGATION ---------- */
function prevTrack() {
  if (isShuffled) {
    // go to previous index in shuffleOrder (find current position)
    const pos = shuffleOrder.indexOf(currentIndex);
    const prevPos = (pos - 1 + shuffleOrder.length) % shuffleOrder.length;
    loadIndex(shuffleOrder[prevPos]);
  } else {
    const nextIdx = (currentIndex - 1 + songs.length) % songs.length;
    loadIndex(nextIdx);
  }
  playCurrent();
}

function nextTrack() {
  if (isShuffled) {
    const pos = shuffleOrder.indexOf(currentIndex);
    const nextPos = (pos + 1) % shuffleOrder.length;
    loadIndex(shuffleOrder[nextPos]);
  } else {
    const nextIdx = (currentIndex + 1) % songs.length;
    loadIndex(nextIdx);
  }
  playCurrent();
}

/* ---------- REWIND / FORWARD ---------- */
function skipSeconds(sec) {
  if (!audioOrVideo) return;
  audioOrVideo.currentTime = Math.max(
    0,
    Math.min(audioOrVideo.duration || Infinity, audioOrVideo.currentTime + sec)
  );
}

/* ---------- LOOP & SHUFFLE ---------- */
function setLoop(val) {
  if (audioOrVideo) audioOrVideo.loop = val;
}
function setShuffle(val) {
  isShuffled = val;
  if (isShuffled) {
    // build shuffleOrder such that it starts at currentIndex then random order
    shuffleOrder = Array.from(Array(songs.length).keys());
    // Fisher-Yates
    for (let i = shuffleOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffleOrder[i], shuffleOrder[j]] = [shuffleOrder[j], shuffleOrder[i]];
    }
    // ensure first element is currentIndex (so nextTrack continues logically)
    if (!shuffleOrder.includes(currentIndex)) {
      shuffleOrder.unshift(currentIndex);
    } else {
      // move currentIndex to front
      shuffleOrder = shuffleOrder.filter((i) => i !== currentIndex);
      shuffleOrder.unshift(currentIndex);
    }
  } else {
    shuffleOrder = [];
  }
}

/* ---------- EVENTS ---------- */
// play / pause
playBtn.addEventListener("click", togglePlayPause);
// next / prev
prevBtn.addEventListener("click", () => {
  prevTrack();
});
nextBtn.addEventListener("click", () => {
  nextTrack();
});
// rewind / forward
rewindBtn.addEventListener("click", () => skipSeconds(-10));
forwardBtn.addEventListener("click", () => skipSeconds(10));

// progress click to seek
progressBar.addEventListener("click", (e) => {
  const rect = progressBar.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const pct = (x / rect.width) * 100;
  seekTo(pct);
});

// volume
volumeSlider.addEventListener("input", () => {
  const v = parseFloat(volumeSlider.value);
  if (audioOrVideo) audioOrVideo.volume = v;
});

// settings toggle
settingsBtn.addEventListener("click", (e) => {
  settingsPanel.classList.toggle("open");
  settingsPanel.setAttribute(
    "aria-hidden",
    !settingsPanel.classList.contains("open")
  );
});

// playback rate change
playbackRateSelect.addEventListener("change", () => {
  if (audioOrVideo)
    audioOrVideo.playbackRate = parseFloat(playbackRateSelect.value);
});

// loop toggle
loopToggle.addEventListener("change", (e) => {
  setLoop(e.target.checked);
});

// shuffle toggle
shuffleToggle.addEventListener("change", (e) => {
  setShuffle(e.target.checked);
});

// theme picker
document.querySelectorAll(".theme-swatch").forEach((s) => {
  s.addEventListener("click", () => {
    const t = s.dataset.theme;
    // clear theme classes then add
    root.classList.remove(
      "theme-neon",
      "theme-glass",
      "theme-anime",
      "theme-orange"
    );
    root.classList.add(t);
  });
});

// poster fallback: if image fails to load, don't show broken image
posterImg.addEventListener("error", () => {
  posterImg.src =
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450"><rect width="100%" height="100%" fill="%2309141a" /><text x="50%" y="50%" font-size="24" fill="%23ffffff" text-anchor="middle" dominant-baseline="middle">No thumbnail</text></svg>';
});

// keyboard shortcuts (space, left, right)
document.addEventListener("keydown", (e) => {
  const tag = document.activeElement.tagName.toLowerCase();
  if (tag === "input" || tag === "select" || tag === "textarea") return;
  if (e.code === "Space") {
    e.preventDefault();
    togglePlayPause();
  }
  if (e.code === "ArrowRight") {
    skipSeconds(10);
  }
  if (e.code === "ArrowLeft") {
    skipSeconds(-10);
  }
});

// when media ends
function onEnded() {
  // if shuffle, go to next in shuffle order
  if (loopToggle.checked) {
    // browser will loop if media.loop = true (we also set it). If you want custom loop behaviour, handle here.
    return;
  }
  nextTrack();
}

/* ---------- SHUFFLE ROUTINES ---------- */
function buildShuffleOrder() {
  shuffleOrder = Array.from(Array(songs.length).keys());
  for (let i = shuffleOrder.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffleOrder[i], shuffleOrder[j]] = [shuffleOrder[j], shuffleOrder[i]];
  }
  // move currentIndex to front so "next" goes to a new item
  shuffleOrder = shuffleOrder.filter((i) => i !== currentIndex);
  shuffleOrder.unshift(currentIndex);
}

/* ---------- INIT ---------- */
function init() {
  // initial shuffleOrder empty
  shuffleOrder = [];
  // load the first track
  loadIndex(currentIndex);
  // try to autoplay (may be blocked by browser)
  // add click on poster to toggle play/pause (for video)
  posterContainer.addEventListener("click", () => {
    if (audioOrVideo && audioOrVideo.tagName === "VIDEO") togglePlayPause();
  });
  // hide settings panel on outside click
  document.addEventListener("click", (e) => {
    if (!settingsPanel.contains(e.target) && !settingsBtn.contains(e.target)) {
      settingsPanel.classList.remove("open");
      settingsPanel.setAttribute("aria-hidden", "true");
    }
  });
}

// expose some helpers for console debugging (optional)
window.playerAPI = {
  loadIndex,
  nextTrack,
  prevTrack,
  togglePlayPause,
  setShuffle,
};

init();
