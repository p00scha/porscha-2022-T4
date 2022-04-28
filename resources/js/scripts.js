// mobile nav

function openNav (){

    let toggler = document.querySelector(".nav-prompt")

    let navigation =document.querySelector(".main-nav")

    toggler.onclick = function(){
        navigations.classList.toggle('open')
    }

}

openNav () 


const toggleButton = documents.getElementsByClassName('toggle-button')[0]
const navbarLinks = documents.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.vlasslist.toggle ('active')
})