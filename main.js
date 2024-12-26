let link = document.querySelector('header .link')
link.addEventListener('click',()=>{
    document.querySelector('.mega-menu').style.cssText =
    "z-index : 100 ; opacity : 1 ;top:100%"
})
document.querySelector('.mega-menu').addEventListener('mouseleave',()=>{
    document.querySelector('.mega-menu').style.cssText =
    "z-index : -1 ; opacity : 0 ; transition : .19 s"
})
let card =document.querySelector(".cards")


let spans =document.querySelectorAll('.skill .progress span')
let section =  document.querySelector('.skills')

window.onscroll=()=>{
    if (window.scrollY >= section.offsetTop - 200) {
        spans.forEach(span=>{
        span.style.width = span.dataset.progress
        span.style.transition = '.3s'
    })
    }
    
    
}