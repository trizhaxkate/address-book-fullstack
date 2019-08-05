import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import logo from '../../img/book.png'
import Divider from '@material-ui/core/Divider';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

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
    padding: '25px'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function SignInFrom(props) {
  const classes = useStyles();



  return (
    <Container component="main" maxWidth="xs" style={{display: 'flex', alignItems: 'center'}}>
      <Paper className={classes.paper}>
      <CssBaseline />
      <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <img src={logo} alt="Logo" style={{width: '30%', marginBottom: '15px'}}/>
        <Typography component="h1" variant="h5" style={{fontWeight: '100', color: 'gray'}}>
          SIGN IN
        </Typography>
        <form className={classes.form} onSubmit={props.handleLogin}>
          <TextField
            error={!props.validate}
            defaultValue=""
            variant="outlined"
            margin="normal"
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            helperText={props.validate?'':"Username is required"}
            onChange = {props.handleUsernameInput}
            onBlur={props.handleBlurUsername}
            required={!props.validate}
            autoFocus
          />
          <TextField
            error={!props.validatepass}
            defaultValue=""
            required={!props.validatepass}
            helperText={props.validatepass?'':"Password is required"}
            onChange = {props.handlePassInput}
            onBlur = {props.handleBlurPass}
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
            <Button
              fullWidth
              variant="contained"
              className={classes.submit}
              type="submit"
            >
              Sign In
            </Button>
            <Divider variant="middle" style={{marginTop: '15px', marginBottom: '15px'}}/>
            <div  style={{textAlign: 'center'}}>{"Don't have an account yet?"}</div>
            <Link to='/register' style={{textDecoration: 'none'}}>
            <Button
              fullWidth
              variant="contained"
              style={{background: "#4a4d63", color: 'white', marginTop: '10px'}}
            >
              Sign Up
            </Button>
          </Link>
          <ToastContainer hideProgressBar/>
        </form>
      </div>
      </Paper>   
    </Container>
  );
}