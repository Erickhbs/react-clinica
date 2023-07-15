import { useEffect, useState } from "react";
import React from 'react';

const Busca = () => {

    const [data, setData] = useState([])
    const url = 'http://localhost:8080/pacientes'

    const info = async () => {
        const resposta = await fetch(url)
        const informacoes = await resposta.json()
        
        setData(informacoes.results)
    }

    useEffect( () => {
        info()
    },[])

    return(<section className="flex-container">{data.map( (p) => {
        return<div className="card">
            <img src={p.image} alt="{p.id}"/>
            <div class="card-body">
                <h5>{p.name.toUpperCase()}</h5>
                <a href="/descricao" class="btn btn-light">Mais sobre</a>
                <input type="hidden" id="urlCharacter" />
            </div>
        </div>
    })}</section>
    )
}

export default Busca;