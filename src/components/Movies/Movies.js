import React from 'react';
import {NavLink} from 'react-router-dom';
import Filter from './Filter'

function Movies(props) {

    let Films = props.films.map( film => {

        return (
            <div key={film.id}>
                <NavLink to={`/film/${film.id}`}>{film.localized_name}</NavLink>
                <div>{film.name} ({film.year}) - {film.rating}</div>
            </div>
        )
    });

    return (
        <div className="Movies">
            <Filter sortBy={props.sortBy}
                    sortSettings={props.sortSettings}/>
            <div><h1>Фильмы</h1></div>
            {Films}
        </div>
    );

}

export default Movies;