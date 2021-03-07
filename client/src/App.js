import React, { useEffect } from 'react';
import './styles/main.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { useDispatch } from 'react-redux';
import { getPosts } from './actions/Posts.js';

import Header from './components/Header.js';
import Home from './components/Home.js';
import Movie from './components/Movie.js';
import Song from './components/Song.js';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])
    return (
        <Router>
            <div className="container">
                <header className="container__header">
                    <Header />
                </header>
                <main className="container__main">

                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/song" component={Song} />
                        <Route path="/movie" component={Movie} />
                    </Switch>
                </main>
            </div>
        </Router>
    )
}

export default App