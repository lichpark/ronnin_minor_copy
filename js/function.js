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
  const menudot = document.querySelector(".menu-dot");
  const chop1 = document.querySelector(".chop-1");
  const chop2 = document.querySelector(".chop-2");
  const links = document.querySelectorAll(".nav-link");

  //사이드메뉴 보였다가 사라짐
  const isMenuOpen = navbarContent.style.display === "flex";

  const tl = gsap.timeline({
    onComplete: () => {
      if (isMenuOpen) {
        navbarContent.style.display = "none";
      }
    },
  });

  if (isMenuOpen) {
    //화면 사라짐
    tl.to(navbarContentWrapper, {
      duration: 1,
      x: "-100%",
      ease: "power3.out",
    });

    tl.to(links, {
      y: 0,
      opacity: 0,
    });

    tl.to(menudot, {
      duration: 0.5,
      backgroundColor: "#a11c1c",
    });

    tl.to(
      chop1,
      {
        rotation: 0,
      },
      "<"
    );
    tl.to(
      chop2,
      {
        rotation: 0,
      },
      "<"
    );

    //젓가락 교차 해제
  } else {
    //이걸 설정해 줘야 한다. - complete때문에
    navbarContent.style.display = "flex";
    // 화면 보임
    tl.to(navbarContentWrapper, {
      duration: 1,
      x: 0,
      ease: "power3.in",
    });
    //링크가 밑에서 위로 후루룩
    tl.from(links, {
      y: 0,
      opacity: 0,
      filter: "blur(15px)",
    });

    tl.to(links, {
      duration: 1,
      y: 10,
      filter: "blur(0px)",
      opacity: 1,
      stagger: 0.1,
      ease: "power3.inOut",
    });

    //젓가락 교차
    tl.to(menudot, {
      duration: 0.5,
      backgroundColor: "white",
    });

    tl.to(
      chop1,
      {
        rotation: 45,
      },
      "<"
    );
    tl.to(
      chop2,
      {
        rotation: -45,
      },
      "<"
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
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 5,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 5,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 10,
    },
  },
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
