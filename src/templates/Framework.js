import React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import headshot from '../images/headshot.jpg';
import MotionW from '../images/motion-w.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Box from '@mui/material/Box';

function Copyright() {
    const classes = useStyles();
  return (
    <Typography variant="body2" color="textSecondary" align="center" className={classes.title}>
      {'Copyright © '}
      <Link color="inherit" href="https://mattpaustin.com/">
        mattpaustin.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#808080',
  },
  heroContent: {
    padding: '10% 0 10%',
    fontFamily: 'EB Garamond,serif',
  },
  footer: {
    backgroundColor: '#808080',
    padding: '6',
    height: '1.5rem',
  },
  headshot: {
    height: '20px',
    width: '20px',
    margin: 'auto',
    marginBottom: '30px',
    border: '1px solid white',
    boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
  },
  font: {
    fontFamily: 'EB Garamond, serif',
  },
  motionW: {
    height: '4',
    width: '4',
    marginRight: '15px',
    cursor: 'pointer',
  },
  main: {
    backgroundColor: '#FFFFFF',
    minHeight: 'calc(100vh - 1.5rem)',
  },
  link: {
      color: 'inherit',
      cursor: 'pointer',
  }
}));

const openUrl = (url) => {
    window.open(url, '_blank');
}

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" className={classes.appBar} >
        <Toolbar/>
      </AppBar>
      <main className={classes.main}>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Avatar src={headshot} alt='headshot' className={classes.headshot} />
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom className={classes.font}>
              Matt Austin
            </Typography>
            <Box display='flex' flexDirection='row' justifyContent='center'>
                <Link color='inherit' onClick={() => openUrl('https://www.engr.wisc.edu')}>
                    <Avatar src={MotionW} alt='motionW' variant='square' className={classes.motionW} />
                </Link>
                <Typography variant="h6" align="center" color="textSecondary" paragraph className={classes.font}>
                    Software Engineer 
                    {/* ||&nbsp; 
                    <Link className={classes.link} onClick={() => openUrl('https://www.strava.com/athletes/22456556')}>Exercise Enthusiast</Link> ||&nbsp;
                    <Link className={classes.link} onClick={() => openUrl('https://www.goodreads.com/review/list/70497021-matt?ref=nav_mybooks')}>Avid Reader</Link> */}
                </Typography>
            </Box>
            <div>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <IconButton variant="contained" color='inherit' onClick={() => openUrl('https://www.linkedin.com/in/mattpaustin')}>
                    <LinkedInIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton variant="outlined" color='inherit' onClick={() => openUrl('https://www.github.com/mpaustin')}>
                    <GitHubIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton variant="contained" color='inherit' onClick={() => openUrl('https://www.instagram.com/matt.p.austin')}>
                    <InstagramIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </div>
            {/* <div>
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Typography variant="h6" align="center" color="textSecondary" paragraph className={classes.font}>
                    <Link className={classes.link} onClick={() => openUrl('http://trackyourworkouts.io')}>trackyourworkouts.io</Link>
                  </Typography>
                </Grid>
                <div/>
                <Grid item>
                  <Typography variant="h6" align="center" color="textSecondary" paragraph className={classes.font}>
                    <Link className={classes.link} onClick={() => openUrl('http://househackknack.com')}>househackknack.com</Link>
                  </Typography>
                </Grid>
              </Grid>
            </div> */}
          </Container>
        </div>
      </main>
      <footer className={classes.footer}>
        <Copyright />
      </footer>
    </React.Fragment>
  );
}