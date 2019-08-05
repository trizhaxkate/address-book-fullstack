import React from 'react'
import axios from 'axios'
import Header from './Header'
import GroupArea from './GroupArea'
import ContactArea from './ContactArea'
import Grid from '@material-ui/core/Grid'
import jwtDecode from 'jwt-decode'
  
  
// const token = localStorage.getItem('token');
// if(!token){
//   window.location.href='/#/';
// }


// var decoded = jwtDecode(token);
// const logged_userID = decoded.userId;



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
            deleteOpen: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/contacts')
        .then(res => 
            this.setState({
                contactList: res.data
            })    
        )
    }


    handleAdd = (e) => {
        this.setState
        ({ 
            [e.target.name]: e.target.value 
        })

        console.log(this.state)
    }

    handleAddContact = () => {
        axios({
                url: 'http://localhost:3001/api/contacts',
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


    render() {
        return (
            <React.Fragment>
            <Header/>
            <Grid container spacing={5} style={{padding: '50px'}}>
                <GroupArea/>
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
                />
            </Grid>
            </React.Fragment>
        )
    }
}

export default AddressBook