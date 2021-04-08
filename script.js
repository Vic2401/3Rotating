const open = document.getElementById('open')
const close = document.getElementById('close')
console.log(close);
console.log(open);
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))
close.addEventListener('click', () => container.classList.remove('show-nav'))
console.log(container);

