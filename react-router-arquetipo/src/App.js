import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import UsersPage from './pages/usersPage';
import UserPage from './pages/userPage';

import Navbar from './components/navBar';

export default function App()
{
    return (
        <BrowserRouter>
            <Navbar/>

            <Routes>
                <Route path="/" element = {<HomePage/>}/>
                <Route path="/about" element = {<AboutPage/>}/>
                <Route path="/users" element = {<UsersPage/>}/>
                <Route path='/users/:id' element = {<UserPage/>}/>
            </Routes>
        </BrowserRouter>

    );
}