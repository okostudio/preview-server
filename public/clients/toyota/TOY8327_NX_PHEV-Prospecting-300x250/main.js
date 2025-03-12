const banner = {
    looped: 0
}
let TIMELINE
//////////////////////////////////////////////////////////////////////////////////

// INIT BANNER ----------------------------------
const init = () => {
    setBannerSize()
    gsap.ticker.fps(24)
    gsap.set(".common, .scene", { display: "block" })
    gsap.set(".htmlMem", { skewX: 0.01, transformOrigin: "50% 50%" })

    addListeners(onMouseOver, onMouseLeave)
    startBanner()
}

const onMouseOver = () => {
    document.querySelector(".cta").classList.add("over")
}
const onMouseLeave = () => {
    document.querySelector(".cta").classList.remove("over")
}

const startBanner = () => {
    gsap.set(".banner", { display: "block" })
    gsap.from(".htmlMem", { duration: 0.25, opacity: 0, ease: Power2.easeIn })
    gsap.to(".fade", { duration: 0.3, opacity: 0 })

    splitText(".frame1 .copy")
    splitText(".frame2 .copy")
    splitText(".frame3 .copy")


    // ===================
    //
    // CANVAS TEXT
    //
    // ===================
    // Master Canvas
    banner.canvas = document.querySelector(".scene canvas")
    banner.canvas.width = banner.width * 2
    banner.canvas.height = banner.height * 2
    banner.ctx = banner.canvas.getContext("2d")

    // Terms holder / offset
    banner.scene = newCanvas({
        width: 1940,
        height: 1200,
        parent: banner.canvas
    })

    // smoke particle sprite
    setSeed(50)
    banner.particles = []
    for (i = 0; i < 70; i++) {
        const particle = newSprite(".smoke", banner.scene.ctx, banner.canvas)
        particle.x = FauxRandom() * banner.scene.canvas.width
        particle.y = FauxRandom() * banner.scene.canvas.height * 0.5
        particle.scale = FauxRandom() * 1 + 2
        particle.rotation = FauxRandom() * 3.14
        particle.alpha = FauxRandom() * 0.035 + 0.1
        particle.rSpeed = FauxRandom() * 0.08 - 0.04
        particle.xSpeed = FauxRandom() * 0.7

        banner.particles.push(particle)
    }

    banner.drawParticles = () => {
        banner.particles.map(particle => {
            // position
            particle.x = particle.x % (banner.scene.canvas.width + 200)

            // update
            particle.rotation += particle.rSpeed
            particle.x += particle.xSpeed * particle.scale

            // draw
            drawSprite(particle, banner.scene.ctx)
        })
    }



    // scene sprites
    banner.background = newSprite(".background", banner.scene.ctx, banner.canvas)
    banner.elipse = newSprite(".elipse", banner.scene.ctx, banner.canvas)
    banner.car = newSprite(".car", banner.scene.ctx, banner.canvas)

    // Canvas layers
    banner.layers = [
        banner.scene
    ]

    // Sprites, layer order.
    banner.sprites = [
        banner.background,
        banner.elipse,
        banner.car,
    ]

    banner.sprites.map((sprite) => {
        sprite.x = banner.scene.canvas.width * 0.5
        sprite.y = banner.scene.canvas.height * 0.5
    })

    banner.scene.sprite.x = banner.canvas.width * 0.5 + 30
    banner.scene.sprite.y = banner.canvas.height * 0.5 - 10
    banner.scene.sprite.scale = 0.67


    // ===== ----- ===== ----- =====
    // 
    //  UPDATE CANVAS
    // 
    // ===== ----- ===== ----- =====
    banner.update = () => {
        banner.layers.map((layer) => {
            layer.ctx.clearRect(0, 0, layer.canvas.width, layer.canvas.height)
        })

        // draw texture pattern background
        banner.ctx.fillRect(0, 0, banner.canvas.width, banner.canvas.height)

        // draw grandstand
        // drawSprite(banner.scene)

        // return to normal
        banner.ctx.globalCompositeOperation = "source-over"

        // banner.ctx.save()
        // banner.sprites.map((sprite) => {
        //     drawSprite(sprite, banner.ctx)
        // })

        // draw background
        drawSprite(banner.background, banner.scene.ctx)
        drawSprite(banner.elipse, banner.scene.ctx)

        // draw particles
        banner.scene.ctx.globalCompositeOperation = "lighter"
        banner.drawParticles()
        banner.scene.ctx.globalCompositeOperation = "source-over"

        // draw top layer sprites
        drawSprite(banner.car, banner.scene.ctx)
        drawSprite(banner.scene.sprite, banner.ctx)
        // banner.ctx.restore()

    }
    // banner.update()



    //
    //  TIMELINE
    //

    const FRAME1 = new gsap.timeline()
        .from(".bar", { duration: 1, scaleY: 0, ease: Power2.easeInOut })
        .from(".frame1 .line", { x: -10, opacity: 0, stagger: 0.07, ease: Power2.easeOut }, "-=0.5")


    const FRAME2 = new gsap.timeline()
        .to(".frame1 .line", { x: 10, opacity: 0, stagger: 0.07, ease: Power2.easeIn })
        .to(".bar", { duration: 1, height: "2em", ease: Power2.easeInOut }, "-=0.5")
        .from(".frame2 .line", { x: -10, opacity: 0, stagger: 0.07, ease: Power2.easeOut }, "-=0.5")


    const FRAME3 = new gsap.timeline()
        .to(".frame2 .line", { x: 10, opacity: 0, stagger: 0.07, ease: Power2.easeIn })
        .to(".bar", { duration: 1, height: "1em", y: -2, ease: Power2.easeInOut }, "-=0.5")
        .from(".frame3 .line0", { x: -10, opacity: 0, stagger: 0.07, ease: Power2.easeOut }, "-=0.5")

        .from(".frame3 .line1, .frame3 .line2, .frame3 .line3", { x: -10, opacity: 0, stagger: 0.07, ease: Power2.easeOut }, "+=1.5")
        .to(".bar", { duration: 0.7, height: "4.08em", y: 0, ease: Power2.easeInOut }, "-=0.6")
    // .from(".cta", { x: -10, opacity: 0, ease: Power3.easeOut })


    const LOOPCHECK = new gsap.timeline({ onComplete: loop })


    const REPLAY = new gsap.timeline()
        .set(".bar", { transformOrigin: "0 100%" })
        .to(".frame3 .line", { x: 20, opacity: 0, stagger: 0.07, ease: Power2.easeIn })
        .to(".bar", { scaleY: 0, ease: Power2.easeIn }, "-=0.5")
    // .to(".cta", { opacity: 0, ease: Power2.easeIn }, "-=0.5")


    // MASTER TIMELINE
    TIMELINE = new gsap.timeline({ repeat: 2, onUpdate: () => { banner.update() } })
        .add(FRAME1, "+=0.25")
        .add(FRAME2, "+=2")
        .add(FRAME3, "+=2")

        .add(LOOPCHECK, "+=3")
        .addLabel("replay")
        .add(REPLAY)

    // .play(12)
}

function loop() {
    // TIMELINE.pause()

    if (banner.looped < 1) {
        banner.looped++
        TIMELINE.play("replay")
    } else {
        TIMELINE.pause()
    }
}

window.addEventListener("load", init)

// ---- Onload/Init ----//
// window.onload = function () {
//     if (Enabler.isInitialized()) {
//         init()
//     } else {
//         Enabler.addEventListener(studio.events.StudioEvent.INIT, init)
//     }
// }













