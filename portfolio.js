
///////////////////////////////// swiper /////////////////////////////////////////

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 40,
    centeredSlides: true,
    grabCursor: true,

    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    },

    // Navigation arrows
    //navigation: {
    //nextEl: '.swiper-button-next',
    //prevEl: '.swiper-button-prev',
    //},
});





/////////////////////////////////////// Ease elements in ////////////////////////////////



window.addEventListener('scroll', reveal);

    function reveal() {
        let reveals = document.querySelectorAll('.reveal');

        for(let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 30;

            if(revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }
    }

