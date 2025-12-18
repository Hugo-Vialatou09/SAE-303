import gsap from "https://cdn.jsdelivr.net/npm/gsap@3.14.1/+esm";
import ScrollTrigger from "https://cdn.jsdelivr.net/npm/gsap@3.14.1/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

// --- ANIMATION SECTION 1 ---
const section1 = document.querySelector('#section-1');
const title1 = section1.querySelector('h1');
const apple1 = section1.querySelector('img');

const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: section1,
    start: "top center",
    toggleActions: "play none none reverse", 
  }
});

tl1.from(title1, {
  y: 50,
  opacity: 0,
  scale: 0.9,
  duration: 1,
  ease: "power3.out"
})
tl1.from("#apple1", {
  x: -200,
  y: 200,
  rotation: -45,
  opacity: 0,
  duration: 1.2,
  ease: "back.out(1.7)",
  
  onComplete: () => {
    gsap.to("#apple1", {
      yPercent: -15,      
      rotation: 5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }
}, "-=0.5");

gsap.to(apple1, {
  y: "+=20",
  rotation: "+=5",
  duration: 2,
  repeat: -1,       
  yoyo: true,       
  ease: "sine.inOut"
});

// --- ANIMATION SECTION 2 ---

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section-2",
    start: "top 60%", 
    toggleActions: "play reverse play reverse" 
  }
});

tl2.from("#graphe-1", {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
})
.from("#block-stat-1", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out"
}, "-=0.5");

tl2.to({val: 0}, {
  val: 61,
  duration: 1.5,
  onUpdate: function() {
    document.getElementById("stat-1").innerHTML = Math.ceil(this.targets()[0].val) + "%";
  }
}, "-=0.8");

// --- ANIMATION SECTION 3 ---

gsap.from("#section-3 h2 span", {
  scale: 0.01,
  opacity: 0,
  filter: "blur(20px)",
  duration: 1,
  transformOrigin: "center center",
  scrollTrigger: {
    trigger: "#section-3",
    start: "top bottom",
    end: "center center",
    scrub: 2,
  }
});

// --- ANIMATION DES BARRES ---
const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section-3",
    start: "top 40%",
    toggleActions: "play reverse play reverse"
  }
});

tl3.from("#section-3 .bg-typography-4", {
  width: "0%",
  duration: 1.2,
  ease: "power4.out",
  stagger: 0.15
})

.from("#section-3 figcaption", {
  opacity: 0,
  duration: 0.5,
  stagger: 0.15
}, "-=1");


// --- ANIMATION SECTION 4  ---

const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section-4",
    start: "top 60%",
    toggleActions: "play reverse play reverse"
  }
});


tl4.from("#brocoli-container, #jambon-container, #banane-container", {
  y: -200,
  rotation: -15,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "bounce.out"
});


tl4.to("#brocoli-mort, #banane-mort", {
  opacity: 1,
  duration: 0.5,        
  stagger: 0.1,
  ease: "power1.in"
}, "-=0.5"); 


tl4.from("#stat-3 span", {
  scale: 0,
  opacity: 0,
  duration: 0.8,
  ease: "back.out(1.7)"
}, "-=0.4")
.from("#stat-3 h2", {
  y: 30,
  opacity: 0,
  duration: 0.6
}, "-=0.4");

// --- ANIMATION SECTION 5  ---

const tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section-5",
    start: "top top",      
    end: "+=2000",         
    scrub: 1,              
    pin: true,             
    anticipatePin: 1
  }
});

tl5.to("#champignon-container", {
  x: "100vw",               
  ease: "none"
}, 0);

tl5.to("#champignon-normal", { 
  opacity: 0, 
  duration: 0.1 
}, 0.3);

tl5.to("#champignon-zombie", { 
  opacity: 1, 
  scale: 1.3, 
  duration: 0.1 
}, 0.3);

tl5.from("#stat-4", { 
  opacity: 0, 
  y: 50, 
  scale: 0.5,
  duration: 0.2 
}, 0.3);

tl5.to("#champignon-container .grid", {
  y: -40,
  duration: 0.05,
  repeat: 20,
  yoyo: true,
  ease: "power1.inOut"
}, 0);

// --- ANIMATION SECTION 6  ---

gsap.from(".carbon-square", {
  scrollTrigger: {
    trigger: "#section-6",
    start: "top 60%", 
    toggleActions: "play none none reverse"
  },
  scale: 0,          
  opacity: 0,          
  rotation: 45,       
  y: 100,             
  duration: 0.8,
  ease: "back.out(1.7)", 
  stagger: 0.15       
});

gsap.from("#section-6 span.text-7xl", {
  scrollTrigger: {
    trigger: "#section-6",
    start: "top 70%",
  },
  scale: 2,
  opacity: 0,
  duration: 1,
  ease: "expo.out"
});

// --- ANIMATION SECTION 7  ---
gsap.from("#section-7 header", {
  scrollTrigger: {
    trigger: "#section-7",
    start: "top 80%",
  },
  x: -50,       
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});


gsap.from(".animate-num", {
  scrollTrigger: {
    trigger: "#section-7",
    start: "top 70%",
  },
  textContent: 0,
  duration: 2,
  snap: { textContent: 1 }, 
  ease: "power1.inOut"
});

gsap.from(".animate-truck", {
  scrollTrigger: {
    trigger: "#section-7",
    start: "top 60%",
  },
  xPercent: -100, 
  opacity: 0,
  duration: 2,
  ease: "power2.inOut"
});


gsap.from(".animate-postit", {
  scrollTrigger: {
    trigger: "#section-7",
    start: "top 50%",
  },
  scale: 0.5,     
  rotation: -15,  
  opacity: 0,
  duration: 1,
  ease: "back.out(2)" 
});

// --- SECTION_8 ---

gsap.from("#text-budget", {
  scrollTrigger: {
    trigger: "#section-8",   
    start: "top 60%",              
    toggleActions: "play none none reverse" 
  },
  y: 150,          
  scale: 0.8,       
  opacity: 0,     
  duration: 1.5,    
  ease: "power4.out" 
});

gsap.from("#text-budget span", {
  scrollTrigger: {
    trigger: "#section-8",
    start: "top 60%",
  },
  x: -100,      
  opacity: 0,
  duration: 1.2,
  delay: 0.2,    
  ease: "back.out(1.7)" 
});

// --- SECTION_FINALE  ---

const tlFinal = gsap.timeline({
  scrollTrigger: {
    trigger: "#section-finale",
    start: "top 70%",
    toggleActions: "play none none reverse"
  }
});

tlFinal.from("#section-finale h2", {
  x: -150,
  opacity: 0,
  duration: 1.2,
  ease: "expo.out"
})
.from("#section-finale .bg-primary\\/10", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out"
}, "-=0.8")
.from("#pomme-finale", {
  scale: 0,
  rotation: -15,
  duration: 1.5,
  ease: "back.out(1.2)"
}, "-=1")
.from("#section-finale button", {
  y: 30,
  opacity: 0,
  duration: 0.6,
  ease: "power2.out"
}, "-=0.5");


gsap.to("#pomme-finale", {
  y: 15,
  rotation: 2, 
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to("#section-finale .absolute.inset-0", {
  scale: 1.1,
  opacity: 0.15,
  duration: 4,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

