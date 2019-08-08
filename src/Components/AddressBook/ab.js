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
import EditDialog from './Dialogs/EditDialog'
import DeleteDialog from './Dialogs/DeleteDialog'
import AddDialog from './Dialogs/AddDialog'
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarBorder from '@material-ui/icons/StarBorder';

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



export default function ContactArea(props) {

  
    if (localStorage.getItem('token') === null || localStorage.getItem('token').length === 0) {
        window.location.href = '#/'
    }

    const token = localStorage.getItem('token')
  

    var decoded = jwtDecode(token);
    const logged_userID = decoded.userId;
    
    
    const classes = useStyles();
    const [contactData, setContactData] = useState({});   
    const [editData, setEditData] = useState({});
    const [openDel, setOpenDelete] = useState(false);
    const [sortLname, setSortLast] = useState(false);
    const [open, setOpen] = React.useState(true);
    const [colData, setColData] = useState({});

    function handleClick() {
        setOpen(!open);
      }

    return (
        <React.Fragment>
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
                            <Icon style={{float: 'right', color: 'white'}} onClick={props.handleAddOpen}>add</Icon>
                        </Fab>
                    </span>
                </div>

                {/* <Divider variant="middle" style={{marginTop: '15px', marginBottom: '0'}}/> */}

                <Table className={classes.table}>
                    <TableHead> 
                        <TableRow>

                            <TableCell width="25%" align="center">
                                <IconButton onClick={props.handleSortLname}>
                                    <Icon style={{verticalAlign: 'middle'}}>import_export</Icon>
                                </IconButton>
                                LAST NAME
                            </TableCell>

                            <TableCell align="center">
                                {/* <IconButton>
                                    <Icon style={{verticalAlign: 'middle'}}>import_export</Icon>
                                </IconButton> */}
                                FIRST NAME
                            </TableCell>

                            <TableCell align="center" width="25%">MOBILE NUMBER</TableCell>

                            <TableCell align="center" width="25%">ACTION </TableCell>

                        </TableRow>
                    </TableHead>

                    <TableBody >
                    {props.contactList.map(row => (
                        <TableRow  className={classes.tableHover} key={row.id}
                        onClick={() => {
                            handleClick();
                            setColData(row);
                        }}>
                            <TableCell align="center">{row.last_name}</TableCell>

                            <TableCell align="center"> 
                                {row.first_name}
                            </TableCell>

                            <TableCell align="center">{row.mobile_phone}</TableCell>

                            <TableCell align="center" style={{display: 'flex', justifyContent: 'center'}}>
                                <Fab 
                                    onClick={() => {
                                        props.handleEditOpen(true);
                                        setEditData(row);
                                    }}
                                    size="small" 
                                    style={{backgroundColor: 'rgba(131,58,180,0.68531162464986)', color: 'white', marginRight: '10px'}} 
                                    aria-label="add" 
                                    className={classes.margin}>
                                    <Icon>edit</Icon>
                                </Fab>

                                <Fab 
                                    size="small" 
                                    style={{backgroundColor: 'rgba(253,29,29,0.6376925770308124)', color: 'white', marginRight: '10px'}}  
                                    className={classes.margin} 
                                    onClick={() => {
                                        props.handleDeleteOpen(true);
                                        setContactData(row);
                                    }}>
                                    <Icon>delete</Icon>
                                </Fab>

                                <Fab size="small" style={{backgroundColor: 'rgba(252,176,69,0.8421743697478992)', color: 'white',}} aria-label="add" className={classes.margin}>
                                    <Icon>group_add</Icon>
                                </Fab>
                            </TableCell>
                        </TableRow>
                    ))}

                        <TableRow>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                            <ListItem button>
                                <ListItemIcon>
                                <StarBorder />
                                </ListItemIcon>
                                <ListItemText>{colData.first_name}</ListItemText>
                            </ListItem>
                            </List>
                            </Collapse>
                         </TableRow>

                    </TableBody>
                </Table>
            </Paper>

            <AddDialog 
                handleAdd = {props.handleAdd}
                handleAddContact = {props.handleAddContact}
                handleAddOpen = {props.handleAddOpen}
                handleAddClose = {props.handleAddClose}
                open = {props.open}
                handleReset = {props.handleResetStopper}/>


            <DeleteDialog 
                contactData = {contactData}
                handleDeleteClose = {props.handleDeleteClose}
                handleDeleteOpen = {props.handleDeleteOpen}
                handleDeleteContact = {props.handleDeleteContact}
                deleteOpen = {props.deleteOpen}
                getContactList = {props.getContactList} />
                

            
            <EditDialog 
                handleEditOpen = {props.handleEditOpen}
                handleEditClose = {props.handleEditClose}
                editOpen = {props.editOpen}
                editData = {editData}
                getContactList = {props.getContactList} />   
        </Grid>
        </React.Fragment>     
        
    );
}