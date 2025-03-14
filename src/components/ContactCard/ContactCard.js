import React from "react";

const ContactCard = ({contact, deleteContact}) => {
    return(
        <div className="item">
            <div className="content">
                <div className="header">
                    {contact.name}
                </div>
                <div>
                    {contact.email}
                </div>
            </div>
            <button onClick={() => deleteContact(contact.id)}>
            <i className="trash alternate outline icon"
            style={{marginTop: 7, color: 'red'}}></i>
            </button>
        </div>
    )
};

export default ContactCard;