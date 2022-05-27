import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Input from './Input';
import Button from './Button';
import Logo from './Logo';


export default function Login(){
    
    const [loginData, setLoginData] = useState({email: '', password: ''})

    function setarDados(event){
        event.preventDefault();
        console.log(loginData)
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
