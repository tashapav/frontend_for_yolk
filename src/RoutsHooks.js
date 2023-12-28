import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import AuthPage from "./pages/AuthPage/AuthPage"
import AccountPage from "./pages/AccountPage/AccountPage"

export const UseRoutes = (isLogin) => {

    if (isLogin) { 
        return(
            <Routes>
                <Route path="/" element={<AccountPage />} />
                <Route path="/login" element={<Navigate to="/" replace />} />
            </Routes>
        )
    }

    return(
        <Routes>
            <Route path="/recovery" element={<AuthPage />} />
            <Route path="/*" element={<AuthPage />} />
            <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
    )
}
