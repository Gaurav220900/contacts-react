import React, { useState } from 'react'
import "./App.css"
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import AddContact from './components/Contact/Contact';
import ContactList from './components/ContactList/ContactList';
import ContactDetail from './components/Contact/ContactDetail';
function App() {

  const [contacts,setContacts] = useState([]);

  const addContacts = (name, email,e) => {
    e.preventDefault();
    return setContacts([...contacts, {name,email,id:contacts.length+1}]);
  }
  
  
  const deleteContact = (id) => {
    return setContacts(contacts.filter(contact => contact.id !== id));
  }
  return (
    <div className="ui container">
      
      <Router>
         <Header />
         
      <Routes>
        <Route path="/" element={<ContactList deleteContact={deleteContact} contacts={contacts} />} />
        <Route path="/add" element={<AddContact addContacts={addContacts} />} />
        <Route path='/contact/:id' element={<ContactDetail />} />
      </Routes>
    
      </Router>
     
     
    </div>
  );
}

export default App;
