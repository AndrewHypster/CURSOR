const query = e => document.querySelector(e);
const queryA = e => document.querySelectorAll(e);

document.body.innerHTML +=
`<div id="main">
    <h1 id="title">The Star Wars</h1>
    <div id="films"></div>
    <div id="planets"></div>
    <div id="filmPage"></div>
</div>`;

const mainHTML = query('#main'),
      title = query('#title'),
      filmsHTML = query('#films'),
      planetsHTML = query('#planets'),
      filmPageHTML = query('#filmPage'),
      charactersBtnHTML = query('.charactersBtn');

const filmsJson = [0, 0, 0, 0, 0, 0, 0,]; // тут будуть всі фільми

let isFilmPage = false;

const newArray = (length) => {
    const arr = [];
    for (let i=1; i<=length; i++) arr.push(i);
    return arr;
} 

                                        /*** Т И П У   К О М П О Н Е Н Т И ***/
const films = () => {
    const howMuch = newArray(6);
    for (let key of howMuch) { // Загружає фільми одночасно, для швидкості завантаження
        fetch(`https://swapi.dev/api/films/${key}`)
        .then(res => res.json())
        .then(film => {
            filmsHTML.innerHTML += `<div class="${film.episode_id}" id="film">
                                        <img src="img/films/${film.episode_id}.jpg" alt="film" class="${film.episode_id}">
                                        <p class="${film.episode_id}">${film.title}</p>
                                        <p class="${film.episode_id}">(${film.release_date.slice(0, 4)})</p>
                                    </div>`;
            filmsJson.splice(film.episode_id, 1, film);
    })}
    console.log(filmsJson);
}

const getCharacters = (film, manyPeople) => {
    const charactersIndx = newArray(manyPeople);
    const characterNames = [];
    for (let key of charactersIndx) {
        fetch(film.characters[--key])
        .then(res => res.json())
        .then(character => character)
        .then(character => characterNames.push(character.name))
    }
    return characterNames;
}

/*** СЛАЙДИ ПЛАНЕТ ***/
const planets = () => {};

                                        /*** С Т О Р І Н К И ***/
const mainPage = () => {
    films();
    planets();
}

function filmPage (indexFilm) {
    const characters = getCharacters(filmsJson[indexFilm], filmsJson[indexFilm].characters.length);
    console.log(characters);
    isFilmPage = true;
    filmPageHTML.innerHTML = `  <section>
                                    <div id="mainFilm">
                                        <img src="img/films/${indexFilm}.jpg" alt="film">
                                        <h2>${filmsJson[indexFilm].title}</h2>
                                        <h3>(${filmsJson[indexFilm].release_date.slice(0, 4)})</h3>
                                    </div>
                                    <div id="infoFilm">
                                        <p><b>Description:</b> ${filmsJson[indexFilm].opening_crawl}</p>
                                        <p><b>Director:</b> ${filmsJson[indexFilm].director}</p>
                                        <p><b>Characters:</b> ${characters}</p>
                                    </div>
                                </section>`;
}

                                        /*** Р О Б О Т А   З   К О Р И С Т У В А Ч Е М ***/

title.onclick = () => {
    filmPageHTML.innerHTML = '';
    filmsHTML.style.display = 'flex';
};

filmsHTML.onclick = e => {
    const id = e.srcElement.className;
    if (id) {
        filmsHTML.style.display = 'none';
        filmPage(id);
    }
};

if (isFilmPage) {
    charactersBtnHTML.onclick = () => {
        console.log('charactersBtnHTML');
    }
}

mainPage();