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
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


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
handleCancel,
handleEntering,
handleChange,
handleOk,
acOpen,
handleClose,
groupList,
handleAddOpen,
groupView
}) {

    const token = localStorage.getItem('token')
    


    var decoded = jwtDecode(token);
    const logged_userID = decoded.userId;
    const [value, setValue] = React.useState('female');
    const [searched, setSearched] = React.useState('')


    function handleChange(event) {
        setValue(event.target.value);
    }
    
    const classes = useStyles();  

    function handleSearch(e) {
        var input = e.target.value;
        setSearched(input)
    }


    const groupFiltered = groupView.filter((data)=>{
        let word = searched.toLowerCase()
        let name = data.name.toLowerCase().indexOf(word) !== -1;
       
        return name;
    });

    return (
        <React.Fragment>
             <Dialog
                maxWidth="xs"
                onEntering={handleEntering}
                aria-labelledby="confirmation-dialog-title"
                open={acOpen}
                onClose = {handleClose}
                fullWidth
                style={{minHeight: '500px'}}
                >
                <DialogTitle id="confirmation-dialog-title">ADD CONTACT TO GROUP
                <span style={{float: 'left', marginLeft: '5px', marginTop: '10px'}}>
                    <Icon style={{marginTop: '5px', marginRight: '7px', color: 'gray'}}>search</Icon>
                    <TextField
                        id="standard-search"
                        placeholder="Search groups"
                        type="search"
                        onChange={handleSearch}
                        />
                </span> 
                </DialogTitle>
                <DialogContent dividers>
                <FormControl component="fieldset" className={classes.formControl}>
                    {/* <FormLabel component="legend" style={{marginBottom: '10'}}>Groups</FormLabel> */}
                    <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    className={classes.group}
                    value={value}
                    onChange={handleChange}
                    >
                    {groupFiltered.map(row => (
                      <FormControlLabel value={row.name} control={<Radio />} label={row.name} />
                    ))}
                    </RadioGroup>
                </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                    Cancel
                    </Button>
                    <Button 
                    onClick={() => {
                      console.log(value)
                    }}
                    color="primary">
                      ADD
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>     
        
    );
}