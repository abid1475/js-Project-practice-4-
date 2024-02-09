// const scroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true
// });

var timeout ;


function fristPageanim(){
     var tl = gsap.timeline();

     tl.from('#nav', {
          y:-10,
          opacity: 0,
          ease:Expo
     })
     .to(".boundingelem",{
          y:0,
          ease: Expo.easeInOut,
          duration: 1.5,
          delay:-1,
          stagger:.2
     })
     .from("#herofooter",{
          y:-10,
          opacity:0,
          duration:1.5,
          delay:-1,
          ease:Expo.easeInOut
     })
}

     function circleChaptaKaro(){
          var xscale = 1;
          var yscale = 1;
          var xprev = 0;
          var yprev = 0;
          window.addEventListener("mousemove", function(dets){
               clearTimeout(timeout);
       var xdiff = dets.clientX - xprev;
       var ydiff = dets.clientY - yprev;
     var xscale = gsap.utils.clamp(.8, 1.2, xdiff)
     var yscale = gsap.utils.clamp(.8, 1.2, ydiff)
        xprev = dets.clientX;
        yprev = dets.clientY;
        circleMouseFollower(xscale, yscale);
     //    console.log( gsap.utils.clamp(.8, 1.2, ydiff),  gsap.utils.clamp(.8, 1.2, xdiff) )
       timeout = setTimeout(function(){
          document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`
       }, 100);
          });
     }
     circleChaptaKaro();
 
function circleMouseFollower(xscale, yscale){
          window.addEventListener("mousemove", function(dets){
               document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`
          })
}
circleMouseFollower();
fristPageanim();


document.querySelectorAll(".elem").forEach(function(elem){
     var rotate = 0;
     var diffrot = 0;

     elem.addEventListener("mouseleave", function(dets){
          gsap.to(elem.querySelector("img"),{
               opacity:0,
          })
     })


elem.addEventListener("mousemove", function(dets){
     var diff = dets.clientY - elem.getBoundingClientRect().top;
     diffrot = dets.clientX - rotate;
     rotate = dets.clientX;
     gsap.to(elem.querySelector("img"),{
          opacity:1,
          // ease:Expo.easeInOut,
          top:diff,
          left: dets.clientX,
          rotate:gsap.utils.clamp(-20, 20, diffrot * 0.8)
     })
});
});


let t = document.getElementById("time")
var currentTime = new Date()
currentTime.setHours(currentTime.getHours() + 1)
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var formattedTime = hours + ":" + (minutes<10? "0" : "") + minutes;
// console.log(currentTime);
     var timeContainer = document.getElementById("timeContainer");
     timeContainer.innerText = formattedTime + " AM";
