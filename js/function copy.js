// header aside view hide

document
  .getElementById("menu-button-a")
  .addEventListener("click", () => toggleMenu());

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => toggleMenu());
});

const toggleMenu = () => {
  const navbarContent = document.querySelector(".navbar-content");
  const navbarContentWrapper = document.querySelector(
    ".navbar-content-wrapper"
  );
  const links = document.querySelectorAll(".nav-link");
  const chop1 = document.querySelector(".chop-1");
  const chop2 = document.querySelector(".chop-2");
  const menuDot = document.querySelector(".menu-dot");

  // Check if the menu is currently open
  const isMenuOpen = navbarContent.style.display === "flex";

  const tl = gsap.timeline({
    onComplete: () => {
      if (isMenuOpen) {
        navbarContent.style.display = "none";
      }
    },
  });

  if (isMenuOpen) {
    // Close the menu
    tl.fromTo(
      navbarContentWrapper,
      {
        x: "0%",
      },
      {
        duration: 1,
        x: "-100%",
        ease: "power3.inOut",
      }
    );

    tl.fromTo(
      navbarContent,
      {
        opacity: 1,
      },
      {
        duration: 1,
        opacity: 0,
        ease: "power3.inOut",
      },
      0
    ); // Animate simultaneously with the navbarContentWrapper

    // Reverse animation for chop1 and chop2
    tl.to(
      chop1,
      {
        duration: 0.5,
        rotate: 0,
        ease: "power3.inOut",
      },
      0
    );

    tl.to(
      chop2,
      {
        duration: 0.5,
        rotate: 0,
        ease: "power3.inOut",
      },
      0
    );

    // Change menu-dot color to normal state (#a11c1c)
    tl.to(
      menuDot,
      {
        duration: 0.5,
        backgroundColor: "#a11c1c",
        ease: "power3.inOut",
      },
      0
    );
  } else {
    // Open the menu
    navbarContent.style.display = "flex";

    tl.fromTo(
      navbarContentWrapper,
      {
        x: "-100%",
      },
      {
        duration: 1,
        x: "0%",
        ease: "power3.inOut",
      }
    );

    tl.fromTo(
      navbarContent,
      {
        opacity: 0,
      },
      {
        duration: 1,
        opacity: 1,
        ease: "power3.inOut",
      },
      0
    ); // Animate simultaneously with the navbarContentWrapper

    tl.fromTo(
      links,
      {
        y: "100%",
        filter: "blur(10px)",
        opacity: 0,
      },
      {
        duration: 1,
        y: "0%",
        filter: "blur(0px)",
        opacity: 1,
        stagger: 0.1,
        ease: "power3.inOut",
      },
      0.2
    ); // Animate simultaneously

    // Animate chop1 and chop2 to form a cross
    tl.to(
      chop1,
      {
        duration: 0.5,
        rotate: 45,
        ease: "power3.inOut",
      },
      0
    );

    tl.to(
      chop2,
      {
        duration: 0.5,
        rotate: -45,
        ease: "power3.inOut",
      },
      0
    );

    // Change menu-dot color to open state (#e7dfd4)
    tl.to(
      menuDot,
      {
        duration: 0.5,
        backgroundColor: "#e7dfd4",
        ease: "power3.inOut",
      },
      0
    );
  }
};

// nav-header 처리

gsap.registerPlugin(ScrollTrigger);

const hero = gsap.timeline();

hero.from(".nav-header", {
  y: "45vh",
  fontSize: "17.647vw",
  color: "white",
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".two-section-one-fold",
    start: "50vh",
    end: "150vh",
    scrub: 1.5,
  },
});

hero.to(".home-main-wrapper", {
  opacity: 100,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".two-section-one-fold",
    start: "150vh",
    end: "180vh",
    scrub: 1.5,
  },
});

hero.to(".ronin-hero-bg", {
  height: "50vh",
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".two-section-one-fold",
    start: "50vh",
    end: "300vh",
    scrub: 1.5,
  },
});

hero.from(".ronin-samurai", {
  y: "200%",
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".two-section-one-fold",
    start: "150vh",
    end: "300vh",
    scrub: 1.5,
  },
});

hero.from(".red-circle", {
  scale: 0,
  blur: 0,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".two-section-one-fold",
    start: "150vh",
    end: "bottom bottom",
    scrub: 1.5,
  },
});

hero.from(".h1-250px", {
  y: "100%",
  opacity: 0,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".two-section-one-fold",
    start: "150vh",
    end: "250vh",
    scrub: 1.5,
  },
});
hero.from(".ronin-circle", {
  scale: 2,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".two-section-one-fold",
    start: "top top",
    end: "bottom bottom",
    scrub: 1.5,
  },
});

hero.from(".plus", {
  rotate: 720,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".two-section-one-fold",
    scrub: 1.5,
  },
});

const about = gsap.timeline();

about.from(".aboutimage", {
  scale: 1.3,
  ease: "power1.inOut",
  duration: 1,
  scrollTrigger: {
    trigger: ".section_home-about",
    scrub: 1.5,
  },
});

about.from(".about-image-wrapper", {
  height: "50vh",
  ease: "power1.inOut",
  duration: 1,
  scrollTrigger: {
    trigger: ".section_home-about",
    scrub: 1.5,
    end: "bottom top",
  },
});

var menu = gsap.timeline();

menu.to(".menu", {
  x: "30vw",
  duration: 1,
  scrollTrigger: {
    scrub: 1.5,
    trigger: ".section_home-food",
    start: "top 0%",
    end: "bottom 100%",
  },
});

menu.to(".food", {
  x: "-30vw",
  duration: 1,
  scrollTrigger: {
    scrub: 1.5,
    trigger: ".section_home-food",
    start: "top 0%",
    end: "bottom 100%",
  },
});

menu.from(".food-menu-card-wrapper", {
  scale: 0,
  duration: 1,
  scrollTrigger: {
    scrub: 1.5,
    trigger: ".section_home-food",
    start: "top 0%",
    end: "bottom 100%",
  },
});

gsap.from(".fm-background", {
  scale: 0.9,
  x: "-50%",
  y: "-50%",
  transformOrigin: "center center",
  scrollTrigger: {
    trigger: ".section_home-food",
    scrub: true,
    start: "top bottom",
    end: "bottom top",
  },
});

// swiper

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  cssMode: true,
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 20,
  centeredSlides: false, //이녀석을 false로 바꾸면 왼쪽부터 순차적으로 슬라이드가 들어섬

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".next-button",
    prevEl: ".prev-button",
  },
});

const tablink = document.querySelectorAll(".w-tab-link");

const addClass = (obj, className) => {
  obj.addEventListener("click", (e) => {
    //초기화
    tablink.forEach((val) => {
      val.classList.remove(className);
    });
    obj.classList.add(className);
  });
};

tablink.forEach((v) => {
  //클릭한애한테 이벤트 준다.
  addClass(v, "w--current");
});

//하단 관련

gsap.to(".marquee-left", {
  scrollTrigger: {
    trigger: ".section_home-video",
    start: "top bottom",
    end: "bottom top",
    scrub: 2,
  },
  x: "-50%",
});

gsap.to(".marquee-right", {
  scrollTrigger: {
    trigger: ".section_home-video",
    start: "top bottom",
    end: "bottom top",
    scrub: 2,
  },
  x: "50%",
});

gsap.fromTo(
  ".ronin-video",
  {
    y: 100,
    opacity: 0,
    filter: "blur(10px)", // Start with a blur of 10px
  },
  {
    y: 0,
    opacity: 1,
    filter: "blur(0px)", // End with a blur of 0px
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".section_home-video",
      start: "top 50%",
      toggleActions: "play none none none",
      once: true,
    },
  }
);
