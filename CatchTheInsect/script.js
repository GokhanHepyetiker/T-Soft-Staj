const screens = document.querySelectorAll('.screen');
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn');
const start_btn = document.getElementById('start-btn');
const difficulty_btns = document.querySelectorAll('.difficulty-btn');
const game_container = document.getElementById('game-container');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const message = document.getElementById('message');

let seconds = 0;
let score = 0;
let selected_insect = {};
let difficulty = 'easy';
let insectCreationInterval;


start_btn.addEventListener('click', () => screens[0].classList.add('up'));


difficulty_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        difficulty = btn.getAttribute('data-difficulty');
        screens[1].classList.add('up');
    });
});


choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img');
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        selected_insect = { src, alt };
        screens[1].classList.add('up');
        setTimeout(() => {
            screens[2].classList.add('up');
            setTimeout(() => {
                createInsect();
                startGame();
            }, 1000);
        }, 500);
    });
});


function startGame() {
    setInterval(increaseTime, 1000);
    adjustDifficulty();
}


function increaseTime() {
    let m = Math.floor(seconds / 60);
    let s = seconds % 60;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;
    timeEl.innerHTML = `Time: ${m}:${s}`;
    seconds++;
}


function createInsect() {
    const insect = document.createElement('div');
    insect.classList.add('insect');
    const { x, y } = getRandomLocation();
    insect.style.top = `${y}px`;
    insect.style.left = `${x}px`;
    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`;
    insect.addEventListener('click', catchInsect);
    game_container.appendChild(insect);
}


function getRandomLocation() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.random() * (width - 200) + 100;
    const y = Math.random() * (height - 200) + 100;
    return { x, y };
}


function catchInsect() {
    increaseScore();
    this.classList.add('caught');
    setTimeout(() => this.remove(), 2000);
}


function increaseScore() {
    score++;
    if (score >= 10 && difficulty === 'hard') {
        message.classList.add('visible');
    }
    scoreEl.innerHTML = `Score: ${score}`;
}


function adjustDifficulty() {
    let insectCreationTime;

    switch (difficulty) {
        case 'easy':
            insectCreationTime = 2000; 
            break;
        case 'medium':
            insectCreationTime = 1000; 
            break;
        case 'hard':
            insectCreationTime = 500; 
            break;
        default:
            insectCreationTime = 2000;
    }

    
    if (insectCreationInterval) {
        clearInterval(insectCreationInterval);
    }

    
    insectCreationInterval = setInterval(() => {
        createInsect();
    }, insectCreationTime);
}
