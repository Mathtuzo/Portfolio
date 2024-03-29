
// var navbar = document.getElementById('NavBar');
// var menu = document.getElementById('menu');

// window.onscroll = function() {
//   if (window.pageYOffset >= menu.offsetTop){
//     navbar.classList.add('sticky');
//   }
//   if (window.pageYOffset <= menu.offsetTop){
//     navbar.classList.remove('sticky');
//   }
// }
const cursor =document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  let x =e.pageX;
  let y =e.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";
});
document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});

window.onscroll = function() { NavFunction()};
var navbar = document.getElementById("NavBar");
var sticky = navbar.offsetTop;

function NavFunction() {
  if (window.pageYOffset >= sticky){
    navbar.classList.add("sticky");
  }else {
    navbar.classList.remove("sticky");
  }

  if (document.body.scrollTop > 630 || document.documentElement.scrollTop > 630) {
      
    document.getElementById("scroll-up_nav").style.display = "initial";
    document.querySelector(":root").style.setProperty('--nav-color','blue') ;
          
  } else {
          
    document.getElementById("scroll-up_nav").style.display = "none";
    document.querySelector(":root").style.setProperty('--nav-color','black') ;
          
  }

 } 

 const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-menu'); 
  const navLinks = document.querySelectorAll('.nav-menu li');
  // animation de la barre
  burger.addEventListener('click',() => {
      nav.classList.toggle('nav-active');

      //animation des menu de la navBarre
      navLinks.forEach((link, index) => {
          if (link.style.animation) {
              link.style.animation = ''
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
          }
          
          
      });
      // burger animation
      burger.classList.toggle('toggle');


  });

  

}

navSlide();





// window.onscroll = function() { scrollFunction() };
// function scrollFunction() {
//   if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
      
//       document.getElementById("scroll-up_nav").style.display = "initial";
      
//   } else {
      
//       document.getElementById("scroll-up_nav").style.display = "none";
      
//   }
// }