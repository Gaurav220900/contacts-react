import React from "react";
import ContactCard from "../ContactCard/ContactCard";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { FaSearch } from "react-icons/fa";
const ContactList = ( {contacts, deleteContact, searchTerm, searchHandler}) => {
   
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
            <div style={{ position: "relative", width: "250px" }}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => searchHandler(e.target.value)}
        style={{
          width: "100%",
          padding: "10px 35px 10px 10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          fontSize: "16px",
          
        }}
      />
      <FaSearch
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "gray",
        }}
      />
    </div>
    <div>
        {contacts.length > 0 ? contacts.map((contact) => {
            return <ContactCard contact={contact} deleteContact={deleteContact} />
            }) : "No contact available" }
        </div>   
        </div>
     )
};

export default ContactList;