import styled from 'styled-components';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext'
import TopBar from './TopBar';
import ProgressBar from './ProgressBar';

export default function History(){
    
    const {loginData, setLoginData, userData, setUserData} = useContext(UserContext)

    return(
    
        <>
            <TopBar/>
            <HabitosTitle>
                <h2>Histórico</h2>
            </HabitosTitle>
            <HabitosDiv>
                <h4>Em breve você poderá ver o histórico dos seus hábitos aqui!</h4>
            </HabitosDiv>
            <ProgressBar/>
        </>

    )
}

const HabitosTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0px 17px;
    margin-top: 30px;

    h2{
        font-family: 'Lexend Deca';
        font-size: 22.976px;
        color: #126BA5;
    }


`

const HabitosDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0px 17px;
    margin-top: 30px;

    h4{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }


`