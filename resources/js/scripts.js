// mobile nav

function openNav (){

    let toggler = document.querySelector(".nav-prompt")

    let navigation =document.querySelector(".main-nav")

    toggler.onclick = function(){
        navigations.classList.toggle('open')
    }

}

openNav ()