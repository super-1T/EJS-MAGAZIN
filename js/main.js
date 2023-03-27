console.log('true')

const need = document.querySelector('.Need')

function scrollToLastDivInPage() {
    if (document.body.contains(need)) {
        need.scrollIntoView({ behavior: 'smooth' })
    }
}

document.addEventListener("DOMContentLoaded", scrollToLastDivInPage)


