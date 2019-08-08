import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios'
import Divider from '@material-ui/core/Divider';
import jwtDecode from 'jwt-decode'
import { toast } from 'react-toastify';

const useStyles = makeStyles(theme => ({
    buttons: {
        display: 'center',
        justifyContent: 'center',
        marginBottom: 12
    },

    dialogTitle: {
        background: 'rgb(131,58,180)',
        background: 'linear-gradient(90deg, rgba(131,58,180,0.68531162464986) 0%, rgba(253,29,29,0.6376925770308124) 50%, rgba(252,176,69,0.8421743697478992) 100%)',
        color: 'white',
    }
}));



export default function EditDialog({
    handleEditClose,
    editOpen,
    editData,
    getContactList
    }) {
    const classes = useStyles();

    var editContact = {
        first_name: editData.first_name,
        last_name: editData.last_name,
        home_phone: editData.home_phone,
        mobile_phone: editData.mobile_phone,
        work_phone: editData.work_phone,
        email: editData.email,
        city: editData.city,
        state_or_province: editData.state_or_province,
        postal_code: editData.postal_code,
        country: editData.country
    }
    
   
    return(
        <Dialog open={editOpen} onClose={handleEditClose} aria-labelledby="form-dialog-title" className={classes.dialog} maxWidth="md" fullWidth>
                <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>
                    VIEW CONTACT
                </DialogTitle>

                <DialogContent style={{overflow: 'hidden'}}>
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
                            defaultValue={editData.first_name}
                            onChange = {(e)=>{
                            editContact.first_name = e.target.value;
                            }}
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
                            defaultValue={editData.last_name}
                            onChange = {(e)=>{
                            editContact.last_name = e.target.value;
                            }}
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email Address"
                            fullWidth
                            defaultValue={editData.email}
                            onChange = {(e)=>{
                            editContact.email = e.target.value;
                            }}
                        />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            id="mobile_phone"
                            name="mobile_phone"
                            label="Mobile Phone"
                            fullWidth
                            defaultValue={editData.mobile_phone}
                            onChange = {(e)=>{
                            editContact.mobile_phone = e.target.value;
                            }}
                        />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            id="home_phone"
                            name="home_phone"
                            label="Home Phone"
                            fullWidth
                            defaultValue={editData.home_phone}
                            onChange = {(e)=>{
                            editContact.home_phone = e.target.value;
                            }}
                        />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            id="work_phone"
                            name="work_phone"
                            label="Work Phone"
                            fullWidth
                            defaultValue={editData.work_phone}
                            onChange = {(e)=>{
                            editContact.work_phone = e.target.value;
                            }}
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
                            defaultValue={editData.city}
                            onChange = {(e)=>{
                            editContact.city = e.target.value;
                            }}
                        />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField 
                        id="state_or_province" 
                        name="state_or_province" 
                        label="State/Province/Region" 
                        fullWidth 
                        defaultValue={editData.state_or_province}
                        onChange = {(e)=>{
                        editContact.state_or_province = e.target.value;
                        }}
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
                            defaultValue={editData.postal_code}
                            onChange = {(e)=>{
                            editContact.postal_code = e.target.value;
                            }}
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
                            defaultValue={editData.country}
                            onChange = {(e)=>{
                            editContact.country = e.target.value;
                            }}
                        />
                        </Grid>
                    </Grid>
                </DialogContent>
                <Divider variant="middle" style={{marginTop: '15px', marginBottom: '15px'}}/>
                <DialogActions className={classes.buttons}>
                    <Button onClick={handleEditClose} 
                    variant="contained" 
                    size="small" >
                        CANCEL
                    </Button>
                    <Button 
                    onClick={()=>{
                        axios({
                            method: 'patch',
                            url: ` http://localhost:3001/api/edit?cid=${editData.contact_id}`,
                            json: true,
                            data: editContact
                        }).then(function(response){
                            handleEditClose();
                            getContactList();
                            toast.success("Contact successfully updated.", {
                                position: toast.POSITION.BOTTOM_LEFT
                            })
                        })
                    }}
                    variant="contained" 
                    size="small" 
                    style={{background: "#4a4d63", color: 'white'}}>
                        EDIT
                    </Button>
                </DialogActions>
        </Dialog>
    )
}