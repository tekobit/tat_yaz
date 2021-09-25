const knopki = document.querySelectorAll('.Navigation_Bar')
const podol = document.querySelectorAll('.podol')
//console.log(podol)
const btn = document.querySelector('.btn')
const screens = document.querySelector('.screens')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

const podcherk = document.querySelector('.podcherk')

for (const ssylka of knopki) {
    ssylka.addEventListener('mouseover',() => {
        if (ssylka.classList.contains('v')) {
            podol[0].style.opacity = '1'
        } else if (ssylka.classList.contains('b')) {
            podol[1].style.opacity = '1'
        } else if (ssylka.classList.contains('n')) {
            podol[2].style.opacity = '1'
        } else if (ssylka.classList.contains('k')) {
            podol[3].style.opacity = '1'
        } 
    })
    ssylka.addEventListener('mouseout',() => {
        if (ssylka.classList.contains('v')) {
            podol[0].style.opacity = '0'
        } else if (ssylka.classList.contains('b')) {
            podol[1].style.opacity = '0'
        } else if (ssylka.classList.contains('n')) {
            podol[2].style.opacity = '0'
        } else if (ssylka.classList.contains('k')) {
            podol[3].style.opacity = '0'
        } 
    })
}


const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')

//const btn = document.getElementsByTagName('button')
//console.log(btn)
//btn.style.background = '#000'

const container = document.querySelector('.container')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

let activeSlideIndex = 0

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})



function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount){
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
    }
    }

    if (activeSlideIndex === 0) {
        upBtn.style.background = '#FF8C00'
        downBtn.style.background = '#FF8C00'
        upBtn.style.border = '2px solid #FF7F50'
        downBtn.style.border = '2px solid #FF7F50'
    } else  if (activeSlideIndex === 1) {
        upBtn.style.background = '#fed2a1'
        downBtn.style.background = '#fed2a1'
        upBtn.style.border = '2px solid #a97953'
        downBtn.style.border = '2px solid #a97953'
    } else if (activeSlideIndex === 2) {
        upBtn.style.background = '#B0E0E6'
        downBtn.style.background = '#B0E0E6'
        upBtn.style.border = '2px solid #B0C4DE'
        downBtn.style.border = '2px solid #B0C4DE'
    } else {
        upBtn.style.background = '#3CB371'
        downBtn.style.background = '#3CB371'
        upBtn.style.border = '2px solid #2E8B57'
        downBtn.style.border = '2px solid #2E8B57'
    }

    // if (activeSlideIndex === 0) {
    //     upBtn.style.background = '#3CB371'
    //     downBtn.style.background = '#3CB371'
    //     upBtn.style.border = '2px solid #2E8B57'
    //     downBtn.style.border = '2px solid #2E8B57'
    // } else  if (activeSlideIndex === 1) {
    //     upBtn.style.background = '#1E90FF'
    //     downBtn.style.background = '#1E90FF'
    //     upBtn.style.border = '2px solid #4169E1'
    //     downBtn.style.border = '2px solid #4169E1'
    // } else if (activeSlideIndex === 2) {
    //     upBtn.style.background = '#B0E0E6'
    //     downBtn.style.background = '#B0E0E6'
    //     upBtn.style.border = '2px solid #B0C4DE'
    //     downBtn.style.border = '2px solid #B0C4DE'
    // } else {
    //     upBtn.style.background = '#FF8C00'
    //     downBtn.style.background = '#FF8C00'
    //     upBtn.style.border = '2px solid #FF7F50'
    //     downBtn.style.border = '2px solid #FF7F50'
    // }



    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`

}




