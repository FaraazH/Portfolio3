//WINDOW
let reSize = () => document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
reSize();
window.addEventListener("resize", reSize);

//NAVIGATION
let active = 0;

for (let i = 0; i < document.links.length; i++) {
    if(document.links[i].href === document.URL) {
        active = i;
    }
}

let noteLogo = document.querySelector('.noteLogo');
document.links[active].className = noteLogo.classList.add('logoFill');

//SOUND
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


//NOTES
let flatNote = document.querySelectorAll('.flatNote');
let sharpNote = document.querySelectorAll('.sharpNote');
let naturalNote = document.querySelectorAll('.naturalNote');

//TEXT 
let flatText = document.querySelectorAll('.flatText');
let sharpText = document.querySelectorAll('.sharpText');
let naturalText = document.querySelectorAll('.naturalText');

//BUTTONS
let sharpButton = document.querySelector('.sharpButton');
let naturalButton = document.querySelector('.naturalButton');
let flatButton = document.querySelector('.flatButton');

//ARROW COLOUR
let sharpColour = document.querySelector('.sharpColour')
let naturalColour = document.querySelector('.naturalColour');
let flatColour = document.querySelector('.flatColour');

//START
flatText.forEach(flat => flat.classList.add('disappear'));
sharpColour.classList.add('color');
flatNote.forEach(flat => flat.classList.add('disappear'));

//EVENTS

sharpButton.addEventListener('click', () => {

    flatNote.forEach(flat => flat.classList.add('disappear'));
    sharpNote.forEach(sharp => sharp.classList.remove('disappear'));

    flatText.forEach(flat => flat.classList.add('disappear'));
    sharpText.forEach(sharp => sharp.classList.remove('disappear'));

    sharpColour.classList.add('color');
    naturalColour.classList.remove('color');
    flatColour.classList.remove('color');

})

naturalButton.addEventListener('click', () => {

    flatNote.forEach(flat => flat.classList.add('disappear'));
    sharpNote.forEach(sharp => sharp.classList.add('disappear'));

    flatText.forEach(flat => flat.classList.add('disappear'));
    sharpText.forEach(sharp => sharp.classList.add('disappear'));
    naturalText.forEach(natural => natural.classList.remove('disappear'));

    sharpColour.classList.remove('color');
    naturalColour.classList.add('color');
    flatColour.classList.remove('color');

});

flatButton.addEventListener('click', () => {

    sharpNote.forEach(sharp => sharp.classList.add('disappear'));
    flatNote.forEach(flat => flat.classList.remove('disappear'));

    flatText.forEach(flat => flat.classList.remove('disappear'));
    sharpText.forEach(sharp => sharp.classList.add('disappear'));

    sharpColour.classList.remove('color');
    naturalColour.classList.remove('color');
    flatColour.classList.add('color');

});

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

//NOTE BUTTONS
let tl = gsap.timeline();

aOneColour.addEventListener('click', (value) => {
    sound(220);
    tl.fromTo('.aOneGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.8, opacity: '0%', transformOrigin: 'center'});
});

gSharpColour.addEventListener('click', (value) => {
    sound(233.08);
    tl.fromTo('.gSharpGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.8, opacity: '0%', transformOrigin: 'center'});
});

gColour.addEventListener('click', (value) => {
    sound(246.94);
    tl.fromTo('.gGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.8, opacity: '0%', transformOrigin: 'center'});
});

fSharpColour.addEventListener('click', (value) => {
    sound(261.63);
    tl.fromTo('.fSharpGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.8, opacity: '0%', transformOrigin: 'center'});
});

fColour.addEventListener('click', (value) => {
    sound(277.18);
    tl.fromTo('.fGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.8, opacity: '0%', transformOrigin: 'center'});
});


eColour.addEventListener('click', (value) => {
    sound(293.66);
    tl.fromTo('.eGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.8, opacity: '0%', transformOrigin: 'center'});
});


dSharpColour.addEventListener('click', (value) => {
    sound(311.13);
    tl.fromTo('.dSharpGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.8, opacity: '0%', transformOrigin: 'center'});
});

dColour.addEventListener('click', (value) => {
    sound(329.63);
    tl.fromTo('.dGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.8, opacity: '0%', transformOrigin: 'center'});
});

cSharpColour.addEventListener('click', (value) => {
    sound(349.23);
    tl.fromTo('.cSharpGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.8, opacity: '0%', transformOrigin: 'center'});
});


cColour.addEventListener('click', (value) => {
    sound(369.99);
    tl.fromTo('.cGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.8, opacity: '0%', transformOrigin: 'center'});
});


bColour.addEventListener('click', (value) => {
    sound(392.0);
    tl.fromTo('.bGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.8, opacity: '0%', transformOrigin: 'center'});
});

aSharpColour.addEventListener('click', (value) => {
    sound(415.3);
    tl.fromTo('.aSharpGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.8, opacity: '0%', transformOrigin: 'center'});
});


aTwoColour.addEventListener('click', (value) => {
    sound(440);
    tl.fromTo('.aTwoGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.8, opacity: '0%', transformOrigin: 'center'});
});



