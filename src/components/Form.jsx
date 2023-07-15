import { useState } from 'react'
import '../styles/form.css'
import ICON from '../assets/user.png'

 const Form = () =>{
     const [dataForm, setDataForm] = useState({
         nome:'',
         cpf:'',
         sexo:'',
         idade:'',
         altura:'',
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

    console.log(dataForm)

    return(
        <div className="prancheta">
            <div className="header">
                <img src={ICON} alt="Logo"/>
                <label className="form-label" htmlFor="nome">Cadastrando o Paciente</label>
            </div>
            <form onSubmit={() => {
                console.log(dataForm)
            }}>
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
                    <input className="form-input" type="text" name="altura" onChange={handleChangeValue}/>
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