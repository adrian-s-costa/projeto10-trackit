import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "../assets/css/reset.css"
import Login from './Login'
import Register from './Register'
import Habits from './Register'
import Today from './Today'



export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/cadastro" element={<Register />}/>
                <Route path='/habitos' element={<Habits />}/>
                <Route path='/hoje' element={<Today />}/>
            </Routes>
        </BrowserRouter>
    )
}