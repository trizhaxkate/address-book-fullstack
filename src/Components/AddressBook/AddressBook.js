import React from 'react'
import AddressBookMain from '../AddressBook/AddressBookMain'
import axios from 'axios'

class AddressBook extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            contactList: []
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

    handleAddContact = () => {
        axios('http://localhost:3001/api/contacts',
           {
            medthod: 'post',
            data: this.state
        })
        // .then(re)
    }

    render() {
        return (
            <AddressBookMain 
            contactList = {this.state.contactList}
            />
        )
    }
}

export default AddressBook