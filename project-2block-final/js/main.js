const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
    document.body.classList.toggle('body--opened-menu');
});


const modal = document.querySelector('.modal');
const cancelButton = document.querySelector('.modal__cancel');
const openButton = document.querySelector('.about__img-button');


function openModal(event) {
    event.preventDefault();
    document.body.classList.add('body--opened-modal');
}

function closeModal() {
    document.body.classList.remove('body--opened-modal');
}


openButton.addEventListener('click', openModal);


cancelButton.addEventListener('click', closeModal);


modal.addEventListener('click', function (event) {
    if (event.target === modal) {
        closeModal();
    }
});



const tabs = document.querySelectorAll('.tab-controls__link');
const contents = document.querySelectorAll('.tab-content');


function switchTab(event) {
    event.preventDefault();


    tabs.forEach(tab => {
        tab.classList.remove('tab-controls__link--active');
    });
    contents.forEach(content => {
        content.classList.remove('tab-content--show');
    });


    const target = event.target.getAttribute('href');
    event.target.classList.add('tab-controls__link--active');
    document.querySelector(target).classList.add('tab-content--show');
}


tabs.forEach(tab => {
    tab.addEventListener('click', switchTab);
});



document.querySelectorAll('.accordion-list__control').forEach(control => {
    control.addEventListener('click', () => {
        const item = control.parentElement;
        const content = item.querySelector('.accordion-list__content');


        const isOpen = item.classList.contains('accordion-list__item--opened');


        document.querySelectorAll('.accordion-list__item').forEach(otherItem => {
            const otherContent = otherItem.querySelector('.accordion-list__content');
            if (otherItem !== item) {
                otherItem.classList.remove('accordion-list__item--opened');
                otherContent.style.maxHeight = null;
            }
        });


        if (!isOpen) {
            item.classList.add('accordion-list__item--opened');
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            item.classList.remove('accordion-list__item--opened');
            content.style.maxHeight = null;
        }
    });
});



new Swiper('.gallery__swiper', {
    spaceBetween: 15,
    slidesPerView: 2,
    pagination: {
        el: '.gallery__pagination',
        type: 'fraction',
    },


    navigation: {
        nextEl: '.gallery__next',
        prevEl: '.gallery__prev',
    },
    breakpoints: {
        601: {
            slidesPerView: 3,
        },
        801: {
            spaceBetween: 32,
        },
        1101: {
            slidesPerView: 4,
        }
    }

});
new Swiper('.testimonials__slider', {
    spaceBetween: 0,
    slidesPerView: 2.1,
    centeredSlides: true,

    navigation: {
        nextEl: '.testimonials__next',
        prevEl: '.testimonials__prev',
    },
    scrollbar: {
        el: '.testimonials__scrollbar',
        draggable: true,
    },
    breakpoints: {
        601: {
            slidesPerView: 1,
        },
        901: {
            slidesPerView: 1.5,
        },
        1201: {
            slidesPerView: 2.1,
        }
    }
    
});
document.addEventListener('DOMContentLoaded', function () {
    var input = document.querySelector('.contact__form-input-tel');

    input.addEventListener('input', function (e) {
        var value = e.target.value.replace(/\D/g, '');
        

        if (value.startsWith('7')) {
            var formattedValue = '+7 ';
            if (value.length > 1) {
                formattedValue += '(' + value.substring(1, 4);
            }
            if (value.length >= 5) {
                formattedValue += ') ' + value.substring(4, 7);
            }
            if (value.length >= 8) {
                formattedValue += '-' + value.substring(7, 9);
            }
            if (value.length >= 10) {
                formattedValue += '-' + value.substring(9, 11);
            }

            e.target.value = formattedValue.substring(0, 18);
        } else {

            e.target.value = '+7 ';
        }
    });

    input.value = '+7 ';
    

    input.addEventListener('focus', function (e) {
        if (e.target.value === '+7 ') {
            e.target.setSelectionRange(3, 3); 
        }
    });
});


