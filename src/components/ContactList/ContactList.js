import React from "react";
import ContactCard from "../ContactCard/ContactCard";
const ContactList = ( {contacts, deleteContact}) => {
    return(
        <div>
            { contacts.map((contact) => {
            return <ContactCard contact={contact} deleteContact={deleteContact} />
            })
        }
        </div>
     )
};

export default ContactList;