const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function videoAnimation() {
    let videocon = document.querySelector('.img-cont');
    let playbtn = document.querySelector('#play');

    videocon.addEventListener("mouseenter", function () {
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1
        })
    })

    videocon.addEventListener("mouseleave", function () {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0
        })
    })

    videocon.addEventListener("mousemove", function (dets) {
        gsap.to(playbtn, {
            left: dets.x - 60,
            top: dets.y - 63
        })
    })
}

function inOutAnimation() {
    gsap.to('.boundingElement', {
        y: 1,
        ease: Expo.easeInOut,
        duration: 1.5,
        stagger: .6
    })

    gsap.from('.page1 .img-cont', {
        opacity: 0,
        delay: 1.5,
        duration: .9,
        stagger: 1.5
    })
}






videoAnimation();
inOutAnimation();