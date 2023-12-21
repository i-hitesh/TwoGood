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

function cursorAnime() {
    document.addEventListener('mousemove', function (dets) {
        gsap.to("#cursor", {
            left: dets.x,
            top: dets.y
        })
    })

    var a = document.querySelectorAll(".child")
    a.forEach(function (elem) {
        elem.addEventListener('mouseenter', function () {
            gsap.to('#cursor', {
                transform: 'translate(-50%, -50%) scale(1)'
            })
        })
    })

    a.forEach(function (elem) {
        elem.addEventListener('mouseleave', function () {
            gsap.to('#cursor', {
                transform: 'translate(-50%, -50%) scale(0)'
            })
        })
    })
}





videoAnimation();
inOutAnimation();
cursorAnime();