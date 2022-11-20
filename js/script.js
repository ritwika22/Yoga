function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function lhvr() {
  document.querySelector('.bi-person-fill-lock').classList.remove("active");
  document.querySelector('.bi-person-fill-lock').classList.add("hidden");

  document.querySelector('.hlogin').classList.remove("hidden");
  document.querySelector('.hlogin').classList.add("active");
}

function lhvro() {
  document.querySelector('.bi-person-fill-lock').classList.add("active");
  document.querySelector('.bi-person-fill-lock').classList.remove("hidden");

  document.querySelector('.hlogin').classList.add("hidden");
  document.querySelector('.hlogin').classList.remove("active");
}

function chvr() {
  document.querySelector('.bi-cart-plus-fill').classList.remove("active");
  document.querySelector('.bi-cart-plus-fill').classList.add("hidden");

  document.querySelector('.hcart').classList.remove("hidden");
  document.querySelector('.hcart').classList.add("active");
}

function chvro() {
  document.querySelector('.bi-cart-plus-fill').classList.add("active");
  document.querySelector('.bi-cart-plus-fill').classList.remove("hidden");

  document.querySelector('.hcart').classList.add("hidden");
  document.querySelector('.hcart').classList.remove("active");
}

function shvr() {
  document.querySelector('.bi-search').classList.remove("active");
  document.querySelector('.bi-search').classList.add("hidden");

  document.querySelector('.hsearch').classList.remove("hidden");
  document.querySelector('.hsearch').classList.add("active");
}

function shvro() {
  document.querySelector('.bi-search').classList.add("active");
  document.querySelector('.bi-search').classList.remove("hidden")

  document.querySelector('.hsearch').classList.add("hidden");
  document.querySelector('.hsearch').classList.remove("active");
}

function rotateimg(e) {
  document.querySelector(e).classList.add("bg-rotate");
}

function stopimg(e) {
  document.querySelector(e).classList.remove("bg-rotate");
}

var owl = $('.owl-carousel');

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
      },
      // breakpoint from 480 up
      430: {
        items: 1,
      },
      // breakpoint from 768 up
      768: {
        items: 3,
      }
    }
  });
});


var count1 = document.getElementById("counter1");
var count2 = document.getElementById("counter2");
var count3 = document.getElementById("counter3");
var counts1,counts2,counts3;
var counted1 = 0,counted2 = 0,counted3 = 0;
let upto1 = 0, upto2 = 0, upto3 = 0;

window.addEventListener('scroll', checkPosition);

function checkPosition() {
  var positionFromTop = count1.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;
  if (positionFromTop - windowHeight <= 0 && counted1 === 0) {
    counts1 = setInterval(updated1, 10);
    counted1 = 1;
  }

  positionFromTop = count2.getBoundingClientRect().top;
  if (positionFromTop - windowHeight <= 0 && counted2 === 0) {
    counts2 = setInterval(updated2, 10);
    counted2 = 1;
  }

  positionFromTop = count3.getBoundingClientRect().top;
  if (positionFromTop - windowHeight <= 0 && counted3 === 0) {
    counts3 = setInterval(updated3, 10);
    counted3 = 1;
  }
}

function updated1() {
  count1.innerHTML = ++upto1;
  if (upto1 === 123) {
    clearInterval(counts1);
  }
}

function updated2() {
  count2.innerHTML = ++upto2;
  if (upto2 === 123) {
    clearInterval(counts2);
  }
}

function updated3() {
  count3.innerHTML = ++upto3;
  if (upto3 === 123) {
    clearInterval(counts3);
  }
}