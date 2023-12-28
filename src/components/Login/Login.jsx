import "./Login.css"
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
/*import axios from "axios";*/
import UserContext from "../../UserContext";

function Login({setError}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useContext(UserContext)

    const log = async () => {
        try {
            /*await axios.get('url',
            {username: username, password: password},
            {headers: {
                'Content-Type': 'application/json'
            }}
            )
            .then(res => loginUser({username: username, password: password}))
            .catch((error) => {
                if (error.response) {
                    setError(error.response.data.message)
                }
            })
            loginUser({username: username, password: password})*/
            login({username: 'petr', password: 'piter2054'})
        } catch (err) {
            console.log(err)
        }
        setUsername('')
        setPassword('')
    }

    return(
        <>
            <h2>Авторизация</h2>
            <form className='form' onSubmit={(e) => e.preventDefault()}>
                <div className='form-inputs'>
                    <label htmlFor='login' className='my-label'>Логин</label>
                    <input type='login' id='login' className='my-input' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    <label htmlFor='password' className='my-label'>Пароль</label>
                    <input type='password' id='password' className='my-input' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <button className='my-button' onClick={log}>Войти</button>
                    <Link to='/registration' className='nav-button nav-small'>К регистрации</Link>
                </div>
            </form>
        </>
    )
}

export default Login