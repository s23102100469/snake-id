document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('.header__btn');
    const header = document.querySelector('.header');
    function addClass() {
        header.classList.toggle('open');
    }
    btn.addEventListener('click', addClass);
});


