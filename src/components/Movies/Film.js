import React from 'react';
import {NavLink} from 'react-router-dom';

function Film() {
    return (
        <div className="Film">
            <div><NavLink to="/">&larr; Фильм</NavLink></div>
        </div>
    );
}

export default Film;