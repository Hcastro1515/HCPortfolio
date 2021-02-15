
gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();

tl.from(".stagger1", {
  opacity: 0,
  y: -50,
  stagger: 0.3,
  ease: Power4.easeOut,
  duration: 2,
});

tl.from(
  ".hero-design",
  {
    opacity: 0,
    Y: 50,
    ease: Power4.easeOut,
    duration: 1,
  },
  "-=1.5"
);

gsap.from(
  ".square-anim",
  {
    stagger: 0.2,
    scale: 0.1,
    duration: 1,
    ease: Back.easeOut.config(1.7),
  },
  "-=1"
);

gsap.from(".transition2", {
  ScrollTrigger: {
    trigger: ".transition2",
    start: "top bottom",
  },
  y: "50",
  opacity: 0,
  duration: 1.2,
  stagger: 0.3,
});

gsap.from(".transition3", {
  ScrollTrigger: {
    trigger: ".transition3",
    start: "top center",
  },
  y: "50",
  opacity: 0,
  duration: 1.2,
  stagger: 0.6,
});
