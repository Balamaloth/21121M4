const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const endingText = document.querySelector('.ending');
const heartContainer = document.querySelector('.heart-bg');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

noBtn.addEventListener('mouseover', () => {
  const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width));
  const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height));
  noBtn.style.left = i + 'px';
  noBtn.style.top = j + 'px';

  noBtn.classList.add("shake");
  setTimeout(() => noBtn.classList.remove("shake"), 320);
});

function createHeart() {
  let heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  heartContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yaaay! I Love You Too ❤️";
  endingText.style.opacity = 1;

  for (let i = 0; i < 40; i++) createHeart();
  
  setInterval(createHeart, 500);
});


// Play romantic music on yes button click
const loveSong = document.getElementById('loveSong');   
yesBtn.addEventListener('click', () => {
    loveSong.play();
});


/* Cute floating hearts effect */
const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
let hearts = [];
function createHearts() {
    for (let i = 0; i < 50; i++) {
        hearts.push({
            x: Math.random() * canvas.width,
            y: canvas.height + Math.random() * 100,
            size: Math.random() * 15 + 10,
            speed: Math.random() * 2 + 1
        });
    }   
}
function drawHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach((heart, index) => {
        ctx.fillStyle = "#ff007f";
        ctx.beginPath();
        ctx.arc(heart.x, heart.y, heart.size, 0, Math.PI * 2);
        ctx.fill();
        heart.y -= heart.speed; 
        if (heart.y < -20) hearts.splice(index, 1);
    });
    requestAnimationFrame(drawHearts);
}   
drawHearts();   
createHearts();



// Create a full-screen blast
function fullscreenBlast() {
  const blast = document.createElement('div');
  blast.className = 'fullscreen-blast';
  document.body.appendChild(blast);

  // remove after a few seconds
  setTimeout(() => blast.remove(), 1200);
}

// inside noBtn click:
noBtn.addEventListener('click', (ev) => {
  const x = ev.clientX;
  const y = ev.clientY;

  // full-screen blast first
  fullscreenBlast();

  // play sounds
  playAudioSafe(explosionSound, 0.95);
  setTimeout(()=> playAudioSafe(glassSound, 0.7), 140);

  // screen shake
  document.documentElement.classList.add('shake');
  setTimeout(()=> document.documentElement.classList.remove('shake'), 900);

  // shards
  spawnShards(window.innerWidth/2, window.innerHeight/2, 36);

  // red abstract bursts
  createRedBurst(window.innerWidth/2, window.innerHeight/2, 8);

  // show cracked overlay
  setTimeout(()=> crackOverlay.classList.add('active'), 420);
  setTimeout(()=> crackOverlay.classList.remove('active'), 4200);

  // ending text
  ending.textContent = "Whoa — cinematic blast! (Simulation)";
});

// NO button dodge on hover
noBtn.addEventListener('mouseenter', ()=> {
  const wrapRect = wrapper.getBoundingClientRect(); 
    const nRect = noBtn.getBoundingClientRect();
    const maxX = Math.max(20, wrapRect.width - nRect.width - 40);
    const maxY = Math.max(20, wrapRect.height - nRect.height - 40);
    const x = 20 + Math.floor(Math.random()*maxX);
    const y = 40 + Math.floor(Math.random()*maxY);
    // set transform relative to wrapper to keep it visually inside the card
    noBtn.style.transition = 'transform 0.38s cubic-bezier(.2,.9,.2,1)';
    const dx = x - (nRect.left - wrapRect.left);
    const dy = y - (nRect.top - wrapRect.top);
    noBtn.style.transform = `translate(${dx}px, ${dy}px)`;

    // revert after short time
    setTimeout(()=> { noBtn.style.transform = ''; }, 700);
});

// SAFE: cleanup on resize
window.addEventListener('resize', ()=> {
  // nothing special required; elements are positioned in viewport coords
});
noBtn.addEventListener('mouseenter', ()=> {
    const wrapRect = wrapper.getBoundingClientRect();
    const nRect = noBtn.getBoundingClientRect();
    const maxX = Math.max(20, wrapRect.width - nRect.width - 40);
    const maxY = Math.max(20, wrapRect.height - nRect.height - 40);
    const x = 20 + Math.floor(Math.random()*maxX);
    const y = 40 + Math.floor(Math.random()*maxY);
    // set transform relative to wrapper to keep it visually inside the card
    noBtn.style.transition = 'transform 0.38s cubic-bezier(.2,.9,.2,1)';
    const dx = x - (nRect.left - wrapRect.left);
    const dy = y - (nRect.top - wrapRect.top);
    noBtn.style.transform = `translate(${dx}px, ${dy}px)`;
    // revert after short time
    setTimeout(()=> { noBtn.style.transform = ''; }, 700);
});

// SAFE: cleanup on resize
window.addEventListener('resize', ()=> {
  // nothing special required; elements are positioned in viewport coords
});
// End of scrip.js
noBtn.addEventListener('mouseenter', ()=> {
    const wrapRect = wrapper.getBoundingClientRect();
    const nRect = noBtn.getBoundingClientRect();
    const maxX = Math.max(20, wrapRect.width - nRect.width - 40);
    const maxY = Math.max(20, wrapRect.height - nRect.height - 40);
    const x = 20 + Math.floor(Math.random()*maxX);
    const y = 40 + Math.floor(Math.random()*maxY);
    // set transform relative to wrapper to keep it visually inside the card
    noBtn.style.transition = 'transform 0.38s cubic-bezier(.2,.9,.2,1)';
    const dx = x - (nRect.left - wrapRect.left);
    const dy = y - (nRect.top - wrapRect.top);
    noBtn.style.transform = `translate(${dx}px, ${dy}px)`;
    // revert after short time
    setTimeout(()=> { noBtn.style.transform = ''; }, 700);
});

// SAFE: cleanup on resize
window.addEventListener('resize', ()=> {
    // nothing special required; elements are positioned in viewport coords
});