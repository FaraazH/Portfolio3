// let animation = bodymovin.loadAnimation({
//     container: document.querySelector('.waveTwo'), 
//     path: '/content/hi.json', 
//     renderer: 'svg', 
//     loop: true, 
//     autoplay: true,
//   });


let share = document.getElementsByClassName('share');

Array.prototype.forEach.call(share, wave => {

  let anim = bodymovin.loadAnimation({
  container: wave,
  path: `/content/${wave.dataset.file}.json`,
  renderer: 'svg',
  loop: true,
  autoplay: true
  });

});