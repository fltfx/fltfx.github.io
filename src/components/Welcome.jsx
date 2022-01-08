import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Welcome.css';

export default function Welcome() {
  return (
    <React.Fragment>
    <div id="Welcome">
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFRWhHDdd7AdA/profile-displayphoto-shrink_800_800/0/1517076600219?e=1646870400&v=beta&t=U2f7WLoHa0K14WfOvIuoPJvZWDz8yBYmneGc0vhb92I" alt="Claudia Wong" />
      <div id="Welcome-text">
        <h1>Claudia Wong</h1>
        <p>Full stack developer | Geomatics Engineer-In-Training</p>
        <p>Available in the Americas timezones</p>


        <IconButton href="https://github.com/fltfx" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/claudia-wong-858a2588/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </IconButton>
        <IconButton href="mailto:claudiaywong@gmail.com" target="_blank" rel="noopener noreferrer">
          <EmailIcon />
        </IconButton>
        <p>claudiaywong@gmail.com</p>
        <a href="https://resume.creddle.io/resume/1rvn7zz1bda" target="_blank" rel="noopener noreferrer">Full resume available here</a>
      </div>
    </div>


  </React.Fragment>
  );
}


