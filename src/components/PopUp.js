import axios from 'axios';
import styled from 'styled-components';
import Button from './Button';
import UserContext from '../contexts/UserContext'
import { useContext } from 'react';

export default function PopUp(props){

    const { userData, habitToAdd, setHabitToAdd, obj, setObj, deleteH, setDeleteH} = useContext(UserContext)

    function deleteHabit(idHab){
        
        const config = {
            headers: {Authorization: `Bearer ${userData.token}`}
        }
        const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHab}`, config)
        
        promise.then((response)=>{
            console.log(response.data)
            setDeleteH(false)
        })
        promise.catch((response)=>{
           console.log(response.status)
        })
    }

    return (
        <PopUpDiv>
            <h1>Quer apagar?</h1>
            <div className='btns'>
                <ButtonDel  onClick={()=>deleteHabit(props.habId)} tag={'confirmar'}>Confirmar</ButtonDel>
                <ButtonDel onClick={()=>setDeleteH(false)} tag={'cancelar'}>Cancelar</ButtonDel>
            </div>
        </PopUpDiv>
    )
}

const PopUpDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: fit-content;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 1;
    position: fixed;
    background-color: #ffffff;
    border: 1px solid #52B6FF;
    border-radius: 5px;
    padding: 16px 0px;

    .btns{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const ButtonDel = styled.button` 

    width: 60%;
    border: none;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.6px;
    margin-top: 6px;
    color: white;
    font-family: 'Lexend Deca';
    font-size: 21px;
    text-align: center;

    :hover{
        transition: 0.5s;
        background-color: #FFFFFF;
        color: #52B6FF;
        border: solid 1px #52B6FF;
    }

    :disabled{
        background: #ccc;
    }
`