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
     })
 
     const handleChangeValue = (event) => {
        setDataForm((dataForm) => ({
            ...dataForm,
            [event.target.name]: event.target.value,
        }))
    }

    const handleSubmit = (event) => {
        const token = "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJBcGlSZXN0RGVtbyIsInN1YiI6Iml0YWxvIiwiZXhwIjoxNjg5NTU4NzE1LCJpYXQiOjE2ODk1NTUxMTUsInNjb3BlIjoiUk9MRV9VU0VSIn0.jRedTsD0RarvE43af56NfZRkXqUmvYBazWI8unzUTjUa4ge19kx4n1qNBdYDRkhs41vwqAIbFEDPYufaELayr59tgfqAGAOR8NAcVMffv4Tt9cjP11bzPW5J-ey6nPxCI5_7gk74rW-pSqedmY-qg8dZT8GGApMRKEOgvKN1WJ3fGU3tBAcbk50Dnme_zw-G48Gy9QcjlCDma6CoNRE3VfeNqhLsU3w0X3m7s-veuIMuAiTchnkQWBD50dwGPHvgTiFZpDtUfdjJO7lxwq_UCFS-1dZX6vgjxcI9A4oh-PHNeK6qZw9Uy4pUtdXJ4PThEc7ZWoMcNbDvMwHoimJyUA";
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