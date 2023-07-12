let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    start: "top top",
    end: "+=2200",
    pin: true,
    // markers: true,
    scrub: true,
    // snap: 1 / 3,
  },
});
tl.to(".six", {
  yPercent: 100,
  duration: 2,
});
tl.to(".seven", {
  // yPercent: -100,
  duration: 2,
});
