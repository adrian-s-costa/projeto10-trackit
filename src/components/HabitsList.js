import styled from 'styled-components';
import { useState, useContext, useEffect } from 'react';
import UserContext from '../contexts/UserContext'
import axios from 'axios';
import Loading from './Loading';



export default function HabitsList(){

    const {loginData, setLoginData, userData, setUserData, habitToAdd, setHabitToAdd, obj, setObj} = useContext(UserContext)

    const [habitsData, setHabitsData] = useState([])

    const config = {
        headers: {Authorization: `Bearer ${userData.token}`}
    }

    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)

        promise.then((response)=>{
            console.log(response.data)
            setHabitsData(response.data)
        })
        promise.catch((promise)=>{
            console.log('calmo e vamo descobrir o prob')
        })
    }, [habitsData]);

    

    return <>
        {habitsData.length === 0 ? <Loading/>:
        <Hlist>
        {habitsData.map((d) => (
            <div className={'habit'}>
                <div className='title'>
                    <h2>{d.name}</h2>
                    <ion-icon name="trash-outline"></ion-icon>
                </div>
                <DaysdDiv>
                    <div className={`${d.days.some((d) => d === 0) ? "selected" : ''}`}>D</div>
                    <div className={`${d.days.some((d) => d === 1) ? "selected" : ''}`}>S</div>
                    <div className={`${d.days.some((d) => d === 2) ? "selected" : ''}`}>T</div>
                    <div className={`${d.days.some((d) => d === 3) ? "selected" : ''}`}>Q</div>
                    <div className={`${d.days.some((d) => d === 4) ? "selected" : ''}`}>Q</div>
                    <div className={`${d.days.some((d) => d === 5) ? "selected" : ''}`}>S</div>
                    <div className={`${d.days.some((d) => d === 6) ? "selected" : ''}`}>S</div>
                </DaysdDiv>
            </div>
        ))}
        </Hlist>
        }
    </>
}

const Hlist = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    width: 100%;
    .title{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .habit{
        margin-top: 20px;
    }
`

const DaysdDiv = styled.div`
    display: flex;
    margin-top: 8px;

    div{
        width: 30px;
        height: 30px;
        background-color: white;
        margin: 0px 2px;
        color: #CFCFCF;
        border: 1px solid #CFCFCF;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-size: 19.976px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .selected{
        background-color: #DBDBDB !important;
        color: white !important;
    }

` 