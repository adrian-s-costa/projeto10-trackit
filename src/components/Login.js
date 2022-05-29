import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import Input from './Input';
import Button from './Button';
import Logo from './Logo';
import axios from 'axios';
import UserContext from '../contexts/UserContext'


function Login(){
    
    const navigate = useNavigate()
    const {loginData, setLoginData, userData, setUserData} = useContext(UserContext)

    function setarDados(event){
        event.preventDefault();
        console.log(loginData)
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', loginData)
        promise.then(response => {
            setUserData(response.data)
            console.log(userData)
            navigate('/hoje')
        })
        promise.catch(response=>{
            alert('login ou senha incorretos')
        })
    }


    return(
        <>
            <Logo/>
            <form onSubmit={setarDados}>
                <Input type={'text'} placeholder={'email'} set={(e) => setLoginData({ ...loginData, email: e.target.value})} value={loginData.email}/>
                <Input type={'password'} placeholder={'senha'} set={(e) => setLoginData({ ...loginData, password: e.target.value})} value={loginData.password}/>
                <Button>Entrar</Button>
                <Link to={`/cadastro`}>
                    <LinkCadastro>
                        <span>Já tem uma conta? Faça login</span>
                    </LinkCadastro>
                </Link>
            </form>
            
        </>
    )
    
}

const LinkCadastro = styled.div`
    display: flex;
    justify-content: center;
    
    span{
        
        font-family: 'Lexend Deca';
        font-style: normal;
        margin-top: 25px;
        font-size: 13.976px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
    }
    span:hover{
        transition: 0.5s;
        color: blue;
    }

`
export default Login