import React from 'react';

import Art from '../components/Art';
const Home = () => {
    return (
        <div className="home">
            <div className="home__left">
                <Art />
            </div>

            <div className="home__right">
                <div className="home__right__signup">
                    <h1>sign up form comes here</h1>
                </div>
                <h2>or</h2>
                <div className="home__right__signin">
                    <h1>sign in form here</h1>
                </div>
            </div>
        </div>
    )
}
export default Home