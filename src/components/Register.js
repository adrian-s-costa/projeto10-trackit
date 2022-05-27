import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Input from './Input';
import Button from './Button';
import Logo from './Logo';
import { useState } from 'react';
import axios from 'axios';

export default function Register(){

    const navigate = useNavigate
    const [registerData, setRegisterData] = useState({email:'', name:'', image:'', password:''})

    function setarDados(event){
        event.preventDefault();

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', registerData)
        promise.then(response=>{
           console.log('BOA')
           console.log(response.data)
        })

        promise.catch(response=>{
            console.log('funfou nada fiii')
        })
    }

    return(
        <>
            <Logo/>
            <form onSubmit={setarDados}>
                <Input type={'email'} placeholder={'email'} set={(e) => setRegisterData({ ...registerData, email: e.target.value})} value={registerData.email}/>
                <Input type={'text'} placeholder={'nome'} set={(e) => setRegisterData({ ...registerData, name: e.target.value})} value={registerData.name}/>
                <Input type={'text'} placeholder={'foto'} set={(e) => setRegisterData({ ...registerData, image: e.target.value})} value={registerData.image}/>
                <Input type={'password'} placeholder={'senha'} set={(e) => setRegisterData({ ...registerData, password: e.target.value})} value={registerData.password}/>
                <Button>Cadastrar</Button>

                <Link to={`/`}>
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
    align-items: center;
    
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