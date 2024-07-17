/*=============== SHOW MENU ===============*/

const navClose = document.getElementById('nav-close')
const navToggle = document.getElementById('nav-toggle')
const navMenu = document.getElementById('nav-menu')

if(navToggle)
{
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose)
{
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/


const navLink = document.querySelectorAll('.nav__link')

const navAction = () => {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click',navAction))

/*=============== ADD BLUR TO HEADER ===============*/

const blurHeader = () => {
    const header= document.getElementById('header')

    this.scrollY >=50 ? header.classList.add('blur-header')
                     : header.classList.remove('blur-header')
}

window.addEventListener('scroll',blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
