import { useEffect, useState } from "react";
import React from 'react';


const Pedir = () =>{

    const [data, setData] = useState([])
    const url = 'http://localhost:8080/pacientes'
    console.log(fetch(url))
    

    return(
        <div className="flex-container">
            {data.map((i) =>(
                <div className="corpo">
                    <div className='principal'>
                        <h4>Nome: {i.nome.toUpperCase()}</h4>
                        <p>CPF: {i.cpf}</p>
                        <p>Sexo: {i.sexo}</p>
                    </div>
                    
                    <div className="mais">
                        <p>Idade: {i.idade}</p>
                        <p>Altura: {i.altura}</p>
                        <p>Peso: {i.peso}</p>
                        <p>Contato: {i.contato}</p>
                        <p>Email: {i.email}</p>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default Pedir

/*    const teste = [
        {
            nome:'Erick',
            cpf:'71067049460',
            sexo:'M',
            idade:'21',
            altura:'1.80',
            peso:'64',
            contato:'8498107242',
            email:'ehbs.13579@gmailcom',
        },
        {
            nome:'Phelyppe',
            cpf:'98765432112',
            sexo:'M',
            idade:'21',
            altura:'1.74',
            peso:'60',
            contato:'8759632145',
            email:'phelyppe@gmailcom',
        },
        {
            nome:'Ytalou',
            cpf:'3214569852',
            sexo:'M',
            idade:'19',
            altura:'1.76',
            peso:'70',
            contato:'1122336655',
            email:'Ytalou@gmailcom',
        }
    ]

    return(
        <div className="flex-container">
            {teste.map((i) =>(
                <div className="corpo">
                    <div className='principal'>
                        <h4>Nome: {i.nome.toUpperCase()}</h4>
                        <p>CPF: {i.cpf}</p>
                        <p>Sexo: {i.sexo}</p>
                    </div>
                    
                    <div className="mais">
                        <p>Idade: {i.idade}</p>
                        <p>Altura: {i.altura}</p>
                        <p>Peso: {i.peso}</p>
                        <p>Contato: {i.contato}</p>
                        <p>Email: {i.email}</p>
                    </div>
                </div>
            ))}
        </div>
    )

}
 */