let menu = document.querySelector('.menu');
let mobileNav = document.querySelector('.nav-links');
let hams = menu.querySelectorAll('.ham');
let hamOne = menu.querySelectorAll('.ham-one');
let hamTwo = menu.querySelectorAll('.ham-two');

let hero = document.querySelector('.hero');
let sections = document.querySelectorAll('section');
let sectionheadings = document.querySelectorAll('.section-heading');

// gsap timelines
let navSlide = gsap.timeline({
    paused: true,
    reversed: true
});

navSlide
        .to(hamTwo, .25, {
            width: '45px',
            transformOrigin: 'right'
        })
        .to(mobileNav, .25, {
            xPercent: '100',
            ease: 'power4.out'
        })
        .to(hamOne, .01, { backgroundColor: 'white' }, 'color')
        .to(hamTwo, .01, { backgroundColor: 'white' }, 'color')

        .to(hamOne, .1, {
            transformOrigin: "50% 50%",
            y: '6',
            backgroundColor: 'white'
        }, 'center')
        .to(hamTwo, .1, {
            transformOrigin: "50% 50%",
            y: '-6',
            backgroundColor: 'white'
        }, 'center')

        .to(hamOne, .1, { rotation: 90 }, 'rotate')
        .to(hamTwo, .1, { rotation: -90 }, 'rotate')

        .to(hamOne, .125, { rotation: 45, scaleX: .75 }, 'cross')
        .to(hamTwo, .125, { rotation: -45, scaleX: .75 }, 'cross');


menu.addEventListener('click', () => {
    // mobileNav.classList.toggle('activeNav');
    menu.classList.toggle('active-nav');

    navSlide.reversed() ? navSlide.play() : navSlide.reverse();
})