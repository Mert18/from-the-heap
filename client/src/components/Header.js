import React from 'react';

import { NavLink } from "react-router-dom";


const Header = () => {

    return (
        <div className="header">
            <div className="header__nav">
                <ul>
                    <NavLink exact to="/">Home</NavLink>
                </ul>
            </div>
            <div className="header__pages">
                <ul>
                    <NavLink to="/song">Song</NavLink>
                    <NavLink to="/movie">Movie</NavLink>
                    <NavLink to="/series">Series</NavLink>
                    <NavLink to="/anything">Anything</NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Header;