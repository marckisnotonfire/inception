gsap.registerPlugin(ScrollTrigger)

let container = document.getElementById("container");

gsap.to(container, {
  x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: container,
    scroller: '#scroller',
    invalidateOnRefresh: true,
    pin: true,
    scrub: 1,
    top: 'top top',
    end: () => "+=" + container.offsetWidth
  }
})