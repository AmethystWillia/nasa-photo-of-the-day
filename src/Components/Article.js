// Importing data
import React, { useState, useEffect } from 'react';

// Import CSS
import './Article.css';

// Importing child
import MiniArticle from './MiniArticle';

// Export Article
export default function Article() {
    // Declaring consts
    const [info, setInfo] = useState(false);

    // Toggle info
    const toggleInfo = () => {
        setInfo(!info);
    }

    // Article JSX
    return (
        <div className='article'>
            <div className='left-container'>
                <h2>Title</h2>
                <p>Blizzard Mawile Lumineon Budew Audino Wobbuffet Unfezant. Fire Red Lilligant Combee Swoobat Lombre Gurdurr Calcium. Misty Dark Finneon Johto Lillipup Razor Leaf Purrloin. Pokemon Smeargle Dragonite Scrafty Persian Beldum Dragon Rage. Hoenn Registeel Persian Cobalion Blizzard Nidorina Mineral Badge.

                Grass Shroomish Magmar in voluptate velit esse cillum dolore eu fugiat nulla pariatur Water Gun Soda Pop Nidorino. S.S. Anne Gible Numel Bubble ex ea commodo consequat Meowth Metagross. Plain Badge Rotom Shroomish Lavender Town Manaphy Beldum Swellow. Teleport Reuniclus Arceus Armaldo Scratch Lickitung you teach me and I'll teach you. Charmeleon Roggenrola Technical Machine searching far and wide Officer Jenny Teleport Victini.
                </p>
            </div>
            <div className='right-container'>
                <div className='mini-article'>
                    <button onClick={toggleInfo}>
                        {info === true ? 'Hide' : 'Show'}
                    </button>
                    {info === true ? <MiniArticle /> : ''}
                </div>
            </div>
        </div>
    );
}