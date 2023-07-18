import React, { useState, useEffect } from 'react'

const ListMedicos = () => {
    const [medicos, setMedicos] = useState([])
    const token = "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJBcGlSZXN0RGVtbyIsInN1YiI6Iml0YWxvIiwiZXhwIjoxNjg5NjY5MzQ3LCJpYXQiOjE2ODk2NjU3NDcsInNjb3BlIjoiUk9MRV9VU0VSIn0.ns5gd5VQa3GLDain8yZrzIXtO740P_Yyr5ppSNWlfqoA0DYVrwLIGrHVtKXsQsB6XyduCC5shJz7l43ZAfSk2buRzFoNl4kKFkB8gqqKFV7xGgI10LvWsENHzPGwEZz2cpxqnLRpDtrHTzBshsXDS2J_nstbdd3azXhqqlbxeCSt7dJpjJGid6UxFrybEWykpS9YeiQTe7rxVkHGJo-v81ZxdnN25ik2uTRBf9r4-GAwSHv8AoVPHDcxl_8bxuSTp_XUxPcJbGskUVU3uPqBcyLcARlKaNrxj8DJfsVsrXWwtCi75mKOXFwdblP4aof3paeTDHjBdnpNW3Zpe_194w"

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