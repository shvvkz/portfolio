
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

  let btndarmode = select('.darkmode')
  if (btndarmode) {
    const toggledarkmode = () => {
      if (window.scrollY > 100) {
        btndarmode.classList.add('active')
      } else {
        btndarmode.classList.remove('active')
      }
    }
    window.addEventListener('load', toggledarkmode)
    onscroll(document, toggledarkmode)
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


const showDetail1 = document.getElementById('showDetail1');
const showDetail2 = document.getElementById('showDetail2');
const showDetail3 = document.getElementById('showDetail3');
const showDetail4 = document.getElementById('showDetail4');
const showDetail5 = document.getElementById('showDetail5');
const showDetail6 = document.getElementById('showDetail6');

const detail1 = document.getElementById('detail1');
const detail2 = document.getElementById('detail2');
const detail3 = document.getElementById('detail3');
const detail4 = document.getElementById('detail4');
const detail5 = document.getElementById('detail5');
const detail6 = document.getElementById('detail6');

showDetail1.addEventListener('click', () => {
  if (detail1.style.display === 'block') {
    showDetail1.innerHTML = 'Afficher les détails des compétences';
    detail1.style.display = 'none';
  }
  else {
    showDetail1.innerHTML = 'Ne plus afficher';
    detail1.style.display = 'block';
  }
});

showDetail2.addEventListener('click', () => {
  if (detail2.style.display === 'block') {
    showDetail2.innerHTML = 'Afficher les détails des compétences';
    detail2.style.display = 'none';
  }
  else {
    showDetail2.innerHTML = 'Ne plus afficher';
    detail2.style.display = 'block';
  }
});

showDetail3.addEventListener('click', () => {
  if (detail3.style.display === 'block') {
    showDetail3.innerHTML = 'Afficher les détails des compétences';
    detail3.style.display = 'none';
  }
  else {
    showDetail3.innerHTML = 'Ne plus afficher';
    detail3.style.display = 'block';
  }
});

showDetail4.addEventListener('click', () => {
  if (detail4.style.display === 'block') {
    showDetail4.innerHTML = 'Afficher les détails des compétences';
    detail4.style.display = 'none';
  }
  else {
    showDetail4.innerHTML = 'Ne plus afficher';
    detail4.style.display = 'block';
  }
});

showDetail5.addEventListener('click', () => {
  if (detail5.style.display === 'block') {
    showDetail5.innerHTML = 'Afficher les détails des compétences';
    detail5.style.display = 'none';
  }
  else {
    showDetail5.innerHTML = 'Ne plus afficher';
    detail5.style.display = 'block';
  }
});

showDetail6.addEventListener('click', () => {
  if (detail6.style.display === 'block') {
    showDetail6.innerHTML = 'Afficher les détails des compétences';
    detail6.style.display = 'none';
  }
  else {
    showDetail6.innerHTML = 'Ne plus afficher';
    detail6.style.display = 'block';
  }
});