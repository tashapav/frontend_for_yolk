import { useState, useContext, useEffect } from 'react';
import './AccountPage.css';
import UserContext from '../../UserContext';
import Courses from '../../components/Courses/Courses';
import Profile from '../../components/Profile/Profile';

function AccountPage() {

    const { logout } = useContext(UserContext)
    const [isInProfile, setInProfile] = useState(false)

    const [error, setError] = useState('')

    useEffect(() => {
        if (error) {
            alert(error)
            setError()
        }
    }, [error])

    return (
        <div className="account">
            <header className="header">
                <>
                    {(!isInProfile) ? <button className='nav-button' onClick={() => setInProfile(true)}>Личный кабинет</button> : 
                    <button className='nav-button' onClick={() => setInProfile(false)}>К курсам</button>}
                    <a href='/login' className='nav-button logout' onClick={logout}>Выйти</a>
                </>
            </header>
            <main className='acc-main'>
                {(isInProfile) ? <Profile /> : <Courses setError={setError}/>}
            </main>
        </div>
    );
}

export default AccountPage;