$(function () {
  // about visual
  Splitting();

  const $sec1 = $(".first");
  const $line1 = $sec1.find(".main-wrap h2 .char");
  const $line2 = $sec1.find(".main-wrap h3 .char");
  const $line3 = $sec1.find(".main-wrap img");
  const $line4 = $sec1.find(".main-wrap h4 .char");

  gsap
    .timeline({
      autoAlpha: 0,

      scrollTrigger: {
        trigger: $sec1,
        // markers: true,
        start: "top bottom",
        end: "bottom bottom",
        toggleActions: "play none none reset",
      },
    })
    .from($line1, { autoAlpha: 0, y: -100, stagger: 0.05, duration: 0.5 })
    .from($line2, { autoAlpha: 0, y: -100, stagger: 0.05, duration: 0.5 })
    // .from($line3, { autoAlpha: 0, y: -20 })
    .from($line4, { autoAlpha: 0, y: -100, stagger: 0.05, duration: 0.5 });

  // section2
  const $sec2 = $(".container .section-inner");
  const $line21 = $sec2.find(".left strong .char");
  const $line22 = $sec2.find(".left h5 .char");
  const $line23 = $sec2.find(".left p .char");
  const $line24 = $sec2.find(".left a");
  const $line25 = $sec2.find(".right figure");
  // const tl2 = gsap.timeline();
  gsap
    .timeline({
      autoAlpha: 0,
      // y: 100,

      scrollTrigger: {
        trigger: $sec2,
        // markers: true,
        start: "top top",
        end: "bottom top",
        toggleActions: "play none none reset",
      },
    })

    .from($line21, {
      opacity: 0,
      stagger: 0.001,
    })
    .from($line22, {
      opacity: 0,
      stagger: 0.001,
    })
    .from($line23, {
      opacity: 0,
      stagger: 0.001,
    })
    .from($line24, {
      opacity: 0,
      stagger: 0.001,
    })
    .from($line25, {
      y: -20,
      duration: 1.5,
      ease: "power1",
      yoyo: true,
      repeat: -1,
    });
});
