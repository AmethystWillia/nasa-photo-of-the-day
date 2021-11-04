// Importing data
import React, { useSate, useEffect } from 'react';

// Import styles
import styled from 'styled-components';


// Styling component
const StyledMini = styled.div`
    margin: 2%;
    padding: 1%;
`;


//beep
export default function MiniArticle() {
    return (
        <StyledMini className='mini-art'>
            <h3>This is a Smaller article!</h3>
            <p>
            Grass Shroomish Magmar in voluptate velit esse cillum dolore eu fugiat nulla pariatur Water Gun Soda Pop Nidorino. S.S. Anne Gible Numel Bubble ex ea commodo consequat Meowth Metagross. Plain Badge Rotom Shroomish Lavender Town Manaphy Beldum Swellow. Teleport Reuniclus Arceus Armaldo Scratch Lickitung you teach me and I'll teach you. Charmeleon Roggenrola Technical Machine searching far and wide Officer Jenny Teleport Victini.
            </p>
        </StyledMini>
    )
}