
import logo from "../../imagens/logo.svg";
import styled from 'styled-components'

const LogoContainer = styled.div`

    display: flex;
    font-size: 30px;

`

const LogoImagem = styled.img`

    margin-right:20px;
    margin-left: 10px;

`

function Logo() {
    return (
        <LogoContainer>
          <LogoImagem 
          src={logo} 
          alt="imagem-logo" 
          className="logo-img"
          ></LogoImagem>
          <p><strong>Your</strong><i>Books</i></p>
        </LogoContainer>
    )
}

export default Logo