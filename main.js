const menuCheck = document.getElementById('menu')
const menu = document.querySelector('.nav__menu-links')
const activeMenu = document.querySelectorAll('.nav__menu-link')
const activeMenu1 = document.querySelector('#menu')
const slaider = document.querySelector('.slaider__container')

menuCheck.addEventListener('change', mostrarMenu)

activeMenu.forEach((e, i) => {
    activeMenu[i].addEventListener('click', active)
})

function mostrarMenu() {
    menu.classList.toggle('hidden');
}

function active() {
    activeMenu1.checked = false
    mostrarMenu()
}