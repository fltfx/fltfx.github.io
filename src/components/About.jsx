import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/About.css';

export default function About() {
  return (
    <React.Fragment>
    <div id="About">
      <div>
        <figure>
          <img src="https://drive.google.com/uc?id=1yMPBVGlEQMgntwZmhl_2hvvNVkI_YZtW" alt="Claudia setting up tripod for surveying" />      
          <figcaption>My friend (right) and I (left) setting up a total station as part of a Geomatics Engineering alumni event in 2019.</figcaption>
        </figure>
      </div>
      <div id="About-text">
        <h1>About Me</h1>
        <p>Hi, I'm Claudia. I focus on full stack development now, but my background is in GNSS/GPS satellite positioning. After graduating from Geomatics Engineering at the University of Calgary in 2018, I was an Applications Specialist at NovAtel, a Calgary-based GPS receiver manufacturer. I was dedicated to helping customers and integrators troubleshoot their problems and best apply geo-spatial technology to their application. From supporting software and hardware products, I am transitioning to maintaining and developing software as a Full Stack Developer, ideally in the geo-spatial industry.</p>
        <br />
        <ul>
          <li>LANGUAGES: JavaScript, HTML, CSS, Ruby on Rails, C++, Python, SQL</li>
          <li>SOFTWARE: MatLab, ArcGIS, postgreSQL, SalesForce, Jira</li>
          <li>FRAMEWORKS: NodeJS, ReactJS, Ajax, Express, EJS, JQuery, SASS</li>
          <li>TESTING: Mocha, Chai, Cypress, Jest</li>
          <li>HOSTING: Heroku, Netlify</li>
          <li>TECHNOLOGY EXPERTISE: GNSS Satellite Positioning, Pre-Sales, Post-Sales and Support Engineering, Autonomy and Inertial Sensor Fusion, Precision Agriculture, Food Waste and Redirection</li>
          <li>HUMAN LANGUAGES: English (Native), French (Intermediate), Cantonese (Intermediate)</li>
        </ul>
      </div>
    </div>
  </React.Fragment>
  );
}


