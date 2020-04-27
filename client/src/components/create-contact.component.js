//npm install axios
import React, { Component } from 'react';
import axios from 'axios';

class CreateContact extends Component {
    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeCompany = this.onChangeCompany.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            company: '',
            email: '',
            message: ''
        }
    }

    componentDidMount() {

    }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }

    onChangeCompany(e) {
        this.setState({
            company: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeMessage(e) {
        this.setState({
            message: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const contact = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            company: this.state.company,
            message: this.state.message
        }

        axios.post('/contacts/add', contact)
            .then(res => console.log(res.data));

        console.log(contact);

        window.location = '/';
    }

    render() {
        return(
            <div className="contact">
            <h1>Create New Contact</h1>
            <form onSubmit={this.onSubmit}>
                <div className="form-field">
                    <label>Name</label>
                    <input type="text" className="name" name="firstName" placeholder="First name" value={this.state.firstName} onChange={this.onChangeFirstName} required />
                    <input type="text" className="name" name="lastName" placeholder="Last name" value={this.state.lastName} onChange={this.onChangeLastName} required />				
                </div>
                <div className="form-field">
                    <label>Company</label>
                    <input type="text" name="company" placeholder="" value={this.state.company} onChange={this.onChangeCompany} />
                </div>
                <div className="form-field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="" value={this.state.email} onChange={this.onChangeEmail} required />
                </div>
                <div className="form-field">
                    <label>Message</label>
                    <input type="textarea" placeholder="" value={this.state.message} onChange={this.onChangeMessage} required />
                </div>
                <input className="submit" type="submit" value="Submit"></input>
            </form>
            </div>
        )
    }
}

export default CreateContact;