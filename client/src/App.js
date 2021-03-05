import React from 'react';
import './styles/main.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
const App = () => {
    return (
        <Router>
            <div className="container">
                <header className="container__header">
                    <Header />
                </header>
                <main className="container__main">

                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/song" component={Home} />
                        <Route path="/movie" component={Home} />
                        <Route path="/series" component={Home} />
                        <Route path="/anything" component={Home} />
                    </Switch>
                </main>
            </div>
        </Router>
    )
}

export default App