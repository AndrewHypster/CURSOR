document.body.innerHTML += '<div id="page"></div>';
const pageHTML = document.querySelector('#page');
pageHTML.innerHTML += '<h1 id="title">The Star Wars</h1><div id="films"></div>';
const title = document.querySelector('#title');
const filmsHTML = document.querySelector('#films');

let filmsJson;

start();
async function start (){
    await fetch('https://swapi.dev/api/films')
        .then(res => filmsJson = res.json())
        .then(films => filmsJson = films)
        .then(films => films.results.forEach((film, index) => filmsHTML.innerHTML += `<div class="${index}" id="film"><img src="img/films/${index}.jpg" alt="film" class="${index}"><p class="${index}">${film.title}</p><p class="${index}">(${film.release_date.slice(0, 4)})</p></div>`));
}

title.addEventListener('click', () => {
    filmsHTML.style.display = 'flex';
    console.log('The Star Wars');
});

filmsHTML.addEventListener('click', e => {
    const filmIndex = e.target.className;
    filmsHTML.style.display = 'none';
    pageHTML.innerHTML += `<div id="mainFilm"><img src="img/films/${filmIndex}.jpg" alt="film"><h2>${filmsJson.results[filmIndex].title}</h2></img></div>`
    console.log(filmsJson.results[filmIndex].title);
    console.log(e.target.className);
});

// fetch('https://swapi.dev/api/films/2')
//     .then(resolve => resolve.json())
//     .then(film => film.characters)
//     .then(characters => characters.forEach(character => {
//         fetch(`${character}`)
//         .then(resolve => resolve.json())
//         .then(person => console.log(`${person.name}, ${person.birth_year}, ${person.gender}`))
//     }))