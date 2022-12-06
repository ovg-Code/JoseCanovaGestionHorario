import './App.css';
import logito from './logo.png'

function Barra() {
  return (
    <div className="App">
      <div className="Barrasuperio">
        <img src={logito} className="logo"/>
        <span className="Appnombre" style={{width:' 218px', height: '45px', left: '110px', top: '55px'}}>
        JOSE CANOVA
        </span>
        <span className="title" style={{width: '160px',height: '54px',left: '395px',top: '50px'}}>
          TABLERO
        </span>
      </div>
    </div>
    
  );
}

export default Barra;