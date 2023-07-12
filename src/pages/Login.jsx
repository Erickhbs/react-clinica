import { useState } from "react"
import VitaLabBranco from '../assets/Ativo_4.png'
import '../styles/login.css'

const Login = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  return (
    <div className="container">
        <div className="container-login">
            <div className="wrap-login">
                <from className="login-form">

                    <span className="login-form-title">
                        <img src={VitaLabBranco} alt="icone_medico"/>
                    </span>

                    <span className="login-form-title">Bem Vindo(a)</span>

                    <div className="wrap-input">
                        <input 
                        className={email !== "" ? 'has-val input' : 'input'} 
                        type="email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}/>
                        <span className="focus-input" data-placeholder="Email"></span>
                    </div>

                    <div className="wrap-input">
                        <input 
                            className={password !== "" ? 'has-val input' : 'input'} 
                            type="password"
                            value={password}
                            onChange={e =>
                                setPassword(e.target.value)
                            }
                        />
                        <span className="focus-input" data-placeholder="Senha"></span>
                    </div>

                    <div className="container-login-form-btn">
                        <button className="login-form-btn" >continuar</button>
                    </div>

                </from>
            </div>
        </div>
    </div>
  )
}

export default Login;
