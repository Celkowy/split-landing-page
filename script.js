const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')
const leftButton = document.querySelector('btn-left')
const rightButton = document.querySelector('btn-right')

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))
