
import "./NavBarStyles.css"
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import Ativo from '../assets/Ativo_3.png'

const NavBar= () =>{
    return(
        <nav className='Nav'>
            <Link to='/' className='logo'>Vitas Lab</Link>
            <ul className="">
                <MeuLink to='/'>Home</MeuLink>
                <MeuLink to='/consulta'>Consulta</MeuLink>
                <MeuLink to='/paciente'>Paciente</MeuLink>
                <MeuLink to='/medico'>Medico</MeuLink>
                <MeuLink to='/prontuario'>Prontuario</MeuLink>
                <MeuLink to='/sobre'>Sobre</MeuLink>
                <MeuLink to='/perfil'>Perfil</MeuLink>
            </ul>
        </nav>
    )
}

export default NavBar 

function MeuLink({ to, children, ...props }){
    const resolvedPath = useResolvedPath( to )
    const estaAtivo = useMatch({ path: resolvedPath.pathname, end: true })

    return(
        <li className={ estaAtivo ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}


