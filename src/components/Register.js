import styled from 'styled-components';
import { useContext, useState, useEffect  } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from './Input';
import Button from './Button';
import Logo from './Logo';
import axios from 'axios';
import UserContext from '../contexts/UserContext'
import Loading from './Loading';

export default function Register(){

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [registerData, setRegisterData] = useState({email:'', name:'', image:'', password:''})
    const {loginData, setLoginData, userData, setUserData} = useContext(UserContext)
   


    function setarDados(event){
        event.preventDefault();
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', registerData)
    
        promise.then(response=>{
            console.log(loginData)
            const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', loginData)
            promise.then(response=>{
                setLoading(false)
                console.log(loginData)
                setUserData(response.data)
                navigate('/hoje')
            })
            promise.catch(response=>{
                setLoading(false)
                console.log(loginData)
            })
        })

        promise.catch(response=>{
            setLoading(false)
            alert('Algum dado está incorreto, tente novamente')
        })
    }

    return(
        <>
            <Logo/>
            <form onSubmit={setarDados}>
                <Input type={'email'} placeholder={'email'} set={(e) => setRegisterData({ ...registerData, email: e.target.value})} value={registerData.email}  disabled={loading?true:false} />
                <Input type={'text'} placeholder={'nome'} set={(e) => setRegisterData({ ...registerData, name: e.target.value})} value={registerData.name} disabled={loading?true:false} />
                <Input type={'text'} placeholder={'foto'} set={(e) => setRegisterData({ ...registerData, image: e.target.value})} value={registerData.image} disabled={loading?true:false} />
                <Input type={'password'} placeholder={'senha'} set={(e) => setRegisterData({ ...registerData, password: e.target.value})} value={registerData.password} disabled={loading?true:false} />
                <Button clickFunc={() => setLoginData({...loginData, email: registerData.email, password: registerData.password}, setLoading(true))} disabled={loading?true:false} tag={loading?<Loading/>:'Cadastrar'}/>

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