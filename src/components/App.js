import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import UserContext from "../contexts/UserContext";
import "../assets/css/reset.css"
import Login from './Login'
import Register from './Register'
import Habits from './Habits'
import Today from './Today'
import History from './History';


export default function App(){

    const [loginData, setLoginData] = useState({email: '', password: ''})
    const [userData, setUserData] = useState({})
    const contextValue = {loginData, setLoginData, userData, setUserData}
    

    return(
        <BrowserRouter>
             <UserContext.Provider value={contextValue}>
                <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path="/cadastro" element={<Register />}/>
                    <Route path="/habitos" element={<Habits />}/>
                    <Route path="/hoje" element={<Today />}/>
                    <Route path="/historico" element={<History />}/>
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    )
}