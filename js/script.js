function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function lhvr(){
  document.querySelector('.bi-person-fill-lock').classList.remove("active")
  document.querySelector('.bi-person-fill-lock').classList.add("hidden")

  document.querySelector('.hlogin').classList.remove("hidden")
  document.querySelector('.hlogin').classList.add("active")
}

function lhvro(){
  document.querySelector('.bi-person-fill-lock').classList.add("active")
  document.querySelector('.bi-person-fill-lock').classList.remove("hidden")

  document.querySelector('.hlogin').classList.add("hidden")
  document.querySelector('.hlogin').classList.remove("active")
}

function chvr(){
  document.querySelector('.bi-cart-plus-fill').classList.remove("active")
  document.querySelector('.bi-cart-plus-fill').classList.add("hidden")

  document.querySelector('.hcart').classList.remove("hidden")
  document.querySelector('.hcart').classList.add("active")
}

function chvro(){
  document.querySelector('.bi-cart-plus-fill').classList.add("active")
  document.querySelector('.bi-cart-plus-fill').classList.remove("hidden")

  document.querySelector('.hcart').classList.add("hidden")
  document.querySelector('.hcart').classList.remove("active")
}

function shvr(){
  document.querySelector('.bi-search').classList.remove("active")
  document.querySelector('.bi-search').classList.add("hidden")

  document.querySelector('.hsearch').classList.remove("hidden")
  document.querySelector('.hsearch').classList.add("active")
}

function shvro(){
  document.querySelector('.bi-search').classList.add("active")
  document.querySelector('.bi-search').classList.remove("hidden")

  document.querySelector('.hsearch').classList.add("hidden")
  document.querySelector('.hsearch').classList.remove("active")
}