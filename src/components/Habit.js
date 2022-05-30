import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import UserContext from '../contexts/UserContext'
import axios from 'axios';
import dayjs from 'dayjs';
import { useState } from 'react';
import Loading from './Loading';

export default function Habit(){
    
    const todayDay = dayjs().day()
    const [habitsOfTheDay, sethabitsOfTheDay] = useState([])
    const [day, setDay] = useState('')
    const {loginData, setLoginData, userData, setUserData, habsDone, setHabsDone, habsNumber, setHabsNumber} = useContext(UserContext)
    

    function toSetDay(day){
        switch (day) {
            case 0:
                setDay("Domingo") 
                break;
            case 1:
                setDay("Segunda")
                break;
            case 2:
                setDay("Terça")
                break;
            case 3:
                setDay("Quarta")
                break;
            case 4:
                setDay("Quinta")
                break;
            case 5:
                setDay("Sexta")
                break;
            case 6:
                setDay("Sábado")
                break;
        default:
            console.log(`Erro, falta de opçoes`);

        }
    }
    

    function check(id, done){
        const config = {
            headers: {Authorization: `Bearer ${userData.token}`}
        }

        const body = {}
        
        if (done) {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, body, config)
            .then(response =>  setarHabs())
            .catch(response => console.log(response.status))
        }else{
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, body, config)
            .then(response =>  setarHabs())
            .catch(response => console.log(response.status))
        }

        console.log(habsDone)
        console.log(habsNumber)
    }
    
    function setarHabs(){
        const doneHabs = (habitsOfTheDay.filter((h)=> h.done))
        const numberHabs = (habitsOfTheDay.length)
        setHabsDone(habsDone)
        setHabsNumber(habsNumber)
    }

    useEffect(() => {   
        const config = {
            headers: {Authorization: `Bearer ${userData.token}`}
        }
        toSetDay(todayDay) 
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
        promise
            .then(response => sethabitsOfTheDay(response.data))
    }, [habitsOfTheDay])
    
    return <>{habitsOfTheDay.length === 0 ? <DayDiv>
        <h2>{day}, {dayjs().date()}/0{dayjs().month()+1}</h2>
        <h4>Nenhum habito concluido ainda</h4>
        <Loading/>
        </DayDiv> : <><DayDiv>
        <h2>{day}, {dayjs().date()}/0{dayjs().month()+1}</h2>
        </DayDiv>
        <HabitsDiv>
            {habitsOfTheDay.map(hab => {
                return (
                    <div className='habit'>
                        <div className='titles'>
                            <h2>{hab.name}</h2>
                            <h6 className='h6'>Sequência atual: {hab.currentSequence}</h6>
                            <h6>Seu recorde: {hab.highestSequence}</h6>
                        </div>
                        <div className = {`icon ${hab.done ? 'done' : ''}`} onClick={()=>check(hab.id, hab.done)}>
                            <ion-icon name="checkbox" ></ion-icon>
                        </div>
                    </div>
                )
            })}
        </HabitsDiv>
    </>
    }</>


}

const DayDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    h2{
        font-family: 'Lexend Deca';
        font-size: 22.976px;
        color: #126BA5;
    }

    h4{
        margin-top: 2px;
        font-family: 'Lexend Deca';
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
    }
`
const HabitsDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    flex-direction: column;
    
    .habit{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    h2{
        font-family: 'Lexend Deca';
        font-size: 19.976px;
        color: #666666;
    }

    h6{
        font-family: 'Lexend Deca';
        font-size: 12.976px;
        color: #666666;
    }

    .titles{
        padding-top: 10px;
        
    }

    .h6{
        margin-top: 10px;
    }

    .icon{
        font-size:69px;
        color: #ccc;
    }

    .done{
        color: #8FC549 !important;
    }
`