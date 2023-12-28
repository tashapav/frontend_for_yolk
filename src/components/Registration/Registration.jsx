import "./Registration.css"
import React, { useState } from "react";
import { Link } from "react-router-dom";
/*import axios from 'axios'*/

function Registration({setError}) {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const registration = async () => {
        try {
            /*await axios.post('url',
            {login: login, password: password},
            {headers: {
                'Content-Type': 'application/json'
            }}
            )
            .then(res => alert('Регистрация прошла успешно!'))
            .catch((error) => {
                if (error.response) {
                    setError(error.response.data.message)
                }
            })*/
        } catch (err) {
            console.log(err)
        }
        setLogin('')
        setPassword('')
        setEmail('')
    }
    return(
        <div className='registration'>
            <h2>Регистрация</h2>
            <form className='form' onSubmit={(e) => e.preventDefault()}>
                <div className='form-inputs'>
                    <label htmlFor='login' className='my-label'>Логин</label>
                    <input type='login' id='login' className='my-input' value={login} onChange={(e) => setLogin(e.target.value)}></input>
                    <label htmlFor='email' className='my-label'>Email</label>
                    <input type='email' id='email' className='my-input' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <label htmlFor='password' className='my-label'>Пароль</label>
                    <input type='password' id='password' className='my-input' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <button className='my-button' onClick={registration} >Зарегистрироваться</button>
                    <Link to='/login' className='nav-button nav-small'>К авторизации</Link>
                </div>
            </form>
        </div>
    )
}

export default Registration