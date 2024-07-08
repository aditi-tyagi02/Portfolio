document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menuLinks = document.querySelector('.menu-links');

    hamburgerIcon.addEventListener('click', function () {
        hamburgerIcon.classList.toggle('open');
        menuLinks.classList.toggle('open');
    });
});
