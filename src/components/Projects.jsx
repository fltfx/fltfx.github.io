import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import '../styles/Projects.css';

export default function Projects() {
  return (
    <React.Fragment>
    <div id="Projects">
      <div id="Projects-images">
        <img src="https://camo.githubusercontent.com/d6ffb4a6381d72f114979cad5ba604100c0e17e3a649824a95a69857ff1832d7/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f65334e4a4b536f76617249696e39417867472f67697068792e676966"></img>      
        <img src="https://camo.githubusercontent.com/1a6218dfd268b9fbece71fd4cfcdce9d7b618457591a778ac65d4f36dca1cbe4/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f796837775747727145675476754d4c65724c2f67697068792e676966"></img>
      </div>

      <div id="Projects-text">
        <h1>Things I've Worked On</h1>
        
        <div className="Projects-heading">
          <div>
            <h2><a href="https://eatsypeasy.netlify.app/" target="_blank" rel="noopener noreferrer">Eatsy Peasy</a></h2>
          </div>
          <div className="Projects-buttons">
          <IconButton href="https://github.com/cynthiaaleung/EatsyPeasy-frontend" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </IconButton>
          <IconButton href="https://eatsypeasy.netlify.app/" target="_blank" rel="noopener noreferrer">
            <LaunchIcon />
          </IconButton>
          </div>
        </div>
        <p>A single page application to help you and your friends choose where to eat! Answer 3 simple questions to generate a customized selection of restaurants, and have the option to send a poll to your friends as well!</p>
        <ul>
          <li>LANGUAGES/FRAMEWORKS: JavaScript + ReactJS, HTML, CSS, Ruby on Rails</li>
          <li>HOSTING: Heroku, Netlify</li>
        </ul>

        <div className="Projects-heading">
          <div>
            <h2><a href="https://github.com/FaezCat/bestwikimaps" target="_blank" rel="noopener noreferrer">Best Wiki Maps</a></h2>
          </div>
          <div className="Projects-buttons">
            <IconButton href="https://github.com/FaezCat/bestwikimaps" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
            </IconButton>
          </div>
        </div>
        <p>A web-app to create custom maps to note your favourite restaurants, nightlife or nature spots.</p>
        <ul>
          <li>LANGUAGES/FRAMEWORKS: JavaScript + NodeJS, HTML, CSS, SQL</li>
        </ul>

        <div className="Projects-heading">
          <div>
            <h2><a href="https://github.com/fltfx/GEOG567_ConvolutionFilter" target="_blank" rel="noopener noreferrer">ArcGIS Convolution (Image Processing Filter) Tool</a></h2>
          </div>
          <div className="Projects-buttons">
          <IconButton href="https://github.com/fltfx/GEOG567_ConvolutionFilter" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </IconButton>
          </div>
        </div>
        <p>An image processing (convolution filtering) tool using Python 2.7 for ArcGIS / ArcPy use</p>
        <ul>
          <li>LANGUAGE + SOFTWARE: Python 2.7, ArcGIS</li>
        </ul>

      </div>
    </div>
  </React.Fragment>
  );
}


