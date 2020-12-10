const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Animete items 
const title = document.querySelector('.title');
const element = document.querySelector('.element img');
const purchase = document.querySelector('.purchase button');
const descriptions = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');


// effect
container.addEventListener('mousemove', e => {
  // let xAxis = (window.innerWidth / 2 - e.pageX) /10;
  // let yAxis = (window.innerHeight / 2 - e.pageY) /10;
  
  // card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

//  Animete in
container.addEventListener('mouseenter', e => {
  card.style.transition = 'none';

  // popOut
  title.style.transform = 'translateZ(150px)';
  element.style.transform = 'translateZ(200px) rotateZ(-45deg)';
  // descriptions.style.transform = 'translateZ(125px)';
  // sizes.style.transform = 'translateZ(100px)';
  // purchase.style.transform = 'translateZ(75px)';
});

// Animate out
container.addEventListener('mouseleave', e => {
  card.style.transition = 'all 0.5s ease'; 
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  // popBack
  title.style.transform = 'translateZ(0px)';
  element.style.transform = 'translateZ(0px) rotateZ(0deg)'; 
  // descriptions.style.transform = 'translateZ(0px)';
  // sizes.style.transform = 'translateZ(0px)';
  // purchase.style.transform = 'translateZ(0px)';
});