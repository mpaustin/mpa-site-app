import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
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
    backgroundColor: '#49b5eb',
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
    // color: '#49b5eb',
  },
  heroButtonsPrimary: {
    backgroundColor: '#49b5eb',
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
    backgroundColor: '#49b5eb',
    padding: theme.spacing(6),
  },
}));

const cards = [
    {
        heading: 'House Hack Knack',
        copy: 'My (retired (for now)) blog about REI',
        image: 'https://source.unsplash.com/photos/A3DPhhAL6Zg',
        imageTitle: '',
        url: 'https://www.househackknack.com',
    },
    {
        heading: 'Go Badgers',
        copy: 'Another disappointing football season...',
        image: 'https://source.unsplash.com/photos/A3DPhhAL6Zg',
        imageTitle: '',
        url: 'https://www.uwbadgers.com',
    },
    {
        heading: 'Soothe your soul',
        copy: 'What\'s your favorite Chris Stapleton song?',
        image: 'https://source.unsplash.com/photos/A3DPhhAL6Zg',
        imageTitle: '',
        url: 'https://www.chrisstapleton.com',
    },
];

const openUrl = (url) => {
    window.open(url, '_blank');
}

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" className={classes.appBar} >
        <Toolbar>
          {/* <CameraIcon className={classes.icon} /> */}
          <Typography variant="h6" color="inherit" noWrap>
            mattpaustin
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Matt Austin
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              BS Engineering, University of Wisconsin-Madison
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color='inherit' className={classes.heroButtonsPrimary} >
                    Do nothing
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color='inherit' >
                    Still do nothing
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title={card.imageTitle}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.heading}
                    </Typography>
                    <Typography>
                      {card.copy}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={() => openUrl(card.url)}>
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Thanks for visiting!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}