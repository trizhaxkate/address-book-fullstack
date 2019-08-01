import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Routes from '../Routes';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(13),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '15px'
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
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <TextField
            error={!props.validate}
            defaultValue=""
            required={!props.validate}
            helperText={props.validate?'':"Email Address is required"}
            onChange = {props.handleEmailInput}
            onBlur={props.handleBlurEmail}
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
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
          <Link to='/addressbook'>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick = {props.getUser}
            >
              Sign In
            </Button>
          </Link>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to='/register'>
                <span style={{textAlign: 'center'}}>{"Don't have an account? Sign Up"}</span>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      </Paper>   
    </Container>
  );
}