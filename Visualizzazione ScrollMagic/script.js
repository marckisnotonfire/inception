gsap.registerPlugin(ScrollTrigger);

//------------------------------- VECCHIO SCROLL -----------------------------------------

/* let container = document.getElementById("sfondo");

gsap.to(container, {
  x: () =>
    -(container.scrollWidth - document.documentElement.clientWidth) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: container,
    scroller: "#scroller",
    invalidateOnRefresh: true,
    pin: true,
    markers: true,
    scrub: 1,
    start: "top top",
    end: () => "+=20000",
  },
}); */

//--------------------------------------------------------------------------------------
//------------------------------- NEW SCROLL -----------------------------------------
//--------------------------------------------------------------------------------------

const slider = document.querySelector(".sfondo");
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
  xPercent: -380,
});

// -------------------- ANIMAZIONI ---------------------------------

gsap.to(".blocco4", {
  scrollTrigger: {
    trigger: ".module one",
    start: "bottom center",
    toggleActions: "restart pause reverse none",
    markers: true,
  },
  y: "16vh",
  duration: 2,
});

gsap.to(".blocco5", {
  scrollTrigger: {
    trigger: ".module one",
    start: "bottom center",
    toggleActions: "restart pause reverse none",
    markers: true,
  },
  y: "-16vh",
  duration: 2,
});

//------------- NUMERI IN SEQUENZA -------------------------

const arrayRange = (start, stop, step) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );

let range = arrayRange(0, 142, 1);

// Aggiungi uno spazio tra i numeri utilizzando il tag span con stile CSS
let spacedRange = range.map(number => `<span class="number">${number}</span>`);

document.getElementById("numbers_content").innerHTML = spacedRange.join("");

// --------------- CONTAINER 1 ----------------- CONTAINER 1 ----------------------

document.addEventListener("DOMContentLoaded", function () {
  // Numero desiderato di linee nel primo gruppo
  var numLinesGroup1 = 13;

  // Numero desiderato di linee nel secondo gruppo
  var numLinesGroup2 = 25;

  // Numero desiderato di linee nel terzo gruppo
  var numLinesGroup3 = 50;

  // Numero desiderato di linee nel quarto gruppo
  var numLinesGroup4 = 100;

  // Numero desiderato di linee nel quinto gruppo
  var numLinesGroup5 = 200;

  // Numero desiderato di linee nel sesto gruppo
  var numLinesGroup6 = 400;

  // Numero desiderato di linee nel settimo gruppo
  var numLinesGroup7 = 800;

  // Numero desiderato di linee nel ottavo gruppo
  var numLinesGroup8 = 1600;

  // Numero desiderato di linee nel nono gruppo
  var numLinesGroup9 = 2200;

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
  var numLinesGroup1 = 13;

  // Numero desiderato di linee nel secondo gruppo
  var numLinesGroup2 = 25;

  // Numero desiderato di linee nel terzo gruppo
  var numLinesGroup3 = 50;

  // Numero desiderato di linee nel quarto gruppo
  var numLinesGroup4 = 100;

  // Numero desiderato di linee nel quinto gruppo
  var numLinesGroup5 = 200;

  // Numero desiderato di linee nel sesto gruppo
  var numLinesGroup6 = 400;

  // Numero desiderato di linee nel settimo gruppo
  var numLinesGroup7 = 800;

  // Numero desiderato di linee nel ottavo gruppo
  var numLinesGroup8 = 1600;

  // Numero desiderato di linee nel nono gruppo
  var numLinesGroup9 = 2200;

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
  var numLinesGroup1 = 13;

  // Numero desiderato di linee nel secondo gruppo
  var numLinesGroup2 = 25;

  // Numero desiderato di linee nel terzo gruppo
  var numLinesGroup3 = 50;

  // Numero desiderato di linee nel quarto gruppo
  var numLinesGroup4 = 100;

  // Numero desiderato di linee nel quinto gruppo
  var numLinesGroup5 = 200;

  // Numero desiderato di linee nel sesto gruppo
  var numLinesGroup6 = 400;

  // Numero desiderato di linee nel settimo gruppo
  var numLinesGroup7 = 800;

  // Numero desiderato di linee nel ottavo gruppo
  var numLinesGroup8 = 1600;

  // Numero desiderato di linee nel nono gruppo
  var numLinesGroup9 = 2200;

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
  var numLinesGroup1 = 13;

  // Numero desiderato di linee nel secondo gruppo
  var numLinesGroup2 = 25;

  // Numero desiderato di linee nel terzo gruppo
  var numLinesGroup3 = 50;

  // Numero desiderato di linee nel quarto gruppo
  var numLinesGroup4 = 100;

  // Numero desiderato di linee nel quinto gruppo
  var numLinesGroup5 = 200;

  // Numero desiderato di linee nel sesto gruppo
  var numLinesGroup6 = 400;

  // Numero desiderato di linee nel settimo gruppo
  var numLinesGroup7 = 800;

  // Numero desiderato di linee nel ottavo gruppo
  var numLinesGroup8 = 1600;

  // Numero desiderato di linee nel nono gruppo
  var numLinesGroup9 = 2200;

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
  var numLinesGroup1 = 13;

  // Numero desiderato di linee nel secondo gruppo
  var numLinesGroup2 = 25;

  // Numero desiderato di linee nel terzo gruppo
  var numLinesGroup3 = 50;

  // Numero desiderato di linee nel quarto gruppo
  var numLinesGroup4 = 100;

  // Numero desiderato di linee nel quinto gruppo
  var numLinesGroup5 = 200;

  // Numero desiderato di linee nel sesto gruppo
  var numLinesGroup6 = 400;

  // Numero desiderato di linee nel settimo gruppo
  var numLinesGroup7 = 800;

  // Numero desiderato di linee nel ottavo gruppo
  var numLinesGroup8 = 1600;

  // Numero desiderato di linee nel nono gruppo
  var numLinesGroup9 = 2200;

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
  var numLinesGroup1 = 13;

  // Numero desiderato di linee nel secondo gruppo
  var numLinesGroup2 = 25;

  // Numero desiderato di linee nel terzo gruppo
  var numLinesGroup3 = 50;

  // Numero desiderato di linee nel quarto gruppo
  var numLinesGroup4 = 100;

  // Numero desiderato di linee nel quinto gruppo
  var numLinesGroup5 = 200;

  // Numero desiderato di linee nel sesto gruppo
  var numLinesGroup6 = 400;

  // Numero desiderato di linee nel settimo gruppo
  var numLinesGroup7 = 800;

  // Numero desiderato di linee nel ottavo gruppo
  var numLinesGroup8 = 1600;

  // Numero desiderato di linee nel nono gruppo
  var numLinesGroup9 = 2200;

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
  var numLinesGroup1 = 13;

  // Numero desiderato di linee nel secondo gruppo
  var numLinesGroup2 = 25;

  // Numero desiderato di linee nel terzo gruppo
  var numLinesGroup3 = 50;

  // Numero desiderato di linee nel quarto gruppo
  var numLinesGroup4 = 100;

  // Numero desiderato di linee nel quinto gruppo
  var numLinesGroup5 = 200;

  // Numero desiderato di linee nel sesto gruppo
  var numLinesGroup6 = 400;

  // Numero desiderato di linee nel settimo gruppo
  var numLinesGroup7 = 800;

  // Numero desiderato di linee nel ottavo gruppo
  var numLinesGroup8 = 1600;

  // Numero desiderato di linee nel nono gruppo
  var numLinesGroup9 = 2200;

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
  var numLinesGroup1 = 13;

  // Numero desiderato di linee nel secondo gruppo
  var numLinesGroup2 = 25;

  // Numero desiderato di linee nel terzo gruppo
  var numLinesGroup3 = 50;

  // Numero desiderato di linee nel quarto gruppo
  var numLinesGroup4 = 100;

  // Numero desiderato di linee nel quinto gruppo
  var numLinesGroup5 = 200;

  // Numero desiderato di linee nel sesto gruppo
  var numLinesGroup6 = 400;

  // Numero desiderato di linee nel settimo gruppo
  var numLinesGroup7 = 800;

  // Numero desiderato di linee nel ottavo gruppo
  var numLinesGroup8 = 1600;

  // Numero desiderato di linee nel nono gruppo
  var numLinesGroup9 = 2200;

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
  var numLinesGroup1 = 13;

  // Numero desiderato di linee nel secondo gruppo
  var numLinesGroup2 = 25;

  // Numero desiderato di linee nel terzo gruppo
  var numLinesGroup3 = 50;

  // Numero desiderato di linee nel quarto gruppo
  var numLinesGroup4 = 100;

  // Numero desiderato di linee nel quinto gruppo
  var numLinesGroup5 = 200;

  // Numero desiderato di linee nel sesto gruppo
  var numLinesGroup6 = 400;

  // Numero desiderato di linee nel settimo gruppo
  var numLinesGroup7 = 800;

  // Numero desiderato di linee nel ottavo gruppo
  var numLinesGroup8 = 1600;

  // Numero desiderato di linee nel nono gruppo
  var numLinesGroup9 = 2200;

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
  var numLinesGroup1 = 13;

  // Numero desiderato di linee nel secondo gruppo
  var numLinesGroup2 = 25;

  // Numero desiderato di linee nel terzo gruppo
  var numLinesGroup3 = 50;

  // Numero desiderato di linee nel quarto gruppo
  var numLinesGroup4 = 100;

  // Numero desiderato di linee nel quinto gruppo
  var numLinesGroup5 = 200;

  // Numero desiderato di linee nel sesto gruppo
  var numLinesGroup6 = 400;

  // Numero desiderato di linee nel settimo gruppo
  var numLinesGroup7 = 800;

  // Numero desiderato di linee nel ottavo gruppo
  var numLinesGroup8 = 1600;

  // Numero desiderato di linee nel nono gruppo
  var numLinesGroup9 = 2200;

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
  var numLinesGroup1 = 13;

  // Numero desiderato di linee nel secondo gruppo
  var numLinesGroup2 = 25;

  // Numero desiderato di linee nel terzo gruppo
  var numLinesGroup3 = 50;

  // Numero desiderato di linee nel quarto gruppo
  var numLinesGroup4 = 100;

  // Numero desiderato di linee nel quinto gruppo
  var numLinesGroup5 = 200;

  // Numero desiderato di linee nel sesto gruppo
  var numLinesGroup6 = 400;

  // Numero desiderato di linee nel settimo gruppo
  var numLinesGroup7 = 800;

  // Numero desiderato di linee nel ottavo gruppo
  var numLinesGroup8 = 1600;

  // Numero desiderato di linee nel nono gruppo
  var numLinesGroup9 = 2200;

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
  var numLinesGroup1 = 13;

  // Numero desiderato di linee nel secondo gruppo
  var numLinesGroup2 = 25;

  // Numero desiderato di linee nel terzo gruppo
  var numLinesGroup3 = 50;

  // Numero desiderato di linee nel quarto gruppo
  var numLinesGroup4 = 100;

  // Numero desiderato di linee nel quinto gruppo
  var numLinesGroup5 = 200;

  // Numero desiderato di linee nel sesto gruppo
  var numLinesGroup6 = 400;

  // Numero desiderato di linee nel settimo gruppo
  var numLinesGroup7 = 800;

  // Numero desiderato di linee nel ottavo gruppo
  var numLinesGroup8 = 1600;

  // Numero desiderato di linee nel nono gruppo
  var numLinesGroup9 = 2200;

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
  var numLinesGroup1 = 13;

  // Numero desiderato di linee nel secondo gruppo
  var numLinesGroup2 = 25;

  // Numero desiderato di linee nel terzo gruppo
  var numLinesGroup3 = 50;

  // Numero desiderato di linee nel quarto gruppo
  var numLinesGroup4 = 100;

  // Numero desiderato di linee nel quinto gruppo
  var numLinesGroup5 = 200;

  // Numero desiderato di linee nel sesto gruppo
  var numLinesGroup6 = 400;

  // Numero desiderato di linee nel settimo gruppo
  var numLinesGroup7 = 800;

  // Numero desiderato di linee nel ottavo gruppo
  var numLinesGroup8 = 1600;

  // Numero desiderato di linee nel nono gruppo
  var numLinesGroup9 = 2200;

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
  var numLinesGroup1 = 13;

  // Numero desiderato di linee nel secondo gruppo
  var numLinesGroup2 = 25;

  // Numero desiderato di linee nel terzo gruppo
  var numLinesGroup3 = 50;

  // Numero desiderato di linee nel quarto gruppo
  var numLinesGroup4 = 100;

  // Numero desiderato di linee nel quinto gruppo
  var numLinesGroup5 = 200;

  // Numero desiderato di linee nel sesto gruppo
  var numLinesGroup6 = 400;

  // Numero desiderato di linee nel settimo gruppo
  var numLinesGroup7 = 800;

  // Numero desiderato di linee nel ottavo gruppo
  var numLinesGroup8 = 1600;

  // Numero desiderato di linee nel nono gruppo
  var numLinesGroup9 = 2200;

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
  var numLinesGroup1 = 13;

  // Numero desiderato di linee nel secondo gruppo
  var numLinesGroup2 = 25;

  // Numero desiderato di linee nel terzo gruppo
  var numLinesGroup3 = 50;

  // Numero desiderato di linee nel quarto gruppo
  var numLinesGroup4 = 100;

  // Numero desiderato di linee nel quinto gruppo
  var numLinesGroup5 = 200;

  // Numero desiderato di linee nel sesto gruppo
  var numLinesGroup6 = 400;

  // Numero desiderato di linee nel settimo gruppo
  var numLinesGroup7 = 800;

  // Numero desiderato di linee nel ottavo gruppo
  var numLinesGroup8 = 1600;

  // Numero desiderato di linee nel nono gruppo
  var numLinesGroup9 = 2200;

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
  var numLinesGroup1 = 13;

  // Numero desiderato di linee nel secondo gruppo
  var numLinesGroup2 = 25;

  // Numero desiderato di linee nel terzo gruppo
  var numLinesGroup3 = 50;

  // Numero desiderato di linee nel quarto gruppo
  var numLinesGroup4 = 100;

  // Numero desiderato di linee nel quinto gruppo
  var numLinesGroup5 = 200;

  // Numero desiderato di linee nel sesto gruppo
  var numLinesGroup6 = 400;

  // Numero desiderato di linee nel settimo gruppo
  var numLinesGroup7 = 800;

  // Numero desiderato di linee nel ottavo gruppo
  var numLinesGroup8 = 1600;

  // Numero desiderato di linee nel nono gruppo
  var numLinesGroup9 = 2200;

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
