import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
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



export default function DeleteDialog({
    contactData,
    handleDeleteClose,
    deleteOpen}) {

    const classes = useStyles();
    
    console.log(contactData)


    return(
        <Dialog
                open={deleteOpen}
                keepMounted
                onClose={handleDeleteClose}
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
                <Button onClick={handleDeleteClose} color="primary">
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
    )
}