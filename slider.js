let sliders = document.querySelectorAll('.slider');

document.addEventListener('DOMContentLoaded', function () {
    for (let i = 0; i < sliders.length; i++) {
        let buttonLeft = sliders[i].querySelector('.slider__button--left');
        let buttonRight = sliders[i].querySelector('.slider__button--right')
        let slides = sliders[i].querySelectorAll('.slider__item');
        let slideIndex = 0;

        buttonLeft.addEventListener('click', previousSlide);
        buttonRight.addEventListener('click', nextSlide);


        function nextSlide() {
            showSlides(++slideIndex);
        }

        function previousSlide() {
            showSlides(--slideIndex);
        }

        function showSlides(n) {
            if (n > slides.length - 1) {
                slideIndex = 0;
            }
            if (n < 0) {
                slideIndex = slides.length - 1;
            }
            for (let slide of slides) {
                if (slide.classList.contains('slider__item--current')) {
                    slide.classList.remove('slider__item--current');
                }
            }
            slides[slideIndex].classList.add('slider__item--current');
        }
    }
});