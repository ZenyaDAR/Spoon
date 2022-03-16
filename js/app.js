const btn = document.querySelector('.burger')
const nav = document.querySelector('.header_menu')


btn.addEventListener('click', () =>{
    nav.classList.toggle('active')
})