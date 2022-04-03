const btnMobile = document.getElementById('btn-mobile');


function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active'); //toggle - adiciona, caso não tenha ou remova caso tenha
}

btnMobile.addEventListener('click', toggleMenu);