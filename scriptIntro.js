gsap.registerPlugin(ScrollTrigger);

// --------------------------------------------------------------------------
// ------------------------------- NEW SCROLL -------------------------------
// --------------------------------------------------------------------------
// ------------------------------- NEW SCROLL -------------------------------
// --------------------------------------------------------------------------
// ------------------------------- NEW SCROLL -------------------------------
// --------------------------------------------------------------------------

const slider = document.querySelector(".sfondoIntro");
const sections = gsap.utils.toArray(".slider section");

let tl = gsap.timeline({
  defaults: {
    ease: "none",
  },
  scrollTrigger: {
    trigger: slider,
    start: "top top",
    pin: true,
    scrub: 2,
    markers: true,
    end: () => "+=5000" /* + slider.offsetWidth */,
  },
});

tl.to(slider, {
  xPercent: -83.34,
});

// -------------------------------------------------------------------------------------
// --------------- NUMERI IN SEQUENZA --------------- NUMERI IN SEQUENZA ---------------
// -------------------------------------------------------------------------------------
// --------------- NUMERI IN SEQUENZA --------------- NUMERI IN SEQUENZA ---------------
// -------------------------------------------------------------------------------------
// --------------- NUMERI IN SEQUENZA --------------- NUMERI IN SEQUENZA ---------------
// -------------------------------------------------------------------------------------
const arrayRange = (start, stop, step) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );

let range = arrayRange(0, 30, 1);

// Aggiungi uno spazio tra i numeri utilizzando il tag span con stile CSS
let spacedRange = range.map(number => `<span class="number">${number}</span>`);

document.getElementById("numbers_content").innerHTML = spacedRange.join("");

/* ----------------------------------------------------------------- */
/* ------------- ANIMAZIONI -------------- ANIMAZIONI -------------- */
/* ----------------------------------------------------------------- */
/* ------------- ANIMAZIONI -------------- ANIMAZIONI -------------- */
/* ----------------------------------------------------------------- */
/* ------------- ANIMAZIONI -------------- ANIMAZIONI -------------- */
/* ----------------------------------------------------------------- */

gsap.to(".section2 h4", {
  y: -1300,
  opacity: 1,
  duration: 0.6,
  scrollTrigger: {
    trigger: ".section2 h4",
    containerAnimation: tl,
    start: "left 70%",
    toggleActions: "restart none none reverse",
    id: "2",
    markers: true,
    fastscrollend: true,
  },
});

gsap.to(".section3 h4", {
  y: -1300,
  opacity: 1,
  duration: 0.6,
  scrollTrigger: {
    trigger: ".section3 h4",
    containerAnimation: tl,
    start: "left 70%",
    toggleActions: "restart none none reverse",
    id: "3",
    markers: true,
    fastscrollend: true,
  },
});

gsap.to(".section4-1", {
  x: 200,
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".section4-1",
    containerAnimation: tl,
    start: "left center",
    end: "left 100px",
    /* toggleActions: "play none pause none", */
    id: "4",
    scrub: true,
    markers: true,
    fastscrollend: true,
  },
});

gsap.to(".section4-2", {
  x: 400,
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".section4-1",
    containerAnimation: tl,
    start: "left center",
    end: "left 100px",
    /* toggleActions: "play none pause none", */
    id: "4",
    scrub: true,
    markers: true,
    fastscrollend: true,
  },
});

gsap.to(".section4-3", {
  x: 600,
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".section4-1",
    containerAnimation: tl,
    start: "left center",
    end: "left 100px",
    /* toggleActions: "play none pause none", */
    id: "4",
    scrub: true,
    markers: true,
    fastscrollend: true,
  },
});

gsap.to(".section4-4", {
  x: 800,
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".section4-1",
    containerAnimation: tl,
    start: "left center",
    end: "left 100px",
    /* toggleActions: "play none pause none", */
    id: "4",
    scrub: true,
    markers: true,
    fastscrollend: true,
  },
});

gsap.to(".section4-5", {
  x: 1000,
  opacity: 1,
  scrollTrigger: {
    trigger: ".section4-1",
    containerAnimation: tl,
    start: "left center",
    end: "left 100px",
    /* toggleActions: "play none pause none", */
    id: "4",
    scrub: true,
    markers: true,
    fastscrollend: true,
  },
});
