document.body.innerHTML += '<h1 class="first">first</h1><h1 class="second">second</h1>';
const first = document.querySelector('.first');
const second = document.querySelector('.second');

first.addEventListener('click', () => console.log('first'));
second.addEventListener('click', () => {
    console.log('add text');
    document.body.innerHTML += '<p>текст</p>'
});