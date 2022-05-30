import styled from 'styled-components'
import { useState, useContext } from 'react'
import UserContext from '../contexts/UserContext'
import Input from './Input'
import axios from 'axios'
import Loading from './Loading'

export default function HabitToAdd(){
    const [loading, setLoading] = useState(false)
    const {loginData, setLoginData, userData, setUserData, habitToAdd, setHabitToAdd, obj, setObj} = useContext(UserContext)
    const [daysA, setDays] = useState([
        {nameDay:'D', day: 0, selecionado: false},
        {nameDay:'S', day: 1, selecionado: false},
        {nameDay:'T', day: 2, selecionado: false},
        {nameDay:'Q', day: 3, selecionado: false},
        {nameDay:'Q', day: 4, selecionado: false},
        {nameDay:'S', day: 5, selecionado: false},
        {nameDay:'S', day: 6, selecionado: false},
    ])
    
    function toggleDay(day){
        day.selecionado = !day.selecionado;
        setDays([...daysA]);
        const selectedDays = daysA.filter((d)=>d.selecionado)
        const selectedDaysN = selectedDays.map((d)=>d.day)
        setObj({...obj, days: selectedDaysN})
    }

    function save(event){
        event.preventDefault()
        console.log(obj.days.length)
        const config = {
            headers: {Authorization: `Bearer ${userData.token}`}
        }
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', obj, config)
        promise.then((response)=>{
            setLoading(false)
            console.log(response.data)
            setHabitToAdd(false)
        })
        promise.catch((promise)=>{
            setLoading(false)
            alert('Selecione ao menos um dia')
        })
    
    }

    return(
        <>
        <form onSubmit={save}>
            <HabitsToAdd>   
                <Input placeholder={'nome do hábito'} set={(e) => setObj({ ...obj, name: e.target.value})} value={obj.name} disabled={loading?true:false}/>
                <DaysdDiv>
                    {daysA.map((d) => (
                        <div 
                        onClick={()=>toggleDay(d)}
                        className={`${d.selecionado ? "selected" : ""}`}
                        >{d.nameDay}</div>
                    ))}
                </DaysdDiv>
            </HabitsToAdd>
            <HabitsBtns>
                <button onClick={()=>setHabitToAdd(false)}>Cancelar</button>
                <button type='submit' disabled={loading?true:false} onClick={()=>setLoading(true)}>{loading?<Loading />:'Salvar'}</button>
            </HabitsBtns>
        </form>
        </>
    )
}


const HabitsToAdd = styled.div`
    width: 100%;
    display: flex;
    padding: 0px 17px;
    margin-top: 30px;
    flex-direction: column;
`
const HabitsBtns = styled.div`
    
    display: flex;
    justify-content: flex-end;
    margin-right: 30px;

    button{
        width: 84px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #52B6FF;
        border-radius: 4.63636px;
        font-family: 'Lexend Deca';
        font-size: 15.976px;
        color: #FFFFFF;
        border: none;
        margin: 30px 6px;
    }

    button:nth-child(1){
        background-color: #FFFFFF;
        color: #52B6FF;
        
    }

    button:nth-child(2):hover{
        transition: 0.5s;
        background-color: #FFFFFF;
        color: #52B6FF;
        border: 1px solid #52B6FF;
    }

    button:nth-child(1):hover{
        transition: 0.5s;
        border: 1px solid #52B6FF;
    }

    button:disabled{
        background: #ccc;
    }
`

const DaysdDiv = styled.div`
    justify-content: center;
    display: flex;
    margin-top: 8px;
    margin-left: -66px;

    div{
        width: 30px;
        height: 30px;
        background-color: white;
        margin: 0px 2px;
        color: #DBDBDB;
        border: 1px solid #D5D5D5;
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