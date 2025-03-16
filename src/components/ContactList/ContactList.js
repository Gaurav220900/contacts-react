import React from "react";
import ContactCard from "../ContactCard/ContactCard";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const ContactList = ( {contacts, deleteContact}) => {
    console.log(contacts);
    
    return(
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                    <h2>Contact List</h2>
                </div>
                <div>
                    <Link to = '/add'>
                        <Button  className="ui button blue">Add Contact</Button>
                    </Link>
                </div>
            </div>
            <div>
            { contacts.map((contact) => {
            return <ContactCard contact={contact} deleteContact={deleteContact} />
            }) }
            </div>
        </div>
     )
};

export default ContactList;