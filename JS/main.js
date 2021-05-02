const menuIco = document.querySelector('.hamburger')

const navBar = document.querySelector('.navbar')

menuIco.addEventListener('click', () =>{
    navBar.classList.toggle('change');
})