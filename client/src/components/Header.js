import React from 'react';

const Header = () => {

    return (
        <div className="header">
            <div className="header__nav">
                <ul>
                    <li>Home</li>
                    <li>Sign Up</li>
                    <li>Sign In</li>
                </ul>
            </div>
            <div className="header__pages">
                <ul>
                    <li>Song</li>
                    <li>Movie</li>
                    <li>Series</li>
                    <li>Anything</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;