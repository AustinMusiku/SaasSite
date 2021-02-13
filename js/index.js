let menu = document.querySelector('.menu');
let mobileNav = document.querySelector('.nav-links');
let hams = menu.querySelectorAll('.ham');
let hamOne = menu.querySelectorAll('.ham-one');
let hamTwo = menu.querySelectorAll('.ham-two');

let hero = document.querySelector('.hero');
let heroTxt = document.querySelector('.hero-text');
let heroTxtP = heroTxt.querySelector('h1');
let heroTxtBody = heroTxt.querySelector('p');
let heroTxtA = heroTxt.querySelector('a');
let heroTxtItems = [ heroTxtP, heroTxtBody, heroTxtA ]
let heroImg = hero.querySelector('.hero-img');
let heroItems = [ heroTxt,heroImg ]


let sections = document.querySelectorAll('section');
let sectionheadings = document.querySelectorAll('.section-heading');

// ##select banners
let banners = gsap.utils.toArray('.banner, .banner-reverse');


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


let header = gsap.timeline();

menu.addEventListener('click', () => {
    // mobileNav.classList.toggle('activeNav');
    menu.classList.toggle('active-nav');

    navSlide.reversed() ? navSlide.play() : navSlide.reverse();
});


// Header animations
header
    .from(heroTxtItems, .35, {
        x: '-70',
        opacity: 0,
        stagger: .35,
        ease: 'power1.out'
    })
    .from( heroImg , .25, {
        x: '70',
        opacity: 0,
        ease: 'power3.out'
    });



let bannerAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: banners.forEach( banner => {
            banner;
            console.log(banner);
            }),
        start: 'top top'       
    },
    stagger: .1
});

banners.forEach( banner => {

    bannerAnimation.from( banner, {
            y: 30,
            opacity: 0
    });
    console.log(banner);
});