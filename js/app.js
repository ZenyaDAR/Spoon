const btn = document.querySelector('.burger')
const nav = document.querySelector('.header_menu')


btn.addEventListener('click', () =>{
    nav.classList.toggle('active')
})

document.body.onload = () => {
setTimeout(() => {
    let preloader = document.getElementById("preloader");
    if(!preloader.classList.contains("done")){
        preloader.classList.add("done")
    }
},1000)
}