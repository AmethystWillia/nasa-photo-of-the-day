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

    .italic {
        font-style: italic;
    }
`;


// Export LeftBox
export default function LeftBox(props) {
    // Declaring consts through props
    const { nasaData } = props;

    // Left Box JSX
    return (
        <StyledLeftBox className='left-box'>
            <div className='image-container'>
                {nasaData === null ? <p>Loading image...</p> :
                <img src={props.hdurl} width='85%' />}
            </div>
            <div className='title'>
                {/* <h2>"{nasaData.title}"</h2> */}
            </div>
            <div className='paragraph'>
                <p>
                {/* This image is under the copyright of {nasaData.copyright}. */}
                <br />
                {/* This is the image for the data {nasaData.date}. */}
                <br />
                {/* This image depicts: <span className='italic'>{nasaData.explanation}</span> */}
                </p>
            </div>
            <div className='button'>
                <button>Placeholder</button>
            </div>
        </StyledLeftBox>
    );
};