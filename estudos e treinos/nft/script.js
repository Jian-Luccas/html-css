const card = document.querySelector('.page')

const image = document.querySelector('.image')

const profile = document.querySelector('.profile')

const name = document.querySelector('.meinname')

const contact = document.querySelector('.contact')

card.addEventListener('click' , () => {
    card.classList.toggle('flip')
    profile.classList.toggle('anima')
    name.classList.toggle('anima')
    contact.classList.toggle('anima')
})