// Importing data
import React, { useState, useEffect } from 'react';

// Import CSS
import './Header.css';

// Making a rough outline of the header
export default function Header() {
    // Set states for date and time
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    let today = new Date();
    
    // Set date and time
    useEffect(() => {
        setDate(`${today.toLocaleString('default', { month: 'long' })} ${today.getDate()}, ${today.getFullYear()}`)

        setTime(`${today.getHours()}:${today.getMinutes()}`);
    }, [])

    return (
        <div className='header'>
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
        </div>
    );
}