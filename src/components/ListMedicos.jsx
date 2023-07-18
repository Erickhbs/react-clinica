import React, { useState, useEffect } from 'react'

const ListMedicos = () => {
    const [medicos, setMedicos] = useState([])
    const token = "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJBcGlSZXN0RGVtbyIsInN1YiI6Iml0YWxvIiwiZXhwIjoxNjg5NzA1MTcyLCJpYXQiOjE2ODk3MDE1NzIsInNjb3BlIjoiUk9MRV9VU0VSIn0.CGdbxsCCUdxvYXVCfhVyFytVLwGtZaW4l71YDF6q5hy0ZjvOxVylfJyTRHTwNnLy6zaJMGqE7CWhZJTNb_wPIDmWuF69qWkrHBGVg-3AbkiDmmOh_xo-YPcoAOlPGOPr28asXur4y_Aa2i1srLvKAB4EdTpwhNV1KIRJp01FkMg344KmVLMHhLjf9RrzLjgVbhC8cOiJrtkw_D9HtG0JD6mdd-rOai1N1VS-AL2BFwlGgBDYMUTGFDISA0O9MT_-tM9-3OzyFp4anWxphPxSHNPMJFJqPdJK6YFHTxQU1GfmveMw_94Tq8EosQheiQIAnDjJsjd5ZVEm7AH20V4PeQ"

    useEffect(() => {
        fetch('http://localhost:8080/medicos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
        })
        .then(response => response.json())
        .then(data => setMedicos(data))
        .catch(error => console.log(error));
    }, [])

    return (
        <>
            <h1>Médicos</h1>
            <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">CRM</th>
                    <th scope="col">Especialidade</th>
                    <th scope="col">Email</th>
                    <th scope="col">Telefone</th>
                </tr>
            </thead>
            <tbody>
                {medicos.map((medico, key) => (
                <tr key={key}>
                    <td>{medico.nome}</td>
                    <td>{medico.crm}</td>
                    <td>{medico.especialidade}</td>
                    <td>{medico.email}</td>
                    <td>{medico.contato}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </>
    )
}

export default ListMedicos