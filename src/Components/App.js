// Importing data
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BASE_URL, API_KEY } from '../Constants/index';

//Importing css
import "./App.css";

// Importing modules
import Header from './Header';
import LeftBox from './LeftBox';
import Article from './Article';

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
        <br />
        You are gae!
        <br />
        <h2>Here's one of the cutest Pokemon!</h2>
        <img src='https://projectpokemon.org/home/uploads/monthly_2017_11/59fbadf186d7a_large.GlobalLink.png.b152ebe5c9a45a81d85a2d85387931a4.png' alt='Shinx the cutie' width='500' />
        <br />
        <h3>It's <u>Shinx</u>!</h3>
      </p>
    </div>
  );
}

export default App;
