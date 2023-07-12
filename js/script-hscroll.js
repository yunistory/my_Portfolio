const horizonScroll = document.querySelector(".horizontal-scroll");
// console.log(horizonScroll);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec4",
    markers: true,
    // trigger viewport
    start: "top top",
    // end: 'bottom+=1000',
    end: () => "+=" + horizonScroll.offsetWidth,
    pin: true, // 화면 고정
    scrub: true, // 스크롤 값과 연동
  },
});

tl.from(horizonScroll, { autoAlpha: 0, duration: 0.7 }).to(horizonScroll, {
  // x: -1920 * 2,
  x: () => -(horizonScroll.offsetWidth - innerWidth),
});
