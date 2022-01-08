import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import Button from '@mui/material/Button';
import '../styles/Work.css';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';

export default function Work() {
  return (
    <React.Fragment>
    <div id="Work">


    <div id="Work-images">
      <img src="https://gssc.esa.int/navipedia/images/c/c0/Galileo_02_wp02.jpg"></img>
      <img src="https://drive.google.com/uc?id=1bpfj_G82hcE_qOz6dEqL3Jmd2X3GqO1c" alt="Claudia volunteering for Leftovers" />  
    </div>

    <div id="Work-text">
      <h1>Professional Experiences</h1>
      <h2><a href="https://novatel.com/" target="_blank" rel="noopener noreferrer">GNSS Applications Specialist - NovAtel [May 2018 - Aug 2021]</a></h2>
      <p>Following my studies in Geomatics Engineering, I supported pre and post-sales of high-precision GNSS applications. Originally, I focused in precision agriculture on products that combined the GNSS receiver and the antenna. Later on, my focus was in sensor integration and robotics/autonomy.</p>
      <p>Now, I know what you're thinking. You know what GPS does. It's the little mechanism powering Google Maps on your iPhone when you need to get somewhere. But you might be wondering... how does it communicate with the satellites above? Who put those satellites there? What's the difference between the GPS in my phone and what you mean by high-precision?</p>
      <Button variant="text" href="https://novatel.com/an-introduction-to-gnss" target="_blank" rel="noopener noreferrer">Learn more about GNSS here</Button>
      <p>Okay, so now I have an idea of what GPS... err... GNSS is. But where does it fit in agriculture? Don't you just drive the tractor... well, "straight"?</p>
      <Button variant="text" href="https://agfundernews.com/what-is-precision-agriculture.html" target="_blank" rel="noopener noreferrer">Learn more about precision agriculture here</Button>


      <h2><a href="https://rescuefood.ca/rescue-food" target="_blank" rel="noopener noreferrer">Leftovers Foundation: Rescue Food App [Jan 2017 to current]</a></h2>
      <p>For over 5 years, I have volunteered in the operations of a food redirection non-profit. In 2019, we launched a mobile app where volunteers can connect with donors, rescue food before it ends up in the landfill, and redirect it to service agencies. My role was in consulting the app's design for volunteer user experience and later in project management of the development and maintenance.</p>
      <IconButton href="https://apps.apple.com/ca/app/rescue-food-app/id1447273598" target="_blank" rel="noopener noreferrer">
        <AppleIcon />
      </IconButton>
      <IconButton href="https://play.google.com/store/apps/details?id=unite.leftovers&hl=en_CA&gl=US" target="_blank" rel="noopener noreferrer">
        <AndroidIcon />
      </IconButton>
    </div>
    </div>
  </React.Fragment>
  );
}


