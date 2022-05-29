import styled from 'styled-components';


export default function Button(props){
    return(
        <>
            <ButtonStyle>
                <button type='submit' onClick={props.clickFunc}>{props.children}</button>
            </ButtonStyle>
        </>
    )
}

const ButtonStyle = styled.div` 
    display: flex;
    justify-content: center;

    button{
        width: 303px;
        border: none;
        height: 45px;
        background: #52B6FF;
        border-radius: 4.6px;
        margin-top: 6px;
        color: white;
        font-family: 'Lexend Deca';
        font-size: 21px;
        text-align: center;
    }

    button:hover{
        transition: 0.5s;
        background-color: #FFFFFF;
        color: #52B6FF;
        border: solid 1px #52B6FF;
    }
`