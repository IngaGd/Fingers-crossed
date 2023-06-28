document
    .querySelector('.dropdown > .link')
    .addEventListener('click', function () {
        const menu = this.nextElementSibling;
        menu.style.opacity = menu.style.opacity == 1 ? 0 : 1;
    });
