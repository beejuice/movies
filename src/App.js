import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Movies from './components/Movies/Movies';
import Film from './components/Movies/Film';


function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <Route path="/" render={() => <Movies films={props.state.movies.films}
                                                      sortSettings={props.state.movies.sortSettings}
                                                      sortBy={props.sortBy}/>} exact />
                <Route path="/film/:id" render={ (localProps)=> <Film films={props.state.movies.films} id={localProps.match.params.id}/> } />
            </div>
        </BrowserRouter>
    );
}

export default App;