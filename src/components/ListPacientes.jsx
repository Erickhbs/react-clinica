import React, { useState, useEffect } from 'react'

const ListPacientes = () => {
    const [pacientes, setPacientes] = useState([])
    const token = "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJBcGlSZXN0RGVtbyIsInN1YiI6Iml0YWxwiZXhwIjoxNjg5NzA1MTcyLCJpYXQiOjE2ODk3MDE1NzIsInNjb3BlIjoiUk9MRV9VU0VSIn0.CGdbxsCCUdxvYXVCfhVyFytVLwGtZaW4l71YDF6q5hy0ZjvOxVylfJyTRHTwNnLy6zaJMGqE7CWhZJTNb_wPIDmWuF69qWkrHBGVg-3AbkiDmmOh_xo-YPcoAOlPGOPr28asXur4y_Aa2i1srLvKAB4EdTpwhNV1KIRJp01FkMg344KmVLMHhLjf9RrzLjgVbhC8cOiJrtkw_D9HtG0JD6mdd-rOai1N1VS-AL2BFwlGgBDYMUTGFDISA0O9MT_-tM9-3OzyFp4anWxphPxSHNPMJFJqPdJK6YFHTxQU1GfmveMw_94Tq8EosQheiQIAnDjJsjd5ZVEm7AH20V4PeQ"

    useEffect(() => {
        fetch('http://localhost:8080/pacientes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
        })
        .then(response => response.json())
        .then(data => setPacientes(data))
        .catch(error => console.log(error))
    }, [])

    return (
        <>
            <h1>Pacientes</h1>
            <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">CPF</th>
                    <th scope="col">Peso</th>
                    <th scope="col">Altura</th>
                    <th scope="col">Sexo</th>
                    <th scope="col">contato</th>
                    <th scope="col">email</th>
                </tr>
            </thead>
            <tbody>
                {pacientes.map((p, key) => (
                <tr key={key}>
                    <td>{p.nome}</td>
                    <td>{p.cpf}</td>
                    <td>{p.peso}</td>
                    <td>{p.altura}</td>
                    <td>{p.sexo}</td>
                    <td>{p.contato}</td>
                    <td>{p.email}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </>
    )
}

export default ListPacientes