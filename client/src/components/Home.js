import React from 'react';

import Art from '../components/Art';
const Home = () => {
    return (
        <div className="home">
            <div className="home__left">
                <Art />
            </div>

            <div className="home__right">
                <div className="home__right__title">
                    <h1>FROM THE HEAP</h1>
                </div>
                <div className="home__right__signup" >
                    <form className="form__signup" autocomplete="off" >
                        <div className="form__input">
                            <input type="text" placeholder="E-mail" autocomplete="off" />
                        </div>
                        <div className="form__input">
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="form__input">
                            <input type="text" placeholder="Password" />
                        </div>
                        <div className="form__input">
                            <button>Sign Up &#x2794;</button>
                        </div>
                    </form>
                </div>
                <h2>or</h2>
                <div className="home__right__signin">
                    <form className="form__signin" autocomplete="off">
                        <div className="form__input">
                            <input type="text" placeholder="E-mail" />
                        </div>
                        <div className="form__input">
                            <input type="text" placeholder="Password" />
                        </div>
                        <div className="form__input">
                            <button className="submit">Sign In &#x2794;</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Home