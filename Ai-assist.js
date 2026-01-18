// Search popup
const searchPopup = document.getElementById("searchPopup");
document.getElementById("searchBtn").addEventListener("click", () => {
  searchPopup.style.display = "flex";
});

//  Close popup function
function closeSearch() {
  searchPopup.style.display = "none";
}

const searchInput = document.getElementById("searchInput");
const suggestionsList = document.getElementById("suggestionsList");

// Example search data
const suggestions = [
  "Kimi Ga Nozomu Eien (2003)",
  "Rurouni Kenshin - Reminiscence (1999)",
  "Fullmetal Alchemist (2003)",
  "Elfen Lied (2004)",
  "Full Moon wo Sagashite (2002) ",
  "Berserk (1997)",
  "Cowboy Bebop (1998) ",
  "Hikaru no Go (2001) ",
  "Fruits Basket (2001) ",
  "Gundam SEED (2002) ",
  "Hajime no Ippo (2000)",
  "Last EXILE (2003) ",
  "Scrapped Princess (2003)",
  "Azumanga Daioh (2002) ",
  "GunGrave (2003) ",
  "Neon Genesis Evangelion (1995) ",
  "Full Metal Panic? Fumoffu! (2003) ",
  "Naruto (2002)",
  "12 Kokuki (2002)",
  "One Piece (1999)",
  "Furi Kuri (2000)",
  "Rahxephon (2002)",
  "AIR TV (2005)",
  "Shingetsutan Tsukihime (2003) ",
  "Trigun (1998) ",
  "Great Teacher Onizuka (2000)",
  "Vision of Escaflowne (1996)",
  "Monster (2004)",
  "X TV (2001) ",
  "Haibane Renmei (2002)",
  "Ima, Sokoni Iru Boku (1999) ",
  "Grave of the Fireflies (1988)",
  "Cowboy Bebop - Knockin' on heaven's door (2001) ",
  "Hunter X Hunter (1999) ",
  "Rurouni Kenshin (1996) ",
  "Samurai Champloo (2004) ",
  "Onegai Teacher (2002) ",
  "Spirited Away (2001) ",
  "Bleach (2004) ",
  "Full Metal Panic! (2002) ",
  "BECK (2004) ",
  "Kareshi Kanojo no Jijou (1998) ",
  "Mai HiME (2004)",
  "Chrno Crusade (2003) ",
  "Planet ES (2003)",
  "Chobits (2002) ",
  "Gunslinger Girl (2003)",
  "Full Metal Panic! The Second Raid (2005) ",
  "Noir (2001)",
  "GetBackers (2002) ",
  "Love Hina (2000) ",
  "Read or Die (2001) ",
  "Uchuu no Stellvia (2003) ",
  "R.O.D -THE TV- (2003) ",
  "Inuyasha (2000) ",
  "Kanon (2002) ",
  "Hoshi no Koe (2002) ",
  "Saikano (2002)",
  "Kino no tabi ~the Beautiful World~ (2003) ",
  "School Rumble (2004) ",
  "Vampire Hunter D: Bloodlust (2001)",
  "Ghost in the Shell Stand Alone Complex 1st GIG (2002)",
  "Princess Mononoke (1997)",
  "Wolf's Rain (2003) ",
  "Scryed (2001) ",
  "Serial Experiments Lain (1998) ",
  "Ranma 1/2 (1989) ",
  "Midori no Hibi (2004) ",
  "Seikai no Monshou (1999) ",
  "Gankutsuoh (2004) ",
  "Infinite Ryvius (1999) ",
  "Card Captor Sakura (1998) ",
  "Hachimitsu to Clover (2005)",
  "Boogiepop Phantom (2000) ",
  "My Neighbor Totoro (1988) ",
  "Ghost in the Shell (1995) ",
  "Vandread 2 (2001) ",
  "Nausicaa of the Valley of the Wind (1984)",
  "Hellsing (2001) ",
  "Jungle wa itsumo Hare nochi Guu (2001)",
  "Kiddy Grade (2002) ",
  "Rurouni Kenshin - Seisouhen (2001) ",
  "Akira (1988) ",
  "Ai Yori Aoshi (2002) ",
  "Jin-Roh, The Wolf Brigade (2000) ",
  "Koi Kaze (2004) ",
  "AA! Megami Sama (1993)",
  "Genshiken (2004) ",
  "Witch Hunter Robin (2002)",
  "Maison Ikkoku (1986) ",
  "Kannazuki no Miko (2004) ",
  "Paranoia Agent (2004) ",
  "Initial D - First Stage (1998) ",
  "Aishiteruze Baby (2004) ",
  "hack//SIGN (2002)",
  "Mahoromatic (2001)",
  "Mahou Tsukai ni Taisetsu na Koto (2003)",
  "Princess Tutu (2002) ",
  "eikai no Senki (2000) ",
  "Samurai 7 (2004) ",
  "Vandread (2000)",
  "Kidou Tenshi Angelic Layer (2001) ",
  "Gunparade March - Arata Naru Ko Gunka (2003)",
  "Gravitation TV (2000) ",
  "Whisper of the heart (1995) ",
  "Millennium Actress (2001) ",
  "Kodomo no Omocha (1996)",
  "Tennis no Ohjisama (2001) ",
  "Laputa: Castle in the Sky (1986)",
  "D.N Angel (2003)",
  "Golden Boy (1995) ",
  "Hana Yori Dango (1996)",
  "Fushigi Yuugi (1995) ",
  "D.C ~Da Capo~ (2003) ",
  "Maria-sama ga Miteru (2004)",
  "Ai Mai Mi ! Strawberry Egg (2001)",
  "Basilisk ~ Koga Ninpo Cho ~ (2005) ",
  "Seikai no Senki 2 (2001) ",
  "Revolutionary Girl Utena (1997) ",
  "Evangelion: End of Evangelion (1997) ",
  "Slam Dunk (1993) ",
  "Tenshi na Konamaiki (2002) ",
  "Excel Saga (1999)",
  "Ayashi no Ceres (2000)",
  "Mahoromatic TV 2 (2002) ",
  "Abenobashi Mahou Shotengai (2002) ",
  "Ultra Maniac TV (2003) ",
  "Outlaw Star (1998) ",
  "Pita Ten (2002) ",
  "Onegai Twins (2003) ",
  "Love Hina Christmas Special (2001) ",
  "Kumo no Muko, Yakusoku no basho (2004) ",
  "Martian Successor Nadesico (1996) ",
  "Slayers, The (1995)",
  "TEXHNOLYZE (2003)",
  "Macross Plus (1994)",
  "Piano (2002) ",
  "AA! Megami Sama: The Movie (2000) ",
  "Boys Be (2000) ",
  "Shaman King (2001)",
  "Sokyu No Fafner (2004) ",
  "Macross Zero (2002)",
  "hack//Legend of Twilight Bracelet (2003)",
  "Matantei Loki - Ragnarok (2003) ",
  "GANTZ (2004) ",
  "Kimagure Orange Road TV (1987) ",
  "Maburaho (2003) ",
  "Air Master (2003) ",
  "Final Fantasy VII Advent Children (2005) ",
  "Tokyo Underground (2002) ",
  "Suzuka (2005)",
  "Ninja Scroll (1993)",
  "Legend of Condor Hero (2001) ",
  "Kiki's Delivery Service (1989) ",
  "Ai Yori Aoshi ~Enishi~ (2003) ",
  "MADLAX (2004)",
  "Yami no Matsuei (2000)",
  "Metropolis (2001)",
  "DearS (2004)",
  "Spiral ~Bond of Inference~ (2002)",
  "Video Girl Ai (1991)",
  "Ghost in the Shell 2: Innocence (2004)",
  "Gundam SEED Destiny (2004) ",
  "Appleseed Movie (2004)",
  "Perfect Blue (1997)",
  "Tenjou Tenge (2004)",
  "Record of Lodoss War OVA (1990) ",
  "Blood: The Last Vampire (2000) ",
  "NARUTARU (2003)",
  "Escaflowne - The Movie (2000) ",
  "Green Green TV (2003) ",
  "Peace Maker Kurogane (2003)",
  "Happy Lesson TV (2002) ",
  "Tsubasa Chronicle (2005)",
  "To Heart (1999)",
  "Jubei-chan the Ninja Girl (1999)",
  "Rozen Maiden (2004) ",
  "Popotan (2003)",
  "Gasaraki (1998)",
  "Love Hina OVA (2002)",
  "Ichigo 100% (2005) ",
  "Gundam Wing (1995) ",
  "Dual! Parallel Trouble Adventures TV (1999) ",
  "Groove Adventure Rave (2001)",
  "Love Hina Spring Special (2001) ",
  "Maho Sensei Negima (2005) ",
  "Alien Nine (2001) ",
  "Angel Sanctuary (2000) ",
  "Flame of Recca (1992) ",
  "Dragon Ball (1986)",
  "Prince of Darkness (1998) ",
  "Battle Angel (1993) ",
  "Rurouni Kenshin - Requiem for the Restoration Royalists (1997) ",
  "Grenadier - Hohoemi no Senshi - (2004)",
  "Bastard! Destroyer of Darkness (1992) ",
  " Kite (1998) ",
  " Mezzo - Danger Service Agency (2004) ",
  "Dragon Ball Z (1989)",
  "Samurai Deeper Kyo (2002) ",
  "Ikkitousen (2003)",
];

// Search suggestion functionality
searchInput.addEventListener("input", function () {
  const input = searchInput.value.toLowerCase();
  suggestionsList.innerHTML = ""; // Clear old suggestions

  if (input) {
    const filteredSuggestions = suggestions.filter((item) =>
      item.toLowerCase().includes(input)
    );

    filteredSuggestions.forEach(function (suggestion) {
      const li = document.createElement("li");
      li.textContent = suggestion;
      li.addEventListener("click", function () {
        searchInput.value = suggestion; // Fill input when clicked
        suggestionsList.innerHTML = ""; // Clear suggestions
      });
      suggestionsList.appendChild(li);
    });
  }
});

// Theme toggle
//const themeBtn = document.getElementById("themeBtn");
//themeBtn.addEventListener("click", () => {
//document.body.classList.toggle("dark");
//const icon = themeBtn.querySelector("i");
// if (document.body.classList.contains("dark")) {
// icon.classList.replace("bx-moon", "bx-sun");
//} else {
//icon.classList.replace("bx-sun", "bx-moon");
//}
//});

// Watchlist (placeholder)
//document.getElementById("watchlistBtn").addEventListener("click", () => {
//alert("⭐ Your Watchlist feature will go here!");
//});
const watchlistBtn = document.getElementById("watchlistBtn");
const popupOverlay = document.getElementById("popupOverlay");
const closePopup = document.getElementById("closePopup");

watchlistBtn.addEventListener("click", () => {
  popupOverlay.style.display = "flex";
});

closePopup.addEventListener("click", () => {
  popupOverlay.style.display = "none";
});

// Optional: close when clicking outside popup
popupOverlay.addEventListener("click", (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.style.display = "none";
  }
});

// Random anime redirect (placeholder)
const randomAnimes = [
  "page-1.html",
  "page-2.html",
  "page-3.html",
  "page-4.html",
  "page-5.html",
  "page-6.html",
  "page-7.html",
  "page-8.html",
];
document.getElementById("randomBtn").addEventListener("click", () => {
  const random = randomAnimes[Math.floor(Math.random() * randomAnimes.length)];
  window.location.href = random;
});

const musicBtn = document.getElementById("play");
const musicPopOverlay = document.getElementById("musicPopOverlay");
const closeMusic = document.getElementById("closeMusic");

// Get the element that wraps the music player corex
const playerRoot = document.getElementById("player-root");

// Toggling the music popup
musicBtn.addEventListener("click", () => {
  musicPopOverlay.style.display = "flex";
});

// Closing the music popup
closeMusic.addEventListener("click", () => {
  musicPopOverlay.style.display = "none";
  // Assuming 'musicContainer' refers to the audio/video element container.
  // Since the content is the 'corex' inside 'musicPopOverlay', this line might need adjustment
  // depending on where the external script (easyplay.js) loads the media element.
  // For now, I'll assume clearing the content is handled elsewhere or is not necessary for just closing the UI.
  // musicContainer.innerHTML = ""; // Original comment was here
});

// Close popup when clicking outside
musicPopOverlay.addEventListener("click", (e) => {
  if (e.target === musicPopOverlay) {
    musicPopOverlay.style.display = "none";
  }
});
// Notifications (placeholder)
//document.getElementById("notifyBtn").addEventListener("click", () => {
//alert("🔔 No new notifications right now!");
//});

const floatBtn = document.getElementById("floatBtn");
const menuItems = document.querySelectorAll(".menu-item");

let isDragging = false;
let offsetX, offsetY;
let menuOpen = false;

floatBtn.addEventListener("click", () => {
  if (!isDragging) {
    menuOpen = !menuOpen;
    toggleFloatingMenu();
  }
});

function toggleFloatingMenu() {
  const btnRect = floatBtn.getBoundingClientRect();
  const btnX = btnRect.left + btnRect.width / 2;
  const btnY = btnRect.top + btnRect.height / 2;

  const arcDirection = btnX < window.innerWidth / 2 ? 1 : -1; // 1 = right arc, -1 = left arc
  const radius = 70; // distance from button to items
  const totalItems = menuItems.length;
  const angleStep = Math.PI / (totalItems + 1); // spread items in semi-circle

  menuItems.forEach((item, i) => {
    if (menuOpen) {
      const angle = angleStep * (i + 1) - Math.PI / 2;
      const x = Math.cos(angle) * radius * arcDirection;
      const y = Math.sin(angle) * radius;
      item.style.left = btnX - 25 + x + "px";
      item.style.top = btnY - 25 + y + "px";
      item.style.opacity = "1";
    } else {
      item.style.left = btnX - 25 + "px";
      item.style.top = btnY - 25 + "px";
      item.style.opacity = "0";
    }
  });
}

// Drag logic
floatBtn.addEventListener("mousedown", (e) => {
  isDragging = false;
  offsetX = e.clientX - floatBtn.getBoundingClientRect().left;
  offsetY = e.clientY - floatBtn.getBoundingClientRect().top;
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
});

function onMouseMove(e) {
  isDragging = true;
  menuOpen = false; // close when moving
  toggleFloatingMenu();
  floatBtn.style.left = e.clientX - offsetX + "px";
  floatBtn.style.top = e.clientY - offsetY + "px";
  floatBtn.style.right = "";
  floatBtn.style.bottom = "";
  floatBtn.style.position = "fixed";
}

function onMouseUp() {
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
}

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
const postexImg = document.getElementById("postex-img");
const postexContainer = document.getElementById("postex");
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

function trypostexFromMedia(path) {
  // attempt common image replacements (.jpg, .jpeg, .png)
  const base = path.replace(/\.[^/.]+$/, "");
  const candidates = [base + ".jpg", base + ".jpeg", base + ".png"];
  // pick the first candidate (no network check here). If the image fails to load, postexImg.onError fallback will run.
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

  // insert into postex area for video, or keep hidden for audio
  if (videoMode) {
    // remove postex image visually behind the video
    // Insert video element at top of postex
    postexContainer.appendChild(el);
    el.style.display = "block";
    postexImg.style.opacity = "0.25"; // dim postex when playing video
  } else {
    // ensure postex image is fully visible
    postexImg.style.opacity = "1";
    // place audio element off-DOM? We'll append but keep it hidden.
    postexContainer.appendChild(el);
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
  // postex try
  postexImg.src = trypostexFromMedia(path);
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
      postexImg.style.opacity = "0.25";
    } else {
      postexImg.style.opacity = "1";
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

// postex fallback: if image fails to load, don't show broken image
postexImg.addEventListener("error", () => {
  postexImg.src =
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
  // add click on postex to toggle play/pause (for video)
  postexContainer.addEventListener("click", () => {
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
