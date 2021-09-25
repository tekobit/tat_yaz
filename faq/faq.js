let coll = document.getElementsByClassName('collapsible')
for(let i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click',function() {
        this.classList.toggle('active');
        let content = this.nextElementSibling
        if (content.style.maxHeight) {
            content.style.maxHeight = null
        } else {
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
}

const knopki = document.querySelectorAll('.Navigation_Bar')
const podol = document.querySelectorAll('.podol')
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