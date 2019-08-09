import React, {useState} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Divider from '@material-ui/core/Divider';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflowX: 'auto',
    width: '100%',
    overflowY: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'white',
  },
  title: {
    flexGrow: 1,
  },
  dialog: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },

  dialogTitle: {
    background: 'rgb(131,58,180)',
    background: 'linear-gradient(90deg, rgba(131,58,180,0.68531162464986) 0%, rgba(253,29,29,0.6376925770308124) 50%, rgba(252,176,69,0.8421743697478992) 100%)',
    color: 'white',
  },
  table: {
      width: '100%'
  },
  tableHover: {
    '&:hover': {
        background: '#ebebeb'
   },  
  }
}));



export default function ContactArea({
    drawerView,
    handleClose,
    viewData
}) {

  

    const token = localStorage.getItem('token')
    


    var decoded = jwtDecode(token);
    const logged_userID = decoded.userId;
    
    
    const classes = useStyles();



    return (
        <React.Fragment>
            <Drawer anchor="bottom" open={drawerView} onClose={handleClose}>
                <Container fullwidth maxWidth="md"style={{marginTop: '50px', marginBottom: '50px'}} >
                <IconButton style={{right: '0', marginTop: '-30px', marginRight: '20px', position: 'fixed'}}>
                    <Avatar style={{backgroundColor: 'rgba(253,29,29,0.6376925770308124)', color: 'white'}} onClick={handleClose}>
                    <Icon>close</Icon>
                    </Avatar>
                </IconButton>
                    <Grid container spacing={12}>
                        <Grid xs={12} lg={3}>
                            <center><img width="90%" src="https://image.flaticon.com/icons/svg/149/149072.svg"></img></center>
                        </Grid>
                        <Grid xs={12} lg={1}>
                        
                        </Grid>
                        <Grid container item xs={12} lg={8}>
                           <Grid item xs={12} lg={12}>
                            <Typography variant="h4" style={{marginTop: '10px'}}>
                                {viewData.first_name} {viewData.last_name}
                            </Typography>
                           </Grid>  
                           <Grid item xs={12} lg={12}>
                                <Divider  style={{marginTop: '15px', marginBottom: '0'}}/>
                           </Grid>  

                           <Grid container item xs={12} lg={12}>
                            <Grid item xs={12} md={6} sm={6} lg={6}>
                                    <List className={classes.root}>
                                        <ListItem>
                                            <ListItemAvatar>
                                            <Avatar>
                                            <Icon>email</Icon>
                                            </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText secondary="Email Address">{viewData.email}</ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemAvatar>
                                            <Avatar>
                                            <Icon>phone</Icon>
                                            </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText secondary="Mobile Phone">{viewData.mobile_phone}</ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemAvatar>
                                            <Avatar>
                                            <Icon>home</Icon>
                                            </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText secondary="Home Phone">{viewData.home_phone}</ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemAvatar>
                                            <Avatar>
                                            <Icon>work</Icon>
                                            </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText secondary="Work Phone">{viewData.work_phone}</ListItemText>
                                        </ListItem>
                                    </List> 
                            </Grid>

                            <Grid item xs={12} md={6} sm={6} lg={6}>
                                    <List className={classes.root}>
                                    <ListItem>
                                        <ListItemAvatar>
                                        <Avatar>
                                        <Icon>location_city</Icon>
                                        </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText secondary="City" >{viewData.city}</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                        <Avatar>
                                        <Icon>location_on</Icon>
                                        </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText secondary="State/Province/Region">{viewData.state_or_province}</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                        <Avatar>
                                        <Icon>contact_mail</Icon>
                                        </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText secondary="Postal Code">{viewData.postal_code}</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                            <ListItemAvatar>
                                            <Avatar>
                                            <Icon>flag</Icon>
                                            </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText secondary="Country" > {viewData.country}</ListItemText>
                                        </ListItem>
                                    </List> 
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Drawer>
        </React.Fragment>     
        
    );
}