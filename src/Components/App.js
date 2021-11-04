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

  button {
    background-color: #282c34;
    border-radius: 8px;
    color: white;
    padding: 10px 24px;
    text-align: center;
    text-decoration: none;
    font-size: 1.8rem;
  }

  h2 {
    font-size: 3rem;
    font-weight: bold;
  }

  h3 {
    font-size: 2.4rem;
    font-weight: bold;
  }
`;


function App() {
  // Setting state for NASA pics
  // const [nasaPic, setNasaPic] = useState(null);
  // const [nasaAlt, setNasaAlt] = useState(null);
  const [nasaData, setNasaData] = useState(null);

  // Calling API
  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        // setNasaPic(res.data.hdurl);
        // setNasaAlt(res.data.title);
        setNasaData(res.data);
      })
      .catch(err => {
        console.error(`You hecked up! ${err}`);
      })
  }, []);

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <StyledContent className='content'>
        {nasaData.map(info => {
          return <LeftBox nasaData={info} title={info.title} hdurl={info.hdurl} explanation={info.explanation} date={info.date} />
        })}
        <Article />
      </StyledContent>
    </div>
  );
}

export default App;
