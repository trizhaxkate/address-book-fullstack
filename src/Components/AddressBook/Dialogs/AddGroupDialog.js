import React, {useState} from 'react';
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
import TextField from '@material-ui/core/TextField';

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



export default function AddGroupDialog({
    open,
    handleClose,
    handleAddGroup,
    handleChange,
    getGroupList}) {

    const classes = useStyles();

    const [groupName, setGroupName] = useState('');
    
    if (localStorage.getItem('token') === null || localStorage.getItem('token').length === 0) {
      window.location.href = '#/'
    }
  
  
    const token = localStorage.getItem('token');
    const decoded = jwtDecode(token);
    const logged_userID = decoded.userId;
    


    return(
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="xs" fullWidth>
        <DialogTitle id="form-dialog-title">ADD NEW GROUP</DialogTitle>
        <DialogContent style={{marginTop: -20}}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter new group name"
            // type="email"
            fullWidth
            // onChange = {handleChange}
            onChange = {(event)=>{
              setGroupName(event.target.value)
            }} />
            
        </DialogContent>
        <DialogActions style={{marginBottom: 10, marginRight: 10}}>
          <Button onClick={handleClose}  variant="contained" 
                size="small">
            Cancel
          </Button>
          <Button  
            onClick={() => {
              handleAddGroup()
              // getGroupList()
            }}
                onClick={()=>{
                  let postData = {
                    name: groupName,
                    user_id: logged_userID
                  }
                  
                  axios({
                    method: 'post',
                    url: ` http://localhost:3001/api/addGroup`,
                    json: true,
                    data: postData
                  }).then(function(res){
                    handleClose();
                    toast.success("Success! You've added a new group.", {
                      position: toast.POSITION.BOTTOM_LEFT
                    })
                  })
                }} 
                variant="contained" 
                size="small" 
                style={{background: "#4a4d63", color: 'white'}}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    )
}