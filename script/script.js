//---NAVBAR---

const mobileNav = document.querySelector('.mobile-nav')
const burgetBtn = document.querySelector('.fa-bars')
const closeBtn = document.querySelector('.fa-xmark')
const mobileNavItems = document.querySelectorAll('.mobile-nav-to-section')



const showMobileNav = () => {
    mobileNav.style.top = "0"
}

const closeMobileNav = (e) => {
    mobileNav.style.top = "-150%"
    
}

burgetBtn.addEventListener('click', showMobileNav)
closeBtn.addEventListener('click', closeMobileNav)
mobileNavItems.addEventListener('click', closeMobileNav)
