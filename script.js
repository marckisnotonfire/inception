console.clear(); // Start with a clean console on refesh

gsap.registerPlugin(ScrollTrigger);

// --------------------------------------------------------------------------
// ------------------------------- NEW SCROLL -------------------------------
// --------------------------------------------------------------------------
// ------------------------------- NEW SCROLL -------------------------------
// --------------------------------------------------------------------------
// ------------------------------- NEW SCROLL -------------------------------
// --------------------------------------------------------------------------

const slider = document.querySelector(".sfondo");
const sections = gsap.utils.toArray(".slider section");
const module = gsap.utils.toArray(".module");
const totalWidth = module.reduce(
  (acc, element) => acc + element.getBoundingClientRect().width,
  0
);

console.warn(totalWidth);

let tl = gsap.timeline({
  defaults: {
    ease: "none",
  },
  scrollTrigger: {
    trigger: ".trigger",
    start: "top top",
    pin: true,
    scrub: 2,
    markers: true,
    markers: {
      startColor: "white",
      endColor: "white",
      fontSize: "0px",
      fontWeight: "bold",
      indent: 20,
    },
    end: () => "+=10000 bottom-=1px",
  },
});

tl.to(".sfondo", {
  x: () => -(totalWidth - window.innerWidth),
});

// ---------------------------------------------------------------------
// --------------- ANIMAZIONI --------------- ANIMAZIONI ---------------
// ---------------------------------------------------------------------
// --------------- ANIMAZIONI --------------- ANIMAZIONI ---------------
// ---------------------------------------------------------------------
// --------------- ANIMAZIONI --------------- ANIMAZIONI ---------------
// ---------------------------------------------------------------------

gsap.to(".arrowScroll img,.arrowScroll h4", {
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".zero",
    containerAnimation: tl,
    start: "20% left",
    toggleActions: "restart none none reverse",
    id: "0",
    /* markers: true, */
    fastscrollend: true,
  },
});

gsap.to(".blocco1", {
  y: "32vh",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".blocco1",
    containerAnimation: tl,
    start: "left 75%",
    toggleActions: "restart none none reverse",
    id: "1",
    /* markers: true, */
    fastscrollend: true,
  },
});
gsap.to(".blocco2", {
  y: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".blocco2",
    containerAnimation: tl,
    start: "left 75%",
    toggleActions: "restart none none reverse",
    id: "2",
    /* markers: true, */
    fastscrollend: true,
  },
});
gsap.to(".blocco3", {
  y: "-16vh",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".blocco3",
    containerAnimation: tl,
    start: "left 75%",
    toggleActions: "restart none none reverse",
    id: "3",
    /* markers: true, */
    fastscrollend: true,
  },
});
gsap.to(".blocco4", {
  y: "-32vh",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".blocco4",
    containerAnimation: tl,
    start: "left 75%",
    toggleActions: "restart none none reverse",
    id: "4",
    /* markers: true, */
    fastscrollend: true,
  },
});
gsap.to(".blocco5", {
  y: "-16vh",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".blocco5",
    containerAnimation: tl,
    start: "left 75%",
    toggleActions: "restart none none reverse",
    id: "5",
    /* markers: true, */
    fastscrollend: true,
  },
});
gsap.to(".blocco6", {
  y: "-32vh",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".blocco6",
    containerAnimation: tl,
    start: "left 75%",
    toggleActions: "restart none none reverse",
    id: "6",
    /* markers: true, */
    fastscrollend: true,
  },
});
gsap.to(".blocco7", {
  y: "-16vh",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".blocco7",
    containerAnimation: tl,
    start: "left 75%",
    toggleActions: "restart none none reverse",
    /* markers: true, */
    fastscrollend: true,
  },
});
gsap.to(".blocco8", {
  y: "-32vh",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".blocco8",
    containerAnimation: tl,
    start: "left 75%",
    toggleActions: "restart none none reverse",
    id: "8",
    /* markers: true, */
    fastscrollend: true,
  },
});
gsap.to(".blocco9", {
  y: "-16vh",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".blocco9",
    containerAnimation: tl,
    start: "left 75%",
    toggleActions: "restart none none reverse",
    id: "9",
    /* markers: true, */
    fastscrollend: true,
  },
});
gsap.to(".blocco10", {
  y: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".blocco10",
    containerAnimation: tl,
    start: "left 75%",
    toggleActions: "restart none none reverse",
    id: "10",
    /* markers: true, */
    fastscrollend: true,
  },
});
gsap.to(".blocco11", {
  y: "16vh",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".blocco11",
    containerAnimation: tl,
    start: "left 75%",
    toggleActions: "restart none none reverse",
    id: "11",
    /* markers: true, */
    fastscrollend: true,
  },
});
gsap.to(".blocco12", {
  y: "32vh",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".blocco12",
    containerAnimation: tl,
    start: "left 75%",
    toggleActions: "restart none none reverse",
    /* markers: true, */
    fastscrollend: true,
  },
});
gsap.to(".blocco13", {
  y: "16vh",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".blocco13",
    containerAnimation: tl,
    start: "left 75%",
    toggleActions: "restart none none reverse",
    id: "13",
    /* markers: true, */
    fastscrollend: true,
  },
});
gsap.to(".blocco14", {
  y: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".blocco14",
    containerAnimation: tl,
    start: "left 75%",
    toggleActions: "restart none none reverse",
    id: "14",
    /* markers: true, */
    fastscrollend: true,
  },
});
gsap.to(".blocco15", {
  y: "-16vh",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".blocco15",
    containerAnimation: tl,
    start: "left 75%",
    toggleActions: "restart none none reverse",
    id: "15",
    /* markers: true, */
    fastscrollend: true,
  },
});
gsap.to(".blocco16", {
  y: "-32vh",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".blocco16",
    containerAnimation: tl,
    start: "left 75%",
    toggleActions: "restart none none reverse",
    id: "16",
    /* markers: true, */
    fastscrollend: true,
  },
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

let range = arrayRange(0, 142, 1);

// Aggiungi uno spazio tra i numeri utilizzando il tag span con stile CSS
let spacedRange = range.map(number => `<span class="number">${number}</span>`);

document.getElementById("numbers_content").innerHTML = spacedRange.join("");

// ---------------------------------------------------------------
// --------------- LIVELLI --------------- LIVELLI ---------------
// ---------------------------------------------------------------
// --------------- LIVELLI --------------- LIVELLI ---------------
// ---------------------------------------------------------------
// --------------- LIVELLI --------------- LIVELLI ---------------
// ---------------------------------------------------------------

// --------------- CONTAINER 1 ----------------- CONTAINER 1 ----------------------

document.addEventListener("DOMContentLoaded", function () {
  // Numero desiderato di linee nel primo gruppo
  var numLinesGroup1 = 1;

  // Numero desiderato di linee nel secondo gruppo
  var numLinesGroup2 = 1;

  // Numero desiderato di linee nel terzo gruppo
  var numLinesGroup3 = 1;

  // Numero desiderato di linee nel quarto gruppo
  var numLinesGroup4 = 1;

  // Numero desiderato di linee nel quinto gruppo
  var numLinesGroup5 = 2;

  // Numero desiderato di linee nel sesto gruppo
  var numLinesGroup6 = 4;

  // Numero desiderato di linee nel settimo gruppo
  var numLinesGroup7 = 8;

  // Numero desiderato di linee nel ottavo gruppo
  var numLinesGroup8 = 16;

  // Numero desiderato di linee nel nono gruppo
  var numLinesGroup9 = 22;

  // Riferimento al container delle linee
  var lineContainerGroup1 = document.getElementById("lineContainerGroup1");
  var lineContainerGroup2 = document.getElementById("lineContainerGroup2");
  var lineContainerGroup3 = document.getElementById("lineContainerGroup3");
  var lineContainerGroup4 = document.getElementById("lineContainerGroup4");
  var lineContainerGroup5 = document.getElementById("lineContainerGroup5");
  var lineContainerGroup6 = document.getElementById("lineContainerGroup6");
  var lineContainerGroup7 = document.getElementById("lineContainerGroup7");
  var lineContainerGroup8 = document.getElementById("lineContainerGroup8");
  var lineContainerGroup9 = document.getElementById("lineContainerGroup9");

  // Ciclo per generare le linee del primo gruppo
  for (var i = 0; i < numLinesGroup1; i++) {
    var line = document.createElement("div");
    line.className = "line group1";
    lineContainerGroup1.appendChild(line);
  }

  // Ciclo per generare le linee del secondo gruppo
  for (var j = 0; j < numLinesGroup2; j++) {
    var line = document.createElement("div");
    line.className = "line group2";
    lineContainerGroup2.appendChild(line);
  }

  // Ciclo per generare le linee del terzo gruppo
  for (var j = 0; j < numLinesGroup3; j++) {
    var line = document.createElement("div");
    line.className = "line group3";
    lineContainerGroup3.appendChild(line);
  }

  // Ciclo per generare le linee del quarto gruppo
  for (var j = 0; j < numLinesGroup4; j++) {
    var line = document.createElement("div");
    line.className = "line group4";
    lineContainerGroup4.appendChild(line);
  }

  // Ciclo per generare le linee del quinto gruppo
  for (var j = 0; j < numLinesGroup5; j++) {
    var line = document.createElement("div");
    line.className = "line group5";
    line.id = "line_cont1_" + j;
    lineContainerGroup5.appendChild(line);
  }

  // Ciclo per generare le linee del sesto gruppo
  for (var j = 0; j < numLinesGroup6; j++) {
    var line = document.createElement("div");
    line.className = "line group6";
    lineContainerGroup6.appendChild(line);
  }

  // Ciclo per generare le linee del settimo gruppo
  for (var j = 0; j < numLinesGroup7; j++) {
    var line = document.createElement("div");
    line.className = "line group7";
    lineContainerGroup7.appendChild(line);
  }

  // Ciclo per generare le linee del ottavo gruppo
  for (var j = 0; j < numLinesGroup8; j++) {
    var line = document.createElement("div");
    line.className = "line group8";
    lineContainerGroup8.appendChild(line);
  }

  // Ciclo per generare le linee del nono gruppo
  for (var j = 0; j < numLinesGroup9; j++) {
    var line = document.createElement("div");
    line.className = "line group9";
    lineContainerGroup9.appendChild(line);
  }
});

// --------------- CONTAINER 2 ----------------- CONTAINER 2 ----------------------

document.addEventListener("DOMContentLoaded", function () {
  // Numero desiderato di linee nel primo gruppo
  var numLinesGroup1 = 2;

  // Numero desiderato di linee nel secondo gruppo
  var numLinesGroup2 = 2;

  // Numero desiderato di linee nel terzo gruppo
  var numLinesGroup3 = 2;

  // Numero desiderato di linee nel quarto gruppo
  var numLinesGroup4 = 5;

  // Numero desiderato di linee nel quinto gruppo
  var numLinesGroup5 = 10;

  // Numero desiderato di linee nel sesto gruppo
  var numLinesGroup6 = 20;

  // Numero desiderato di linee nel settimo gruppo
  var numLinesGroup7 = 40;

  // Numero desiderato di linee nel ottavo gruppo
  var numLinesGroup8 = 60;

  // Numero desiderato di linee nel nono gruppo
  var numLinesGroup9 = 120;

  // Riferimento al container delle linee
  var lineContainerGroup1 = document.getElementById("lineContainerGroup1-2");
  var lineContainerGroup2 = document.getElementById("lineContainerGroup2-2");
  var lineContainerGroup3 = document.getElementById("lineContainerGroup3-2");
  var lineContainerGroup4 = document.getElementById("lineContainerGroup4-2");
  var lineContainerGroup5 = document.getElementById("lineContainerGroup5-2");
  var lineContainerGroup6 = document.getElementById("lineContainerGroup6-2");
  var lineContainerGroup7 = document.getElementById("lineContainerGroup7-2");
  var lineContainerGroup8 = document.getElementById("lineContainerGroup8-2");
  var lineContainerGroup9 = document.getElementById("lineContainerGroup9-2");

  // Ciclo per generare le linee del primo gruppo
  for (var i = 0; i < numLinesGroup1; i++) {
    var line = document.createElement("div");
    line.className = "line group1";
    lineContainerGroup1.appendChild(line);
  }

  // Ciclo per generare le linee del secondo gruppo
  for (var j = 0; j < numLinesGroup2; j++) {
    var line = document.createElement("div");
    line.className = "line group2";
    lineContainerGroup2.appendChild(line);
  }

  // Ciclo per generare le linee del terzo gruppo
  for (var j = 0; j < numLinesGroup3; j++) {
    var line = document.createElement("div");
    line.className = "line group3";
    lineContainerGroup3.appendChild(line);
  }

  // Ciclo per generare le linee del quarto gruppo
  for (var j = 0; j < numLinesGroup4; j++) {
    var line = document.createElement("div");
    line.className = "line group4";
    lineContainerGroup4.appendChild(line);
  }

  // Ciclo per generare le linee del quinto gruppo
  for (var j = 0; j < numLinesGroup5; j++) {
    var line = document.createElement("div");
    line.className = "line group5";
    line.id = "line_cont2_" + (2 + j);
    lineContainerGroup5.appendChild(line);
  }

  // Ciclo per generare le linee del sesto gruppo
  for (var j = 0; j < numLinesGroup6; j++) {
    var line = document.createElement("div");
    line.className = "line group6";
    lineContainerGroup6.appendChild(line);
  }

  // Ciclo per generare le linee del settimo gruppo
  for (var j = 0; j < numLinesGroup7; j++) {
    var line = document.createElement("div");
    line.className = "line group7";
    lineContainerGroup7.appendChild(line);
  }

  // Ciclo per generare le linee del ottavo gruppo
  for (var j = 0; j < numLinesGroup8; j++) {
    var line = document.createElement("div");
    line.className = "line group8";
    lineContainerGroup8.appendChild(line);
  }

  // Ciclo per generare le linee del nono gruppo
  for (var j = 0; j < numLinesGroup9; j++) {
    var line = document.createElement("div");
    line.className = "line group9";
    lineContainerGroup9.appendChild(line);
  }
});

// --------------- CONTAINER 3 ----------------- CONTAINER 3 ----------------------

document.addEventListener("DOMContentLoaded", function () {
  // Numero desiderato di linee nel primo gruppo
  var numLinesGroup1 = 1;

  // Numero desiderato di linee nel secondo gruppo
  var numLinesGroup2 = 1;

  // Numero desiderato di linee nel terzo gruppo
  var numLinesGroup3 = 1;

  // Numero desiderato di linee nel quarto gruppo
  var numLinesGroup4 = 2;

  // Numero desiderato di linee nel quinto gruppo
  var numLinesGroup5 = 4;

  // Numero desiderato di linee nel sesto gruppo
  var numLinesGroup6 = 8;

  // Numero desiderato di linee nel settimo gruppo
  var numLinesGroup7 = 16;

  // Numero desiderato di linee nel ottavo gruppo
  var numLinesGroup8 = 32;

  // Numero desiderato di linee nel nono gruppo
  var numLinesGroup9 = 1;

  // Riferimento al container delle linee
  var lineContainerGroup1 = document.getElementById("lineContainerGroup1-3");
  var lineContainerGroup2 = document.getElementById("lineContainerGroup2-3");
  var lineContainerGroup3 = document.getElementById("lineContainerGroup3-3");
  var lineContainerGroup4 = document.getElementById("lineContainerGroup4-3");
  var lineContainerGroup5 = document.getElementById("lineContainerGroup5-3");
  var lineContainerGroup6 = document.getElementById("lineContainerGroup6-3");
  var lineContainerGroup7 = document.getElementById("lineContainerGroup7-3");
  var lineContainerGroup8 = document.getElementById("lineContainerGroup8-3");
  var lineContainerGroup9 = document.getElementById("lineContainerGroup9-3");

  // Ciclo per generare le linee del primo gruppo
  for (var i = 0; i < numLinesGroup1; i++) {
    var line = document.createElement("div");
    line.className = "line group1";
    lineContainerGroup1.appendChild(line);
  }

  // Ciclo per generare le linee del secondo gruppo
  for (var j = 0; j < numLinesGroup2; j++) {
    var line = document.createElement("div");
    line.className = "line group2";
    lineContainerGroup2.appendChild(line);
  }

  // Ciclo per generare le linee del terzo gruppo
  for (var j = 0; j < numLinesGroup3; j++) {
    var line = document.createElement("div");
    line.className = "line group3";
    lineContainerGroup3.appendChild(line);
  }

  // Ciclo per generare le linee del quarto gruppo
  for (var j = 0; j < numLinesGroup4; j++) {
    var line = document.createElement("div");
    line.className = "line group4";
    lineContainerGroup4.appendChild(line);
  }

  // Ciclo per generare le linee del quinto gruppo
  for (var j = 0; j < numLinesGroup5; j++) {
    var line = document.createElement("div");
    line.className = "line group5";
    line.id = "line_cont3_" + (10 + j);
    lineContainerGroup5.appendChild(line);
  }

  // Ciclo per generare le linee del sesto gruppo
  for (var j = 0; j < numLinesGroup6; j++) {
    var line = document.createElement("div");
    line.className = "line group6";
    lineContainerGroup6.appendChild(line);
  }

  // Ciclo per generare le linee del settimo gruppo
  for (var j = 0; j < numLinesGroup7; j++) {
    var line = document.createElement("div");
    line.className = "line group7";
    lineContainerGroup7.appendChild(line);
  }

  // Ciclo per generare le linee del ottavo gruppo
  for (var j = 0; j < numLinesGroup8; j++) {
    var line = document.createElement("div");
    line.className = "line group8";
    lineContainerGroup8.appendChild(line);
  }

  // Ciclo per generare le linee del nono gruppo
  for (var j = 0; j < numLinesGroup9; j++) {
    var line = document.createElement("div");
    line.className = "line group9";
    lineContainerGroup9.appendChild(line);
  }
});

// --------------- CONTAINER 4 ----------------- CONTAINER 4 ----------------------

document.addEventListener("DOMContentLoaded", function () {
  // Numero desiderato di linee nel primo gruppo
  var numLinesGroup1 = 1;

  // Numero desiderato di linee nel secondo gruppo
  var numLinesGroup2 = 2;

  // Numero desiderato di linee nel terzo gruppo
  var numLinesGroup3 = 5;

  // Numero desiderato di linee nel quarto gruppo
  var numLinesGroup4 = 10;

  // Numero desiderato di linee nel quinto gruppo
  var numLinesGroup5 = 20;

  // Numero desiderato di linee nel sesto gruppo
  var numLinesGroup6 = 40;

  // Numero desiderato di linee nel settimo gruppo
  var numLinesGroup7 = 80;

  // Numero desiderato di linee nel ottavo gruppo
  var numLinesGroup8 = 160;

  // Numero desiderato di linee nel nono gruppo
  var numLinesGroup9 = 220;

  // Riferimento al container delle linee
  var lineContainerGroup1 = document.getElementById("lineContainerGroup1-4");
  var lineContainerGroup2 = document.getElementById("lineContainerGroup2-4");
  var lineContainerGroup3 = document.getElementById("lineContainerGroup3-4");
  var lineContainerGroup4 = document.getElementById("lineContainerGroup4-4");
  var lineContainerGroup5 = document.getElementById("lineContainerGroup5-4");
  var lineContainerGroup6 = document.getElementById("lineContainerGroup6-4");
  var lineContainerGroup7 = document.getElementById("lineContainerGroup7-4");
  var lineContainerGroup8 = document.getElementById("lineContainerGroup8-4");
  var lineContainerGroup9 = document.getElementById("lineContainerGroup9-4");

  // Ciclo per generare le linee del primo gruppo
  for (var i = 0; i < numLinesGroup1; i++) {
    var line = document.createElement("div");
    line.className = "line group1";
    lineContainerGroup1.appendChild(line);
  }

  // Ciclo per generare le linee del secondo gruppo
  for (var j = 0; j < numLinesGroup2; j++) {
    var line = document.createElement("div");
    line.className = "line group2";
    lineContainerGroup2.appendChild(line);
  }

  // Ciclo per generare le linee del terzo gruppo
  for (var j = 0; j < numLinesGroup3; j++) {
    var line = document.createElement("div");
    line.className = "line group3";
    lineContainerGroup3.appendChild(line);
  }

  // Ciclo per generare le linee del quarto gruppo
  for (var j = 0; j < numLinesGroup4; j++) {
    var line = document.createElement("div");
    line.className = "line group4";
    lineContainerGroup4.appendChild(line);
  }

  // Ciclo per generare le linee del quinto gruppo
  for (var j = 0; j < numLinesGroup5; j++) {
    var line = document.createElement("div");
    line.className = "line group5";
    line.id = "line_cont4_" + (14 + j);
    lineContainerGroup5.appendChild(line);
  }

  // Ciclo per generare le linee del sesto gruppo
  for (var j = 0; j < numLinesGroup6; j++) {
    var line = document.createElement("div");
    line.className = "line group6";
    lineContainerGroup6.appendChild(line);
  }

  // Ciclo per generare le linee del settimo gruppo
  for (var j = 0; j < numLinesGroup7; j++) {
    var line = document.createElement("div");
    line.className = "line group7";
    lineContainerGroup7.appendChild(line);
  }

  // Ciclo per generare le linee del ottavo gruppo
  for (var j = 0; j < numLinesGroup8; j++) {
    var line = document.createElement("div");
    line.className = "line group8";
    lineContainerGroup8.appendChild(line);
  }

  // Ciclo per generare le linee del nono gruppo
  for (var j = 0; j < numLinesGroup9; j++) {
    var line = document.createElement("div");
    line.className = "line group9";
    lineContainerGroup9.appendChild(line);
  }
});

// --------------- CONTAINER 5 ----------------- CONTAINER 5 ----------------------

document.addEventListener("DOMContentLoaded", function () {
  // Numero desiderato di linee nel primo gruppo
  var numLinesGroup1 = 1;

  // Numero desiderato di linee nel secondo gruppo
  var numLinesGroup2 = 1;

  // Numero desiderato di linee nel terzo gruppo
  var numLinesGroup3 = 2;

  // Numero desiderato di linee nel quarto gruppo
  var numLinesGroup4 = 5;

  // Numero desiderato di linee nel quinto gruppo
  var numLinesGroup5 = 10;

  // Numero desiderato di linee nel sesto gruppo
  var numLinesGroup6 = 20;

  // Numero desiderato di linee nel settimo gruppo
  var numLinesGroup7 = 40;

  // Numero desiderato di linee nel ottavo gruppo
  var numLinesGroup8 = 60;

  // Numero desiderato di linee nel nono gruppo
  var numLinesGroup9 = 120;

  // Riferimento al container delle linee
  var lineContainerGroup1 = document.getElementById("lineContainerGroup1-5");
  var lineContainerGroup2 = document.getElementById("lineContainerGroup2-5");
  var lineContainerGroup3 = document.getElementById("lineContainerGroup3-5");
  var lineContainerGroup4 = document.getElementById("lineContainerGroup4-5");
  var lineContainerGroup5 = document.getElementById("lineContainerGroup5-5");
  var lineContainerGroup6 = document.getElementById("lineContainerGroup6-5");
  var lineContainerGroup7 = document.getElementById("lineContainerGroup7-5");
  var lineContainerGroup8 = document.getElementById("lineContainerGroup8-5");
  var lineContainerGroup9 = document.getElementById("lineContainerGroup9-5");

  // Ciclo per generare le linee del primo gruppo
  for (var i = 0; i < numLinesGroup1; i++) {
    var line = document.createElement("div");
    line.className = "line group1";
    lineContainerGroup1.appendChild(line);
  }

  // Ciclo per generare le linee del secondo gruppo
  for (var j = 0; j < numLinesGroup2; j++) {
    var line = document.createElement("div");
    line.className = "line group2";
    lineContainerGroup2.appendChild(line);
  }

  // Ciclo per generare le linee del terzo gruppo
  for (var j = 0; j < numLinesGroup3; j++) {
    var line = document.createElement("div");
    line.className = "line group3";
    lineContainerGroup3.appendChild(line);
  }

  // Ciclo per generare le linee del quarto gruppo
  for (var j = 0; j < numLinesGroup4; j++) {
    var line = document.createElement("div");
    line.className = "line group4";
    lineContainerGroup4.appendChild(line);
  }

  // Ciclo per generare le linee del quinto gruppo
  for (var j = 0; j < numLinesGroup5; j++) {
    var line = document.createElement("div");
    line.className = "line group5";
    line.id = "line_cont5_" + (27 + j);
    lineContainerGroup5.appendChild(line);
  }

  // Ciclo per generare le linee del sesto gruppo
  for (var j = 0; j < numLinesGroup6; j++) {
    var line = document.createElement("div");
    line.className = "line group6";
    lineContainerGroup6.appendChild(line);
  }

  // Ciclo per generare le linee del settimo gruppo
  for (var j = 0; j < numLinesGroup7; j++) {
    var line = document.createElement("div");
    line.className = "line group7";
    lineContainerGroup7.appendChild(line);
  }

  // Ciclo per generare le linee del ottavo gruppo
  for (var j = 0; j < numLinesGroup8; j++) {
    var line = document.createElement("div");
    line.className = "line group8";
    lineContainerGroup8.appendChild(line);
  }

  // Ciclo per generare le linee del nono gruppo
  for (var j = 0; j < numLinesGroup9; j++) {
    var line = document.createElement("div");
    line.className = "line group9";
    lineContainerGroup9.appendChild(line);
  }
});

// --------------- CONTAINER 6 ----------------- CONTAINER 6 ----------------------

document.addEventListener("DOMContentLoaded", function () {
  // Numero desiderato di linee nel primo gruppo
  var numLinesGroup1 = 1;

  // Numero desiderato di linee nel secondo gruppo
  var numLinesGroup2 = 2;

  // Numero desiderato di linee nel terzo gruppo
  var numLinesGroup3 = 5;

  // Numero desiderato di linee nel quarto gruppo
  var numLinesGroup4 = 10;

  // Numero desiderato di linee nel quinto gruppo
  var numLinesGroup5 = 30;

  // Numero desiderato di linee nel sesto gruppo
  var numLinesGroup6 = 60;

  // Numero desiderato di linee nel settimo gruppo
  var numLinesGroup7 = 90;

  // Numero desiderato di linee nel ottavo gruppo
  var numLinesGroup8 = 260;

  // Numero desiderato di linee nel nono gruppo
  var numLinesGroup9 = 340;

  // Riferimento al container delle linee
  var lineContainerGroup1 = document.getElementById("lineContainerGroup1-6");
  var lineContainerGroup2 = document.getElementById("lineContainerGroup2-6");
  var lineContainerGroup3 = document.getElementById("lineContainerGroup3-6");
  var lineContainerGroup4 = document.getElementById("lineContainerGroup4-6");
  var lineContainerGroup5 = document.getElementById("lineContainerGroup5-6");
  var lineContainerGroup6 = document.getElementById("lineContainerGroup6-6");
  var lineContainerGroup7 = document.getElementById("lineContainerGroup7-6");
  var lineContainerGroup8 = document.getElementById("lineContainerGroup8-6");
  var lineContainerGroup9 = document.getElementById("lineContainerGroup9-6");

  // Ciclo per generare le linee del primo gruppo
  for (var i = 0; i < numLinesGroup1; i++) {
    var line = document.createElement("div");
    line.className = "line group1";
    lineContainerGroup1.appendChild(line);
  }

  // Ciclo per generare le linee del secondo gruppo
  for (var j = 0; j < numLinesGroup2; j++) {
    var line = document.createElement("div");
    line.className = "line group2";
    lineContainerGroup2.appendChild(line);
  }

  // Ciclo per generare le linee del terzo gruppo
  for (var j = 0; j < numLinesGroup3; j++) {
    var line = document.createElement("div");
    line.className = "line group3";
    lineContainerGroup3.appendChild(line);
  }

  // Ciclo per generare le linee del quarto gruppo
  for (var j = 0; j < numLinesGroup4; j++) {
    var line = document.createElement("div");
    line.className = "line group4";
    lineContainerGroup4.appendChild(line);
  }

  // Ciclo per generare le linee del quinto gruppo
  for (var j = 0; j < numLinesGroup5; j++) {
    var line = document.createElement("div");
    line.className = "line group5";
    line.id = "line_cont6_" + (33 + j);
    lineContainerGroup5.appendChild(line);
  }

  // Ciclo per generare le linee del sesto gruppo
  for (var j = 0; j < numLinesGroup6; j++) {
    var line = document.createElement("div");
    line.className = "line group6";
    lineContainerGroup6.appendChild(line);
  }

  // Ciclo per generare le linee del settimo gruppo
  for (var j = 0; j < numLinesGroup7; j++) {
    var line = document.createElement("div");
    line.className = "line group7";
    lineContainerGroup7.appendChild(line);
  }

  // Ciclo per generare le linee del ottavo gruppo
  for (var j = 0; j < numLinesGroup8; j++) {
    var line = document.createElement("div");
    line.className = "line group8";
    lineContainerGroup8.appendChild(line);
  }

  // Ciclo per generare le linee del nono gruppo
  for (var j = 0; j < numLinesGroup9; j++) {
    var line = document.createElement("div");
    line.className = "line group9";
    lineContainerGroup9.appendChild(line);
  }
});

// --------------- CONTAINER 7 ----------------- CONTAINER 7 ----------------------

document.addEventListener("DOMContentLoaded", function () {
  // Numero desiderato di linee nel primo gruppo
  var numLinesGroup1 = 1;

  // Numero desiderato di linee nel secondo gruppo
  var numLinesGroup2 = 1;

  // Numero desiderato di linee nel terzo gruppo
  var numLinesGroup3 = 2;

  // Numero desiderato di linee nel quarto gruppo
  var numLinesGroup4 = 5;

  // Numero desiderato di linee nel quinto gruppo
  var numLinesGroup5 = 10;

  // Numero desiderato di linee nel sesto gruppo
  var numLinesGroup6 = 20;

  // Numero desiderato di linee nel settimo gruppo
  var numLinesGroup7 = 40;

  // Numero desiderato di linee nel ottavo gruppo
  var numLinesGroup8 = 60;

  // Numero desiderato di linee nel nono gruppo
  var numLinesGroup9 = 120;

  // Riferimento al container delle linee
  var lineContainerGroup1 = document.getElementById("lineContainerGroup1-7");
  var lineContainerGroup2 = document.getElementById("lineContainerGroup2-7");
  var lineContainerGroup3 = document.getElementById("lineContainerGroup3-7");
  var lineContainerGroup4 = document.getElementById("lineContainerGroup4-7");
  var lineContainerGroup5 = document.getElementById("lineContainerGroup5-7");
  var lineContainerGroup6 = document.getElementById("lineContainerGroup6-7");
  var lineContainerGroup7 = document.getElementById("lineContainerGroup7-7");
  var lineContainerGroup8 = document.getElementById("lineContainerGroup8-7");
  var lineContainerGroup9 = document.getElementById("lineContainerGroup9-7");

  // Ciclo per generare le linee del primo gruppo
  for (var i = 0; i < numLinesGroup1; i++) {
    var line = document.createElement("div");
    line.className = "line group1";
    lineContainerGroup1.appendChild(line);
  }

  // Ciclo per generare le linee del secondo gruppo
  for (var j = 0; j < numLinesGroup2; j++) {
    var line = document.createElement("div");
    line.className = "line group2";
    lineContainerGroup2.appendChild(line);
  }

  // Ciclo per generare le linee del terzo gruppo
  for (var j = 0; j < numLinesGroup3; j++) {
    var line = document.createElement("div");
    line.className = "line group3";
    lineContainerGroup3.appendChild(line);
  }

  // Ciclo per generare le linee del quarto gruppo
  for (var j = 0; j < numLinesGroup4; j++) {
    var line = document.createElement("div");
    line.className = "line group4";
    lineContainerGroup4.appendChild(line);
  }

  // Ciclo per generare le linee del quinto gruppo
  for (var j = 0; j < numLinesGroup5; j++) {
    var line = document.createElement("div");
    line.className = "line group5";
    line.id = "line_cont7_" + (54 + j);
    lineContainerGroup5.appendChild(line);
  }

  // Ciclo per generare le linee del sesto gruppo
  for (var j = 0; j < numLinesGroup6; j++) {
    var line = document.createElement("div");
    line.className = "line group6";
    lineContainerGroup6.appendChild(line);
  }

  // Ciclo per generare le linee del settimo gruppo
  for (var j = 0; j < numLinesGroup7; j++) {
    var line = document.createElement("div");
    line.className = "line group7";
    lineContainerGroup7.appendChild(line);
  }

  // Ciclo per generare le linee del ottavo gruppo
  for (var j = 0; j < numLinesGroup8; j++) {
    var line = document.createElement("div");
    line.className = "line group8";
    lineContainerGroup8.appendChild(line);
  }

  // Ciclo per generare le linee del nono gruppo
  for (var j = 0; j < numLinesGroup9; j++) {
    var line = document.createElement("div");
    line.className = "line group9";
    lineContainerGroup9.appendChild(line);
  }
});

// --------------- CONTAINER 8 ----------------- CONTAINER 8 ----------------------

document.addEventListener("DOMContentLoaded", function () {
  // Numero desiderato di linee nel primo gruppo
  var numLinesGroup1 = 1;

  // Numero desiderato di linee nel secondo gruppo
  var numLinesGroup2 = 1;

  // Numero desiderato di linee nel terzo gruppo
  var numLinesGroup3 = 2;

  // Numero desiderato di linee nel quarto gruppo
  var numLinesGroup4 = 5;

  // Numero desiderato di linee nel quinto gruppo
  var numLinesGroup5 = 10;

  // Numero desiderato di linee nel sesto gruppo
  var numLinesGroup6 = 20;

  // Numero desiderato di linee nel settimo gruppo
  var numLinesGroup7 = 40;

  // Numero desiderato di linee nel ottavo gruppo
  var numLinesGroup8 = 60;

  // Numero desiderato di linee nel nono gruppo
  var numLinesGroup9 = 120;

  // Riferimento al container delle linee
  var lineContainerGroup1 = document.getElementById("lineContainerGroup1-8");
  var lineContainerGroup2 = document.getElementById("lineContainerGroup2-8");
  var lineContainerGroup3 = document.getElementById("lineContainerGroup3-8");
  var lineContainerGroup4 = document.getElementById("lineContainerGroup4-8");
  var lineContainerGroup5 = document.getElementById("lineContainerGroup5-8");
  var lineContainerGroup6 = document.getElementById("lineContainerGroup6-8");
  var lineContainerGroup7 = document.getElementById("lineContainerGroup7-8");
  var lineContainerGroup8 = document.getElementById("lineContainerGroup8-8");
  var lineContainerGroup9 = document.getElementById("lineContainerGroup9-8");

  // Ciclo per generare le linee del primo gruppo
  for (var i = 0; i < numLinesGroup1; i++) {
    var line = document.createElement("div");
    line.className = "line group1";
    lineContainerGroup1.appendChild(line);
  }

  // Ciclo per generare le linee del secondo gruppo
  for (var j = 0; j < numLinesGroup2; j++) {
    var line = document.createElement("div");
    line.className = "line group2";
    lineContainerGroup2.appendChild(line);
  }

  // Ciclo per generare le linee del terzo gruppo
  for (var j = 0; j < numLinesGroup3; j++) {
    var line = document.createElement("div");
    line.className = "line group3";
    lineContainerGroup3.appendChild(line);
  }

  // Ciclo per generare le linee del quarto gruppo
  for (var j = 0; j < numLinesGroup4; j++) {
    var line = document.createElement("div");
    line.className = "line group4";
    lineContainerGroup4.appendChild(line);
  }

  // Ciclo per generare le linee del quinto gruppo
  for (var j = 0; j < numLinesGroup5; j++) {
    var line = document.createElement("div");
    line.className = "line group5";
    line.id = "line_cont8_" + (60 + j);
    lineContainerGroup5.appendChild(line);
  }

  // Ciclo per generare le linee del sesto gruppo
  for (var j = 0; j < numLinesGroup6; j++) {
    var line = document.createElement("div");
    line.className = "line group6";
    lineContainerGroup6.appendChild(line);
  }

  // Ciclo per generare le linee del settimo gruppo
  for (var j = 0; j < numLinesGroup7; j++) {
    var line = document.createElement("div");
    line.className = "line group7";
    lineContainerGroup7.appendChild(line);
  }

  // Ciclo per generare le linee del ottavo gruppo
  for (var j = 0; j < numLinesGroup8; j++) {
    var line = document.createElement("div");
    line.className = "line group8";
    lineContainerGroup8.appendChild(line);
  }

  // Ciclo per generare le linee del nono gruppo
  for (var j = 0; j < numLinesGroup9; j++) {
    var line = document.createElement("div");
    line.className = "line group9";
    lineContainerGroup9.appendChild(line);
  }
});

// --------------- CONTAINER 9 ----------------- CONTAINER 9 ----------------------

document.addEventListener("DOMContentLoaded", function () {
  // Numero desiderato di linee nel primo gruppo
  var numLinesGroup1 = 2;

  // Numero desiderato di linee nel secondo gruppo
  var numLinesGroup2 = 5;

  // Numero desiderato di linee nel terzo gruppo
  var numLinesGroup3 = 10;

  // Numero desiderato di linee nel quarto gruppo
  var numLinesGroup4 = 20;

  // Numero desiderato di linee nel quinto gruppo
  var numLinesGroup5 = 40;

  // Numero desiderato di linee nel sesto gruppo
  var numLinesGroup6 = 80;

  // Numero desiderato di linee nel settimo gruppo
  var numLinesGroup7 = 160;

  // Numero desiderato di linee nel ottavo gruppo
  var numLinesGroup8 = 320;

  // Numero desiderato di linee nel nono gruppo
  var numLinesGroup9 = 640;

  // Riferimento al container delle linee
  var lineContainerGroup1 = document.getElementById("lineContainerGroup1-9");
  var lineContainerGroup2 = document.getElementById("lineContainerGroup2-9");
  var lineContainerGroup3 = document.getElementById("lineContainerGroup3-9");
  var lineContainerGroup4 = document.getElementById("lineContainerGroup4-9");
  var lineContainerGroup5 = document.getElementById("lineContainerGroup5-9");
  var lineContainerGroup6 = document.getElementById("lineContainerGroup6-9");
  var lineContainerGroup7 = document.getElementById("lineContainerGroup7-9");
  var lineContainerGroup8 = document.getElementById("lineContainerGroup8-9");
  var lineContainerGroup9 = document.getElementById("lineContainerGroup9-9");

  // Ciclo per generare le linee del primo gruppo
  for (var i = 0; i < numLinesGroup1; i++) {
    var line = document.createElement("div");
    line.className = "line group1";
    lineContainerGroup1.appendChild(line);
  }

  // Ciclo per generare le linee del secondo gruppo
  for (var j = 0; j < numLinesGroup2; j++) {
    var line = document.createElement("div");
    line.className = "line group2";
    lineContainerGroup2.appendChild(line);
  }

  // Ciclo per generare le linee del terzo gruppo
  for (var j = 0; j < numLinesGroup3; j++) {
    var line = document.createElement("div");
    line.className = "line group3";
    lineContainerGroup3.appendChild(line);
  }

  // Ciclo per generare le linee del quarto gruppo
  for (var j = 0; j < numLinesGroup4; j++) {
    var line = document.createElement("div");
    line.className = "line group4";
    lineContainerGroup4.appendChild(line);
  }

  // Ciclo per generare le linee del quinto gruppo
  for (var j = 0; j < numLinesGroup5; j++) {
    var line = document.createElement("div");
    line.className = "line group5";
    line.id = "line_cont9_" + (64 + j);
    lineContainerGroup5.appendChild(line);
  }

  // Ciclo per generare le linee del sesto gruppo
  for (var j = 0; j < numLinesGroup6; j++) {
    var line = document.createElement("div");
    line.className = "line group6";
    lineContainerGroup6.appendChild(line);
  }

  // Ciclo per generare le linee del settimo gruppo
  for (var j = 0; j < numLinesGroup7; j++) {
    var line = document.createElement("div");
    line.className = "line group7";
    lineContainerGroup7.appendChild(line);
  }

  // Ciclo per generare le linee del ottavo gruppo
  for (var j = 0; j < numLinesGroup8; j++) {
    var line = document.createElement("div");
    line.className = "line group8";
    lineContainerGroup8.appendChild(line);
  }

  // Ciclo per generare le linee del nono gruppo
  for (var j = 0; j < numLinesGroup9; j++) {
    var line = document.createElement("div");
    line.className = "line group9";
    lineContainerGroup9.appendChild(line);
  }
});

// --------------- CONTAINER 10 ----------------- CONTAINER 10 ----------------------

document.addEventListener("DOMContentLoaded", function () {
  // Numero desiderato di linee nel primo gruppo
  var numLinesGroup1 = 1;

  // Numero desiderato di linee nel secondo gruppo
  var numLinesGroup2 = 2;

  // Numero desiderato di linee nel terzo gruppo
  var numLinesGroup3 = 5;

  // Numero desiderato di linee nel quarto gruppo
  var numLinesGroup4 = 10;

  // Numero desiderato di linee nel quinto gruppo
  var numLinesGroup5 = 20;

  // Numero desiderato di linee nel sesto gruppo
  var numLinesGroup6 = 40;

  // Numero desiderato di linee nel settimo gruppo
  var numLinesGroup7 = 80;

  // Numero desiderato di linee nel ottavo gruppo
  var numLinesGroup8 = 160;

  // Numero desiderato di linee nel nono gruppo
  var numLinesGroup9 = 220;

  // Riferimento al container delle linee
  var lineContainerGroup1 = document.getElementById("lineContainerGroup1-10");
  var lineContainerGroup2 = document.getElementById("lineContainerGroup2-10");
  var lineContainerGroup3 = document.getElementById("lineContainerGroup3-10");
  var lineContainerGroup4 = document.getElementById("lineContainerGroup4-10");
  var lineContainerGroup5 = document.getElementById("lineContainerGroup5-10");
  var lineContainerGroup6 = document.getElementById("lineContainerGroup6-10");
  var lineContainerGroup7 = document.getElementById("lineContainerGroup7-10");
  var lineContainerGroup8 = document.getElementById("lineContainerGroup8-10");
  var lineContainerGroup9 = document.getElementById("lineContainerGroup9-10");

  // Ciclo per generare le linee del primo gruppo
  for (var i = 0; i < numLinesGroup1; i++) {
    var line = document.createElement("div");
    line.className = "line group1";
    lineContainerGroup1.appendChild(line);
  }

  // Ciclo per generare le linee del secondo gruppo
  for (var j = 0; j < numLinesGroup2; j++) {
    var line = document.createElement("div");
    line.className = "line group2";
    lineContainerGroup2.appendChild(line);
  }

  // Ciclo per generare le linee del terzo gruppo
  for (var j = 0; j < numLinesGroup3; j++) {
    var line = document.createElement("div");
    line.className = "line group3";
    lineContainerGroup3.appendChild(line);
  }

  // Ciclo per generare le linee del quarto gruppo
  for (var j = 0; j < numLinesGroup4; j++) {
    var line = document.createElement("div");
    line.className = "line group4";
    lineContainerGroup4.appendChild(line);
  }

  // Ciclo per generare le linee del quinto gruppo
  for (var j = 0; j < numLinesGroup5; j++) {
    var line = document.createElement("div");
    line.className = "line group5";
    line.id = "line_cont10_" + (85 + j);
    lineContainerGroup5.appendChild(line);
  }

  // Ciclo per generare le linee del sesto gruppo
  for (var j = 0; j < numLinesGroup6; j++) {
    var line = document.createElement("div");
    line.className = "line group6";
    lineContainerGroup6.appendChild(line);
  }

  // Ciclo per generare le linee del settimo gruppo
  for (var j = 0; j < numLinesGroup7; j++) {
    var line = document.createElement("div");
    line.className = "line group7";
    lineContainerGroup7.appendChild(line);
  }

  // Ciclo per generare le linee del ottavo gruppo
  for (var j = 0; j < numLinesGroup8; j++) {
    var line = document.createElement("div");
    line.className = "line group8";
    lineContainerGroup8.appendChild(line);
  }

  // Ciclo per generare le linee del nono gruppo
  for (var j = 0; j < numLinesGroup9; j++) {
    var line = document.createElement("div");
    line.className = "line group9";
    lineContainerGroup9.appendChild(line);
  }
});

// --------------- CONTAINER 11 ----------------- CONTAINER 11 ----------------------

document.addEventListener("DOMContentLoaded", function () {
  // Numero desiderato di linee nel primo gruppo
  var numLinesGroup1 = 1;

  // Numero desiderato di linee nel secondo gruppo
  var numLinesGroup2 = 2;

  // Numero desiderato di linee nel terzo gruppo
  var numLinesGroup3 = 5;

  // Numero desiderato di linee nel quarto gruppo
  var numLinesGroup4 = 10;

  // Numero desiderato di linee nel quinto gruppo
  var numLinesGroup5 = 20;

  // Numero desiderato di linee nel sesto gruppo
  var numLinesGroup6 = 40;

  // Numero desiderato di linee nel settimo gruppo
  var numLinesGroup7 = 80;

  // Numero desiderato di linee nel ottavo gruppo
  var numLinesGroup8 = 160;

  // Numero desiderato di linee nel nono gruppo
  var numLinesGroup9 = 220;

  // Riferimento al container delle linee
  var lineContainerGroup1 = document.getElementById("lineContainerGroup1-11");
  var lineContainerGroup2 = document.getElementById("lineContainerGroup2-11");
  var lineContainerGroup3 = document.getElementById("lineContainerGroup3-11");
  var lineContainerGroup4 = document.getElementById("lineContainerGroup4-11");
  var lineContainerGroup5 = document.getElementById("lineContainerGroup5-11");
  var lineContainerGroup6 = document.getElementById("lineContainerGroup6-11");
  var lineContainerGroup7 = document.getElementById("lineContainerGroup7-11");
  var lineContainerGroup8 = document.getElementById("lineContainerGroup8-11");
  var lineContainerGroup9 = document.getElementById("lineContainerGroup9-11");

  // Ciclo per generare le linee del primo gruppo
  for (var i = 0; i < numLinesGroup1; i++) {
    var line = document.createElement("div");
    line.className = "line group1";
    lineContainerGroup1.appendChild(line);
  }

  // Ciclo per generare le linee del secondo gruppo
  for (var j = 0; j < numLinesGroup2; j++) {
    var line = document.createElement("div");
    line.className = "line group2";
    lineContainerGroup2.appendChild(line);
  }

  // Ciclo per generare le linee del terzo gruppo
  for (var j = 0; j < numLinesGroup3; j++) {
    var line = document.createElement("div");
    line.className = "line group3";
    lineContainerGroup3.appendChild(line);
  }

  // Ciclo per generare le linee del quarto gruppo
  for (var j = 0; j < numLinesGroup4; j++) {
    var line = document.createElement("div");
    line.className = "line group4";
    lineContainerGroup4.appendChild(line);
  }

  // Ciclo per generare le linee del quinto gruppo
  for (var j = 0; j < numLinesGroup5; j++) {
    var line = document.createElement("div");
    line.className = "line group5";
    line.id = "line_cont11_" + (98 + j);
    lineContainerGroup5.appendChild(line);
  }

  // Ciclo per generare le linee del sesto gruppo
  for (var j = 0; j < numLinesGroup6; j++) {
    var line = document.createElement("div");
    line.className = "line group6";
    lineContainerGroup6.appendChild(line);
  }

  // Ciclo per generare le linee del settimo gruppo
  for (var j = 0; j < numLinesGroup7; j++) {
    var line = document.createElement("div");
    line.className = "line group7";
    lineContainerGroup7.appendChild(line);
  }

  // Ciclo per generare le linee del ottavo gruppo
  for (var j = 0; j < numLinesGroup8; j++) {
    var line = document.createElement("div");
    line.className = "line group8";
    lineContainerGroup8.appendChild(line);
  }

  // Ciclo per generare le linee del nono gruppo
  for (var j = 0; j < numLinesGroup9; j++) {
    var line = document.createElement("div");
    line.className = "line group9";
    lineContainerGroup9.appendChild(line);
  }
});

// --------------- CONTAINER 12 ----------------- CONTAINER 12 ----------------------

document.addEventListener("DOMContentLoaded", function () {
  // Numero desiderato di linee nel primo gruppo
  var numLinesGroup1 = 1;

  // Numero desiderato di linee nel secondo gruppo
  var numLinesGroup2 = 2;

  // Numero desiderato di linee nel terzo gruppo
  var numLinesGroup3 = 5;

  // Numero desiderato di linee nel quarto gruppo
  var numLinesGroup4 = 10;

  // Numero desiderato di linee nel quinto gruppo
  var numLinesGroup5 = 20;

  // Numero desiderato di linee nel sesto gruppo
  var numLinesGroup6 = 40;

  // Numero desiderato di linee nel settimo gruppo
  var numLinesGroup7 = 80;

  // Numero desiderato di linee nel ottavo gruppo
  var numLinesGroup8 = 160;

  // Numero desiderato di linee nel nono gruppo
  var numLinesGroup9 = 220;

  // Riferimento al container delle linee
  var lineContainerGroup1 = document.getElementById("lineContainerGroup1-12");
  var lineContainerGroup2 = document.getElementById("lineContainerGroup2-12");
  var lineContainerGroup3 = document.getElementById("lineContainerGroup3-12");
  var lineContainerGroup4 = document.getElementById("lineContainerGroup4-12");
  var lineContainerGroup5 = document.getElementById("lineContainerGroup5-12");
  var lineContainerGroup6 = document.getElementById("lineContainerGroup6-12");
  var lineContainerGroup7 = document.getElementById("lineContainerGroup7-12");
  var lineContainerGroup8 = document.getElementById("lineContainerGroup8-12");
  var lineContainerGroup9 = document.getElementById("lineContainerGroup9-12");

  // Ciclo per generare le linee del primo gruppo
  for (var i = 0; i < numLinesGroup1; i++) {
    var line = document.createElement("div");
    line.className = "line group1";
    lineContainerGroup1.appendChild(line);
  }

  // Ciclo per generare le linee del secondo gruppo
  for (var j = 0; j < numLinesGroup2; j++) {
    var line = document.createElement("div");
    line.className = "line group2";
    lineContainerGroup2.appendChild(line);
  }

  // Ciclo per generare le linee del terzo gruppo
  for (var j = 0; j < numLinesGroup3; j++) {
    var line = document.createElement("div");
    line.className = "line group3";
    lineContainerGroup3.appendChild(line);
  }

  // Ciclo per generare le linee del quarto gruppo
  for (var j = 0; j < numLinesGroup4; j++) {
    var line = document.createElement("div");
    line.className = "line group4";
    lineContainerGroup4.appendChild(line);
  }

  // Ciclo per generare le linee del quinto gruppo
  for (var j = 0; j < numLinesGroup5; j++) {
    var line = document.createElement("div");
    line.className = "line group5";
    line.id = "line_cont12_" + (115 + j);
    lineContainerGroup5.appendChild(line);
  }

  // Ciclo per generare le linee del sesto gruppo
  for (var j = 0; j < numLinesGroup6; j++) {
    var line = document.createElement("div");
    line.className = "line group6";
    lineContainerGroup6.appendChild(line);
  }

  // Ciclo per generare le linee del settimo gruppo
  for (var j = 0; j < numLinesGroup7; j++) {
    var line = document.createElement("div");
    line.className = "line group7";
    lineContainerGroup7.appendChild(line);
  }

  // Ciclo per generare le linee del ottavo gruppo
  for (var j = 0; j < numLinesGroup8; j++) {
    var line = document.createElement("div");
    line.className = "line group8";
    lineContainerGroup8.appendChild(line);
  }

  // Ciclo per generare le linee del nono gruppo
  for (var j = 0; j < numLinesGroup9; j++) {
    var line = document.createElement("div");
    line.className = "line group9";
    lineContainerGroup9.appendChild(line);
  }
});

// --------------- CONTAINER 13 ----------------- CONTAINER 13 ----------------------

document.addEventListener("DOMContentLoaded", function () {
  // Numero desiderato di linee nel primo gruppo
  var numLinesGroup1 = 1;

  // Numero desiderato di linee nel secondo gruppo
  var numLinesGroup2 = 1;

  // Numero desiderato di linee nel terzo gruppo
  var numLinesGroup3 = 2;

  // Numero desiderato di linee nel quarto gruppo
  var numLinesGroup4 = 5;

  // Numero desiderato di linee nel quinto gruppo
  var numLinesGroup5 = 10;

  // Numero desiderato di linee nel sesto gruppo
  var numLinesGroup6 = 20;

  // Numero desiderato di linee nel settimo gruppo
  var numLinesGroup7 = 40;

  // Numero desiderato di linee nel ottavo gruppo
  var numLinesGroup8 = 80;

  // Numero desiderato di linee nel nono gruppo
  var numLinesGroup9 = 160;

  // Riferimento al container delle linee
  var lineContainerGroup1 = document.getElementById("lineContainerGroup1-13");
  var lineContainerGroup2 = document.getElementById("lineContainerGroup2-13");
  var lineContainerGroup3 = document.getElementById("lineContainerGroup3-13");
  var lineContainerGroup4 = document.getElementById("lineContainerGroup4-13");
  var lineContainerGroup5 = document.getElementById("lineContainerGroup5-13");
  var lineContainerGroup6 = document.getElementById("lineContainerGroup6-13");
  var lineContainerGroup7 = document.getElementById("lineContainerGroup7-13");
  var lineContainerGroup8 = document.getElementById("lineContainerGroup8-13");
  var lineContainerGroup9 = document.getElementById("lineContainerGroup9-13");

  // Ciclo per generare le linee del primo gruppo
  for (var i = 0; i < numLinesGroup1; i++) {
    var line = document.createElement("div");
    line.className = "line group1";
    lineContainerGroup1.appendChild(line);
  }

  // Ciclo per generare le linee del secondo gruppo
  for (var j = 0; j < numLinesGroup2; j++) {
    var line = document.createElement("div");
    line.className = "line group2";
    lineContainerGroup2.appendChild(line);
  }

  // Ciclo per generare le linee del terzo gruppo
  for (var j = 0; j < numLinesGroup3; j++) {
    var line = document.createElement("div");
    line.className = "line group3";
    lineContainerGroup3.appendChild(line);
  }

  // Ciclo per generare le linee del quarto gruppo
  for (var j = 0; j < numLinesGroup4; j++) {
    var line = document.createElement("div");
    line.className = "line group4";
    lineContainerGroup4.appendChild(line);
  }

  // Ciclo per generare le linee del quinto gruppo
  for (var j = 0; j < numLinesGroup5; j++) {
    var line = document.createElement("div");
    line.className = "line group5";
    line.id = "line_cont13_" + (126 + j);
    lineContainerGroup5.appendChild(line);
  }

  // Ciclo per generare le linee del sesto gruppo
  for (var j = 0; j < numLinesGroup6; j++) {
    var line = document.createElement("div");
    line.className = "line group6";
    lineContainerGroup6.appendChild(line);
  }

  // Ciclo per generare le linee del settimo gruppo
  for (var j = 0; j < numLinesGroup7; j++) {
    var line = document.createElement("div");
    line.className = "line group7";
    lineContainerGroup7.appendChild(line);
  }

  // Ciclo per generare le linee del ottavo gruppo
  for (var j = 0; j < numLinesGroup8; j++) {
    var line = document.createElement("div");
    line.className = "line group8";
    lineContainerGroup8.appendChild(line);
  }

  // Ciclo per generare le linee del nono gruppo
  for (var j = 0; j < numLinesGroup9; j++) {
    var line = document.createElement("div");
    line.className = "line group9";
    lineContainerGroup9.appendChild(line);
  }
});

// --------------- CONTAINER 14 ----------------- CONTAINER 14 ----------------------

document.addEventListener("DOMContentLoaded", function () {
  // Numero desiderato di linee nel primo gruppo
  var numLinesGroup1 = 1;

  // Numero desiderato di linee nel secondo gruppo
  var numLinesGroup2 = 1;

  // Numero desiderato di linee nel terzo gruppo
  var numLinesGroup3 = 1;

  // Numero desiderato di linee nel quarto gruppo
  var numLinesGroup4 = 1;

  // Numero desiderato di linee nel quinto gruppo
  var numLinesGroup5 = 2;

  // Numero desiderato di linee nel sesto gruppo
  var numLinesGroup6 = 4;

  // Numero desiderato di linee nel settimo gruppo
  var numLinesGroup7 = 8;

  // Numero desiderato di linee nel ottavo gruppo
  var numLinesGroup8 = 16;

  // Numero desiderato di linee nel nono gruppo
  var numLinesGroup9 = 22;

  // Riferimento al container delle linee
  var lineContainerGroup1 = document.getElementById("lineContainerGroup1-14");
  var lineContainerGroup2 = document.getElementById("lineContainerGroup2-14");
  var lineContainerGroup3 = document.getElementById("lineContainerGroup3-14");
  var lineContainerGroup4 = document.getElementById("lineContainerGroup4-14");
  var lineContainerGroup5 = document.getElementById("lineContainerGroup5-14");
  var lineContainerGroup6 = document.getElementById("lineContainerGroup6-14");
  var lineContainerGroup7 = document.getElementById("lineContainerGroup7-14");
  var lineContainerGroup8 = document.getElementById("lineContainerGroup8-14");
  var lineContainerGroup9 = document.getElementById("lineContainerGroup9-14");

  // Ciclo per generare le linee del primo gruppo
  for (var i = 0; i < numLinesGroup1; i++) {
    var line = document.createElement("div");
    line.className = "line group1";
    lineContainerGroup1.appendChild(line);
  }

  // Ciclo per generare le linee del secondo gruppo
  for (var j = 0; j < numLinesGroup2; j++) {
    var line = document.createElement("div");
    line.className = "line group2";
    lineContainerGroup2.appendChild(line);
  }

  // Ciclo per generare le linee del terzo gruppo
  for (var j = 0; j < numLinesGroup3; j++) {
    var line = document.createElement("div");
    line.className = "line group3";
    lineContainerGroup3.appendChild(line);
  }

  // Ciclo per generare le linee del quarto gruppo
  for (var j = 0; j < numLinesGroup4; j++) {
    var line = document.createElement("div");
    line.className = "line group4";
    lineContainerGroup4.appendChild(line);
  }

  // Ciclo per generare le linee del quinto gruppo
  for (var j = 0; j < numLinesGroup5; j++) {
    var line = document.createElement("div");
    line.className = "line group5";
    line.id = "line_cont14_" + (132 + j);
    lineContainerGroup5.appendChild(line);
  }

  // Ciclo per generare le linee del sesto gruppo
  for (var j = 0; j < numLinesGroup6; j++) {
    var line = document.createElement("div");
    line.className = "line group6";
    lineContainerGroup6.appendChild(line);
  }

  // Ciclo per generare le linee del settimo gruppo
  for (var j = 0; j < numLinesGroup7; j++) {
    var line = document.createElement("div");
    line.className = "line group7";
    lineContainerGroup7.appendChild(line);
  }

  // Ciclo per generare le linee del ottavo gruppo
  for (var j = 0; j < numLinesGroup8; j++) {
    var line = document.createElement("div");
    line.className = "line group8";
    lineContainerGroup8.appendChild(line);
  }

  // Ciclo per generare le linee del nono gruppo
  for (var j = 0; j < numLinesGroup9; j++) {
    var line = document.createElement("div");
    line.className = "line group9";
    lineContainerGroup9.appendChild(line);
  }
});

// --------------- CONTAINER 15 ----------------- CONTAINER 15 ----------------------

document.addEventListener("DOMContentLoaded", function () {
  // Numero desiderato di linee nel primo gruppo
  var numLinesGroup1 = 1;

  // Numero desiderato di linee nel secondo gruppo
  var numLinesGroup2 = 1;

  // Numero desiderato di linee nel terzo gruppo
  var numLinesGroup3 = 2;

  // Numero desiderato di linee nel quarto gruppo
  var numLinesGroup4 = 5;

  // Numero desiderato di linee nel quinto gruppo
  var numLinesGroup5 = 10;

  // Numero desiderato di linee nel sesto gruppo
  var numLinesGroup6 = 20;

  // Numero desiderato di linee nel settimo gruppo
  var numLinesGroup7 = 40;

  // Numero desiderato di linee nel ottavo gruppo
  var numLinesGroup8 = 80;

  // Numero desiderato di linee nel nono gruppo
  var numLinesGroup9 = 160;

  // Riferimento al container delle linee
  var lineContainerGroup1 = document.getElementById("lineContainerGroup1-15");
  var lineContainerGroup2 = document.getElementById("lineContainerGroup2-15");
  var lineContainerGroup3 = document.getElementById("lineContainerGroup3-15");
  var lineContainerGroup4 = document.getElementById("lineContainerGroup4-15");
  var lineContainerGroup5 = document.getElementById("lineContainerGroup5-15");
  var lineContainerGroup6 = document.getElementById("lineContainerGroup6-15");
  var lineContainerGroup7 = document.getElementById("lineContainerGroup7-15");
  var lineContainerGroup8 = document.getElementById("lineContainerGroup8-15");
  var lineContainerGroup9 = document.getElementById("lineContainerGroup9-15");

  // Ciclo per generare le linee del primo gruppo
  for (var i = 0; i < numLinesGroup1; i++) {
    var line = document.createElement("div");
    line.className = "line group1";
    lineContainerGroup1.appendChild(line);
  }

  // Ciclo per generare le linee del secondo gruppo
  for (var j = 0; j < numLinesGroup2; j++) {
    var line = document.createElement("div");
    line.className = "line group2";
    lineContainerGroup2.appendChild(line);
  }

  // Ciclo per generare le linee del terzo gruppo
  for (var j = 0; j < numLinesGroup3; j++) {
    var line = document.createElement("div");
    line.className = "line group3";
    lineContainerGroup3.appendChild(line);
  }

  // Ciclo per generare le linee del quarto gruppo
  for (var j = 0; j < numLinesGroup4; j++) {
    var line = document.createElement("div");
    line.className = "line group4";
    lineContainerGroup4.appendChild(line);
  }

  // Ciclo per generare le linee del quinto gruppo
  for (var j = 0; j < numLinesGroup5; j++) {
    var line = document.createElement("div");
    line.className = "line group5";
    line.id = "line_cont15_" + (134 + j);
    lineContainerGroup5.appendChild(line);
  }

  // Ciclo per generare le linee del sesto gruppo
  for (var j = 0; j < numLinesGroup6; j++) {
    var line = document.createElement("div");
    line.className = "line group6";
    lineContainerGroup6.appendChild(line);
  }

  // Ciclo per generare le linee del settimo gruppo
  for (var j = 0; j < numLinesGroup7; j++) {
    var line = document.createElement("div");
    line.className = "line group7";
    lineContainerGroup7.appendChild(line);
  }

  // Ciclo per generare le linee del ottavo gruppo
  for (var j = 0; j < numLinesGroup8; j++) {
    var line = document.createElement("div");
    line.className = "line group8";
    lineContainerGroup8.appendChild(line);
  }

  // Ciclo per generare le linee del nono gruppo
  for (var j = 0; j < numLinesGroup9; j++) {
    var line = document.createElement("div");
    line.className = "line group9";
    lineContainerGroup9.appendChild(line);
  }
});

// --------------- CONTAINER 16 ----------------- CONTAINER 16 ----------------------

document.addEventListener("DOMContentLoaded", function () {
  // Numero desiderato di linee nel primo gruppo
  var numLinesGroup1 = 1;

  // Numero desiderato di linee nel secondo gruppo
  var numLinesGroup2 = 2;

  // Numero desiderato di linee nel terzo gruppo
  var numLinesGroup3 = 5;

  // Numero desiderato di linee nel quarto gruppo
  var numLinesGroup4 = 10;

  // Numero desiderato di linee nel quinto gruppo
  var numLinesGroup5 = 20;

  // Numero desiderato di linee nel sesto gruppo
  var numLinesGroup6 = 40;

  // Numero desiderato di linee nel settimo gruppo
  var numLinesGroup7 = 80;

  // Numero desiderato di linee nel ottavo gruppo
  var numLinesGroup8 = 160;

  // Numero desiderato di linee nel nono gruppo
  var numLinesGroup9 = 320;

  // Riferimento al container delle linee
  var lineContainerGroup1 = document.getElementById("lineContainerGroup1-16");
  var lineContainerGroup2 = document.getElementById("lineContainerGroup2-16");
  var lineContainerGroup3 = document.getElementById("lineContainerGroup3-16");
  var lineContainerGroup4 = document.getElementById("lineContainerGroup4-16");
  var lineContainerGroup5 = document.getElementById("lineContainerGroup5-16");
  var lineContainerGroup6 = document.getElementById("lineContainerGroup6-16");
  var lineContainerGroup7 = document.getElementById("lineContainerGroup7-16");
  var lineContainerGroup8 = document.getElementById("lineContainerGroup8-16");
  var lineContainerGroup9 = document.getElementById("lineContainerGroup9-16");

  // Ciclo per generare le linee del primo gruppo
  for (var i = 0; i < numLinesGroup1; i++) {
    var line = document.createElement("div");
    line.className = "line group1";
    lineContainerGroup1.appendChild(line);
  }

  // Ciclo per generare le linee del secondo gruppo
  for (var j = 0; j < numLinesGroup2; j++) {
    var line = document.createElement("div");
    line.className = "line group2";
    lineContainerGroup2.appendChild(line);
  }

  // Ciclo per generare le linee del terzo gruppo
  for (var j = 0; j < numLinesGroup3; j++) {
    var line = document.createElement("div");
    line.className = "line group3";
    lineContainerGroup3.appendChild(line);
  }

  // Ciclo per generare le linee del quarto gruppo
  for (var j = 0; j < numLinesGroup4; j++) {
    var line = document.createElement("div");
    line.className = "line group4";
    lineContainerGroup4.appendChild(line);
  }

  // Ciclo per generare le linee del quinto gruppo
  for (var j = 0; j < numLinesGroup5; j++) {
    var line = document.createElement("div");
    line.className = "line group5";
    line.id = "line_cont16_" + (137 + j);
    lineContainerGroup5.appendChild(line);
  }

  // Ciclo per generare le linee del sesto gruppo
  for (var j = 0; j < numLinesGroup6; j++) {
    var line = document.createElement("div");
    line.className = "line group6";
    lineContainerGroup6.appendChild(line);
  }

  // Ciclo per generare le linee del settimo gruppo
  for (var j = 0; j < numLinesGroup7; j++) {
    var line = document.createElement("div");
    line.className = "line group7";
    lineContainerGroup7.appendChild(line);
  }

  // Ciclo per generare le linee del ottavo gruppo
  for (var j = 0; j < numLinesGroup8; j++) {
    var line = document.createElement("div");
    line.className = "line group8";
    lineContainerGroup8.appendChild(line);
  }

  // Ciclo per generare le linee del nono gruppo
  for (var j = 0; j < numLinesGroup9; j++) {
    var line = document.createElement("div");
    line.className = "line group9";
    lineContainerGroup9.appendChild(line);
  }
});

//#################################################
//######### ---- ANIMAZIONI LEGGENDA ---- #########
//#################################################

document.addEventListener("DOMContentLoaded", function () {
  // ######## BLOCCO 1 ###########
  gsap.to(".leggenda_personaggio:not(#cobb5, #mrsaito5)", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco1",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none reset",
      id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  //######### BLOCCO 2 ###########
  //Animazione hidden
  gsap.to("#cobb5, #mrsaito5", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco2",
      containerAnimation: tl,
      start: "left 75%", //da cambiare quando inizia dal centro
      toggleActions: "restart none none reset",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  //animazione apparizione sono 2 blocchi per far sì che inverso funzioni
  gsap.to("#cobb3, #arthur3, #mrsaito3", {
    visibility: "visible",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco2",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none none", //a differenza delle altre non si mette il reset alla fine se no non funziona
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  //Animazione solo per quando si va a ritroso sulla timeline
  gsap.to("#cobb3, #arthur3, #mrsaito3", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco2",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "none none none restart", //funziona solo se si va indietro
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  //######### BLOCCO 3 ###########
  gsap.to("#cobb3, #arthur3, #mrsaito3", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco3",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none reset",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  gsap.to("#cobb2, #arthur2, #mrsaito2", {
    visibility: "visible",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco3",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none none",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  gsap.to("#cobb2, #arthur2, #mrsaito2", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco3",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "none none none restart",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  //######### BLOCCO 4 ###########
  gsap.to("#cobb2, #arthur2, #mrsaito2", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco4",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none reset",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  gsap.to("#cobb1, #arthur1, #mrsaito1", {
    visibility: "visible",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco4",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none none",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });
  gsap.to("#cobb1, #arthur1, #mrsaito1", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco4",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "none none none restart",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  //--Minute 23--
  gsap.to("#mrsaito1", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: "#line_cont4_23",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none reset",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  gsap.to("#arianna1", {
    visibility: "visible",
    duration: 0.1,
    scrollTrigger: {
      trigger: "#line_cont4_23",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none none",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });
  gsap.to("#arianna1", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: "#line_cont4_23",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "none none none restart",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  //######### BLOCCO 5 ###########
  gsap.to("#cobb1, #arianna1", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco5",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none reset",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  gsap.to("#cobb2, #arianna2", {
    visibility: "visible",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco5",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none none",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });
  gsap.to("#cobb2, #arianna2", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco5",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "none none none restart",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  //--Minute 29--
  gsap.to("#cobb2, #arianna2", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: "#line_cont5_29",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none reset",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  gsap.to("#cobb1, #arianna1", {
    visibility: "visible",
    duration: 0.1,
    scrollTrigger: {
      trigger: "#line_cont5_29",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none none",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });
  gsap.to("#cobb1, #arianna1", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: "#line_cont5_29",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "none none none restart",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  //--Minute 30--
  gsap.to("#cobb1, #arianna1", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: "#line_cont5_30",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none reset",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  gsap.to("#cobb2, #arianna2", {
    visibility: "visible",
    duration: 0.1,
    scrollTrigger: {
      trigger: "#line_cont5_30",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none none",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });
  gsap.to("#cobb2, #arianna2", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: "#line_cont5_30",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "none none none restart",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  //######### BLOCCO 6 ###########
  gsap.to("#cobb2, #arianna2", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco6",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none reset",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  gsap.to("#cobb1, #arianna1", {
    visibility: "visible",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco6",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none none",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });
  gsap.to("#cobb1, #arianna1", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco6",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "none none none restart",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  //--Minute 35--
  gsap.to("#arthur1, #arianna1", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: "#line_cont6_35",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none reset",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  gsap.to("#eames1", {
    visibility: "visible",
    duration: 0.1,
    scrollTrigger: {
      trigger: "#line_cont6_35",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none none",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });
  gsap.to("#eames1", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: "#line_cont6_35",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "none none none restart",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  //--Minute 39--
  gsap.to("#mrsaito1", {
    visibility: "visible",
    duration: 0.1,
    scrollTrigger: {
      trigger: "#line_cont6_39",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none none",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });
  gsap.to("#mrsaito1", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: "#line_cont6_39",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "none none none restart",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  //--Minute 41--
  gsap.to("#yusuf1", {
    visibility: "visible",
    duration: 0.1,
    scrollTrigger: {
      trigger: "#line_cont6_41",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none none",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });
  gsap.to("#yusuf1", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: "#line_cont6_41",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "none none none restart",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  //--Minute 43--
  gsap.to("#cobb1", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: "#line_cont6_43",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none reset",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  gsap.to("#cobb2", {
    visibility: "visible",
    duration: 0.1,
    scrollTrigger: {
      trigger: "#line_cont6_43",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none none",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });
  gsap.to("#cobb2", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: "#line_cont6_43",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "none none none restart",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  //--Minute 44--
  gsap.to("#cobb2, #yusuf1", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: "#line_cont6_44",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none reset",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  gsap.to("#cobb1, #arthur1, #arianna1", {
    visibility: "visible",
    duration: 0.1,
    scrollTrigger: {
      trigger: "#line_cont6_44",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none none",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });
  gsap.to("#cobb1, #arthur1, #arianna1", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: "#line_cont6_44",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "none none none restart",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  //######### BLOCCO 7 ###########
  gsap.to("#cobb1, #arthur1, #arianna1, #mrsaito1, #eames1", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco7",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none reset",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  gsap.to("#cobb2, #arianna2", {
    visibility: "visible",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco7",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none none",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });
  gsap.to("#cobb2, #arianna2", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco7",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "none none none restart",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  //######### BLOCCO 8 ###########
  gsap.to("#cobb2, #arianna2", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco8",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none reset",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  gsap.to("#cobb1, #arthur1, #arianna1, #yusuf1, #eames1", {
    visibility: "visible",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco8",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none none",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });
  gsap.to("#cobb1, #arthur1, #arianna1, #yusuf1, #eames1", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco8",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "none none none restart",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  //--Minute 61--
  gsap.to("#mrsaito1, #fischer1", {
    visibility: "visible",
    duration: 0.1,
    scrollTrigger: {
      trigger: "#line_cont8_61",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none none",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });
  gsap.to("#mrsaito1, #fischer1", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: "#line_cont8_61",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "none none none restart",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  //######### BLOCCO 9 ###########
  gsap.to(
    "#cobb1, #arthur1, #arianna1, #mrsaito1, #fischer1, #yusuf1, #eames1",
    {
      visibility: "hidden",
      duration: 0.1,
      scrollTrigger: {
        trigger: ".blocco9",
        containerAnimation: tl,
        start: "left 75%",
        toggleActions: "restart none none reset",
        //id: "LEGENDA INIZIO",
        // markers: true,
      },
    }
  );

  gsap.to(
    "#cobb2, #arthur2, #arianna2, #mrsaito2, #fischer2, #yusuf2, #eames2",
    {
      visibility: "visible",
      duration: 0.1,
      scrollTrigger: {
        trigger: ".blocco9",
        containerAnimation: tl,
        start: "left 75%",
        toggleActions: "restart none none none",
        //id: "LEGENDA INIZIO",
        // markers: true,
      },
    }
  );
  gsap.to(
    "#cobb2, #arthur2, #arianna2, #mrsaito2, #fischer2, #yusuf2, #eames2",
    {
      visibility: "hidden",
      duration: 0.1,
      scrollTrigger: {
        trigger: ".blocco9",
        containerAnimation: tl,
        start: "left 75%",
        toggleActions: "none none none restart",
        //id: "LEGENDA INIZIO",
        // markers: true,
      },
    }
  );

  //######### BLOCCO 10 ###########
  gsap.to("#cobb2, #arthur2, #arianna2, #mrsaito2, #fischer2, #eames2", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco10",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none reset",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  gsap.to("#cobb3, #arthur3, #arianna3, #mrsaito3, #fischer3, #eames3", {
    visibility: "visible",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco10",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none none",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });
  gsap.to("#cobb3, #arthur3, #arianna3, #mrsaito3, #fischer3, #eames3", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco10",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "none none none restart",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  //######### BLOCCO 11 ###########
  gsap.to("#cobb3, #arianna3, #mrsaito3, #fischer3, #eames3", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco11",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none reset",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  gsap.to("#cobb4, #arthur4, #arianna4, #mrsaito4, #fischer4, #eames4", {
    visibility: "visible",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco11",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none none",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });
  gsap.to("#cobb4, #arthur4, #arianna4, #mrsaito4, #fischer4, #eames4", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco11",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "none none none restart",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  //######### BLOCCO 12 ###########
  gsap.to("#cobb4, #arianna4, #mrsaito4, #fischer4", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco12",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none reset",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  gsap.to("#cobb5, #arianna5, #mrsaito5, #fischer5", {
    visibility: "visible",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco12",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none none",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });
  gsap.to("#cobb5, #arianna5, #mrsaito5, #fischer5", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco12",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "none none none restart",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  //######### BLOCCO 13 ###########
  gsap.to("#fischer5", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco13",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none reset",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  gsap.to("#fischer4", {
    visibility: "visible",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco13",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none none",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });
  gsap.to("#fischer4", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco13",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "none none none restart",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  //######### BLOCCO 14 ###########
  gsap.to("#arianna5, #fischer4, #eames4", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco14",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none reset",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  gsap.to("#arianna3, #fischer3, #eames3", {
    visibility: "visible",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco14",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none none",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });
  gsap.to("#arianna3, #fischer3, #eames3", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco14",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "none none none restart",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  //######### BLOCCO 15 ###########
  gsap.to("#arthur3, #arianna3, #fischer3, #eames3", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco15",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none reset",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  gsap.to("#arthur2, #arianna2, #fischer2, #eames2", {
    visibility: "visible",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco15",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none none",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });
  gsap.to("#arthur2, #arianna2, #fischer2, #eames2", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: ".blocco15",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "none none none restart",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  //######### BLOCCO 16 ###########
  gsap.to(
    "#arthur2, #arianna2, #fischer2, #yusuf2, #eames2, #cobb5, #mrsaito5",
    {
      visibility: "hidden",
      duration: 0.1,
      scrollTrigger: {
        trigger: ".blocco16",
        containerAnimation: tl,
        start: "left 75%",
        toggleActions: "restart none none reset",
        //id: "LEGENDA INIZIO",
        // markers: true,
      },
    }
  );

  gsap.to(
    "#arthur1, #arianna1, #fischer1, #yusuf1, #eames1, #cobb1, #mrsaito1",
    {
      visibility: "visible",
      duration: 0.1,
      scrollTrigger: {
        trigger: ".blocco16",
        containerAnimation: tl,
        start: "left 75%",
        toggleActions: "restart none none none",
        //id: "LEGENDA INIZIO",
        // markers: true,
      },
    }
  );
  gsap.to(
    "#arthur1, #arianna1, #fischer1, #yusuf1, #eames1, #cobb1, #mrsaito1",
    {
      visibility: "hidden",
      duration: 0.1,
      scrollTrigger: {
        trigger: ".blocco16",
        containerAnimation: tl,
        start: "left 75%",
        toggleActions: "none none none restart",
        //id: "LEGENDA INIZIO",
        // markers: true,
      },
    }
  );

  //--Minute 140--
  gsap.to("#arthur1, #arianna1, #mrsaito1, #fischer1, #yusuf1, #eames1", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: "#line_cont16_140",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none reset",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  //--Minute 142--
  gsap.to("#cobb1", {
    visibility: "hidden",
    duration: 0.1,
    scrollTrigger: {
      trigger: "#line_cont16_142",
      containerAnimation: tl,
      start: "left 75%",
      toggleActions: "restart none none reset",
      //id: "LEGENDA INIZIO",
      // markers: true,
    },
  });

  //chiusura DOMContentLoaded. Type above this line.
});
