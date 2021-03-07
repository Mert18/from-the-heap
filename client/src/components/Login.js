import React from 'react';
import Art from './Art';

const Login = () => {
    return (

        <div className="login">

            <div className="login__left">
                <Art />
            </div>

            <div className="login__right">
                <div className="login__right__title">
                    <h1>From The Heap</h1>
                </div>
                <div className="login__right__signup" >
                    <form className="form__signup" autoComplete="off">
                        <div className="form__input">
                            <input type="text" placeholder="E-mail" />
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
                <div className="login__right__signin">
                    <form className="form__signin" autoComplete="off">
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

export default Login