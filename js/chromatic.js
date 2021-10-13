//WINDOW SIZE
let reSize = () => document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
reSize();
window.addEventListener("resize", reSize);

//ACTIVE NAVIGATION
let active = 0;

for (let i = 0; i < document.links.length; i++) {
    if(document.links[i].href === document.URL) {
        active = i;
    }
}

let chromaticLogo = document.querySelector('.chromaticLogo');
document.links[active].className = chromaticLogo.classList.add('logoFill');


//SOUND FUNCTION
function sound(value) {
    const audioContext = new AudioContext();
    const osc = audioContext.createOscillator();
    const volume = audioContext.createGain();

    //OSCILLATOR
    osc.frequency.value = value;
    osc.type = 'triangle';
    osc.start();
    osc.stop(audioContext.currentTime + 1);

    //GAIN
    volume.gain.value = 0.5;
    volume.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.9);

    //DESTINATION
    osc.connect(volume);
    volume.connect(audioContext.destination);
}

//COLOUR CIRCLES
const aTwoColour = document.querySelector('.aTwoColour');
const aSharpColour = document.querySelector('.aSharpColour');
const bColour = document.querySelector('.bColour');
const cColour = document.querySelector('.cColour');
const cSharpColour = document.querySelector('.cSharpColour');
const dColour = document.querySelector('.dColour');
const dSharpColour = document.querySelector('.dSharpColour');
const eColour = document.querySelector('.eColour');
const fColour = document.querySelector('.fColour');
const fSharpColour = document.querySelector('.fSharpColour');
const gColour = document.querySelector('.gColour');
const gSharpColour = document.querySelector('.gSharpColour');
const aOneColour = document.querySelector('.aOneColour');

//TEXT
const aTwoText = document.querySelector('.aTwoText');
const aSharpText = document.querySelector('.aSharpText');
const bText = document.querySelector('.bText');
const cText = document.querySelector('.cText');
const cSharpText = document.querySelector('.cSharpText');
const dText = document.querySelector('.dText');
const dSharpText = document.querySelector('.dSharpText');
const eText = document.querySelector('.eText');
const fText = document.querySelector('.fText');
const fSharpText = document.querySelector('.fSharpText');
const gText = document.querySelector('.gText');
const gSharpText = document.querySelector('.gSharpText');
const aOneText = document.querySelector('.aOneText');

//NOTE BUTTONS
let tl = gsap.timeline();

tl.fromTo('.aOneFlash', .8, {fill:'salmon', opacity:'5%'}, {opacity: '100%', yoyoEase: 'true', ease: Power2.easeInOut, repeat: '-1'});

aOneColour.addEventListener('click', (value) => {

    sound(220);

    tl.clear();
    tl.set('.aOneFlash', {opacity: '100%'});
    tl.set('.aOneFlash', {fill: '#DBD189'});
    tl.fromTo('.aOneGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.8, opacity: '0%', transformOrigin: 'center'});

    gSharpColour.classList.add('unmute');
    gSharpText.classList.add('unmute');
});

gSharpColour.addEventListener('click', (value) => {

    sound(233.08);

    tl.fromTo('.gSharpGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.8, opacity: '0%', transformOrigin: 'center'});

    gColour.classList.add('unmute');
    gText.classList.add('unmute');
});

gColour.addEventListener('click', (value) => {

    sound(246.94);

    tl.fromTo('.gGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.8, opacity: '0%', transformOrigin: 'center'});

    fSharpColour.classList.add('unmute');
    fSharpText.classList.add('unmute');
});

fSharpColour.addEventListener('click', (value) => {

    sound(261.63);

    tl.fromTo('.fSharpGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.8, opacity: '0%', transformOrigin: 'center'});

    fColour.classList.add('unmute');
    fText.classList.add('unmute');
});

fColour.addEventListener('click', (value) => {

    sound(277.18);

    tl.fromTo('.fGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.8, opacity: '0%', transformOrigin: 'center'});

    eColour.classList.add('unmute');
    eText.classList.add('unmute');
});


eColour.addEventListener('click', (value) => {

    sound(293.66);

    tl.fromTo('.eGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.8, opacity: '0%', transformOrigin: 'center'});

    dSharpColour.classList.add('unmute');
    dSharpText.classList.add('unmute');
});


dSharpColour.addEventListener('click', (value) => {

    sound(311.13);

    tl.fromTo('.dSharpGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.8, opacity: '0%', transformOrigin: 'center'});

    dColour.classList.add('unmute');
    dText.classList.add('unmute');
});

dColour.addEventListener('click', (value) => {

    sound(329.63);

    tl.fromTo('.dGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.8, opacity: '0%', transformOrigin: 'center'});

    cSharpColour.classList.add('unmute');
    cSharpText.classList.add('unmute');
});

cSharpColour.addEventListener('click', (value) => {

    sound(349.23);

    tl.fromTo('.cSharpGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.8, opacity: '0%', transformOrigin: 'center'});

    cColour.classList.add('unmute');
    cText.classList.add('unmute');
});


cColour.addEventListener('click', (value) => {

    sound(369.99);

    tl.fromTo('.cGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.8, opacity: '0%', transformOrigin: 'center'});

    bColour.classList.add('unmute');
    bText.classList.add('unmute');
});


bColour.addEventListener('click', (value) => {

    sound(392.0);

    tl.fromTo('.bGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.8, opacity: '0%', transformOrigin: 'center'});

    aSharpColour.classList.add('unmute');
    aSharpText.classList.add('unmute');
});

aSharpColour.addEventListener('click', (value) => {

    sound(415.3);

    tl.fromTo('.aSharpGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.8, opacity: '0%', transformOrigin: 'center'});

    aTwoColour.classList.add('unmute');
    aTwoText.classList.add('unmute');
});


aTwoColour.addEventListener('click', (value) => {

    sound(440);
    tl.fromTo('.aTwoGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.8, opacity: '0%', transformOrigin: 'center'});
    
});

