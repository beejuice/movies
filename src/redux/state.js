let renderDOM = ()=>{};

const state = {

    movies: {

        films: [],
        sortSettings: {
            type: 'year',
            direction: 1
        }

    }

};

export const getFilms = async ()=>{

    let responseAPI = await fetch('https://s3-eu-west-1.amazonaws.com/sequeniatesttask/films.json');
    if (responseAPI.ok) {

        let result = await responseAPI.json();
        state.movies.films = result.films.map( film =>{
            if (film.rating === undefined) film.rating = null;
            return film;
        });

        sortBy(state.movies.sortSettings.type);
        renderDOM();
    }
    else {

    }

};

export const sortBy = (type)=>{

    let isSortedType = state.movies.sortSettings.type;
    let isDirection = state.movies.sortSettings.direction;

    if(isSortedType === type) isDirection = -isDirection;

    let sorted = state.movies.films.sort((a, b)=>{

        if(a[type] === b[type]) return 0;
        else return a[type] > b[type] ? isDirection : isDirection * -1;

    });

    state.movies.films = sorted;
    state.movies.sortSettings.type = type;
    state.movies.sortSettings.direction = isDirection;

    renderDOM();

};

export const subscribe = (callback)=>{

    renderDOM = callback;

}


export default state;