import { useEffect, useState } from "react";
import React from 'react';

const Busca = () => {
    const [pacientes, setPacientes] = useState([]);

    useEffect(() => {
      getPacientes();
    }, []);
  
    async function getPacientes() {
      await fetch("http://localhost:8080/pacientes").then(
        (response) => response.json().then((data) => setPacientes(data))
      );
    }
}

export default Busca;