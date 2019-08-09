import React, {useEffect} from 'react';
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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

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
    handleClose,
    open,
    handleAddContact,
    groupView,
    handleClickOpen,
    handleDeleteOpen,
    grpName
}) {
    const classes = useStyles();
    const [groupList, setGroupList] = React.useState([]);
    // console.log(groupView)
    
   
    return(
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.dialog} maxWidth="md" fullWidth>
        <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>
            {grpName}
        </DialogTitle>

        <DialogContent style={{overflow: 'hidden'}}>

        <Table className={classes.table}>
                    <TableHead> 
                    <TableRow>
                        <TableCell width="25%" align="center">
                            LAST NAME
                        </TableCell>
                        <TableCell align="center">
                            FIRST NAME
                        </TableCell>
                        <TableCell align="center" width="25%">MOBILE NUMBER</TableCell>
                        <TableCell align="center" width="15%">ACTION </TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody >
                    {(groupView.length === 0 )? <div style={{textAlign: 'center', marginTop: '10px'}}>No members found.</div> :
                    groupView.map(row => (
                        <TableRow  className={classes.tableHover} key={row.id} style={{cursor: 'pointer'}}>
                        <TableCell align="center">{row.last_name}</TableCell>
                        <TableCell align="center"> 
                            {row.first_name}
                        </TableCell>
                        <TableCell align="center">{row.mobile_phone}</TableCell>
                        <TableCell align="center" style={{display: 'flex', justifyContent: 'center'}}>
                            <Fab 
                            size="small" 
                            style={{backgroundColor: 'rgba(253,29,29,0.6376925770308124)', color: 'white', marginRight: '10px'}}  
                            className={classes.margin} 
                            // onClick={(e) => {
                            //     handleDeleteOpen(true);
                            //     // setContactData(row);
                            // }}
                            >
                                <Icon>delete</Icon>
                            </Fab>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
        </DialogContent>
        <DialogActions className={classes.buttons}>
            <Button onClick={handleClose} variant="contained" size="small" >
                CLOSE
            </Button>
        </DialogActions>
    </Dialog>
    )
}