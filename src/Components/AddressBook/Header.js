import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflowX: 'auto'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'white',
  },
  title: {
    flexGrow: 1,
  },
}));


export default function Header() {
  
  const classes = useStyles();
 

  return (
    <AppBar position="static" style={{
        background: 'rgb(131,58,180)',
        background: 'linear-gradient(90deg, rgba(131,58,180,0.68531162464986) 0%, rgba(253,29,29,0.6376925770308124) 50%, rgba(252,176,69,0.8421743697478992) 100%)',
        color: 'white',
    }}>
        <Toolbar>
          <Icon className={classes.menuButton}  color="disabled" fontSize="large">
              assignment_ind
          </Icon>
          <Typography variant="h6" className={classes.title} style={{letterSpacing: '5px'}}>
            ADDRESS BOOK
          </Typography>
          <IconButton className={classes.button} 
          onClick={()=>{
            localStorage.clear();
            window.location.href= "/";
            
          }}>
              <Icon style={{float: 'right', color: 'white'}} fontSize="large">exit_to_app</Icon>
          </IconButton>
        </Toolbar>
    </AppBar>
  );
}