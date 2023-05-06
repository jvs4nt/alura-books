import "./style.css"
import logo from "../../imagens/logo.svg";

function Logo() {
    return (
        <div className="logo">
          <img 
          src={logo} 
          alt="imagem-logo" 
          className="logo-img"
          ></img>
          <p><strong>Alura</strong><i>Books</i></p>
        </div>
    )
}

export default Logo