const hamBtn = document.getElementById('ham-btn')

const navLink = document.querySelector('.nav-link')

hamBtn.addEventListener('click' , function(){
    navLink.classList.toggle('nav-ham')
    hamBtn.classList.toggle('ham-active')
})
