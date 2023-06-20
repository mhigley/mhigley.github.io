gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();
let articles = [];

mm.add("(min-width: 768px)", () => {
    
    articles = gsap.utils.toArray("article");
  // https://codepen.io/oldskool123/pen/mdrrbyo
    gsap.to(articles, {
        xPercent: -100 * (articles.length - 1),
        ease: "none",
        scrollTrigger: {
        trigger: "#work",
        pin: true,
        scrub: 1,
        snap: 1 / (articles.length - 1),
        end: () => "+=" + document.querySelector("#work").offsetWidth
        }
    }); 

  return () => {
    articles = [];
  };
});



