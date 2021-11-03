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
                <h2>This is a Picture from NASA!</h2>
            </div>
            <div className='paragraph'>
                <p>
                Pokem ipsum dolor sit amet Vaporeon Gyarados excepteur sint occaecat cupidatat non proident Pineco Hitmonlee Tympole. Team Rocket Chimecho Kecleon Scrafty Kangaskhan Splash Red. Hive Badge Yellow Omanyte Wingull Sudowoodo Scratch Splash. Excepteur sint occaecat cupidatat non proident Shaymin Rhyhorn Lavender Town Riolu Uxie Watchog. Hive Badge Cubchoo Meloetta Absol Ash Shelmet fishing rod.

                Celadon City Spiritomb Crobat ex ea commodo consequat Grumpig they're comfy and easy to wear Emboar. Velit esse cillum dolore eu fugiat nulla pariatur Zangoose Snivy Yanma Mewtwo Strikes Back Hitmonlee Lanturn. Dark Charmeleon Mankey Poliwhirl Hydreigon Venonat Poochyena. Bubble Hitmonchan Ferrothorn Regice Gabite Accelgor Octillery. Red Pokemon Pidgeot Cobalion Ho-oh Froslass in a world we must defend.
                </p>
            </div>
            <div className='button'>
                <button>Placeholder</button>
            </div>
        </div>
    );
};