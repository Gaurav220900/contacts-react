import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom';
const ContactCard = ({contact, deleteContact}) => {

    console.log(contact);
    
    const UserIcon = () => {
        return <AccountCircleIcon style={{ fontSize: 40, color: "black" }} />;
      };

    return(
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: '1px solid black', margin: "8px 0px"}}>
           <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
     
            <UserIcon />
            <div>
            <Link to={`/contact/${contact.id}`} state = {{contact}}>
            <div style={{ fontSize: 18, fontWeight: "bold" }}>{contact.name}</div>
            <div style={{ color: "gray" }}>{contact.email}</div>
            </Link>
            </div>
            </div>

    <div>
    <button
      onClick={() => deleteContact(contact.id)}
      style={{ background: "none", border: "none", cursor: "pointer" }}
    >
      <i className="trash alternate outline icon" style={{ color: "red" }}></i>
    </button>
    <Link to={`/edit`} state = {{contact}} >
        <button
            style={{ marginLeft: '5px', background: "none", border: "none", cursor: "pointer" }}
        >
        <i className="edit alternate outline icon" style={{ color: "red" }}></i>
        </button>
    </Link>
        </div>
        </div>
    )
};

export default ContactCard;