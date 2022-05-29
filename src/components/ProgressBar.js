import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function ProgressBar(){
    return(
        <FooterBar>
            <div>
                <Link to={`/habitos`} style={{ textDecoration: 'none' }}>
                    <h5>Hábitos</h5>
                </Link>
            </div>
            <div>
                <Link to={`/hoje`} style={{ textDecoration: 'none' }}>
                    <Circle>Hoje</Circle>
                </Link>
            </div>
            <div>
                <Link to={`/historico`} style={{ textDecoration: 'none' }}>
                    <h5>Histórico</h5>
                </Link>
            </div>
        </FooterBar>
    )
}

const FooterBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    position: absolute;
    bottom: 0px;
    height: 70px;
    
    
    h5{
        font-family: 'Lexend Deca';
        font-size: 17.976px;
        text-align: center;
        color: #52B6FF;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
const Circle = styled.div`
    width: 91px;
    height: 91px;
    margin-top: -60px;
    border-radius: 98.5px;
    background: #52B6FF;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lexend Deca';
    font-size: 17.976px;
    color: #FFFFFF;
`