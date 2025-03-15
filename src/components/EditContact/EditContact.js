import React, { useState } from "react";
import { withNavigation } from "../../WithNavigation";
import {Link, useLocation} from 'react-router-dom';
const EditContact = ({updateContact}) => {
     const location = useLocation();
     const { contact } = location.state;

     const [name,setName] = useState(contact.name);
     const [email,setEmail] = useState(contact.email);

    return (
        <div className="ui main">
            <h2>Edit Contact</h2>
            <form className="ui form">
                <div className="field">
                    <label>Name</label>
                    <input type="text"
                    value = {name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Name" />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="Email" 
                    value= {email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email" />
                </div>
                <div className="field">
                    <button className="ui button blue" onClick={(e)=> {
                        updateContact(name,email,contact.id);
                        this.setState({name: ''})
                        this.setState({email: ''})
                        this.props.navigate('/')
                    }}>Update Contact</button>
                </div>
            </form>
        </div>
    );

};


export default withNavigation(EditContact);