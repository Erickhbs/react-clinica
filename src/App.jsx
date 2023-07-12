import NavBar from "./components/NavBar"
import Home from './pages/Home'
import Consulta from './pages/Consulta'
import Medico from './pages/Medico'
import Prontuario from './pages/Prontuario'
import Paciente from './pages/Paciente'
import Sobre from './pages/Sobre'
import Login from './pages/Login'
import {Routes, Route} from 'react-router-dom'
const App = () =>{

    return(
        <>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/consulta' element={<Consulta/>}/>
                <Route path='/medico' element={<Medico/>}/>
                <Route path='/paciente' element={<Paciente/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/prontuario' element={<Prontuario/>}/>
                <Route path='/sobre' element={<Sobre/>}/>
            </Routes>
            
        </>
    )
}

export default App