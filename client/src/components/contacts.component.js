import React, { Component } from 'react';
import axios from 'axios';

const Contact = props => (
    <div className="contact-entry">  
        <h2>{props.contact.firstName} {props.contact.lastName}</h2>
        <h4><span className="label">Company:</span> {props.contact.company}</h4> 
        <h4><span className="label">Email:</span> {props.contact.email}</h4>
        <h4><span className="label">Message:</span> {props.contact.message}</h4>  
        <a className="red" href="#" onClick={() => { props.deleteContact(props.contact._id) }}>Delete</a>    
    </div>
)

export default class ContactList extends Component {
    constructor(props) {
        super(props);

        this.deleteContact = this.deleteContact.bind(this);

        this.state = {
            contacts: []
        }
    }

    componentDidMount() {
        axios.get('/contacts/')
        .then(response => {
          this.setState({ contacts: response.data })
        })
        .catch((error) => {
          console.log(error);
        })
    }

    deleteContact(id) {
        axios.get('http://localhost:3000/contacts/delete/'+id)
          .then(response => { 
              console.log(response.data)
           })
          .catch((error) => {
            console.log(error.response);
          });
    
        this.setState({
          contacts: this.state.contacts.filter(el => el._id !== id)
        })
    }

    contactList() {
        return this.state.contacts.map(currentcontact => {
            return <Contact contact={currentcontact} deleteContact={this.deleteContact} key={currentcontact._id}/>;
        })
    }

    render() {
        return(
        <div className="contact">
            <h1>Contacts</h1>
            { this.contactList() }
        </div>
    )
    }
}