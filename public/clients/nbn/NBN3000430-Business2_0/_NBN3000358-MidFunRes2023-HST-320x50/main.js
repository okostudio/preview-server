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
    gsap.registerPlugin(DrawSVGPlugin);
	gsap.set(".common, .scene", { display: "block" });
	gsap.set(".htmlMem", { skewX: 0.01, transformOrigin: "50% 50%" });

	addListeners();

	// set lines
	lines = [
		[ArrayFrom(document.querySelectorAll("#lines-f1-l1 path")), ArrayFrom(document.querySelectorAll("#lines-f1-l2 path")), ArrayFrom(document.querySelectorAll("#lines-f1-l3 path"))],
		[ArrayFrom(document.querySelectorAll("#lines-f2-l1 path")), ArrayFrom(document.querySelectorAll("#lines-f2-l2 path")), ArrayFrom(document.querySelectorAll("#lines-f2-l3 path"))],
		[ArrayFrom(document.querySelectorAll("#lines-f3-l1 path")), ArrayFrom(document.querySelectorAll("#lines-f3-l2 path")), ArrayFrom(document.querySelectorAll("#lines-f3-l3 path"))],
		[ArrayFrom(document.querySelectorAll("#lines-f4-l1 path")), ArrayFrom(document.querySelectorAll("#lines-f4-l2 path")), ArrayFrom(document.querySelectorAll("#lines-f4-l3 path"))],
	];

    console.log("lines", lines)

	/* prettier-ignore */
	glitter = [
        ArrayFrom(document.querySelectorAll("#glitter2 circle")), 
    ];

	StartBanner();
}

function randomRange(n) {
	return Math.random() * n - n * 0.5;
}

function addLine(frame, line, time) {
	var _time = 0.5;
	if (time) {
		_time = time;
	}

	var tl = new gsap.timeline({ repeat: 2 })
		.from(lines[frame][0][line], _time, { opacity: 0, ease: Power3.easeIn }, 0)
		.from(lines[frame][1][line], _time, { opacity: 0, ease: Power3.easeIn }, 0)
		.from(lines[frame][2][line], _time, { opacity: 0, ease: Power3.easeIn }, 0)
		.to(lines[frame][0][line], _time, { drawSVG: "80% 20%", ease: Power3.easeIn }, 0)
		.to(lines[frame][1][line], _time, { drawSVG: "84% 16%", ease: Power3.easeIn }, 0)
		.to(lines[frame][2][line], _time, { drawSVG: "88% 12%", ease: Power3.easeIn }, 0)
		.to(lines[frame][0][line], _time, { drawSVG: "0% 0%", ease: Power3.easeOut }, _time)
		.to(lines[frame][1][line], _time, { drawSVG: "0% 0%", ease: Power3.easeOut }, _time)
		.to(lines[frame][2][line], _time, { drawSVG: "0% 0%", ease: Power3.easeOut }, _time);
	return tl;
}

function StartBanner() {
	gsap.set(".banner", { display: "block" });
	gsap.from(".htmlMem", { duration: 0.25, opacity: 0, ease: Power2.easeIn });
	gsap.set(".scene svg *", { transformOrigin: "50% 50%" });
	gsap.set(".scene svg path", { drawSVG: "100% 100%" });

	//
	// FRAME 1
	//
	/* prettier-ignore */
	var FRAME1 = new gsap.timeline()
	for (var i = 0; i < lines[0][0].length; ++i) {
		FRAME1.add(addLine(0, i), i * 0.3);
	}

	FRAME1.from("#frame1-copy g", { scale: 3, opacity: 0, ease: Power3.easeOut, duration: 0.15, stagger: 0.25 }, 0.5);
	/* prettier-ignore */
	FRAME1.to("#frame1", {duration: 5, scale: 1.08, transformOrigin: "80% 50%", ease: Linear.easeNone}, 0)
    .to("#box1", { duration: 5, y: -30, rotation: 7, ease: Linear.easeNone }, 0)
    .to("#box2", { duration: 5, y: -15, rotation: -2, ease: Linear.easeNone }, 0)
    .to("#box3", { duration: 5, y: -10, rotation: 3, ease: Linear.easeNone }, 0)

	//
	// FRAME 2
	//
	var FRAME2 = new gsap.timeline();
	for (var i = 0; i < lines[1][0].length; ++i) {
		FRAME2.add(addLine(1, i), i * 0.3);
	}
	for (var i = 0; i < glitter[0].length; ++i) {
		gsap.set(glitter[0][i], { scale: Math.random() * 0.2 + 0.3, opacity: Math.random() * 0.7 + 0.3 }, 0);
		FRAME2.to(glitter[0][i], { duration: 5, ease: Linear.easeNone, x: Math.random() * 30 - 15, y: Math.random() * -20 - 10 }, 0);
	}
	/* prettier-ignore */
	FRAME2.from("#frame2", {opacity: 0, ease: Power2.easeIn, duration: 0.8}, 0)
        .to("#frame1-copy g", {scale: 0, opacity: 0, ease: Power3.easeIn, duration: 0.25, stagger: 0.05}, 0)
        .from("#frame2-copy g", {scale: 3, opacity: 0, ease: Power3.easeOut, duration: 0.15, stagger: 0.25}, 0.5)
        .to("#frame2", {duration: 5, scale: 1.1, transformOrigin: "80% 50%", ease: Linear.easeNone}, 0)

	//
	// FRAME 3
	//
	var FRAME3 = new gsap.timeline();
	for (var i = 0; i < lines[2][0].length; ++i) {
		// special case for pulse line
		FRAME3.add(addLine(2, i, 0.7), i * 0.4 + 0.4);
		// FRAME3.add(addLine(2, i), i * 0.3);
	}
	/* prettier-ignore */
	FRAME3.from("#frame3", {opacity: 0, ease: Power2.easeIn, duration: 0.8}, 0)
        .to("#frame2-copy g", {scale: 0, opacity: 0, ease: Power3.easeIn, duration: 0.25, stagger: 0.05}, 0)
        .from("#frame3-copy g", {scale: 3, opacity: 0, ease: Power3.easeOut, duration: 0.15, stagger: 0.25}, 0.5)
        .to("#ipads", { duration: 5, y: -7, rotation: 4, ease: Linear.easeNone }, 0)
				.to("#frame3", {duration: 5, scale: 1.1, transformOrigin: "80% 50%", ease: Linear.easeNone}, 0)

	//
	// FRAME 4
	//
	var FRAME4 = new gsap.timeline();
	/* prettier-ignore */
	FRAME4.from("#frame4", {opacity: 0, ease: Power2.easeIn, duration: 0.5})
        .to("#frame3-copy g", {scale: 0, opacity: 0, ease: Power3.easeIn, duration: 0.25, stagger: 0.05}, "-=0.5")

				.from("#terms", {opacity: 0, ease: Power2.easeIn, duration: 0.5}, "+=0")
				.to("#terms", {opacity: 0, ease: Power2.easeIn, duration: 0.5}, "+=3.5")

        .from("#frame4-copy g", {scale: 3, opacity: 0, ease: Power3.easeOut, duration: 0.15, stagger: 0.25}, "+=0.2")
        .from("#cta", {opacity: 0, y: 15, ease: Power3.easeOut, duration: 0.5}, "+=0.4")
        
				.from("#frame4-background", {duration: 4, scale: 1.05, ease: Linear.easeNone}, 0)
	for (var i = 0; i < lines[3][0].length; ++i) {
		FRAME4.add(addLine(3, i), i * 0.3);
	}

	// MASTER TIMELINE
	TIMELINE = new gsap.timeline({})
		.add(FRAME1, 0)
		.add(FRAME2, 3)
		.add(FRAME3, 6)
		.add(FRAME4, 9)
		// -----------
		.to(".fade", { duration: 0.5, opacity: 0, display: "none" }, 0);

	console.log(TIMELINE);

	// TIMELINE.play(6)
}

// window.addEventListener("load", init);
if (Enabler.isInitialized()) {
    preInit();
} else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, preInit);
}

// Runs when Enabler is ready.
function preInit() {
    console.log(">> POLITE INIT")
    if (Enabler.isPageLoaded()) {
        politeInit();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, politeInit);
    }
};

// Runs when the page is completely loaded.
function politeInit(){
    init();
};

