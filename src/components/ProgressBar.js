import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import UserContext from '../contexts/UserContext';
import { useContext, useEffect } from 'react';

export default function ProgressBar(){
    
    const { habsDone, habsNumber } = useContext(UserContext)
    const perNumber = ((100/habsNumber)*habsDone)
    const percentage = perNumber
    
    return(
        <FooterBar>
            <div>
                <Link to={`/habitos`} style={{ textDecoration: 'none' }}>
                    <h5>Hábitos</h5>
                </Link>
            </div>
            <div>
                <Link to={`/hoje`} style={{ textDecoration: 'none' }}>
                    <Circle><CircularProgressbar value={percentage} text={`Hoje`} background={true} backgroundPadding = {6}
                    styles={buildStyles({
                        textSize: '18px',
                        pathTransitionDuration: 0.5,
                        pathColor: 'white',
                        textColor: 'white',
                        trailColor: '#52B6FF',
                        backgroundColor: '#52B6FF',
                    })}/></Circle>
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
    align-items: center;
    justify-content: space-around;
    position: fixed;
    bottom: 0px;
    height: 70px;
    background-color: #ffffff;
    
    
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