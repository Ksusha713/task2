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
