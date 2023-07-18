import React, { useState, useEffect } from 'react'

const ListProntuarios = () => {
    const [prontuarios, setProntuarios] = useState([])
    const token = "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJBcGlSZXN0RGVtbyIsInN1YiI6Iml0YWxvIiwiZXhwIjoxNjg5NzAzMzAyLCJpYXQiOjE2ODk2OTk3MDIsInNjb3BlIjoiUk9MRV9VU0VSIn0.Y0tyQvVYlYMV9Vi6fAqgx9kqUhbhUPcUCTYbtIQ1csSPdHYvnRRLG3k4cxaNE-va1hGvXByBlvWP8gxD4u8A6dYilyX95t2KOSUcaD6VCf8fWVyV_jXDRQKsUAxIkM0JYNl1E8a6G6FjW1kqQ_kfeND2j6LpfXx3_UMMVAIPPT987PWK3LFb401t1dJ-1jTBspGacTPnwPoPq19n-8jQLp6gHj8C_NRviNfCRcddCUduzL_lNAotcNXm1jNqXqUKorXEJ9kolJ3XQqlAhO2vK5G4Rz_AfNEhBnaqGHe4NLdB38gJmLBcouixJENilYy7xfwmkntur0zSqhxsqMs-3w"

    useEffect(() => {
        fetch('http://localhost:8080/pacientes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
        })
        .then(response => response.json())
        .then(data => setProntuarios(data))
        .catch(error => console.log(error))
    }, [])

    return (
        <>
            <h1>Prontuarios</h1>
            <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">sexo</th>
                    <th scope="col">Data de nascimento</th>
                    <th scope="col">Endereço</th>
                    <th scope="col">Limitações</th>
                    <th scope="col">naturalidade</th>
                </tr>
            </thead>
            <tbody>
                {prontuarios.map((p, key) => (
                <tr key={key}>
                    <td>{p.nome}</td>
                    <td>{p.sexo}</td>
                    <td>{p.prontuarios}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </>
    )
}

export default ListProntuarios