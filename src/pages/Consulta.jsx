import '../styles/card.css'
const ort = 'https://th.bing.com/th/id/OIP.uPaa-5fZ_RDtflIIB4_V-AHaE8?pid=ImgDet&rs=1'


const Consulta = () =>{
    return(
        <div>
            <div className="card">
                <img src={ort}  alt='foto de medico ortopedista'/>
                <h3>Consuta Ortopédica</h3>
                <button>Marcar Consulta</button>
            </div>
        </div>
    )
}

export default Consulta
