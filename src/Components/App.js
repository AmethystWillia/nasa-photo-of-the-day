// Importing data
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BASE_URL, API_KEY } from '../Constants/index';

// Import styles
import styled from 'styled-components';

//Importing css
import "../index.css";

// Importing children
import Header from './Header';
import LeftBox from './LeftBox';
import Article from './Article';


// Styling component
const StyledContent = styled.div`
  margin: 0.5%;
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  justify-content: center;
`;


function App() {
  // Setting state for NASA pics
  const [nasaPic, setNasaPic] = useState(null);
  const [nasaAlt, setNasaAlt] = useState(null);

  // Calling API
  // useEffect(() => {
  //   axios.get(`${BASE_URL}?api_key=${API_KEY}`)
  //     .then(res => {
  //       setNasaPic(res.data.hdurl);
  //       setNasaAlt(res.data.title);
  //     })
  //     .catch(err => {
  //       console.error(`You hecked up! ${err}`);
  //     })
  // }, []);

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <StyledContent className='content'>
        <LeftBox nasaPic={nasaPic} nasaAlt={nasaAlt} />
        <Article />
      </StyledContent>
    </div>
  );
}

export default App;
