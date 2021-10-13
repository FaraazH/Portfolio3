const resizeOps = () => {
  document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
};

resizeOps();
window.addEventListener("resize", resizeOps);

let dot1 = document.querySelector('.dot1');
let dot2 = document.querySelector('.dot2');
let dot3 = document.querySelector('.dot3');


window.addEventListener('scroll', () => {

let scroll = window.scrollY;

console.log(scrollY);


  if(scroll <= document.documentElement.scrollHeight/6) {
      dot1.classList.add('fill');
  } else {
      dot1.classList.remove('fill');
  }

  if(scroll >= document.documentElement.scrollHeight/6 && scroll < document.documentElement.scrollHeight/4 + document.documentElement.scrollHeight/4){
      dot2.classList.add('fill');
  } else {
      dot2.classList.remove('fill');
  }

  if(scroll >= document.documentElement.scrollHeight/4 + document.documentElement.scrollHeight/4){
      dot3.classList.add('fill');
  } else {
      dot3.classList.remove('fill');
  }
  
})


document.addEventListener('scroll', () => {

    console.log(window.scrollY);
})