import React from "react";

//Importing styles
import styled from 'styled-components'


// Styling component
const StyledLeftBox = styled.div`
    border: 2px solid rgb(33, 33, 33);
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    border-radius: 8px;
    margin: 1%;
    padding: 1%;
    text-align: center;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    width: 27%;

    .paragraph {
        margin: 2px;
        width: 90%;
        text-align: center;
    }

    .button {
        margin: 2%;
    }

    .bold {
        font-weight: bold;
    }
    .italic {
        font-style: italic;
    }
`;


// Export LeftBox
export default function LeftBox(props) {
    // Declaring consts through props
    const {nasaPic, nasaTitle, nasaDate, nasaCR, nasaExp} = props;

    // Left Box JSX
    return (
        <StyledLeftBox className='left-box'>
            <div className='image-container'>
                {nasaPic === null ? <p>Loading image...</p> :
                <img src={nasaPic} width='75%' alt={nasaTitle}/>}
            </div>
            <div className='title'>
                <h2>{nasaTitle}</h2>
            </div>
            <div className='paragraph'>
                <p>
                    <span className='bold'>Date: {nasaDate}</span>
                    <br />
                    {nasaExp}
                    <br />
                    <span className='italic'>Copyright {nasaCR}</span>
                </p>
            </div>
            <div className='button'>
                <button>Placeholder</button>
            </div>
        </StyledLeftBox>
    );
};