const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".ainav");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

const toggleLink = document.getElementById("searchToggle");
const dropdown = document.getElementById("searchDropdown");
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

// Toggle dropdown
toggleLink.addEventListener("click", function (e) {
  e.preventDefault();
  dropdown.classList.toggle("show");
});

// Close dropdown if clicked outside
document.addEventListener("click", function (e) {
  if (!toggleLink.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.remove("show");
  }
});

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

let currentPage = 3; // page-1.html is current
const totalPages = 5;
const pages = [
  "page-1.html",
  "page-2.html",
  "page-3.html",
  "page-4.html",
  "page-5.html",
];

const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
const pageNumber = document.getElementById("pageNumber");

prevButton.addEventListener("click", function () {
  if (currentPage > 1) {
    currentPage--;
    window.location.href = pages[currentPage - 1];
  }
});

nextButton.addEventListener("click", function () {
  if (currentPage < totalPages) {
    currentPage++;
    window.location.href = pages[currentPage - 1];
  }
});

function checkButtons() {
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
  pageNumber.textContent = currentPage;
}

checkButtons();
