import React, { useState, useEffect } from 'react'

const ListPacientes = () => {
    const [pacientes, setPacientes] = useState([])
    const token = "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJBcGlSZXN0RGVtbyIsInN1YiI6Iml0YWxvIiwiZXhwIjoxNjg5NjY5MzQ3LCJpYXQiOjE2ODk2NjU3NDcsInNjb3BlIjoiUk9MRV9VU0VSIn0.ns5gd5VQa3GLDain8yZrzIXtO740P_Yyr5ppSNWlfqoA0DYVrwLIGrHVtKXsQsB6XyduCC5shJz7l43ZAfSk2buRzFoNl4kKFkB8gqqKFV7xGgI10LvWsENHzPGwEZz2cpxqnLRpDtrHTzBshsXDS2J_nstbdd3azXhqqlbxeCSt7dJpjJGid6UxFrybEWykpS9YeiQTe7rxVkHGJo-v81ZxdnN25ik2uTRBf9r4-GAwSHv8AoVPHDcxl_8bxuSTp_XUxPcJbGskUVU3uPqBcyLcARlKaNrxj8DJfsVsrXWwtCi75mKOXFwdblP4aof3paeTDHjBdnpNW3Zpe_194w"

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