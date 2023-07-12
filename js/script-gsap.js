let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    start: "top top",
    end: "+=4400",
    pin: true,
    // markers: true,
    scrub: true,
    // snap: 1 / 3,
  },
});
tl.to(".one", {
  duration: 2,
  xPercent: -100,
});
tl.to(".two", {
  yPercent: 100,
  duration: 2,
});
tl.to(".three", {
  xPercent: 100,
  duration: 2,
});
tl.to(".four", {
  duration: 2,
  xPercent: -100,
});
tl.to(".five", {
  yPercent: -100,
  duration: 2,
});
// tl.to(".six", {
//   // xPercent: 100,
//   duration: 2,
// });
// tl.to(".seven", {
//   // yPercent: -100,
//   duration: 2,
// });
