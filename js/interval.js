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

let intervalLogo = document.querySelector('.intervalLogo');
document.links[active].className = intervalLogo.classList.add('logoFill');

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

//NOTES PLAY
const aTwo = document.querySelector('.aTwo');
const aSharp = document.querySelector('.aSharp');
const b = document.querySelector('.b');
const aOne = document.querySelector('.aOne');

//NOTE SOUNDS
aTwo.addEventListener('click', value => sound(440));
aSharp.addEventListener('click', value => sound(415.3));
b.addEventListener('click', value => sound(392.0));
aOne.addEventListener('click', value => sound(220));

//GREY NOTES
let grey = document.querySelectorAll('.grey');
let aTwoGrey = document.querySelector('.aTwoColourGrey');
let aSharpGrey = document.querySelectorAll('.aSharpColourGrey');
let bGrey = document.querySelector('.bColourGrey');
let aOneGrey = document.querySelector('.aOneColourGrey');

let octLine = document.querySelector('.octLine');
let halfLine = document.querySelector('.halfLine');
let wholeLine = document.querySelector('.wholeLine');

//BUTTONS
let halfStepButton = document.querySelector('.halfStepButton');
let wholeStepButton = document.querySelector('.wholeStepButton');
let octaveButton = document.querySelector('.octaveButton');

//DISAPPEAR
// aTwoGrey.classList.add('disappear');
// aSharpGrey.forEach(aSharp => aSharp.classList.add('disappear'));
bGrey.classList.add('disappear');
aOneGrey.classList.add('disappear');
halfLine.classList.add('appear');

//ARROW COLOUR
let halfColour = document.querySelector('.halfColour')
let wholeColour = document.querySelector('.wholeColour');
let octColour = document.querySelector('.octColour');

halfColour.classList.add('color');

//BUTTONS 4 APPEAR
halfStepButton.addEventListener('click', () => {

    aTwoGrey.classList.remove('disappear');

    grey.forEach(g => g.classList.add('disappear'));
    aSharpGrey.forEach(aSharp => aSharp.classList.remove('disappear'));
    bGrey.classList.add('disappear');
    aOneGrey.classList.add('disappear');

    halfLine.classList.add('appear');
    wholeLine.classList.remove('appear');
    octLine.classList.remove('appear');

    halfColour.classList.add('color');
    wholeColour.classList.remove('color');
    octColour.classList.remove('color');

});

wholeStepButton.addEventListener('click', () => {

    grey.forEach(g => g.classList.add('disappear'));
    aSharpGrey.forEach(aSharp => aSharp.classList.add('disappear'));
    bGrey.classList.remove('disappear');
    aOneGrey.classList.add('disappear');

    halfLine.classList.remove('appear');
    wholeLine.classList.add('appear');
    octLine.classList.remove('appear');

    halfColour.classList.remove('color');
    wholeColour.classList.add('color');
    octColour.classList.remove('color');

});

octaveButton.addEventListener('click', () => {

    grey.forEach(g => g.classList.add('disappear'));
    aSharpGrey.forEach(aSharp => aSharp.classList.add('disappear'));
    bGrey.classList.add('disappear');
    aOneGrey.classList.remove('disappear');

    halfLine.classList.remove('appear');
    wholeLine.classList.remove('appear');
    octLine.classList.add('appear');

    halfColour.classList.remove('color');
    wholeColour.classList.remove('color');
    octColour.classList.add('color');

});

//COLOUR CIRCLES
const aTwoColour = document.querySelector('.aTwoColour');
const aSharpColour = document.querySelector('.aSharpColour');
const bColour = document.querySelector('.bColour');
const aOneColour = document.querySelector('.aOneColour');


//NOTE BUTTONS
let tl = gsap.timeline();

aTwoColour.addEventListener('click', (value) => {

    sound(440);

    tl.fromTo('.aTwoGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.8, opacity: '0%', transformOrigin: 'center'});

});

aSharpColour.addEventListener('click', (value) => {

    sound(415.3);

    tl.fromTo('.aSharpGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.8, opacity: '0%', transformOrigin: 'center'});

});

bColour.addEventListener('click', (value) => {

    sound(392.0);

    tl.fromTo('.bGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.8, opacity: '0%', transformOrigin: 'center'});

});

aOneColour.addEventListener('click', (value) => {
    sound(220);
    tl.fromTo('.aOneGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.8, opacity: '0%', transformOrigin: 'center'});
});





