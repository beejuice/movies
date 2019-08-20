import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

function Film(props) {

    if (props.films.length) {

        let filmId = props.id;
        let filmItem = props.films.find((element) => {
            if (element.id == filmId) return element;
        });

        return (
            <div className="Film">
                <div><NavLink to="/">&larr; {filmItem.localized_name}  </NavLink></div>
                <div><img src={filmItem.image_url} /></div>
            </div>
        );

    }
    else {

        return (
            <div className="Film">
            </div>
        );

    }

}

export default Film;