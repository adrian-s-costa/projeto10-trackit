import styled from 'styled-components';
import logo from '../assets/Images/logo.png'

export default function Logo(){
    
    return(
        <LogoTexto>
            <img src={logo} alt='logo'/>
            <h1>TrackIt</h1>  
        </LogoTexto>
    )
}

const LogoTexto = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;

    img{
        margin-top: 80px;
        width: 170px;
        height: 100px;
    }

    h1{
        font-family: 'Playball';
        color: #126BA5;
        font-size: 70px;
        margin-top: 10px;
        margin-bottom: 30px;
    }


`