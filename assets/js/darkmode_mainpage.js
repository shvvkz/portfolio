console.log("yo")

var cookie_darkmode = false;

if (document.cookie != ""){
   var cookieValue = document.cookie.split('; ').find(row => row.startsWith('darkmode')).split('=')[1];
   cookie_darkmode = cookieValue === "true";
}


  

if(cookie_darkmode == true){
  //header dark
  document.getElementsByClassName("ul-light")[0].classList.add("ul-dark");
  document.getElementsByClassName("ul-light")[0].classList.remove("ul-light");
  
  document.getElementsByClassName("dm-light")[0].classList.add("dm-dark");
  document.getElementsByClassName("dm-light")[0].classList.remove("dm-light");
  
  document.getElementsByClassName("bi-moon")[0].classList.add("bi-sun");
  document.getElementsByClassName("bi-moon")[0].classList.remove("bi-moon");

  document.getElementsByClassName("header-light")[0].classList.add("header-dark");
  document.getElementsByClassName("header-light")[0].classList.remove("header-light");

  //nav dark
  document.getElementsByClassName("nav-light")[0].classList.add("nav-dark");
  document.getElementsByClassName("nav-light")[0].classList.remove("nav-light");

  document.getElementById("logo_img").src = "assets/img/logo-dark.png";

  var elements = document.querySelectorAll(".services-block-light");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("services-block-dark");
    elements[i].classList.remove("services-block-light");
  }

  var elements = document.querySelectorAll(".span");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("span-dark");
    elements[i].classList.remove("span");
  }
  document.getElementsByClassName("paddsection-1")[0].classList.add("paddsection-1-dark");
  document.getElementsByClassName("paddsection-1")[0].classList.remove("paddsection-1");

  document.getElementsByClassName("paddsection-2")[0].classList.add("paddsection-2-dark");
  document.getElementsByClassName("paddsection-2")[0].classList.remove("paddsection-2");

  document.getElementsByClassName("services")[0].classList.add("services-dark");
  document.getElementsByClassName("services")[0].classList.remove("services");
  
  var elements = document.querySelectorAll(".span");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("span-dark");
    elements[i].classList.remove("span");
  }
  
  document.getElementsByClassName("swiper-light")[0].classList.add("swiper-dark");
  document.getElementsByClassName("swiper-light")[0].classList.remove("swiper-light");

  document.getElementsByClassName("div-img-bg")[0].classList.add("div-img-bg-dark");
  document.getElementsByClassName("div-img-bg")[0].classList.remove("div-img-bg");

  document.getElementsByClassName("download-button-container")[0].classList.add("download-button-container-dark");
  document.getElementsByClassName("download-button-container")[0].classList.remove("download-button-container");

  var elements = document.querySelectorAll(".h2-light");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("h2-dark");
    elements[i].classList.remove("h2-light");
  }

  var elements = document.querySelectorAll(".filters-light");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("filters-dark");
    elements[i].classList.remove("filters-light");
  }

  var elements = document.querySelectorAll(".info-light");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("info-dark");
    elements[i].classList.remove("info-light");
  }

  var elements = document.querySelectorAll(".details-light");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("details-dark");
    elements[i].classList.remove("details-light");
  }
  
  
  document.getElementsByClassName("resume-light")[0].classList.add("resume-dark");
  document.getElementsByClassName("resume-light")[0].classList.remove("resume-light");

  
  var elements = document.querySelectorAll(".resume-title-light");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("resume-title-dark");
    elements[i].classList.remove("resume-title-light");
  }
  var elements = document.querySelectorAll(".h4-light");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("h4-dark");
    elements[i].classList.remove("h4-light");
  }
  var elements = document.querySelectorAll(".h5-light");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("h5-dark");
    elements[i].classList.remove("h5-light");
  }
  var elements = document.querySelectorAll(".resume-item-light");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("resume-item-dark");
    elements[i].classList.remove("resume-item-light");
  }

  var elements = document.querySelectorAll(".footer-light");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("footer-dark");
    elements[i].classList.remove("footer-light");
  }
  }




button_darkmode = document.getElementById("darkmode")
 
button_darkmode.addEventListener("click", function() {
  if(cookie_darkmode === false){
    cookie_darkmode = true;
    document.cookie = "darkmode=true; path=/"
    darkmode()
  }
  else{
    cookie_darkmode = false;
    document.cookie = "darkmode=false; path=/"
    lightmode()
  } 
  console.log(cookie_darkmode,document.cookie)
 });

function darkmode(){
  
  //header dark
  document.getElementsByClassName("ul-light")[0].classList.add("ul-dark");
  document.getElementsByClassName("ul-light")[0].classList.remove("ul-light");

  document.getElementsByClassName("dm-light")[0].classList.add("dm-dark");
  document.getElementsByClassName("dm-light")[0].classList.remove("dm-light");
  
  document.getElementsByClassName("bi-moon")[0].classList.add("bi-sun");
  document.getElementsByClassName("bi-moon")[0].classList.remove("bi-moon");

  document.getElementsByClassName("header-light")[0].classList.add("header-dark");
  document.getElementsByClassName("header-light")[0].classList.remove("header-light");

  //nav dark
  document.getElementsByClassName("nav-light")[0].classList.add("nav-dark");
  document.getElementsByClassName("nav-light")[0].classList.remove("nav-light");

  document.getElementById("logo_img").src = "assets/img/logo-dark.png";

  var elements = document.querySelectorAll(".services-block-light");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("services-block-dark");
    elements[i].classList.remove("services-block-light");
  }

  var elements = document.querySelectorAll(".span");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("span-dark");
    elements[i].classList.remove("span");
  }
  document.getElementsByClassName("paddsection-1")[0].classList.add("paddsection-1-dark");
  document.getElementsByClassName("paddsection-1")[0].classList.remove("paddsection-1");

  document.getElementsByClassName("paddsection-2")[0].classList.add("paddsection-2-dark");
  document.getElementsByClassName("paddsection-2")[0].classList.remove("paddsection-2");

  document.getElementsByClassName("services")[0].classList.add("services-dark");
  document.getElementsByClassName("services")[0].classList.remove("services");
  
  var elements = document.querySelectorAll(".span");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("span-dark");
    elements[i].classList.remove("span");
  }
  
  document.getElementsByClassName("swiper-light")[0].classList.add("swiper-dark");
  document.getElementsByClassName("swiper-light")[0].classList.remove("swiper-light");

  document.getElementsByClassName("div-img-bg")[0].classList.add("div-img-bg-dark");
  document.getElementsByClassName("div-img-bg")[0].classList.remove("div-img-bg");

  document.getElementsByClassName("download-button-container")[0].classList.add("download-button-container-dark");
  document.getElementsByClassName("download-button-container")[0].classList.remove("download-button-container");

  var elements = document.querySelectorAll(".h2-light");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("h2-dark");
    elements[i].classList.remove("h2-light");
  }

  var elements = document.querySelectorAll(".filters-light");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("filters-dark");
    elements[i].classList.remove("filters-light");
  }

  var elements = document.querySelectorAll(".info-light");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("info-dark");
    elements[i].classList.remove("info-light");
  }

  var elements = document.querySelectorAll(".details-light");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("details-dark");
    elements[i].classList.remove("details-light");
  }
  
  
  document.getElementsByClassName("resume-light")[0].classList.add("resume-dark");
  document.getElementsByClassName("resume-light")[0].classList.remove("resume-light");

  
  var elements = document.querySelectorAll(".resume-title-light");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("resume-title-dark");
    elements[i].classList.remove("resume-title-light");
  }
  var elements = document.querySelectorAll(".h4-light");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("h4-dark");
    elements[i].classList.remove("h4-light");
  }
  var elements = document.querySelectorAll(".h5-light");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("h5-dark");
    elements[i].classList.remove("h5-light");
  }
  var elements = document.querySelectorAll(".resume-item-light");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("resume-item-dark");
    elements[i].classList.remove("resume-item-light");
  }

  var elements = document.querySelectorAll(".footer-light");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("footer-dark");
    elements[i].classList.remove("footer-light");
  }
  
}

function lightmode(){
  document.getElementsByClassName("ul-dark")[0].classList.add("ul-light");
  document.getElementsByClassName("ul-dark")[0].classList.remove("ul-dark");

  document.getElementsByClassName("dm-dark")[0].classList.add("dm-light");
  document.getElementsByClassName("dm-dark")[0].classList.remove("dm-dark");
  
  document.getElementsByClassName("bi-sun")[0].classList.add("bi-moon");
  document.getElementsByClassName("bi-sun")[0].classList.remove("bi-sun");
  
  document.getElementsByClassName("header-dark")[0].classList.add("header-light");
  document.getElementsByClassName("header-dark")[0].classList.remove("header-dark");

  //nav dark
  document.getElementsByClassName("nav-dark")[0].classList.add("nav-light");
  document.getElementsByClassName("nav-dark")[0].classList.remove("nav-dark");

  document.getElementById("logo_img").src = "assets/img/logo.png";

  var elements = document.querySelectorAll(".services-block-dark");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("services-block-light");
    elements[i].classList.remove("services-block-dark");
  }

  var elements = document.querySelectorAll(".span-dark");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("span");
    elements[i].classList.remove("span-dark");
  }
  document.getElementsByClassName("paddsection-1-dark")[0].classList.add("paddsection-1");
  document.getElementsByClassName("paddsection-1-dark")[0].classList.remove("paddsection-1-dark");

  document.getElementsByClassName("paddsection-2-dark")[0].classList.add("paddsection-2");
  document.getElementsByClassName("paddsection-2-dark")[0].classList.remove("paddsection-2-dark");

  document.getElementsByClassName("services-dark")[0].classList.add("services");
  document.getElementsByClassName("services-dark")[0].classList.remove("services-dark");
  
  document.getElementsByClassName("swiper-dark")[0].classList.add("swiper-light");
  document.getElementsByClassName("swiper-dark")[0].classList.remove("swiper-dark");

  document.getElementsByClassName("div-img-bg-dark")[0].classList.add("div-img-bg");
  document.getElementsByClassName("div-img-bg-dark")[0].classList.remove("div-img-bg-dark");

  document.getElementsByClassName("download-button-container-dark")[0].classList.add("download-button-container");
  document.getElementsByClassName("download-button-container-dark")[0].classList.remove("download-button-container-dark");

  var elements = document.querySelectorAll(".h2-dark");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("h2-light");
    elements[i].classList.remove("h2-dark");
  }

  var elements = document.querySelectorAll(".filters-dark");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("filters-light");
    elements[i].classList.remove("filters-dark");
  }

  var elements = document.querySelectorAll(".info-dark");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("info-light");
    elements[i].classList.remove("info-dark");
  }

  var elements = document.querySelectorAll(".details-dark");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("details-light");
    elements[i].classList.remove("details-dark");
  }
  
  
  document.getElementsByClassName("resume-dark")[0].classList.add("resume-light");
  document.getElementsByClassName("resume-dark")[0].classList.remove("resume-dark");

  
  var elements = document.querySelectorAll(".resume-title-dark");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("resume-title-light");
    elements[i].classList.remove("resume-title-dark");
  }
  var elements = document.querySelectorAll(".h4-dark");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("h4-light");
    elements[i].classList.remove("h4-dark");
  }
  var elements = document.querySelectorAll(".h5-dark");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("h5-light");
    elements[i].classList.remove("h5-dark");
  }
  var elements = document.querySelectorAll(".resume-item-dark");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("resume-item-light");
    elements[i].classList.remove("resume-item-dark");
  }

  var elements = document.querySelectorAll(".footer-dark");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("footer-light");
    elements[i].classList.remove("footer-dark");
  }
}


 
 