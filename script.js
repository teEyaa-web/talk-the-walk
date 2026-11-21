
// ==========================================
// TALK THE WALK — JUST YOU & ME EDITION
// ==========================================


// ==========================================
// MENGAMBIL ELEMEN HALAMAN
// ==========================================

const homePage = document.getElementById("homePage");
const setupPage = document.getElementById("setupPage");
const categoryPage = document.getElementById("categoryPage");
const gamePage = document.getElementById("gamePage");
const questionPage = document.getElementById("questionPage");
const endPage = document.getElementById("endPage");


// ==========================================
// TOMBOL DAN INPUT
// ==========================================

const startButton = document.getElementById("startButton");
const playButton = document.getElementById("playButton");
const rollButton = document.getElementById("rollButton");
const nextQuestionButton = document.getElementById("nextQuestionButton");
const backButton = document.getElementById("backButton");
const playAgainButton = document.getElementById("playAgainButton");


// ==========================================
// DATA PEMAIN
// ==========================================

let player1 = "";
let player2 = "";

let currentPlayer = 1;
let currentCategory = "";

let playerPositions = {
    1: 0,
    2: 0
};

let playerTurns = {
    1: 0,
    2: 0
};

const maxTurns = 5;


// ==========================================
// GAMBAR PION
// ==========================================

const pawnImages = {
    1: "assets/pawns/pawn-girl.png",
    2: "assets/pawns/pawn-boy.png"
};


// ==========================================
// DATA PERTANYAAN
// ==========================================

const questions = {

    about: [
        "Apa kesan pertama kamu waktu pertama kali kenal aku?",
        "Hal kecil apa dari aku yang paling kamu ingat?",
        "Kapan kamu merasa paling nyaman saat bersamaku?",
        "Apa kebiasaan aku yang menurut kamu unik?",
        "Menurut kamu, apa hal yang bikin kita cocok?",
        "Apa hal baru yang kamu pelajari sejak kenal aku?",
        "Momen apa yang bikin kamu merasa kita semakin dekat?",
        "Kalau harus menggambarkan hubungan kita dengan tiga kata, apa saja?"
    ],

    memories: [
        "Apa kenangan kita yang paling ingin kamu ulang?",
        "Momen apa yang selalu bikin kamu tersenyum kalau diingat?",
        "Apa pengalaman masa kecil yang paling kamu ingat?",
        "Apa kenangan sekolah yang paling berkesan buat kamu?",
        "Pernah nggak ada kejadian sederhana yang ternyata sulit dilupakan?",
        "Apa hal paling spontan yang pernah kamu lakukan?",
        "Kalau bisa mengulang satu hari dalam hidupmu, hari apa yang kamu pilih?",
        "Apa kenangan yang ingin kamu ceritakan lagi suatu saat nanti?"
    ],

    thoughts: [
        "Apa hal yang paling sering kamu pikirkan akhir-akhir ini?",
        "Menurut kamu, apa arti bahagia?",
        "Apa hal yang ingin kamu pahami lebih baik tentang dirimu?",
        "Apa ketakutan yang ingin kamu pelajari cara menghadapinya?",
        "Menurut kamu, apa yang membuat seseorang merasa dihargai?",
        "Apa hal yang sulit kamu ungkapkan kepada orang lain?",
        "Kapan terakhir kali kamu merasa benar-benar bangga pada dirimu?",
        "Apa satu hal yang ingin kamu ubah dari cara kamu menjalani hari?"
    ],

    love: [
        "Kapan terakhir kali kamu merasa sendirian padahal sedang sama aku?",
        "Apa yang biasanya kamu pendam karena takut sama reaksiku kalau kamu jujur?",
        "Dalam kondisi seperti apa kamu paling membutuhkan aku, tapi justru merasa aku nggak ada buat kamu?",
        "Ada nggak bagian dari dirimu yang merasa harus berubah supaya bisa diterima sama aku?",
        "Apa bentuk perhatian kecil dariku yang sebenarnya paling berarti buat kamu?",
        "Kalau kamu bisa mengubah satu hal dari cara kita memperlakukan satu sama lain, apa yang ingin kamu ubah?",
        "Pernah nggak kamu merasa kurang dimengerti sama aku? Kalau pernah, hal apa yang sebenarnya ingin kamu pahami?",
        "Apa yang bisa kita lakukan supaya masing-masing tetap merasa aman, dihargai, dan bebas jadi diri sendiri dalam hubungan ini?"
    ],

    friendship: [
        "Menurut kamu, apa arti teman yang baik?",
        "Apa hal paling seru yang pernah kamu lakukan bersama teman?",
        "Apa sifat yang paling kamu hargai dari seorang teman?",
        "Lebih suka punya banyak teman atau beberapa teman dekat?",
        "Apa pengalaman lucu yang pernah terjadi bersama temanmu?",
        "Menurut kamu, apa yang membuat pertemanan bisa bertahan lama?",
        "Apa hal yang selalu bisa bikin kamu tertawa bersama teman?",
        "Kalau temanmu sedang punya masalah, biasanya kamu akan bagaimana?"
    ],

    future: [
        "Apa satu impian yang ingin kamu capai dalam beberapa tahun ke depan?",
        "Kalau bisa pergi ke mana saja bersama, kamu ingin ke mana?",
        "Hal baru apa yang ingin kita coba bersama?",
        "Kamu membayangkan dirimu seperti apa lima tahun lagi?",
        "Apa tempat yang paling ingin kamu kunjungi suatu hari nanti?",
        "Apa kemampuan baru yang ingin kamu pelajari?",
        "Kalau punya satu hari bebas tanpa tugas, kamu ingin melakukan apa?",
        "Apa satu hal yang ingin kamu wujudkan bersama orang tersayang?"
    ],

    random: [
        "Kalau bisa punya satu kekuatan super, kamu pilih apa?",
        "Kalau hidupmu jadi film, apa judulnya?",
        "Kalau bisa makan satu makanan setiap hari, apa pilihanmu?",
        "Kalau bisa bertukar kehidupan dengan siapa pun selama sehari, siapa pilihanmu?",
        "Apa kombinasi makanan aneh yang ternyata kamu suka?",
        "Kalau punya mesin waktu, kamu mau pergi ke masa lalu atau masa depan?",
        "Kalau bisa memelihara hewan apa pun, kamu mau punya apa?",
        "Kalau tiba-tiba dapat liburan gratis, kamu mau ke mana?"
    ],

    dare: [
        "Tatap mata pasanganmu selama 10 detik tanpa tertawa.",
        "Sebutkan tiga hal yang kamu suka dari pasanganmu.",
        "Tirukan gaya pasanganmu saat sedang ngambek.",
        "Nyanyikan sedikit lagu yang mengingatkan kamu sama pasanganmu.",
        "Buat satu kalimat gombal spontan untuk pasanganmu.",
        "Ceritakan satu momen bersama pasanganmu yang bikin kamu senyum-senyum sendiri.",
        "Berikan satu pujian tulus yang belum pernah kamu sampaikan sebelumnya.",
        "Buat pose foto paling lucu bersama pasanganmu."
    ]

};


// ==========================================
// NAMA KATEGORI
// ==========================================

const categoryNames = {
    about: "About Us",
    memories: "Past Memories",
    thoughts: "Deep Thoughts",
    love: "Love & Relationship",
    friendship: "Friendship",
    future: "Dreams & Future",
    random: "Random",
    dare: "Dare"
};


// ==========================================
// DATA PETAK PAPAN
// ==========================================

const tileCategories = [
    null,
    "about",
    "random",
    "thoughts",
    "love",
    "memories",
    "love",
    "thoughts",
    "love",
    "friendship",
    "memories",
    "future",
    "about",
    "dare",
    "friendship",
    "future"
];

const tileLabels = [
    "START ♡",
    "About Us",
    "Random",
    "Deep Thoughts",
    "Love & Relationship",
    "Past Memories",
    "Love & Relationship",
    "Deep Thoughts",
    "Love & Relationship",
    "Friendship",
    "Past Memories",
    "Dreams & Future",
    "About Us",
    "Dare",
    "Friendship",
    "Dreams & Future"
];


// ==========================================
// STYLE TAMBAHAN
// ==========================================

function addExtraStyles() {

    if (document.getElementById("extraGameStyles")) return;

    const style = document.createElement("style");
    style.id = "extraGameStyles";

    style.textContent = `

        .player-turn-glow {
            outline: 3px solid #8db5e8 !important;
            box-shadow:
                0 0 8px #8db5e8,
                0 0 18px rgba(141, 181, 232, 0.65) !important;
            transform: scale(1.04);
            transition: all 0.25s ease;
            border-radius: 14px;
        }

        .player-progress {
            display: block;
            font-size: 11px;
            margin-top: 4px;
            color: #718fc4;
            font-weight: 700;
        }

        .floating-heart {
            position: fixed;
            z-index: 9999;
            pointer-events: none;
            font-size: 22px;
            animation: floatingHeart 1.15s ease-out forwards;
        }

        @keyframes floatingHeart {
            0% {
                opacity: 0;
                transform: translateY(0) scale(0.5) rotate(-15deg);
            }
            20% {
                opacity: 1;
                transform: translateY(-10px) scale(1.2) rotate(10deg);
            }
            100% {
                opacity: 0;
                transform: translateY(-85px) scale(0.8) rotate(25deg);
            }
        }

        .game-confetti {
            position: fixed;
            top: -15px;
            z-index: 10000;
            width: 9px;
            height: 13px;
            pointer-events: none;
            animation: confettiFall 3.2s ease-in forwards;
        }

        @keyframes confettiFall {
            0% {
                transform: translateY(-10px) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(110vh) rotate(720deg);
                opacity: 0;
            }
        }

        /* DARE SURPRISE */

        .dare-overlay {
            position: fixed;
            inset: 0;
            z-index: 20000;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(18, 29, 55, 0.48);
            backdrop-filter: blur(5px);
            animation: dareOverlayIn 0.3s ease forwards;
        }

        .dare-card {
            position: relative;
            padding: 35px 45px;
            max-width: 85%;
            text-align: center;
            background: linear-gradient(145deg, #eef5ff, #fceaf3);
            border: 3px solid white;
            border-radius: 25px;
            box-shadow: 0 12px 35px rgba(35, 55, 95, 0.25);
            animation: dareCardPop 0.65s cubic-bezier(.2, 1.5, .5, 1) forwards;
        }

        .dare-card h2 {
            margin: 0;
            color: #657cb4;
            font-size: clamp(25px, 5vw, 42px);
            font-weight: 900;
            letter-spacing: 2px;
        }

        .dare-card p {
            margin: 12px 0 0;
            color: #b87596;
            font-size: 15px;
            font-weight: 700;
        }

        .dare-sparkle {
            position: absolute;
            font-size: 25px;
            pointer-events: none;
            animation: dareSparkle 1.1s ease-out forwards;
        }

        .dare-sparkle:nth-child(1) {
            top: -22px;
            left: -18px;
        }

        .dare-sparkle:nth-child(2) {
            top: -25px;
            right: -15px;
            animation-delay: 0.1s;
        }

        .dare-sparkle:nth-child(3) {
            bottom: -20px;
            left: 10px;
            animation-delay: 0.2s;
        }

        .dare-sparkle:nth-child(4) {
            bottom: -20px;
            right: 10px;
            animation-delay: 0.15s;
        }

        @keyframes dareOverlayIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes dareCardPop {
            0% {
                opacity: 0;
                transform: scale(0.4) rotate(-8deg);
            }
            65% {
                opacity: 1;
                transform: scale(1.12) rotate(3deg);
            }
            100% {
                opacity: 1;
                transform: scale(1) rotate(0);
            }
        }

        @keyframes dareSparkle {
            0% {
                opacity: 0;
                transform: scale(0.2) rotate(0);
            }
            40% {
                opacity: 1;
                transform: scale(1.4) rotate(90deg);
            }
            100% {
                opacity: 0;
                transform: scale(0.5) rotate(180deg);
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .floating-heart,
            .game-confetti,
            .dare-overlay,
            .dare-card,
            .dare-sparkle {
                animation-duration: 0.01ms !important;
            }
        }

        @media (max-width: 480px) {
            .dare-card {
                padding: 28px 25px;
            }
        }

    `;

    document.head.appendChild(style);

}

addExtraStyles();


// ==========================================
// ANIMASI DARE SURPRISE
// ==========================================

async function showDareSurprise() {

    const overlay = document.createElement("div");
    overlay.className = "dare-overlay";

    const card = document.createElement("div");
    card.className = "dare-card";

    const title = document.createElement("h2");
    title.textContent = "YOU GOT A DARE!";

    const subtitle = document.createElement("p");
    subtitle.textContent = "ready for a little challenge? ♡";

    const sparkles = ["✨", "⭐", "💫", "✨"];

    sparkles.forEach(symbol => {

        const sparkle = document.createElement("span");
        sparkle.className = "dare-sparkle";
        sparkle.textContent = symbol;

        card.appendChild(sparkle);

    });

    card.appendChild(title);
    card.appendChild(subtitle);
    overlay.appendChild(card);

    document.body.appendChild(overlay);

    playSound(784, 0.18, 0.07, "sine");

    await wait(1500);

    overlay.style.transition = "opacity 0.3s ease";
    overlay.style.opacity = "0";

    await wait(300);

    overlay.remove();

}


// ==========================================
// DATA DADU
// ==========================================

const diceDotPositions = {
    1: [4],
    2: [0, 8],
    3: [0, 4, 8],
    4: [0, 2, 6, 8],
    5: [0, 2, 4, 6, 8],
    6: [0, 2, 3, 5, 6, 8]
};


function renderDiceFace(number) {

    const diceDisplay = document.getElementById("diceDisplay");
    const activeDots = diceDotPositions[number];

    if (!diceDisplay || !activeDots) return;

    let dotsHTML = "";

    for (let i = 0; i < 9; i++) {

        const activeClass = activeDots.includes(i) ? "active" : "";

        dotsHTML += `
            <span class="dice-dot ${activeClass}"></span>
        `;
    }

    diceDisplay.innerHTML = dotsHTML;

}


// ==========================================
// SOUND EFFECTS
// ==========================================

let audioContext = null;
let pawnSoundStep = 0;


function playSound(frequency, duration, volume = 0.08, type = "sine") {

    try {

        if (!audioContext) {

            const AudioContextClass =
                window.AudioContext || window.webkitAudioContext;

            if (!AudioContextClass) return;

            audioContext = new AudioContextClass();

        }

        if (audioContext.state === "suspended") {
            audioContext.resume();
        }

        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();

        oscillator.type = type;

        oscillator.frequency.setValueAtTime(
            frequency,
            audioContext.currentTime
        );

        gain.gain.setValueAtTime(
            volume,
            audioContext.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
            0.001,
            audioContext.currentTime + duration
        );

        oscillator.connect(gain);
        gain.connect(audioContext.destination);

        oscillator.start();
        oscillator.stop(audioContext.currentTime + duration);

    } catch (error) {

        console.warn("Sound effect unavailable:", error);

    }

}


function playDiceSound() {
    playSound(650, 0.08, 0.045, "square");
}


function playPawnSound() {

    const notes = [880, 1175];
    const frequency = notes[pawnSoundStep % notes.length];

    playSound(frequency, 0.16, 0.065, "sine");

    pawnSoundStep++;

}


function playSkipSound() {

    playSound(600, 0.10, 0.055, "sine");

    setTimeout(() => {
        playSound(400, 0.13, 0.055, "sine");
    }, 100);

}


function playWinSound() {

    const victoryNotes = [
        { frequency: 523, delay: 0 },
        { frequency: 659, delay: 160 },
        { frequency: 784, delay: 320 },
        { frequency: 1047, delay: 500 },
        { frequency: 784, delay: 720 },
        { frequency: 1047, delay: 900 }
    ];

    victoryNotes.forEach(note => {

        setTimeout(() => {
            playSound(note.frequency, 0.35, 0.07, "sine");
        }, note.delay);

    });

}


// ==========================================
// FLOATING HEARTS
// ==========================================

function showFloatingHearts(tileNumber) {

    const tile = document.getElementById("tile" + tileNumber);

    if (!tile) return;

    const rect = tile.getBoundingClientRect();
    const hearts = ["♡", "♥", "💕", "💗", "✨"];

    for (let i = 0; i < 5; i++) {

        const heart = document.createElement("span");

        heart.className = "floating-heart";
        heart.textContent = hearts[
            Math.floor(Math.random() * hearts.length)
        ];

        heart.style.left =
            rect.left + rect.width / 2 + (Math.random() * 70 - 35) + "px";

        heart.style.top =
            rect.top + rect.height / 2 + (Math.random() * 20 - 10) + "px";

        document.body.appendChild(heart);

        heart.addEventListener("animationend", function() {
            heart.remove();
        });

    }

}


// ==========================================
// PERTANYAAN ACAK TANPA PENGULANGAN
// ==========================================

let remainingQuestions = {};


function shuffleArray(array) {

    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];

    }

    return shuffled;

}


function resetQuestions() {

    remainingQuestions = {};

    for (let category in questions) {

        remainingQuestions[category] = shuffleArray(questions[category]);

    }

}


function getRandomQuestion(category) {

    if (!questions[category]) {

        console.error("Kategori tidak ditemukan:", category);

        return "Let's share something about ourselves! ♡";

    }

    if (
        !remainingQuestions[category] ||
        remainingQuestions[category].length === 0
    ) {

        remainingQuestions[category] = shuffleArray(questions[category]);

    }

    return remainingQuestions[category].pop();

}


// ==========================================
// JEDA ANIMASI
// ==========================================

function wait(milliseconds) {

    return new Promise(resolve => setTimeout(resolve, milliseconds));

}


// ==========================================
// ANIMASI PERPINDAHAN HALAMAN
// ==========================================

async function changePage(oldPage, newPage) {

    if (!oldPage || !newPage) {

        console.error("Halaman tidak ditemukan!");

        return;

    }

    const exitAnimation = oldPage.animate(
        [
            { opacity: 1 },
            { opacity: 0 }
        ],
        {
            duration: 200,
            easing: "ease-in-out",
            fill: "forwards"
        }
    );

    await exitAnimation.finished;

    oldPage.hidden = true;
    exitAnimation.cancel();

    newPage.hidden = false;

    const enterAnimation = newPage.animate(
        [
            { opacity: 0 },
            { opacity: 1 }
        ],
        {
            duration: 350,
            easing: "ease-in-out",
            fill: "forwards"
        }
    );

    await enterAnimation.finished;

    enterAnimation.cancel();

}


// ==========================================
// MEMBUAT GAMBAR PION
// ==========================================

function createPawnImage(playerNumber, size = "board") {

    const image = document.createElement("img");

    image.src = pawnImages[playerNumber];

    image.alt = playerNumber === 1
        ? "Girl pawn"
        : "Boy pawn";

    image.className = size === "info"
        ? "pawn-info-image"
        : "pawn-board-image";

    image.draggable = false;

    image.style.objectFit = "contain";
    image.style.display = "inline-block";
    image.style.verticalAlign = "middle";

    if (size === "info") {

        image.style.width = "28px";
        image.style.height = "34px";

    } else {

        image.style.width = "38px";
        image.style.height = "48px";

    }

    image.onerror = function() {

        console.error("Gambar pion tidak ditemukan:", image.src);

        image.style.display = "none";

    };

    return image;

}


// ==========================================
// PROGRESS COUNTER DAN INFO PEMAIN
// ==========================================

function renderPlayerInfo(elementId, playerNumber, playerName) {

    const infoElement = document.getElementById(elementId);

    if (!infoElement) return;

    const pawnImage = createPawnImage(playerNumber, "info");

    const playerText = document.createTextNode(
        " " + playerName + ": " + playerPositions[playerNumber]
    );

    const progress = document.createElement("span");

    progress.className = "player-progress";

    progress.textContent =
        playerTurns[playerNumber] + "/" + maxTurns + " questions";

    infoElement.replaceChildren(
        pawnImage,
        playerText,
        progress
    );

    infoElement.classList.toggle(
        "player-turn-glow",
        currentPlayer === playerNumber
    );

}


// ==========================================
// MENAMPILKAN POSISI PION
// ==========================================

function renderBoard() {

    for (let i = 0; i < 16; i++) {

        const tile = document.getElementById("tile" + i);

        if (!tile) {

            console.error("Petak tile" + i + " tidak ditemukan!");

            continue;

        }

        const label = document.createElement("span");
        label.textContent = tileLabels[i];

        const pawnContainer = document.createElement("span");

        pawnContainer.style.display = "flex";
        pawnContainer.style.justifyContent = "center";
        pawnContainer.style.alignItems = "center";
        pawnContainer.style.gap = "4px";
        pawnContainer.style.marginTop = "5px";
        pawnContainer.style.minHeight = "48px";

        if (playerPositions[1] === i) {
            pawnContainer.appendChild(createPawnImage(1));
        }

        if (playerPositions[2] === i) {
            pawnContainer.appendChild(createPawnImage(2));
        }

        tile.replaceChildren(label, pawnContainer);

    }

    renderPlayerInfo("player1Info", 1, player1);
    renderPlayerInfo("player2Info", 2, player2);

}


// ==========================================
// ANIMASI PION SAMPAI DI PETAK
// ==========================================

async function animateLandingTile(tileNumber) {

    const landedTile = document.getElementById("tile" + tileNumber);

    if (!landedTile) return;

    const landingAnimation = landedTile.animate(
        [
            { transform: "scale(1)" },
            { transform: "scale(1.12)" },
            { transform: "scale(0.96)" },
            { transform: "scale(1)" }
        ],
        {
            duration: 550,
            easing: "ease-out"
        }
    );

    showFloatingHearts(tileNumber);

    await landingAnimation.finished;

}


// ==========================================
// CONFETTI ENDING
// ==========================================

function showConfetti() {

    const confettiColors = [
        "#8db5e8",
        "#e99cbd",
        "#dce3ff",
        "#fff0dc",
        "#b9dde5",
        "#c5e2cc"
    ];

    for (let i = 0; i < 90; i++) {

        const confetti = document.createElement("span");

        confetti.className = "game-confetti";

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.backgroundColor =
            confettiColors[
                Math.floor(Math.random() * confettiColors.length)
            ];

        confetti.style.animationDelay = Math.random() * 1.5 + "s";

        confetti.style.animationDuration =
            (2.5 + Math.random() * 2) + "s";

        confetti.style.borderRadius =
            Math.random() > 0.5 ? "50%" : "2px";

        document.body.appendChild(confetti);

        confetti.addEventListener("animationend", function() {
            confetti.remove();
        });

    }

}


// ==========================================
// TYPING EFFECT PESAN AKHIR
// ==========================================

async function typeMessage(element, message, speed = 35) {

    if (!element) return;

    element.textContent = "";

    for (let i = 0; i < message.length; i++) {

        element.textContent += message.charAt(i);

        await wait(speed);

    }

}


// ==========================================
// MEMULAI / MENGULANG PERMAINAN
// ==========================================

function initializeGame() {

    currentPlayer = Math.random() < 0.5 ? 1 : 2;

    currentCategory = "";

    playerPositions = {
        1: 0,
        2: 0
    };

    playerTurns = {
        1: 0,
        2: 0
    };

    pawnSoundStep = 0;

    resetQuestions();

    const firstPlayerName = currentPlayer === 1
        ? player1
        : player2;

    document.getElementById("boardTurnText").textContent =
        "It's " + firstPlayerName + "'s turn! ♡";

    document.getElementById("diceResult").textContent =
        "let's begin our journey!";

    renderDiceFace(1);
    renderBoard();

    rollButton.disabled = false;
    nextQuestionButton.disabled = false;
    backButton.disabled = false;

}


// ==========================================
// TOMBOL START
// ==========================================

startButton.addEventListener("click", async function() {

    startButton.disabled = true;

    try {

        await changePage(homePage, setupPage);

    } finally {

        startButton.disabled = false;

    }

});


// ==========================================
// TOMBOL LET'S PLAY
// ==========================================

playButton.addEventListener("click", async function() {

    player1 = document.getElementById("name1").value.trim();
    player2 = document.getElementById("name2").value.trim();

    if (player1 === "" || player2 === "") {

        alert("Please enter both player names first! ♡");

        return;

    }

    playButton.disabled = true;

    try {

        localStorage.setItem("player1", player1);
        localStorage.setItem("player2", player2);

        initializeGame();

        await changePage(setupPage, gamePage);

    } catch (error) {

        console.error("Setup error:", error);

        alert("Oops! Something went wrong while starting the game.");

    } finally {

        playButton.disabled = false;

    }

});


// ==========================================
// MENGGANTI GILIRAN PEMAIN
// ==========================================

function switchPlayer() {

    currentPlayer = currentPlayer === 1 ? 2 : 1;

    const currentName = currentPlayer === 1
        ? player1
        : player2;

    document.getElementById("boardTurnText").textContent =
        "It's " + currentName + "'s turn! ♡";

    renderPlayerInfo("player1Info", 1, player1);
    renderPlayerInfo("player2Info", 2, player2);

}


// ==========================================
// TOMBOL ROLL THE DICE
// ==========================================

rollButton.addEventListener("click", async function() {

    rollButton.disabled = true;

    const diceDisplay = document.getElementById("diceDisplay");
    const diceResult = document.getElementById("diceResult");

    try {

        diceResult.textContent = "Rolling the dice... ♡";

        diceDisplay.classList.add("dice-rolling");

        for (let i = 0; i < 12; i++) {

            const randomFace = Math.floor(Math.random() * 6) + 1;

            renderDiceFace(randomFace);

            playDiceSound();

            await wait(120);

        }

        const diceNumber = Math.floor(Math.random() * 6) + 1;

        renderDiceFace(diceNumber);

        diceDisplay.classList.remove("dice-rolling");
        diceDisplay.classList.add("dice-result-pop");

        diceResult.textContent = "You got " + diceNumber + "! ♡";

        await wait(700);

        diceDisplay.classList.remove("dice-result-pop");

        diceResult.textContent = "Moving your pawn... ♡";

        for (let step = 0; step < diceNumber; step++) {

            playerPositions[currentPlayer] =
                (playerPositions[currentPlayer] + 1) % 16;

            renderBoard();

            playPawnSound();

            await wait(400);

        }

        // MENENTUKAN PETAK

        const landedTile = playerPositions[currentPlayer];

        await animateLandingTile(landedTile);

        let category = tileCategories[landedTile];

        if (category === null) {

            const availableCategories = Object.keys(questions);

            category = availableCategories[
                Math.floor(Math.random() * availableCategories.length)
            ];

        }

        if (!questions[category]) {

            throw new Error("Kategori pertanyaan tidak ditemukan!");

        }

        // MENAMPILKAN PERTANYAAN

        currentCategory = category;

        document.getElementById("questionCategory").textContent =
            categoryNames[currentCategory];

        document.getElementById("questionText").textContent =
            getRandomQuestion(currentCategory);

        const currentName = currentPlayer === 1
            ? player1
            : player2;

        document.getElementById("turnText").textContent =
            "It's " + currentName + "'s turn! ♡";

        nextQuestionButton.textContent = "Finish Question ♡";
        backButton.textContent = "Skip Question ♡";

        // ANIMASI KHUSUS JIKA MENDAPAT DARE

        if (currentCategory === "dare") {

            await showDareSurprise();

        }

        await wait(500);

        await changePage(gamePage, questionPage);

    } catch (error) {

        console.error("Game error:", error);

        diceResult.textContent = "Oops! Something went wrong.";

        alert("Ada kesalahan pada permainan. Coba cek Console browser ya!");

        rollButton.disabled = false;

    } finally {

        diceDisplay.classList.remove("dice-rolling");

    }

});


// ==========================================
// MENAMPILKAN HALAMAN AKHIR
// ==========================================

async function showEndPage() {

    const endPlayer1Name = document.getElementById("endPlayer1Name");
    const endPlayer2Name = document.getElementById("endPlayer2Name");
    const endMessage = document.getElementById("endMessage");

    endPlayer1Name.textContent = player1;
    endPlayer2Name.textContent = player2;

    const finalMessage =
        "you made it through every question together! ♡ " +
        "thank you for sharing your little stories, memories, and thoughts. " +
        "i hope we keep making more beautiful memories together, one step at a time. " +
        "this is just one little adventure of many more to come. ♡";

    endMessage.textContent = "";

    await changePage(questionPage, endPage);

    playWinSound();
    showConfetti();

    await typeMessage(endMessage, finalMessage, 35);

}


// ==========================================
// SELESAI MENJAWAB PERTANYAAN
// ==========================================

async function finishTurn() {

    nextQuestionButton.disabled = true;
    backButton.disabled = true;

    playerTurns[currentPlayer]++;

    renderPlayerInfo("player1Info", 1, player1);
    renderPlayerInfo("player2Info", 2, player2);

    if (
        playerTurns[1] >= maxTurns &&
        playerTurns[2] >= maxTurns
    ) {

        try {

            await showEndPage();

        } finally {

            nextQuestionButton.disabled = false;
            backButton.disabled = false;

        }

        return;

    }

    try {

        await changePage(questionPage, gamePage);

        switchPlayer();

        rollButton.disabled = false;

    } finally {

        nextQuestionButton.disabled = false;
        backButton.disabled = false;

    }

}


// ==========================================
// TOMBOL FINISH QUESTION
// ==========================================

nextQuestionButton.addEventListener("click", function() {

    finishTurn();

});


// ==========================================
// TOMBOL SKIP QUESTION
// ==========================================

backButton.addEventListener("click", function() {

    playSkipSound();

    finishTurn();

});


// ==========================================
// TOMBOL PLAY AGAIN
// ==========================================

playAgainButton.addEventListener("click", async function() {

    playAgainButton.disabled = true;

    try {

        initializeGame();

        await changePage(endPage, gamePage);

    } finally {

        playAgainButton.disabled = false;

    }

});