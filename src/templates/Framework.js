import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import headshot from '../images/headshot.jpeg';
import MotionW from '../images/motion-w.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Box from '@mui/material/Box';

const styles = {
  headshot: {
    height: '50%',
    width: '50%',
    margin: 'auto',
    marginTop: '30px',
    marginBottom: '30px',
    border: '1px solid white',
    boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
  },
  font: {
    fontFamily: 'EB Garamond, serif',
  },
  motionW: {
    marginRight: '15px',
    cursor: 'pointer',
  },
  link: {
      cursor: 'pointer',
  },
};

const openUrl = (url) => {
    window.open(url, '_blank');
}

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://mattpaustin.com/'>
        mattpaustin.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Framework() {
  return (
    <Container maxWidth='sm' sx={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}>
      <Avatar src={headshot} alt='headshot' sx={styles.headshot} />
      <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom sx={styles.font}>
        Matt Austin
      </Typography>
      <Box display='flex' flexDirection='row' justifyContent='center' marginBottom={'1rem'}>
        <Link color='inherit' onClick={() => openUrl('https://www.engr.wisc.edu')}>
          <Avatar src={MotionW} alt='motionW' variant='square' sx={styles.motionW} />
        </Link>
        <Typography variant='h6' align='center' color='textSecondary' paragraph sx={styles.font}>
          Software Engineer 
          {/* ||&nbsp; 
          <Link sx={styles.link} onClick={() => openUrl('https://www.strava.com/athletes/22456556')}>Exercise Enthusiast</Link> ||&nbsp;
          <Link sx={styles.link} onClick={() => openUrl('https://www.goodreads.com/review/list/70497021-matt?ref=nav_mybooks')}>Avid Reader</Link> */}
        </Typography>
      </Box>
      <Grid container direction='row' justifyContent='center' alignItems='center' spacing='24'>
        <Grid item>
          <IconButton variant='contained' color='inherit' onClick={() => openUrl('https://www.linkedin.com/in/mattpaustin')}>
            <LinkedInIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton variant='outlined' color='inherit' onClick={() => openUrl('https://www.github.com/mpaustin')}>
            <GitHubIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton variant='contained' color='inherit' onClick={() => openUrl('https://www.instagram.com/matt.p.austin')}>
            <InstagramIcon />
          </IconButton>
        </Grid>
      </Grid>
      {/* <div>
        <Grid container spacing={2} justify='center'>
          <Grid item>
            <Typography variant='h6' align='center' color='textSecondary' paragraph sx={styles.font}>
              <Link sx={styles.link} onClick={() => openUrl('http://trackyourworkouts.io')}>trackyourworkouts.io</Link>
            </Typography>
          </Grid>
          <div/>
          <Grid item>
            <Typography variant='h6' align='center' color='textSecondary' paragraph sx={styles.font}>
              <Link sx={styles.link} onClick={() => openUrl('http://househackknack.com')}>househackknack.com</Link>
            </Typography>
          </Grid>
        </Grid>
      </div> */}
    </Container>
  );
}