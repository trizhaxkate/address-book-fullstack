import React from 'react'
import AddressBookMain from '../AddressBook/AddressBookMain'
import axios from 'axios'

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
            open: false
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
        // .then(res => {
        //     window.location.href = '#/addressbook';
        // })  
    }

     handleClickOpen = () => {
        this.setState({
            open: true
        })
      }
      
      handleClose = () => {
        this.setState({
            open: false
        })
      }




    render() {
        return (
            <AddressBookMain 
            contactList = {this.state.contactList}
            handleAdd = {this.handleAdd}
            handleAddContact = {this.handleAddContact}
            handleClickOpen = {this.handleClickOpen}
            handleClose = {this.handleClose}
            open = {this.state.open}
            />
        )
    }
}

export default AddressBook