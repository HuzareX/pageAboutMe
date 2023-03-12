const mobileNav = document.querySelector('.mobile-nav')
const navBtn = document.querySelector('.fa-bars')
const closeNavBtn = document.querySelector('.fa-xmark')
const navItems = document.querySelectorAll('.mobile-nav-to-section')


const handleNav = () => {
    mobileNav.classList.toggle('nav-active')

    navItems.forEach(e => {
        e.addEventListener('click', () => {
            mobileNav.classList.remove('nav-active')
        })
    })
}

navBtn.addEventListener('click', handleNav)
closeNavBtn.addEventListener('click', handleNav)









