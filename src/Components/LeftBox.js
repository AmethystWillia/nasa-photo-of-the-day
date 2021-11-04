import React from "react";

//Importing styles
import styled from 'styled-components'


// Styling component
const StyledLeftBox = styled.div`
    border: 2px solid rgb(33, 33, 33);
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    border-radius: 8px;
    margin: 20px;
    padding: 10px;
    text-align: center;

    display: flex;
    flex-flow: column wrap;
    align-items: center;

    width: 25%;
`;


// Export LeftBox
export default function LeftBox(props) {
    // Declaring consts through props
    const {nasaPic, nasaAlt} = props;

    // Left Box JSX
    return (
        <StyledLeftBox className='left-box'>
            <div className='image-container'>
                {nasaPic === null ? <p>Loading image...</p> :
                <img src={nasaPic} width='75%' alt={nasaAlt}/>}
            </div>
            <div className='title'>
                <h2>This is a Picture from NASA!</h2>
            </div>
            <div className='paragraph'>
                <p>
                Pokem ipsum dolor sit amet Vaporeon Gyarados excepteur sint occaecat cupidatat non proident Pineco Hitmonlee Tympole. Team Rocket Chimecho Kecleon Scrafty Kangaskhan Splash Red. Hive Badge Yellow Omanyte Wingull Sudowoodo Scratch Splash. Excepteur sint occaecat cupidatat non proident Shaymin Rhyhorn Lavender Town Riolu Uxie Watchog. Hive Badge Cubchoo Meloetta Absol Ash Shelmet fishing rod.
                </p>
            </div>
            <div className='button'>
                <button>Placeholder</button>
            </div>
        </StyledLeftBox>
    );
};