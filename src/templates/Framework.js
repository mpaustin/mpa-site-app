import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import headshot from '../images/headshot.jpg';
import MotionW from '../images/motion-w.png';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import Box from '@material-ui/core/Box';

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
  icon: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    backgroundColor: '#808080',
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(15, 0, 15),
    fontFamily: 'EB Garamond,serif',
  },
  heroButtons: {
    // marginTop: theme.spacing(4),
    // color: '#49b5eb',
  },
  heroButtonsPrimary: {
    backgroundColor: '#808080',
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: '#808080',
    padding: theme.spacing(6),
    // position: 'absolute',
  },
  headshot: {
    height: theme.spacing(20),
    width: theme.spacing(20),
    margin: 'auto',
    marginBottom: '30px',
    border: '1px solid white',
    boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
  },
  title: {
    fontFamily: 'EB Garamond, serif',
  },
  subtitle: {
    fontFamily: 'EB Garamond, serif',
    // cursor: 'pointer',
  },
  motionW: {
    height: theme.spacing(4),
    width: theme.spacing(4),
    // margin: 'auto',
    marginRight: '15px',
  },
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
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Avatar src={headshot} alt='headshot' className={classes.headshot} />
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom className={classes.title}>
              Matt Austin
            </Typography>
            <Box display='flex' flexDirection='row' justifyContent='center'>
                <Avatar src={MotionW} alt='motionW' variant='square' className={classes.motionW} />
                <Typography variant="h6" align="center" color="textSecondary" paragraph className={classes.subtitle}>
                    {/* <Link color='inherit' onClick={() => openUrl('https://www.engr.wisc.edu')}>
                        BSc, University of Wisconsin-Madison
                    </Link> */}
                    Software Engineer || Exercise Enthusiast || Avid Reader
                </Typography>
            </Box>
            <div className={classes.heroButtons}>
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
          </Container>
        </div>
      </main>
      <footer className={classes.footer}>
        <Copyright />
      </footer>
    </React.Fragment>
  );
}