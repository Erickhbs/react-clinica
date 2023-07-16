import '../styles/card.css'
import User from '../assets/user.png'

const Sobre = () =>{
    return(
        <div>
            <h1 className='note'>Desenvolvido Por:</h1>
            <div className='container' id='div'>
                
                <div className="card">
                    <img src={User} alt=''/>
                    <h2 >Phelyppe Álex</h2>
                </div>
                <div className="card">
                    <img src={User} alt=''/>
                    <h2 >Emanuel Italo</h2>
                </div>
                <div className="card">
                    <img src={User} alt=''/>
                    <h2 >Erick Barros</h2>
                </div>
                <div className="card">
                    <img src={User} alt=''/>
                    <h2 >Rafael Borba</h2>
                </div>            
            </div>
        </div>
    )
}
export default Sobre