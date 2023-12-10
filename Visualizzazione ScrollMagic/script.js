gsap.registerPlugin(ScrollTrigger)

let container = document.getElementById("sfondo");

gsap.to(container, {
  x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: container,
    scroller: '#scroller',
    invalidateOnRefresh: true,
    pin: true,
    markers: true,
    scrub: 1,
    top: 'top top',
    end: () => "+=9000"/*  + container.offsetHeight */ 
  }
})



const arrayRange = (start, stop, step) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );

let range = arrayRange(0, 142, 1);

// Aggiungi uno spazio tra i numeri utilizzando il tag span con stile CSS
let spacedRange = range.map(number => `<span class="number">${number}</span>`);

document.getElementById("numbers_content").innerHTML = spacedRange.join("");
