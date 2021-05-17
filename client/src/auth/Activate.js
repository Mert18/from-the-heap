import React, {useState, useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';

import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import jwt from 'jsonwebtoken';


const Activate = ({match}) => {
    const [values, setValues] = useState({
        name: "",
        token: "",
        show: true,
    });

    useEffect(() => {
        let token = match.params.token
        let {name} = jwt.decode(token);

        if(token){
            setValues({...values, name, token})
        }
    }, [])

    const {name, token, show} = values;


    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/account-activation`,
            data: {token}
        })
        .then(response => {
            console.log('ACCOUNT ACTIVATION', response)
            setValues({...values, show: false})
            toast.success(response.data.message);
        })
        .catch(error => {
            console.log('ACCOUNT ACTIVATION ERROR', error.response.data.error);
            toast.error(error.response.data.error);
        })
    }


    return (
        <div>
            <ToastContainer />
            <h1>Activate Account</h1>

            <div>
                <h2>Please click the button below to activate your account.</h2>
                <button onClick={handleSubmit}>Activate</button>

            </div>
        </div>
    )
}

export default Activate
