// GSAP Initialization
const tl = new TimelineMax();
// Label
tl.add("cup");
// Cup Smile
tl.to(
  "#Smile",
  2,
  {
    attr: {
      d: "M104,187  C100,200 135,200 140,187",
    },
    repeatDelay: 0.5,
    delay: 0.3,
    transformOrigin: "center",
    ease: Power2.easeIn,
    repeat: -1,
    yoyo: true,
  },
  "cup"
);
// Eyes
tl.to(
  "#EyeLeft , #EyeRight",
  0.5,
  {
    scaleY: 0.1,
    transformOrigin: "50% 70%",
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
    ease: Sine.easeOut,
  },
  "cup+=2"
);
// Stream
tl.fromTo(
  "#Steam",
  4,
  {
    y: 100,
    repeat: -1,
    repeatDelay: 0,
    ease: Sine.easeIn,
  },
  {
    y: -100,
    repeat: -1,
    repeatDelay: 0,
    ease: Sine.easeIn,
    opacity: 0,
  },
  "cup"
);
