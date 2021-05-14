 // Sliders
 document.querySelectorAll('.pointer').forEach( pointer => pointer.addEventListener('click', e => {
    let $class = e.target.closest('section').querySelector('.sliders').parentElement.classList.value
    let currentSlide = e.target.getAttribute('data-key')
    updateMargin($class, currentSlide)
}))

function atualizaPointer($class, currentSlide) {
    document.querySelector(`.${$class} .pointer.active`).classList.remove('active')
    let sliderPointers = document.querySelectorAll(`.${$class} .pointer`)
    sliderPointers[currentSlide].classList.add('active')
}
function updateMargin($class, currentSlide) {
    atualizaPointer($class, currentSlide)
    let slideWidth = document.querySelector(`.${$class} .slide`).clientWidth;
    if ( $class === 'section-team') slideWidth += 20
    let newMargin = slideWidth * currentSlide;
    document.querySelector(`.${$class} .sliders`).style.marginLeft = `-${newMargin}px`;
}

// Scroll
const menuItems = document.querySelectorAll('.menu li a')
const sections = []
menuItems.forEach( item => {
    item.addEventListener('click', scrollToIdOnClick)
    let id = item.getAttribute('href')
    sections.push(document.querySelector(id))
})
function getScrollTopByHref(element) {
    const id = element.getAttribute('href')
    return document.querySelector(id).offsetTop-80
}

function scrollToIdOnClick(event) {
    event.preventDefault()
    const to = getScrollTopByHref(event.target)
    scrollPosition(to)
}
function scrollPosition(to) {
    window.scrollTo({
        top: to,
        behavior: 'smooth'
    })
} 
window.addEventListener('scroll', () => {
    let current = ''
    sections.forEach(item => {
        const itemTop = item.offsetTop-80
        if (window.scrollY >= itemTop) {
            current = `#${item.getAttribute('id')}`
        }
    })
    menuItems.forEach(li => {
        li.closest('li').classList.remove('active')
        if (li.getAttribute('href') === current) {
            li.closest('li').classList.add('active')
        }
    })
})


// Menu
const nav = document.querySelector('.menu nav')
function openMenu() {
    nav.style.marginRight = '0'
    setTimeout(()=>{
        nav.style.opacity = '1'
    }, 100);
}

function closeMenu() {
    nav.style.opacity = '0'
    setTimeout(()=>{
        nav.style.marginRight = '-50vw'
    }, 100);
}

document.querySelector('.menu-opener').addEventListener('click', () => {
    nav.style.marginRight !== '0px' ? openMenu() : closeMenu()
});