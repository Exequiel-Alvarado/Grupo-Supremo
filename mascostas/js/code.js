const nav = document.querySelector(".nav");
    nav.classList.toggle('active',window.screenY>0)

var header = document.getElementById('Header')
window.addEventListener('scroll', ()=>{
    var scroll = window.scrollY
    if(scroll>10){
        header.style.backgroundColor = '#121212'
    }else{
        header.style.backgroundColor = 'trasparent'
    }
})

