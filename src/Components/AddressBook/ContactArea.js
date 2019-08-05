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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflowX: 'auto',
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
  }
}));



export default function ContactArea(props) {

  
    if (localStorage.getItem('token') === null || localStorage.getItem('token').length === 0) {
        window.location.href = '#/'
    }

    const token = localStorage.getItem('token')
  

    var decoded = jwtDecode(token);
    console.log(decoded)
    const logged_userID = decoded.userId;
    
  
  const classes = useStyles();
  const [contactData, setContactData] = useState({});
  const [openDel, setOpenDelete] = useState(false);

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

                <Dialog open={props.open} onClose={props.handleAddClose} aria-labelledby="form-dialog-title" className={classes.dialog}>
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
                                id="first_name"
                                name="first_name"
                                label="First name"
                                fullWidth
                                autoComplete="fname"
                                onChange={props.handleAdd}
                            />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="last_name"
                                name="last_name"
                                label="Last name"
                                fullWidth
                                autoComplete="lname"
                                onChange={props.handleAdd}
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                required
                                id="email"
                                name="email"
                                label="Email Address"
                                fullWidth
                                onChange={props.handleAdd}
                            />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                id="mobile_phone"
                                name="mobile_phone"
                                label="Mobile Phone"
                                fullWidth
                                onChange={props.handleAdd}
                            />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                id="home_phone"
                                name="home_phone"
                                label="Home Phone"
                                fullWidth
                                onChange={props.handleAdd}
                            />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                id="work_phone"
                                name="work_phone"
                                label="Work Phone"
                                fullWidth
                                onChange={props.handleAdd}
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
                                onChange={props.handleAdd}
                            />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField 
                            id="state_or_province" 
                            name="state_or_province" 
                            label="State/Province/Region" 
                            fullWidth 
                            onChange={props.handleAdd}
                            />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="postal_code"
                                name="postal_code"
                                label="Zip / Postal code"
                                fullWidth
                                autoComplete="billing postal-code"
                                onChange={props.handleAdd}
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
                                onChange={props.handleAdd}
                            />
                            </Grid>
                        </Grid>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={props.handleAddClose} color="primary">
                            CANCEL
                        </Button>
                        <Button onClick={props.handleAddContact} color="primary">
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
                    <Fab onClick={props.handleEditOpen} size="small" style={{backgroundColor: 'rgba(131,58,180,0.68531162464986)', color: 'white', marginRight: '10px'}} aria-label="add" className={classes.margin}>
                        <Icon>edit</Icon>
                    </Fab>
                    <Fab 
                    size="small" 
                    style={{backgroundColor: 'rgba(253,29,29,0.6376925770308124)', color: 'white', marginRight: '10px'}}  
                    className={classes.margin}
                    // onClick={props.handleDeleteOpen}
                    // id={row.id}  
                    onClick={() => {
                        console.log(row);
                        props.handleDeleteOpen(true);
                        setContactData(row);
                      }}
                    >
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

            <Dialog
                open={props.deleteOpen}
                keepMounted
                onClose={props.handleDeleteClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"DELETE CONTACT"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                Are you sure you want to delete this contact? This process cannot be undone.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={props.handleDeleteClose} color="primary">
                    Cancel
                </Button>
                <Button color="primary" onClick={()=>{
                    axios({
                        method: 'delete',
                        url: `http://localhost:3001/api/delete?cid=${contactData.id}`,
                    }).then(function(response){
                        window.location.reload();
                    })
                    console.log(`http://localhost:3001/api/delete?cid=${contactData.id}`)
                }}>
                    Delete
                </Button>
                </DialogActions>
            </Dialog>

            
            <Dialog open={props.editOpen} onClose={props.handleEditClose} aria-labelledby="form-dialog-title" className={classes.dialog}>
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
                                id="first_name"
                                name="first_name"
                                label="First name"
                                fullWidth
                                autoComplete="fname"
                                defaultValue='dsadsd'
                            />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="last_name"
                                name="last_name"
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
                                id="mobile_phone"
                                name="mobile_phone"
                                label="Mobile Phone"
                                fullWidth
                            />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                id="home_phone"
                                name="home_phone"
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
                            <TextField 
                            id="state_or_province" 
                            name="state_or_province" 
                            label="State/Province/Region" 
                            fullWidth 
                            />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="postal_code"
                                name="postal_code"
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
                        <Button onClick={props.handleEditClose} color="primary">
                            CANCEL
                        </Button>
                        <Button color="primary">
                            ADD
                        </Button>
                    </DialogActions>
            </Dialog>
            
    </Grid>
    </React.Fragment>     
    
  );
}