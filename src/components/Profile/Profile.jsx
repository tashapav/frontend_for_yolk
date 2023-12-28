import { useState } from 'react';
import './Profile.css';

function Profile() {

    const [password, setPassword] = useState({first: "", second: ""})
    const [nikname, setNikname] = useState("")

    return (
        <div className="profile">
            <div className="regist-part">
                <h2>Сменить пароль</h2>
                    <label htmlFor='login' className='my-label'>Пароль</label>
                    <input type='login' id='login' className='my-input' value={password.first} onChange={(e) => setPassword({...password, first: e.target.value})}></input>
                    <label htmlFor='password' className='my-label'>Повторите пароль</label>
                    <input type='password' id='password' className='my-input' value={password.second} onChange={(e) => setPassword({...password, second: e.target.value})}></input>
                    <button className='my-button' onClick={() => {}}>Сменить</button>
            </div>
            <div className="add-acc-part">
                <h2>Добавить аккаунт</h2>
                <select name="select" className='my-input'>
                    <option selected value="gitlab">Gitlab</option>
                    <option value="github">Github</option>
                </select>
                    <label htmlFor='login' className='my-label'>Ник</label>
                    <input type='login' id='login' className='my-input' value={nikname} onChange={(e) => setNikname(e.target.value)}></input>
                    <button className='my-button' onClick={() => setNikname("")}>Добавить</button>
            </div>
        </div>
    );
}

export default Profile;