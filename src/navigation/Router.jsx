import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ChatPage from '../pages/ChatPage';
import Navigation from './Navigation';

export default function AppRouter () {
    return (
        <Router>
            <Navigation/>
            <Routes>
                <Route path='/' Component={HomePage} />
                <Route path='/chat/' Component={ChatPage} />
            </Routes>
        </Router>
    )
}

