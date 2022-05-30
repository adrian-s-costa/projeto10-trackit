import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import Input from './Input';
import Button from './Button';
import Logo from './Logo';
import axios from 'axios';
import UserContext from '../contexts/UserContext'
import Loading from './Loading';


function Login(){
    
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const {loginData, setLoginData, userData, setUserData} = useContext(UserContext)

    function setarDados(event){
        event.preventDefault()
        console.log(loginData)
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', loginData)
        
        promise.then(response => {
            setLoading(false)
            setUserData(response.data)
            console.log(userData)
            navigate('/hoje')
        })
        promise.catch(response=>{
            setLoading(false)
            alert('login ou senha incorretos, tente novamente')
        })
    }


    return(
        <>
            <Logo/>
            <form onSubmit={setarDados}>
                <Input type={'text'} placeholder={'email'} set={(e) => setLoginData({ ...loginData, email: e.target.value})} value={loginData.email} disabled={loading?true:false}/>
                <Input type={'password'} placeholder={'senha'} set={(e) => setLoginData({ ...loginData, password: e.target.value})} value={loginData.password} disabled={loading?true:false}/>
                <Button disabled={loading?true:false} clickFunc={()=>setLoading(true)} tag={loading?<Loading />:'Entrar'}></Button>
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