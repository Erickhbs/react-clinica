
import "../styles/nav.css"
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const NavBar= () =>{
    return(
        <nav className='Nav'>
            <Link to='/' className='logo'>Vitas Lab</Link>
            <ul className="">
                <MeuLink to='/'>Home</MeuLink>

                <li className='dropdown'>
                    <span className="menu-label" color="#fff">Informações</span>
                    <ul className="dropdown-menu">
                        <MeuLink to='/paciente'>Pacientes</MeuLink>
                        <MeuLink to='/medico'>Medicos</MeuLink>
                        <MeuLink to='/prontuario'>Prontuarios</MeuLink>
                    </ul>
                </li>
                <MeuLink to='/sobre'>Sobre</MeuLink>
                <MeuLink to='/login'>Login</MeuLink>
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


