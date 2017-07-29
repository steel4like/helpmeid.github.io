var
    slider = document.querySelector('.header_slider'),
    slides = slider.querySelectorAll('.header_slider .slide:not(:first-child)'),
    firstSlide = slider.querySelector('.header_slider .slide:first-child');
tl = new TimelineMax({
        repeat: -1
    })
    .staggerFrom(slides, 2, {
        xPercent: -100
    }, 6, 4)
    .fromTo(firstSlide, 2, {
        xPercent: -100
    }, {
        xPercent: 0,
        zIndex: 20,
        immediateRender: false
    }, '+=4');
