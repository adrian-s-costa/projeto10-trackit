import styled from 'styled-components';

export default function Input(props){
    const {type, placeholder, value, set, disabled} = props
    return(
        <>
            <LoginForms>
                <input type={type} placeholder={placeholder} onChange={set} value={value} required disabled={disabled}/>          
            </LoginForms>
        </>
        
    )
}

const LoginForms = styled.form`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0px;
    

    input{
        background: #ffffff;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        width: 303px;
        height: 45px;
        margin-top: 6px;
        font-family: 'Lexend Deca';
        color: #666666;
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
    }

    input:disabled{
        background: #ccc;
    }


`