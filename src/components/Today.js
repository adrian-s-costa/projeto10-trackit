import styled from 'styled-components';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext'
import TopBar from './TopBar';
import ProgressBar from './ProgressBar';

export default function Today(){

    const {loginData, setLoginData, userData, setUserData} = useContext(UserContext)


    console.log()


    return(
        <>
            <TopBar/>
            
            <ProgressBar/>
        </>
    )
}


const HabitosDiv = styled.div`
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