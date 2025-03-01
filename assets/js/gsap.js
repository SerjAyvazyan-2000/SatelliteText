


gsap.registerPlugin(ScrollTrigger);
//
// const scrollbar = Scrollbar.init(document.querySelector("#wrapper"), {
//     damping: 0.08,
// });

scrollbar.addListener(() => {

    gsap.to(".hero-parallax-image ", {
        y: -150,
        scrollTrigger: {
            trigger: ".poetry-hero-section",
            start: "top 10%",
            end: "bottom top",
            scrub: true,

        },
    });


    gsap.to(".industry-parallax-img ", {
        y: -250,
        scrollTrigger: {
            trigger: ".industry-section",
            start: "top 70%",
            end: "bottom top",
            scrub: true,

        },
    });

    gsap.to(".advantages-parallax--one", {
        y: -200,
        scrollTrigger: {
            trigger: ".advantages-section",
            start: "top 100%",
            end: "bottom top",
            scrub: true,

        },
    });
    gsap.to(".rewriting-hero-parallax", {
        y: -200,
        scrollTrigger: {
            trigger: ".rewriting-hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true,

        },
    });
    gsap.to(".presentation-hero-parallax", {
        y: -200,
        scrollTrigger: {
            trigger: ".presentation-hero-section",
            start: "top 10%",
            end: "bottom top",
            scrub: true,

        },
    });
    gsap.to(".synonymizer-hero-parallax", {
        y: -200,
        scrollTrigger: {
            trigger: ".synonymizer-hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true,

        },
    });

    gsap.to(".presentation-advantages-parallax", {
        y: -200,
        scrollTrigger: {
            trigger: ".presentation-advantages-section",
            start: "top 90%",
            end: "bottom+=200px top",
            scrub: true,
        },
    });

    gsap.to(".synonymizer-animation ", {
        y: 250,
        scrollTrigger: {
            trigger: ".synonymizer-advantages-section",
            start: "top 70%",
            end: "bottom top",
            scrub: true,
        },
    });

});

// Анимация элемента


//
// gsap.to(".verse-parallax--one", {
//     x: -250,
//     scrollTrigger: {
//         trigger: ".first-verse-section",
//         start: "top 80%",
//         end: "bottom top",
//         scrub: true,
//     },
// });
// gsap.to(".verse-parallax--two", {
//     x: -250,
//     scrollTrigger: {
//         trigger: ".first-verse-section",
//         start: "top 80%",
//         end: "bottom top",
//         scrub: true,
//     },
// });
//
// gsap.to(".verse-parallax--for", {
//     x: 250,
//     scrollTrigger: {
//         trigger: ".first-verse-section",
//         start: "top 80%",
//         end: "bottom top",
//         scrub: true,
//
//     },
// });
// gsap.to(".verse-parallax--tree", {
//     x: 250,
//     scrollTrigger: {
//         trigger: ".first-verse-section",
//         start: "top 80%",
//         end: "bottom top",
//         scrub: true,
//     },
// });





