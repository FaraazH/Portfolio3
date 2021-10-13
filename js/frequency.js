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

let frequencyLogo = document.querySelector('.frequencyLogo');
document.links[active].className = frequencyLogo.classList.add('logoFill');

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
const aOneColour = document.querySelector('.aOneColour');

//NOTE BUTTONS
let tl = gsap.timeline();

aTwoColour.addEventListener('click', (value) => {

    sound(440);

    tl.fromTo('.aTwoGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.8, opacity: '0%', transformOrigin: 'center'});

});

aOneColour.addEventListener('click', (value) => {

    sound(220);

    tl.fromTo('.aOneGrey', 0.5, {scale: 1, opacity: '90%', transformOrigin: 'center'}, {scale: 1.8, opacity: '0%', transformOrigin: 'center'});

});
