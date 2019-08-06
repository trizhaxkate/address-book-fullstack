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



export default function AddDialog({
    handleAddClose,
    open,
    handleAddContact,
    handleAdd
}) {
    const classes = useStyles();

    
   
    return(
        <Dialog open={open} onClose={handleAddClose} aria-labelledby="form-dialog-title" className={classes.dialog}>
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
                    onChange={handleAdd}
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
                    onChange={handleAdd}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    required
                    id="email"
                    name="email"
                    label="Email Address"
                    fullWidth
                    onChange={handleAdd}
                />
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField
                    required
                    id="mobile_phone"
                    name="mobile_phone"
                    label="Mobile Phone"
                    fullWidth
                    onChange={handleAdd}
                />
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField
                    required
                    id="home_phone"
                    name="home_phone"
                    label="Home Phone"
                    fullWidth
                    onChange={handleAdd}
                />
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField
                    required
                    id="work_phone"
                    name="work_phone"
                    label="Work Phone"
                    fullWidth
                    onChange={handleAdd}
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
                    onChange={handleAdd}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField 
                id="state_or_province" 
                name="state_or_province" 
                label="State/Province/Region" 
                fullWidth 
                onChange={handleAdd}
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
                    onChange={handleAdd}
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
                    onChange={handleAdd}
                />
                </Grid>
            </Grid>
        </DialogContent>

        <DialogActions>
            <Button onClick={handleAddClose} color="primary">
                CANCEL
            </Button>
            <Button onClick={handleAddContact} color="primary">
                ADD
            </Button>
        </DialogActions>
    </Dialog>
    )
}