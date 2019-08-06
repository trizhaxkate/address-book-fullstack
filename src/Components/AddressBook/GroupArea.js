import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

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
  card: {
    marginBottom: 30,
    textAlign: 'left'
  },
}));




export default function GroupArea(props) {
  
  const classes = useStyles();
 

  return (
        <Grid item xs={12} md={3}>
             <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://source.unsplash.com/random"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {props.fName} {props.lName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Welcome to your address book, {props.fName}!
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p"  style={{marginTop: '10px'}}>
                      <div><Icon style={{verticalAlign: 'middle', marginRight: '10px', marginBottom: '5px '}}>person</Icon> {props.username}</div>
                      <div><Icon style={{verticalAlign: 'middle',marginRight: '10px'}}>email</Icon> {props.email}</div>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                {/* <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions> */}
            </Card>

            <Paper className={classes.root} style={{padding: '10px'}}>
            <Typography style={{padding: '10px', letterSpacing: '5px'}}>
                GROUPS
            </Typography>
            <Divider/>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem button>
                    <ListItemAvatar>
                        <Avatar style={{background: 'rgba(131,58,180,0.68531162464986) 0%'}}>
                        <Icon>group_add</Icon>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Sample Group 1" />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                        <Icon>delete</Icon>
                        </IconButton>
                    </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                    <ListItemAvatar>
                        <Avatar style={{background: 'rgba(131,58,180,0.68531162464986) 0%'}}>
                        <Icon>group_add</Icon>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Sample Group 2" />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                        <Icon>delete</Icon>
                        </IconButton>
                    </ListItemSecondaryAction>
                    </ListItem>
                </List>
            </Paper>
        </Grid>
  );
}