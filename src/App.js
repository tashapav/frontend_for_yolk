import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import AccountPage from './pages/AccountPage/AccountPage';
import {BrowserRouter} from 'react-router-dom'
import UserContext from './UserContext';
import { UseRoutes } from './RoutsHooks';
import { UseAuth } from './AuthHooks'

function App() {
  const {user, login, logout} = UseAuth()
  const isLogin = !!user
  const routes = UseRoutes(isLogin)

  return (
    <UserContext.Provider value={{user, isLogin, login, logout}}>
      <div className="app">
        <BrowserRouter>
            { routes }
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
