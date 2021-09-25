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

btn.addEventListener('click',() => {
    screen1.style.transform = 'translateY(-100vh)'
    screen2.style.transform = 'translateY(-100vh)'
})

const height = screens.clientHeight

console.log(height)




