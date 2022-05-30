import styled from 'styled-components';
import TopBar from './TopBar';
import ProgressBar from './ProgressBar';
import Habit from './Habit';

export default function Today(){

    return(
        <>
            <TopBar/>
            <All>
                <Habit/>
            </All>
            <ProgressBar/>
        </>
        
    )
}

const All = styled.div`
    padding: 0px 17px;
`