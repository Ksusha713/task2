function wrapLetters(selector) {
    const el = document.querySelector(selector);
    el.innerHTML = el.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
}

wrapLetters('.animation');
wrapLetters('.animation2');

anime.timeline()
.add({
    targets: '.animation .letter',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 300,
    delay: (el, i) => 50 * i
})
.add({
    targets: '.animation2 .letter',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 300,
    delay: (el, i) => 50 * i
});


//GO UP BUTTON ANIMATION
const goUpBtn = document.getElementById('goUpBtn');

goUpBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// BLINKING DEER IN THE FOOTER
const deer = document.getElementById('deer');
function blink() {
  deer.src = 'images/deer2.png';
  setTimeout(() => {
    deer.src = 'images/deer1.png';
  }, 800);
}
setInterval(blink, 3000);


// ANIMATED TEXT GO UP
function wrapAllChars(selector) {
  const el = document.querySelector(selector);
  el.innerHTML = el.textContent.split('').map(char => {
    if(char === ' ') {
      return `<span class="letter space">&nbsp;</span>`;
    } else {
      return `<span class="letter">${char}</span>`;
    }
  }).join('');
}
function animateLetters(selector) {
  const letters = document.querySelectorAll(selector + ' .letter');
  let delayIndex = 0;
  letters.forEach(letter => {
    if (!letter.classList.contains('space')) {
      letter.style.opacity = 0;
      letter.style.display = 'inline-block';
      letter.style.transform = 'translateY(20px)';
      letter.style.animation = `moveUpFadeIn 0.5s forwards`;
      letter.style.animationDelay = `${delayIndex * 0.05}s`;
      delayIndex++;
    } else {
      letter.style.opacity = 1;
      letter.style.display = 'inline-block';
      letter.style.transform = 'none';
      letter.style.animation = 'none';
    }
  });
}
function observeAndAnimate(selector) {
  const target = document.querySelector(selector);
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateLetters(selector);
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 
  });

  if (target) observer.observe(target);
}

wrapAllChars('.animate-up')
wrapAllChars('.animate-up2')
wrapAllChars('.animate-up3')
wrapAllChars('.animate-up4')
observeAndAnimate('.animate-up');
observeAndAnimate('.animate-up2');
observeAndAnimate('.animate-up3');
observeAndAnimate('.animate-up4');