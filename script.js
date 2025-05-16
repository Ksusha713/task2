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
    duration: 600,
    delay: (el, i) => 150 * i
})
.add({
    targets: '.animation2 .letter',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 600,
    delay: (el, i) => 150 * i
});