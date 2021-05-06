const menuIco = document.querySelector('.hamburger')

const navBar = document.querySelector('.navbar')

menuIco.addEventListener('click', function(){
    navBar.classList.toggle('change');
})
