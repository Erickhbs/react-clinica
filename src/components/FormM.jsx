import { useState } from 'react'
import '../styles/form.css'
import ICON from '../assets/iconM.png'

const FormM = () =>{
    const [dataForm, setDataForm] = useState({
        nome:'',
        contato:'',
        email:'',
        crm:'',
        especialidade:'',
    })
 
    const handleChangeValue = (event) => {
        setDataForm((dataForm) => ({
            ...dataForm,
            [event.target.name]: event.target.value,
        }))
    }

    const handleSubmit = (event) => {
        const token = "eyJhbGciOiJSUzI1Nipc3MiOiJBcGlSZXN0RGVtbyIsInN1YiI6Iml0YWxvIiwiZXhwIjoxNjg5NzA1MTcyLCJpYXQiOjE2ODk3MDE1NzIsInNjb3BlIjoiUk9MRV9VU0VSIn0.CGdbxsCCUdxvYXVCfhVyFytVLwGtZaW4l71YDF6q5hy0ZjvOxVylfJyTRHTwNnLy6zaJMGqE7CWhZJTNb_wPIDmWuF69qWkrHBGVg-3AbkiDmmOh_xo-YPcoAOlPGOPr28asXur4y_Aa2i1srLvKAB4EdTpwhNV1KIRJp01FkMg344KmVLMHhLjf9RrzLjgVbhC8cOiJrtkw_D9HtG0JD6mdd-rOai1N1VS-AL2BFwlGgBDYMUTGFDISA0O9MT_-tM9-3OzyFp4anWxphPxSHNPMJFJqPdJK6YFHTxQU1GfmveMw_94Tq8EosQheiQIAnDjJsjd5ZVEm7AH20V4PeQ"
        event.preventDefault()
      
        fetch('http://localhost:8080/medicos', {
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