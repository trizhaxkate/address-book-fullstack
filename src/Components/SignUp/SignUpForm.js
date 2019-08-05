import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import logo from '../../img/book.png'
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      background: 'rgb(131,58,180)',
      background: 'linear-gradient(90deg, rgba(131,58,180,0.68531162464986) 0%, rgba(253,29,29,0.6376925770308124) 50%, rgba(252,176,69,0.8421743697478992) 100%)',
    },
  },
  paper: {
    marginTop: theme.spacing(13),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '25px',
    marginBottom: theme.spacing(7),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUpForm(props) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper}>
      <CssBaseline />
      <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <img src={logo} alt="Logo" style={{width: '30%', marginBottom: '20px'}}/>
        <Typography style={{fontWeight: '100', color: 'gray', fontSize: '20px'}}>
          CREATE AN ACCOUNT
        </Typography>
        <form className={classes.form} onSubmit={props.handleSignUp}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="first_name"
                id="first_name"
                variant="outlined"
                fullWidth
                label="First Name"
                error={!props.validatefirst}
                defaultValue=""
                required={!props.validatefirst}
                helperText={props.validatefirst?'':"First Name is required"}
                onChange = {props.handleFnameInput}
                onBlur={props.handleBlurFname}
                autoFocus
              />

            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="last_name"
                label="Last Name"
                name="last_name"
                autoComplete="lname"
                error={!props.validatelast}
                defaultValue=""
                required={!props.validatelast}
                helperText={props.validatelast?'':"Last Name is required"}
                onChange = {props.handleLnameInput}
                onBlur={props.handleBlurLname}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"

                error={!props.validateuser}
                defaultValue=""
                required={!props.validateuser}
                helperText={props.validateuser?'':"Last Name is required"}
                onChange = {props.handleUsernameInput}
                onBlur={props.handleBlurUsername}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"

                error={!props.validateemail}
                defaultValue=""
                required={!props.validateemail}
                helperText={props.validateemail?'':"Last Name is required"}
                onChange = {props.handleEmailInput}
                onBlur={props.handleBlurEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"

                error={!props.validatepass}
                defaultValue=""
                required={!props.validatepass}
                helperText={props.validatepass?'':"Last Name is required"}
                onChange = {props.handlePassInput}
                onBlur={props.handleBlurPass}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            className={classes.submit}
            type="submit"

          >
            Sign Up
          </Button>
          <Divider variant="middle" style={{marginTop: '15px', marginBottom: '15px'}}/>
          <div  style={{textAlign: 'center'}}>{"Already have an account?"}</div>
            <Link href="#" style={{textDecoration: 'none'}}>
            <Button
              fullWidth
              variant="contained"
              style={{background: "#4a4d63", color: 'white', marginTop: '10px'}}
            >
              Sign In
            </Button>
          </Link>
        </form>
      </div>
      </Paper>
    </Container>
  );
}