import React from 'react'
import axios from 'axios'
import Header from './Header'
import GroupArea from './GroupArea'
import ContactArea from './ContactArea'
import Grid from '@material-ui/core/Grid'
import jwtDecode from 'jwt-decode'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Axios from 'axios';
import Container from '@material-ui/core/Container';

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
            userEmail: localStorage.getItem('email'),
            userUsername: localStorage.getItem('username'),
            sortLastName: true,
            search: '',
            groupList: [],
            addGroupOpen: false,
            grpInp: '',
        }
        
    }

    componentDidMount() {
        this.getContactList();
    }



    getContactList = () => {
        const decoded = jwtDecode(this.state.token);
        const logged_userID = decoded.userId;

        axios.get(`http://localhost:3001/api/contacts/${logged_userID}?sort=${this.state.sortLastName? 'ASC':'DESC'}`)
            .then(res => {
                this.setState({
                    contactList: res.data
                })
        })
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
            this.getContactList();
            toast.success("Success! You've added a new contact.", {
                position: toast.POSITION.BOTTOM_LEFT
            })
        })

        this.setState({
            open: false
        }) 
    }


    handleAddGroupInp = (e) => {
        this.setState({
            grpInp: e.target.value
        })
    }


    handleAddGroupOpen = () => {
        this.setState({
            addGroupOpen: true
        })
      }
      
    handleAddGroupClose = () => {
        this.setState({
            addGroupOpen: false
        })
    }



    handleSortLname = () => {
        this.setState({
            sortLastName: !this.state.sortLastName,
        }, () => {
            return this.getContactList()
        })

        // console.log(this.state.sortLastName)
    }



    handleAdd = (e) => {
        this.setState
        ({ 
            [e.target.name]: e.target.value 
        })

        // console.log(this.state)
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

    handleSearch = (e) => {
        var searched = e.target.value;
        this.setState({
            search: searched
        })

        console.log(this.state.search)
    }

    render() {
        return (
            <React.Fragment>
            <Header/>
            <Container maxWidth="xl" style={{marginTop: '30px'}}>
            <Grid container spacing={5}>
                <GroupArea fName = {this.state.fName} 
                lName = {this.state.lName} 
                email = {this.state.userEmail} 
                username = {this.state.userUsername} 
                groupList = {this.state.groupList}
                addGroupOpen = {this.state.addGroupOpen}
                handleAddGroupClose = {this.handleAddGroupClose}
                handleAddGroupOpen = {this.handleAddGroupOpen}
                handleAddGroup = {this.handleAddGroup}
                handleAddGroupInp = {this.handleAddGroupInp}
                getGroupList = {this.getGroupList} />

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
                getContactList = {this.getContactList}
                handleSortLname = {this.handleSortLname}
                handleSearch = {this.handleSearch}
                search = {this.state.search}
                />
                <ToastContainer hideProgressBar/>
            </Grid>
            </Container>
            </React.Fragment>
        )
    }
}

export default AddressBook