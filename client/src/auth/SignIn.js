import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {authenticate, isAuth} from './helpers';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


const Signin = () => {

    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const {email, password} = values;


    const handleChange = (name) => (e) => {
        setValues({...values, [name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setValues({...values})
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/signin`,
            data: {email, password}
        })
        .then(response => {
            console.log('SIGN IN SUCCESS', response);
            authenticate(response, () => {
                setValues({...values, email: '', password: ''});
                toast.success(response.data.message);
            });
            
        })
        .catch(error => {
            console.log('SIGNIN ERROR', error.response.data.error);
            setValues({...values});
            toast.error(error.response.data.error);
        })
    }

    return (
        <div>
            <ToastContainer />
            {isAuth() ? <Redirect to="/" /> : null}
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="inputbox">
                        <label htmlFor="email">E-mail</label>
                        <input type="text" id="email" value={email} onChange={handleChange('email')} />
                    </div>

                    <div className="inputbox">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={handleChange('password')} />
                    </div>

                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signin
