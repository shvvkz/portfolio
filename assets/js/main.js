
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Testimonials slider
   */
  new Swiper('.services-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });

      }, true);
    }

  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

})()


var cookie_darkmode = false;

if (document.cookie != ""){
   var cookieValue = document.cookie.split('; ').find(row => row.startsWith('darkmode')).split('=')[1];
   cookie_darkmode = cookieValue === "true";
}


  

if(cookie_darkmode == true){
  //header dark

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


 
 