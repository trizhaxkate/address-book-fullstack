import React from 'react'
import axios from 'axios'
import Header from './Header'
import GroupArea from './GroupArea'
import ContactArea from './ContactArea'
import Grid from '@material-ui/core/Grid'
import jwtDecode from 'jwt-decode'
  

if (localStorage.getItem('token') === null || localStorage.getItem('token').length === 0) {
    window.location.href = '#/'
}


const token = localStorage.getItem('token');
// var decoded = jwtDecode(token);
// const logged_userID = decoded.userId;
// console.log(decoded)

class AddressBook extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            contactList: [],
            first_name: '',
            last_name: '',
            home_phone: '',
            mobile_phone: '',
            work_phone: '',
            email: '',
            city: '',
            state_or_province: '',
            postal_code: '',
            country: '',
            open: false,
            rowID: '',
            deleteOpen: false,
            editOpen: false,
            token: localStorage.getItem('token'),
            fName: localStorage.getItem('first_name'),
            lName: localStorage.getItem('last_name'),
        }
    }

    componentDidMount() {
        const decoded = jwtDecode(this.state.token);
        const logged_userID = decoded.userId;

        axios.get(`http://localhost:3001/api/contacts/list?id=${logged_userID}`)
        .then(res => 
            this.setState({
                contactList: res.data
               
            })    
        )
        console.log(logged_userID)
    }


    handleAdd = (e) => {
        this.setState
        ({ 
            [e.target.name]: e.target.value 
        })

        // console.log(this.state)
    }

    handleAddContact = () => {
        const decoded = jwtDecode(this.state.token);
        const logged_userID = decoded.userId;
        axios({
                url: `http://localhost:3001/api/contacts/${logged_userID}`,
                method: 'post',
                json: true,
                data: this.state,
            })
        .then(res => {
            window.location.reload();
        })

        this.setState({
            open: false
        }) 
    }


    handleAddOpen = () => {
        this.setState({
            open: true
        })
      }
      
    handleAddClose = () => {
        this.setState({
            open: false
        })
    }

    handleDeleteOpen = (e) => {
        // var id = e.target.id;
        this.setState({
            deleteOpen: true,
            // rowID: id
        })
        // console.log(e.target.id)
    }
      
    handleDeleteClose = () => {
        this.setState({
            deleteOpen: false
        })
    }

    
    handleDeleteContact = () => {
        axios({
            method: 'delete',
            url: `  http://localhost:3001/api/delete?cid=${this.state.rowID}`,
        })
        .then(res => {
            window.location.reload();
        })
    }

    handleEditOpen = (e) => {
        // var id = e.target.id;
        this.setState({
            editOpen: true,
            // rowID: id
        })
        // console.log(e.target.id)
    }
      
    handleEditClose = () => {
        this.setState({
            editOpen: false
        })
    }


    render() {
        return (
            <React.Fragment>
            <Header/>
            <Grid container spacing={5} style={{padding: '50px'}}>
                <GroupArea fName = {this.state.fName} lName = {this.state.lName}/>
                <ContactArea 
                contactList = {this.state.contactList}
                handleAdd = {this.handleAdd}
                handleAddContact = {this.handleAddContact}
                handleAddOpen = {this.handleAddOpen}
                handleAddClose = {this.handleAddClose}
                open = {this.state.open}
                handleDeleteClose = {this.handleDeleteClose}
                handleDeleteOpen = {this.handleDeleteOpen}
                handleDeleteContact = {this.handleDeleteContact}
                deleteOpen = {this.state.deleteOpen}
                handleEditOpen = {this.handleEditOpen}
                handleEditClose = {this.handleEditClose}
                editOpen = {this.state.editOpen}
                />
            </Grid>
            </React.Fragment>
        )
    }
}

export default AddressBook