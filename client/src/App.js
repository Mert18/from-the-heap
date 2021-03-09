/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './styles/main.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { useDispatch } from 'react-redux';
import { getPosts, createPost } from './actions/Posts.js';
import { getMovies, createMovie } from './actions/Movies.js';

import Header from './components/Header.js';
import Home from './components/Home.js';
import Movie from './components/Movie.js';
import Song from './components/Song.js';
import Login from './components/Login.js';

const App = () => {


    const [token, setToken] = useState(true);
    return (
        token ? <Router>
            <div className="container">
                <header className="container__header">
                    <Header />
                </header>
                <main className="container__main">

                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/song" component={Song} />
                        <Route path="/movie" component={Movie} />
                        <Route path="/login" component={Login} />
                    </Switch>
                </main>
            </div>
        </Router> : <Login />
    )
}

export default App