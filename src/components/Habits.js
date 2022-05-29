import styled from 'styled-components';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext'
import TopBar from './TopBar';
import ProgressBar from './ProgressBar';

export default function Habits(){

    const {loginData, setLoginData, userData, setUserData} = useContext(UserContext)

    return(
        <>
            <TopBar/>
            <HabitosTitle>
                <h2>Meus hábitos</h2>
                <button>+</button>
            </HabitosTitle>
            <HabitosDiv>
                <h4>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h4>
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

    button{
        width: 40px;
        height: 35px;
        font-family: 'Lexend Deca';
        font-size: 26.976px;
        color: #FFFFFF;
        background-color: #52B6FF;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 4.63636px;
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
