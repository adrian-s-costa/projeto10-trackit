import styled from 'styled-components';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext'

export default function TopBar(){

    const {loginData, setLoginData, userData, setUserData} = useContext(UserContext)



    return(
        <>
            <TopBarDiv>
                <h1>TrackIt</h1>
                <img src={userData.image} alt={'profile'}></img>
            </TopBarDiv>
        </>
    )
}




const TopBarDiv = styled.div`
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 18px;

    h1{
        font-family: 'Playball';
        font-size: 38.982px;
        color: #FFFFFF;
    }

    img{
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }
`