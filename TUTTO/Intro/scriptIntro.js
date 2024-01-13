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
    end: () => "+=" + slider.offsetWidth,
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

let range = arrayRange(0, 15, 1);

// Aggiungi uno spazio tra i numeri utilizzando il tag span con stile CSS
let spacedRange = range.map(number => `<span class="number">${number}</span>`);

document.getElementById("numbers_content").innerHTML = spacedRange.join("");
