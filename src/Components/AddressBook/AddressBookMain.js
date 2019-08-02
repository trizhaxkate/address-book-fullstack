import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Divider from '@material-ui/core/Divider';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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
  table: {
    // minWidth: 650,
    // minHeight: 500, 
  },
  blue: {
    background: 'rgb(9,9,121)',
    background: 'linear-gradient(90deg, rgba(9,9,121,1) 35%, rgba(115,168,179,1) 100%)'
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
  }
}));

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}




export default function AddressBook(props) {
  
  function handleClickOpen() {
    setOpen(true);
  }
  
  function handleClose() {
    setOpen(false);
  }
  
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
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
          <IconButton className={classes.button}>
              <Icon style={{float: 'right', color: 'white'}} fontSize="large">exit_to_app</Icon>
          </IconButton>
        </Toolbar>
    </AppBar>
    <Grid container spacing={5} style={{padding: '50px'}}>
        <Grid item xs={12} md={3}>
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
        
        <Grid item xs={12} md={9}>
        <Paper className={classes.root}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <span style={{float: 'left', marginLeft: '15px', marginTop: '15px', marginBottom: '10px'}}>
              <Icon style={{marginTop: '21px', marginRight: '7px', color: 'gray'}}>search</Icon>
              <TextField
                id="standard-search"
                label="Search field"
                type="search"
                />
            </span> 
            <span style={{float: 'left', marginRight: '25px', marginTop: '20px', marginBottom: '10px'}}>
                <Fab size="medium" style={{backgroundColor: 'rgba(252,176,69,0.8421743697478992)'}} aria-label="add">
                    <Icon style={{float: 'right', color: 'white'}} onClick={handleClickOpen}>add</Icon>
                </Fab>

                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.dialog}>
                  <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>
                    ADD NEW CONTACT
                  </DialogTitle>
                <DialogContent>
                  {/* <DialogContentText>
                    
                  </DialogContentText> */}
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="fname"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="lname"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        id="email"
                        name="email"
                        label="Email Address"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        required
                        id="mobile"
                        name="mobile"
                        label="Mobile Phone"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        required
                        id="homephone"
                        name="homephone"
                        label="Home Phone"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        required
                        id="work_phone"
                        name="work_phone"
                        label="Work Phone"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="billing address-level2"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField id="state" name="state" label="State/Province/Region" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="billing postal-code"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="billing country"
                      />
                    </Grid>
                  </Grid>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    CANCEL
                  </Button>
                  <Button onClick={handleClose} color="primary">
                    ADD
                  </Button>
                </DialogActions>
              </Dialog>
            </span>
          </div>
          <Table className={classes.table}>
            <TableHead> 
              <TableRow>
                <TableCell>FIRST NAME</TableCell>
                <TableCell align="right">LAST NAME</TableCell>
                <TableCell align="right">MOBILE NUMBER</TableCell>
                <TableCell align="right">ACTION </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.contactList.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.first_name}
                  </TableCell>
                  <TableCell align="right">{row.last_name}</TableCell>
                  <TableCell align="right">{row.mobile_phone}</TableCell>
                  <TableCell align="right">
                      <Fab size="small" style={{backgroundColor: 'rgba(131,58,180,0.68531162464986)', color: 'white', marginRight: '10px'}} aria-label="add" className={classes.margin}>
                        <Icon>edit</Icon>
                      </Fab>
                      <Fab size="small" style={{backgroundColor: 'rgba(253,29,29,0.6376925770308124)', color: 'white', marginRight: '10px'}} aria-label="add" className={classes.margin}>
                        <Icon>delete</Icon>
                      </Fab>
                      <Fab size="small" style={{backgroundColor: 'rgba(252,176,69,0.8421743697478992)', color: 'white'}} aria-label="add" className={classes.margin}>
                      <Icon>group_add</Icon>
                      </Fab>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        </Grid>
    </Grid>
    </React.Fragment>
  );
}