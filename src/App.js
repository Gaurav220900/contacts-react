import React, { useState } from 'react'
import "./App.css"
import Header from './components/Header/Header';
import AddContact from './components/Contact/Contact';
import ContactList from './components/ContactList/ContactList';
function App() {

  const [contacts,setContacts] = useState([]);

  const addContacts = (name, email,e) => {
    e.preventDefault();
    return setContacts([...contacts, {name,email,id:contacts.length+1}]);
  }
  console.log(contacts);
  
  const deleteContact = (id) => {
    return setContacts(contacts.filter(contact => contact.id !== id));
  }
  return (
    <div className="ui container">
      <Header />
      <AddContact addContacts={addContacts} />
      <ContactList deleteContact = {deleteContact} contacts={contacts}/>
    </div>
  );
}

export default App;
