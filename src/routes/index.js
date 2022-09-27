import React from 'react';
import{BrowserRouter,Routes,Route} from 'react-router-dom';

import Home from '../views/Home';
import HomePage from '../views/Home_Page';
import Profile_Select from '../views/Profile_Select'
import Login from '../views/Login_Page';
export default function reactRoutes(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<HomePage/>}/>
            <Route path="/logado" exact element={<Home/>}/>
            <Route path="/profile_section" exact element={<Profile_Select/>}/>
            <Route path="/login" exact element={<Login/>}/>
        </Routes>
        </BrowserRouter>
    )
}