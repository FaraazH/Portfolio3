//EYE
let background = document.querySelector('.background');
let light = document.querySelectorAll('.light');
let lightL = document.querySelector('.lightL');
let lightR = document.querySelector('.lightR');
let cornea = document.querySelector('.cornea');
let lens = document.querySelector('.lens');
let retina = document.querySelector('.retina');

//TEXT 
let introText = document.querySelector('.introText');
let corneaText = document.querySelector('.corneaText');
let lensText = document.querySelector('.lensText');
let retinaText = document.querySelector('.retinaText');

//SIDETEXT
let pupilText = document.querySelector('.pupilText');
let foveaText = document.querySelector('.foveaText');
let coneText = document.querySelector('.coneText');
let rodText = document.querySelector('.rodText');

//CIRCLE
let corneaCircle = document.querySelector('.corneaCircle');
let lensCircle = document.querySelector('.lensCircle');
let retinaCircle = document.querySelector('.retinaCircle');

//SLIDER
let corneaSlider = document.querySelector('.corneaSlider');
let lensSlider = document.querySelector('.lensSlider');
let retinaSlider = document.querySelector('.retinaSlider');

//PARTS
let corneaParts = [corneaCircle, corneaSlider, corneaText];
let lensParts = [lensCircle, lensSlider, lensText];
let retinaParts = [retinaCircle, retinaSlider, retinaText];

//////////////////////////////////CORNEA
cornea.addEventListener('click', () => {

    cornea.classList.add('color');
    lens.classList.remove('color');
    retina.classList.remove('color');
    introText.classList.add('dullness');

    //SLIDER RESET
    corneaSlider.value = [0];

    //SLIDER COLOR RESET
    corneaSlider.style.background = 'transparent';
  
    //SLIDER INNER COLOR 
    corneaSlider.oninput = function() {
        let value = (this.value-this.min)/(this.max-this.min)*100;
        this.style.background = 'linear-gradient(to right, #061d337e 0%, #061d337e ' + value + '%, rgba(255, 255, 255, 0) ' + value + '%, transparent 100%)';
      };

    //SIDETEXT DISPLAY
    corneaSlider.addEventListener('input', () => {
        pupilText.classList.add('brightness');
    });   
 
    //SIDETEXT REMOVE
    let remove = [pupilText, foveaText, coneText, rodText];
    remove.forEach(side => side.classList.remove('brightness'));

    //PARTS ADD AND REMOVE
    corneaParts.forEach(part => part.classList.add('visible'));
    lensParts.forEach(part => part.classList.remove('visible'));
    retinaParts.forEach(part => part.classList.remove('visible'));

    //GSAP
    let tl = gsap.timeline({paused:true});

    //GSAP CLEAR
    gsap.set('.rodText', {clearProps: true});
    gsap.set('.coneText', {clearProps: true});
    gsap.set('.light', {clearProps: true});

    //GSAP TIMELINE
    tl.fromTo('.cornea', 10, {attr: {d:'M233 676V556.05a198.08 198.08 0 0 0 0 347.94V783.74H267V676.3Z'}}, {attr:{d:'M233 644V556.05a198.08 198.08 0 0 0 0 347.94V815.74H267V644.3Z'}},0);
    tl.fromTo('.pupilC', 10,{scale: 0.6, transformOrigin: 'center'}, {scale: 1.1, transformOrigin: 'center'}, 0);
    tl.fromTo('.light', 10, {scaleY: 1, transformOrigin:'center'}, {scaleY: 1.6, transformOrigin:'center'},0);
    tl.fromTo('.lightL', 10, {attr: {points:'0,463.29 0,325.99 603.14,394.64'}}, {attr: {points:'0,463.29 0,325.99 603.14,394.64'}}, 0); 
    tl.fromTo('.lightR', 10, {attr: {points:'819.54,368.74 819.54,420.54 603.14,394.64'}}, {attr: {points:'819.54,368.74 819.54,420.54 603.14,394.64'}}, 0);

    //GSAP SLIDER UPDATE
    function update(){
        tl.progress(corneaSlider.value);
        } 
        
    corneaSlider.addEventListener('input', update);

})


//////////////////////////////////LENS
lens.addEventListener('click', () => {

    lens.classList.add('color');
    cornea.classList.remove('color');
    retina.classList.remove('color');
    introText.classList.add('dullness');

    //SLIDER RESET
    lensSlider.value = [0];

    //SLIDER COLOR RESET
    lensSlider.style.background = 'transparent';

    //SLIDER INNERCOLOR
    lensSlider.oninput = function() {
        let value = (this.value-this.min)/(this.max-this.min)*100;
        this.style.background = 'linear-gradient(to right, #061d337e 0%, #061d337e ' + value + '%, rgba(255, 255, 255, 0) ' + value + '%, transparent 100%)';
      };

    //SIDETEXT DISPLAY
    lensSlider.addEventListener('input', () => {
        foveaText.classList.add('brightness');
    });

    //SIDETEXT REMOVE
    let remove = [pupilText, foveaText, coneText, rodText];
    remove.forEach(side => side.classList.remove('brightness'));

    //PARTS AND REMOVE
    lensParts.forEach(part => part.classList.add('visible'));
    corneaParts.forEach(part => part.classList.remove('visible'));
    retinaParts.forEach(part => part.classList.remove('visible'));

    //GSAP
    let tl = gsap.timeline({paused:true});

    //GSAP CLEAR
    gsap.set('.rodText', {clearProps: true});
    gsap.set('.coneText', {clearProps: true});
    gsap.set('.light', {clearProps: true});

    //GSAP TIMELINE
    tl.fromTo('.cornea', 10, {attr: {d:'M233 656V555.05a198.08 198.08 0 0 0 0 347.94V805.74H267V656.3Z'}}, {attr:{d:'M233 676V556.05a198.08 198.08 0 0 0 0 347.94V783.74H267V676.3Z'}},0);
    tl.fromTo('.blur', 10, {attr: {stdDeviation: 6}}, {attr: {stdDeviation: 0}}, 0);
    tl.fromTo('.light', 10, {scaleY: 1.4, transformOrigin:'center'}, {scaleY: 1, transformOrigin:'center'},0);
    tl.fromTo('.lightL', 10, {attr: {points:'0,463.29 0,325.99 603.14,394.64'}}, {attr: {points:'0,463.29 0,325.99 703.14,394.64'}}, 0); 
    tl.fromTo('.lightR', 10, {attr: {points:'819.54,368.74 819.54,420.54 603.14,394.64'}}, {attr: {points:'819.54,368.74 819.54,420.54 703.14,394.64'}}, 0);

    //GSAP SLIDER UPDATE
    function update(){
        tl.progress(lensSlider.value);
        } 
        
    lensSlider.addEventListener('input', update);
      
});

//////////////////////////////////RETINA
retina.addEventListener('click', () => {


    retina.classList.add('color');
    lens.classList.remove('color');
    cornea.classList.remove('color');
    introText.classList.add('dullness');

    //SLIDER RESET
    retinaSlider.value = [0];

    //SLIDER COLOR RESET
    retinaSlider.style.background = 'transparent';

    //SLIDER INNERCOLOR
    retinaSlider.oninput = function() {
        let value = (this.value-this.min)/(this.max-this.min)*100;
        this.style.background = 'linear-gradient(to right, #061d337e 0%, #061d337e ' + value + '%, rgba(255, 255, 255, 0) ' + value + '%, transparent 100%)';
      };

    //SIDETEXT REMOVE
    let remove = [pupilText, foveaText, coneText, rodText];
    remove.forEach(side => side.classList.remove('brightness'));

    //PARTS AND REMOVE
    retinaParts.forEach(part => part.classList.add('visible'));
    lensParts.forEach(part => part.classList.remove('visible'));
    corneaParts.forEach(part => part.classList.remove('visible'));

    //GSAP
    let tl = gsap.timeline({paused:true});

    //GSAP TIMELINE
    tl.fromTo('.cornea', 10, {attr: {d:'M233 676V556.05a198.08 198.08 0 0 0 0 347.94V783.74H267V676.3Z'}}, {attr: {d:'M233 656V556.05a198.08 198.08 0 0 0 0 347.94V804.74H267V656.3Z'}},0);

    //LIGHT
    tl.fromTo('.light', 10, {scaleY: 1, transformOrigin:'center'}, {scaleY: 1.4, transformOrigin:'center'},0);
    tl.fromTo('.light', 10, {opacity: '40%'}, {opacity: '70%'},0);
    tl.fromTo('.lightL', 10, {attr: {points:'0,463.29 0,325.99 603.14,394.64'}}, {attr: {points:'0,463.29 0,325.99 603.14,394.64'}}, 0); 
    tl.fromTo('.lightR', 10, {attr: {points:'819.54,368.74 819.54,420.54 603.14,394.64'}}, {attr: {points:'819.54,368.74 819.54,420.54 603.14,394.64'}}, 0);
    
    //CONES AND RODS
    tl.fromTo('.rod', 10, {opacity: '100%'}, {opacity: '0%'}, 0);
    tl.fromTo('.cone', 10, {opacity: '0%'}, {opacity: '100%'}, 0);
    tl.fromTo('.coneText', 10, {opacity: '100%'}, {opacity: '0%'},0);
    tl.fromTo('.rodText', 10, {opacity: '0%'}, {opacity: '100%'},0);

    //GSAP SLIDER UPDATE
    function update(){
        tl.progress(retinaSlider.value);
        } 
        
    retinaSlider.addEventListener('input', update);
});




