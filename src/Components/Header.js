// Importing data
import React, { useState, useEffect } from 'react';

// Import Styles
import styled from 'styled-components';


// Styling component
const StyledHeader = styled.div`
    background-color: #282c34;
    padding: 0px 50px 10px 50px;
    min-height: 16vh;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-end;
    justify-content: space-between;
    color: white;

    h1 {
        font-size: 5.4rem;
    }

    h3 {
        font-size: 2.4rem;
    }

    .time, .date {
        text-align: center;
    }
`;


// Export header
export default function Header() {
    // Set states for date and time
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    // This is necessary for date/time based on what Google told me
    let today = new Date();
    
    // Set date and time
    useEffect(() => {
        setDate(`${today.toLocaleString('default', { month: 'long' })} ${today.getDate()}, ${today.getFullYear()}`)

        setTime(`${today.getHours()}:${today.getMinutes()}`);
    }, [])

    // Header JSX
    return (
        <StyledHeader className='header'>
            <div className='date'>
                <p>Today's Date:</p>
                <h3>{date}</h3>
            </div>
            <div className='title'>
                <h1>Welcome to My Project!</h1>
            </div>
            <div className='time'>
                <p>Rendered Time:</p>
                <h3>{time}</h3>
            </div>
        </StyledHeader>
    );
}