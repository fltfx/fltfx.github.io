import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <div className="footer">
    <IconButton href="mailto:claudiaywong@gmail.com">
      <EmailIcon />
    </IconButton>
    <p>Contact me at: claudiaywong@gmail.com</p>
    </div>
  );
}