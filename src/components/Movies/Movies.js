import React from 'react';
import {NavLink} from 'react-router-dom';
import Filter from './Filter'
import Spinner from './../../img/spinner.gif'

function Movies(props) {

    let lastYear = null;
    let displayYear = false;

    let Films = props.films.map( film => {

        let YearElm = (localProps) => <div>{localProps.year}</div>;

        displayYear = (lastYear !== film.year && props.sortSettings.type == 'year') ? true : false;
        lastYear = film.year;

        return (
            <div key={film.id}>
                { displayYear && <YearElm year={film.year}/> }
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
            { props.films.length ? Films : <img src={Spinner} /> }
        </div>
    );

}

export default Movies;