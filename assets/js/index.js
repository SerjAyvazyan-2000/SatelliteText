


const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const menuBg = document.querySelector('.menu-bg');
const headerBody = document.querySelector('.header-body');


document.addEventListener('DOMContentLoaded', function () {
    burger.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    menuBg.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    function openMenu() {
        menu.classList.add('active');
        burger.classList.add('active');
        header.classList.add('active');
        menuBg.classList.add('active');
        headerBody.classList.add('active');


    }

    function closeMenu() {
        menu.classList.remove('active');
        burger.classList.remove('active');
        header.classList.remove('active');
        menuBg.classList.remove('active');
        headerBody.classList.remove('active');

    }


});

window.addEventListener('scroll', function () {
    const headerTop = document.querySelector('.header')


    if (window.scrollY > 0) {
        headerTop.classList.add('moved');

    } else {
        headerTop.classList.remove('moved');

    }
});




function toggleActiveState(item) {
    const allItems = document.querySelectorAll('.faq-item');

    allItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active'); // Закрываем остальные
        }
    });

    item.classList.toggle('active'); // Открываем или закрываем текущий
}

document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => toggleActiveState(item));

    const icon = item.querySelector('.faq-item-icon');
    if (icon) {
        icon.addEventListener('click', (event) => {
            event.stopPropagation();
            toggleActiveState(item);
        });
    }
});


function setupGifToggle(selector) {
    document.querySelectorAll(selector).forEach(block => {
        const gif = block.getAttribute('data-gif');
        const defaultImage = block.getAttribute('data-img');

        function toggleGif() {
            if (block.classList.contains('active')) {
                block.classList.remove('active');
                block.style.backgroundImage = `url('${defaultImage}')`;
            } else {
                block.classList.add('active');
                block.style.backgroundImage = `url('${gif}')`;
            }
        }

        block.addEventListener('click', toggleGif);
    });
}

setupGifToggle('.hero-video-block');
setupGifToggle('.video-block');






document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".possibilities-tab");
    const contents = document.querySelectorAll(".possibilities-cnt");

    function activateTab(tab) {
        const targetId = tab.getAttribute("data-id");

        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");
        document.querySelector(`.possibilities-cnt[data-id="${targetId}"]`).classList.add("active");
    }

    tabs.forEach(tab => {
        tab.addEventListener("click", () => activateTab(tab));
    });

    activateTab(tabs[0]);
});




const scrollbar = Scrollbar.init(document.querySelector(".wrapper"), {
    damping: 0.08,
});


let lastScrollTop = 0;

scrollbar.addListener(() => {
    document.querySelectorAll(".parallax").forEach(image => {
        const section = image.closest(".parallax-section");
        const sectionTop = section.getBoundingClientRect().bottom - 200;
        const sectionHeight = section.offsetHeight;
        const windowHeight = window.innerHeight;

        const isSectionVisible = sectionTop < windowHeight && sectionTop + sectionHeight > 0;

        if (isSectionVisible) {
            const progress = (windowHeight - sectionTop) / (windowHeight + sectionHeight);

            const maxShift = -250;

            const shift = progress * maxShift;

            if (lastScrollTop < window.scrollY) {
                image.style.transform = `translateY(${shift}px)`;
            }
            else {
                image.style.transform = `translateY(${shift}px)`;
            }
        } else {
            image.style.transform = "translateY(0px)";
        }

        lastScrollTop = window.scrollY <= 0 ? 0 : window.scrollY; // Обновляем значение lastScrol

    });
});


scrollbar.addListener(() => {
    document.querySelectorAll(".parallax-top").forEach(image => {
        const section = image.closest(".parallax-section");
        const sectionTop = section.getBoundingClientRect().top +200;
        const sectionHeight = section.offsetHeight;
        const windowHeight = window.innerHeight;

        const isSectionVisible = sectionTop < windowHeight && sectionTop + sectionHeight > 0;

        if (isSectionVisible) {
            const progress = (windowHeight - sectionTop) / (windowHeight + sectionHeight);

            const maxShift = -250;

            const shift = progress * maxShift;

            if (lastScrollTop < window.scrollY) {
                image.style.transform = `translateY(${shift}px)`;
            }
            else {
                image.style.transform = `translateY(${shift}px)`;
            }
        } else {
            image.style.transform = "translateY(0px)";
        }

        lastScrollTop = window.scrollY <= 0 ? 0 : window.scrollY; // Обновляем значение lastScrol

    });
});


