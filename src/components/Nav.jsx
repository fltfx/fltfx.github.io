import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import '../styles/Nav.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {

      }}
      {...props}
    />
  );
}

export default function Nav() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="Nav">
    <IconButton id="logo" href="/">
      <AcUnitIcon />
    </IconButton>
      <div>
      {/* <a className="nav-links" href="/#About">About Me</a>
      <a className="nav-links" href="/#Projects">Projects</a>
      <a className="nav-links" href="/#Work">Work</a> */}
          <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab label="About Me" href="/#About" />
        <LinkTab label="Projects" href="/#Projects" />
        <LinkTab label="Work" href="/#Work" />
      </Tabs>
      </Box>
      </div>
    </div>
  );
}