
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
import { toast } from 'react-toastify';

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

  dialogTitle: {
    background: 'rgb(131,58,180)',
    background: 'linear-gradient(90deg, rgba(131,58,180,0.68531162464986) 0%, rgba(253,29,29,0.6376925770308124) 50%, rgba(252,176,69,0.8421743697478992) 100%)',
    color: 'white',
  },
  buttons: {
    marginBottom: 10,
    marginRight: 8
  },
}));



export default function DeleteDialog({
    openDel,
    handleCloseDel,
    groupData}) {

    const classes = useStyles();
    
    // console.log(groupData)


    return(
        <Dialog
                open={openDel}
                keepMounted
                onClose={handleCloseDel}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                fullWidth
                maxWidth="sm"
            >
                <DialogTitle style={{marginLeft: -10}} id="alert-dialog-slide-title">{"DELETE GROUP"}</DialogTitle>
                <DialogContent style={{marginLeft: -10, marginTop: 0}}>
                <DialogContentText id="alert-dialog-slide-description">
                Are you sure you want to delete this group? This process cannot be undone.
                </DialogContentText>
                </DialogContent>
                <DialogActions className={classes.buttons}> 
                <Button onClick={handleCloseDel}  variant="contained" size="small" >
                    Cancel
                </Button>
                <Button onClick={()=>{
                    axios({
                        method: 'delete',
                        url: `http://localhost:3001/api/deleteGroup?gid=${groupData.id}`,
                    }).then(function(res){
                        handleCloseDel();
                        toast.success("Group successfully deleted.", {
                          position: toast.POSITION.BOTTOM_LEFT
                        })

                        // console.log(groupData.contact_id)
                    })
                }}
                variant="contained" 
                size="small" 
                style={{background: "#4a4d63", color: 'white'}}
                >
                    Delete
                </Button>
                </DialogActions>
        </Dialog>
    )
}