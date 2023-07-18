import { useState } from 'react'
import '../styles/form.css'
import ICON from '../assets/user.png'

const Form = () =>{
    const [dataForm, setDataForm] = useState({
        nome:'',
        cpf:'',
        sexo:'',
        idade:'',
        peso:'',
        contato:'',
        email:'',
        altura:'',
        prontuario: {
            alergias:'default',
            genero:'default',
            dataNascimento:'default',
            endereco:'default',
            limmitacoes:'default',
            naturalidade:'default',
        }
    })
 
    const handleChangeValue = (event) => {
        setDataForm((dataForm) => ({
            ...dataForm,
            [event.target.name]: event.target.value,
        }))
    }

    const handleSubmit = (event) => {
        const token = "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJBcGlSZXN0RGVtbyIsInN1YiI6Iml0YWxvIiwiZXhwIjoxNjg5NjY5MzQ3LCJpYXQiOjE2ODk2NjU3NDcsInNjb3BlIjoiUk9MRV9VU0VSIn0.ns5gd5VQa3GLDain8yZrzIXtO740P_Yyr5ppSNWlfqoA0DYVrwLIGrHVtKXsQsB6XyduCC5shJz7l43ZAfSk2buRzFoNl4kKFkB8gqqKFV7xGgI10LvWsENHzPGwEZz2cpxqnLRpDtrHTzBshsXDS2J_nstbdd3azXhqqlbxeCSt7dJpjJGid6UxFrybEWykpS9YeiQTe7rxVkHGJo-v81ZxdnN25ik2uTRBf9r4-GAwSHv8AoVPHDcxl_8bxuSTp_XUxPcJbGskUVU3uPqBcyLcARlKaNrxj8DJfsVsrXWwtCi75mKOXFwdblP4aof3paeTDHjBdnpNW3Zpe_194w"
        event.preventDefault()
      
        fetch('http://localhost:8080/pacientes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
            body: JSON.stringify(dataForm),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        }) 
        .catch(error => {
            console.error('Erro:', error);
        })
    }

    return(
        <div className="prancheta">
            <div className="header">
                <img src={ICON} alt="Logo"/>
                <label className="form-label" htmlFor="nome">Cadastrando o Paciente</label>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="form-label" htmlFor="nome">Nome</label>
                    <input className="form-input" type="text" name="nome" onChange={handleChangeValue} />
                </div>
                <div>
                    <label className="form-label" htmlFor="cpf">CPF</label>
                    <input className="form-input" type="text" name="cpf" onChange={handleChangeValue}/>
                </div>
                <div>
                    <label className="form-label" htmlFor="email">Email</label>
                    <input className="form-input" type="email" name="email" onChange={handleChangeValue}/>
                </div>
                <div>
                    <label className="form-label" htmlFor="contato">Contato</label>
                    <input className="form-input" type="text" name="contato" onChange={handleChangeValue}/>
                </div>
                <div>
                    <label className="form-label" htmlFor="peso">Peso</label>
                    <input className="form-input" type="number" name="peso" onChange={handleChangeValue}/>
                </div>
                <div>
                    <label className="form-label" htmlFor="idade">Idade</label>
                    <input className="form-input" type="number" name="idade" onChange={handleChangeValue}/>
                </div>
                <div>
                    <label className="form-label" htmlFor="altura">Altura</label>
                    <input className="form-input" type="number" name="altura" onChange={handleChangeValue}/>
                </div>
                <div>
                    <label className="form-label">Sexo</label>
                    <div className="form-radio">
                        <input type="radio" name="sexo" value="M" onChange={handleChangeValue}/>
                        <label className="form-label" htmlFor="homem">Homem</label>
                    </div>
                    <div className="form-radio">
                        <input type="radio" name="sexo" value="F" onChange={handleChangeValue}/>
                        <label className="form-label" htmlFor="mulher">Mulher</label>
                    </div>
                </div>
                <div className="submit-button">
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}
 
 export default Form