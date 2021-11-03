import React from "react";

//Importing css
import "./LeftBox.css";

// Export LeftBox
export default function LeftBox(props) {
    // Declaring consts through props
    const {nasaPic, nasaAlt} = props;

    // Left Box JSX
    return (
        <div className='left-box'>
            <div className='image-container'>
                {nasaPic === null ? <p>Loading image...</p> :
                <img src={nasaPic} width='75%' alt={nasaAlt}/>}
            </div>
            <div className='title'>
                <h2>Placeholder</h2>
            </div>
            <div className='paragraph'>
                <p>
                    Lorem ipsum
                </p>
            </div>
            <div className='button'>
                <button>Placeholder</button>
            </div>
        </div>
    );
};