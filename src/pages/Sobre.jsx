import 'C:/Users/Erick/Desktop/react-login-clinica/src/components/card.css'
import User from '../assets/user.png'

const Sobre = () =>{
    return(
        <div>
            <h1 className='note'>Desenvolvido Por:</h1>
            <div className='container' id='div'>
                
                <div className="card">
                    <img width='200px' src={User}/>
                    <h2 >Phelyppe Álex</h2>
                </div>
                <div className="card">
                    <img width='200px' src={User}/>
                    <h2 >Emanuel Italo</h2>
                </div>
                <div className="card">
                    <img width='200px' src={User}/>
                    <h2 >Erick Barros</h2>
                </div>
                <div className="card">
                    <img width='200px' src={User}/>
                    <h2 >Rafael Borba</h2>
                </div>            
            </div>
        </div>
    )
}
export default Sobre