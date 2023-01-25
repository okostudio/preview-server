var banner = {
    data: {},
    hasLooped: false,
};
var TIMELINE;
var lines;
var glitter;
//////////////////////////////////////////////////////////////////////////////////
// function onSplitFrames() { }

// INIT BANNER ----------------------------------
function init() {
    setBannerSize();
    gsap.set(".common, .scene", { display: "block" });
    gsap.set(".htmlMem", { skewX: 0.01, transformOrigin: "50% 50%" });

    addListeners(onMouseOver, onMouseLeave);

    StartBanner();
}

function onMouseOver() {
    gsap.to(".cta", { duration: 0.3, backgroundColor: "#FFFFFF", ease: Power3.easeOut });
    gsap.to(".cta .chevron", { duration: 0.3, x: 2, ease: Power3.easeOut });
}
function onMouseLeave() {
    gsap.to(".cta", { duration: 0.3, backgroundColor: "#A0E311", ease: Power3.easeOut });
    gsap.to(".cta .chevron", { duration: 0.3, x: 0, ease: Power3.easeOut });
}


function StartBanner() {
    gsap.set(".banner", { display: "block" });
    gsap.from(".htmlMem", { duration: 0.25, opacity: 0, ease: Power2.easeIn });

    convertSVGtoPaths();
    // 
    // Prepare lines / letters for animation
    // 
    function splitToLetters(){
        var tagline = document.querySelector(".tagline");
        splitLinesToLetters(tagline)
    }
    splitToLetters();
    createLines(".frame1 .copy")
    createLines(".frame2 .copy")
    
    var LOGO = new gsap.timeline()
        .from(".logo", {duration: 0.4, scale: 0, transformOrigin: "50% 50%", ease: Power2.easeOut}, 0) 
        .fromTo("#ring1 circle", {opacity: 0},{duration: 0.4, opacity: 1, ease: Power2.easeOut}, "-=0.2" )
        .fromTo("#ring2 circle", {opacity: 0},{duration: 0.4, opacity: 1, ease: Power2.easeOut}, "-=0.35" )
        .fromTo("#ring3 circle", {opacity: 0},{duration: 0.4, opacity: 1, ease: Power2.easeOut}, "-=0.35" )
        .fromTo("#ring4 circle", {opacity: 0},{duration: 0.4, opacity: 1, ease: Power2.easeOut}, "-=0.35" )
        .fromTo("#ring5 circle", {opacity: 0},{duration: 0.4, opacity: 1, ease: Power2.easeOut}, "-=0.35" )
        

    var FRAME1 = new gsap.timeline()
        .from(".frame1 .line span", {duration: 0.6, y: 15, opacity: 0, display: "none", ease: Power3.easeOut, stagger: 0.1 }, "+=0.25")

    var FRAME2 = new gsap.timeline()
        .pause()
        .to(".frame1 .line span", {duration: 0.6, opacity: 0, display: "none", ease: Power3.easeIn })     
        .from(".frame2 .line span", {duration: 0.6, y: 15, opacity: 0, display: "none", ease: Power3.easeOut, stagger: 0.1 })
    
    var FRAME3 = new gsap.timeline()
        .to(".frame2 .line span", {duration: 0.6, opacity: 0, display: "none", ease: Power3.easeIn })     
        .from(".frame3 .line span", {duration: 0.6, y: 15, opacity: 0, display: "none", ease: Power3.easeOut, stagger: 0.1 })

    var ENDFRAME = new gsap.timeline()
        .to(".frame3 .line span", {duration: 0.6, opacity: 0, display: "none", ease: Power3.easeIn })
        .to(".frame3, .background", {duration: 1.2, x: "-100%", ease: Power3.easeInOut }, "-=0.6")
        .from(".endframe, .grid", {duration: 1.2, x: "100%", ease: Power3.easeInOut }, "-=1.2")
        .add(LOGO, "-=0.5")

        .from(".tagline .letter", {opacity: 0, stagger: 0.05, duration: 0.4, ease: Linear.easeNone}, "-=1")
        .from(".cta", {duration: 0.6, y: 15, opacity: 0, ease: Power3.easeOut }, "-=0.25")
        .to(".tagline .letter", {color: "#A0E311", stagger: 0.03, duration: 0.1, ease: Linear.easeNone}, 3.0)
        .to(".tagline .letter", {color: "#FFFFFF", stagger: 0.03, duration: 0.2, ease: Power2.easeIn}, 3.1)
        

    // MASTER TIMELINE
    TIMELINE = new gsap.timeline({})
    .add(FRAME1, 0)
    .add(FRAME2, "+=1.5")
    .add(FRAME3, "+=2.0")
    .add(ENDFRAME, "+=1.5")
    .to(".fade", { duration: 0.5, opacity: 0, display: "none" }, 0)
    .from(".background", {duration: 5, scale: 1.1, ease: Sine.easeOut}, 0)

    console.log(TIMELINE);

    // TIMELINE.play(7)
}

window.addEventListener("load", init);
// window.onload = function () {
//     if (Enabler.isInitialized()) {
//         init();
//     } else {
//         Enabler.addEventListener(studio.events.StudioEvent.INIT, init);
//     }
// };
