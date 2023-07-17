import { useState } from 'react'
import '../styles/form.css'
import ICON from '../assets/iconM.png'

 const FormM = () =>{
     const [dataForm, setDataForm] = useState({
         nome:'',
         contato:'',
         crm:'',
         email:'',
         especialidade:'',
     })
 
     const handleChangeValue = (event) => {
        setDataForm((dataForm) => ({
            ...dataForm,
            [event.target.name]: event.target.value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
      
        fetch('http://localhost:8080/medicos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
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
                <label className="form-label" htmlFor="nome">Cadastrando o Medico</label>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="form-label" htmlFor="nome">Nome</label>
                    <input className="form-input" type="text" name="nome" onChange={handleChangeValue} />
                </div>
                <div>
                    <label className="form-label" htmlFor="contato">Contato</label>
                    <input className="form-input" type="text" name="contato" onChange={handleChangeValue}/>
                </div>
                <div>
                    <label className="form-label" htmlFor="email">Email</label>
                    <input className="form-input" type="email" name="email" onChange={handleChangeValue}/>
                </div>
                <div>
                    <label className="form-label" htmlFor="crm">CRM</label>
                    <input className="form-input" type="text" name="crm" onChange={handleChangeValue}/>
                </div>
                <div>
                    <label className="form-label" htmlFor="especialidade">Especialidade</label>
                    <input className="form-input" type="text" name="especialidade" onChange={handleChangeValue}/>
                </div>
                <div className="submit-button">
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}
 
 export default FormM