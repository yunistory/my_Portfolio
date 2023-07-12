let tl=gsap.timeline({
  scrollTrigger :{
    trigger:'.container',
    start:"top top", 
    end:"+=4000",
    pin:true,
    markers:true,
    scrub:true,
    snap:1/3,
  }
})

tl.to('.one', {
  duration:2, 
  xPercent:-110
})

tl.to('.two', {
  yPercent:-110,
  duration:2,
})

tl.to('.three', {
  xPercent:110,
  duration:2,
})